from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/items/")
async def read_items():
    return [
        {"item_id": "Foo"},
        {"item_id": "Bar"},
        ]

@app.get("/get_profiles/")
async def get_profiles():
    return [
        {"name" : "Egor",
         "email" : "egor.mrz04@gmail.com"},
        {"name" : "Igor",
         "email" : "igor.mrz04@gmail.com"},
        {"name" : "Agor",
         "email" : "Agor.mrz04@gmail.com"},
    ]
