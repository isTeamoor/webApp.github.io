from fastapi import APIRouter, UploadFile, Form
from fastapi.responses import FileResponse
from .. import models
from .. import database
from pathlib import Path
import os

router = APIRouter(
    prefix="/db",
    tags=['DataBase Actions']
)

database.createTable()



@router.get('/checkUser/{user_id}')
def checkUser(user_id:int):
    currentUser = database.query('get', """SELECT * FROM users WHERE user_id = '{user_id}'""")
    if currentUser:
        response = {'status':'exists'}
    else:
        response = {'status':'not exists'}
    return response


id = "{deletedAd.id}"





UPLOAD_DIR = Path() / 'uploaded_images'

@router.post('/createNewAd')
async def createNewAd(label: str=Form(...), textContent: str=Form(...), img:UploadFile=Form(...)):
    newRecord = database.query('set', f'''INSERT INTO ads (label, textContent) VALUES ('{label}', '{textContent}')''')
    print(newRecord)

    data = await img.read()
    save_to = UPLOAD_DIR / f"{newRecord}.jpg"
    with open(save_to, 'wb') as f:
        f.write(data)
    return {'working':'yes'}



@router.get('/getAllAds')
def getAllAds():
    adsList = database.query('get', '''SELECT * FROM ads''')
    response = []
    for ad in adsList:
        response.append({
            'id':ad[0], 'label':ad[1], 'textContent':ad[2]
        })
    print(response)
    return response



@router.post('/deleteAd')
def deleteAd(deletedAd:models.deletedAd):
    database.query('set', f'''DELETE FROM ads WHERE id = "{deletedAd.id}"''')
    os.remove(UPLOAD_DIR / f"{deletedAd.id}.jpg")
    adsList = database.query('get', '''SELECT * FROM ads''')
    response = []
    for ad in adsList:
        response.append({
            'id':ad[0], 'label':ad[1], 'textContent':ad[2]
        })
    return response



@router.get('/getImg/{imgID}')
def uploadIMG(imgID:int):
    return FileResponse(UPLOAD_DIR / f"{imgID}.jpg")

