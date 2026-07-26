from pydantic import BaseModel, EmailStr


class Registration(BaseModel):
    full_name: str
    mobile: str
    email: EmailStr
    college: str
    department: str
    year: str
    place: str
    experience: str
    reason: str