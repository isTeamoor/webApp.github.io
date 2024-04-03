from fastapi import APIRouter, Form, UploadFile, File
from fastapi.responses import FileResponse
from PIL import Image
import shutil
import string
import os
from datetime import datetime
from pathlib import Path

from . import models
from .database import query, createTable

createTable()

if not os.path.exists("images"):
    os.makedirs("images")
if not os.path.exists("images/compressed"):
    os.makedirs("images/compressed")



router = APIRouter(
    prefix="/db",
    tags=['DataBase Actions']
)

def sanitize_filename(filename):
    allowed_characters = string.ascii_letters + string.digits +"_-."
    sanitized_filename = ''.join(c for c in filename if c in allowed_characters)
    return sanitized_filename


@router.post('/newLot')
async def createLot(label: str = Form(...), description: str = Form(...), img: UploadFile = File(...)):
    img.filename = sanitize_filename(img.filename)
    description = sanitize_filename(description)
    label = sanitize_filename(label)

    ### Сохранение оригинального изображения
    currentDate = datetime.now()
    mark = int(currentDate.timestamp()*100000000)

    filename = os.path.splitext(img.filename)[0] + "-" + str(mark) + os.path.splitext(img.filename)[1]

    with open(f"images/{filename}", "wb") as file:
        shutil.copyfileobj(img.file, file)

    ### Сохранение сжатого изображения
    orig_img = f"images/{filename}" 
    img = Image.open(orig_img)
    img = img.convert("RGB")
    img.thumbnail((img.width // 2, img.height // 2))

    compressed_filename = os.path.splitext(filename)[0] + '.jpg'
    img.save('images/compressed/'+ compressed_filename, format="JPEG", quality=50)

    ### Создание строки в таблице бд
    newLot = query('set', f"INSERT INTO lots (label, description, img) VALUES ('{label}', '{description}', '{filename}')", 'lots')
    print(newLot)
    return {'creating new lot':'succes'}





@router.get('/allLots')
async def send_Lots():
    data = query('get', "SELECT * FROM lots")
    response = []
    for item in data:
        lot = {
            'id': item[0],
            'label': item[1],
            'description': item[2],
            'bids': item[3],
            'img':'http://127.0.0.1:8000/db/get_image/' + item[3],
        }
        response.append(lot)
    return response




@router.get("/get_image/{img}/{section}")
async def get_image(section: str, img: str):
    section = sanitize_filename(section)
    img = sanitize_filename(img)
    img_path = ''

    if section == 'c':
        img_path = 'images/compressed/' + os.path.splitext(img)[0] + '.jpg'
    elif section == 'f':
        img_path = 'images/' + img
    if not os.path.exists(img_path):
        return {"error": "Image not found"}
    
    return FileResponse(img_path, media_type="image/jpeg")
