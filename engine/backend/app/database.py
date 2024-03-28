import sqlite3

"""
Структура БД:

Таблица users
    id           INTEGER PRIMARY KEY AUTOINCREMENT
    user_id      INTEGER NOT NULL
    first_name   TEXT
    last_name    TEXT
    username     TEXT
"""

def createTable():
    con = sqlite3.connect('app/db.db')
    cur = con.cursor()
    command = """CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id INTEGER NOT NULL,
        first_name TEXT,
        last_name TEXT,
        username TEXT);"""
    cur.execute(command)
    con.close()
    

def query(type,command):  
    con = sqlite3.connect('app/db.db')
    cur = con.cursor()
    cur.execute(command)
    if type=='get':
        response = cur.fetchall()
    if type=='set':
        response = cur.lastrowid
        con.commit()  
    con.close() 
    return response
    





