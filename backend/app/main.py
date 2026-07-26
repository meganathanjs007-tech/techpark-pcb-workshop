from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.schemas import Registration
from app.crud import (
    create_registration,
    get_registrations,
    delete_registration,
)

app = FastAPI(
    title="TechPark PCB Workshop API",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def home():
    return {
        "message": "TechPark PCB Workshop API Running Successfully"
    }


@app.post("/register")
def register(data: Registration):
    result = create_registration(data)

    return {
        "success": True,
        "message": "Registration Successful",
        "data": result,
    }


@app.get("/registrations")
def registrations():
    return get_registrations()


@app.delete("/registrations/{id}")
def delete(id: int):
    delete_registration(id)

    return {
        "success": True,
        "message": "Registration Deleted"
    }