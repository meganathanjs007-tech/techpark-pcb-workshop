from app.database import supabase
from app.schemas import Registration


def create_registration(data: Registration):
    response = (
        supabase.table("registrations")
        .insert(
            {
                "full_name": data.full_name,
                "mobile": data.mobile,
                "email": data.email,
                "college": data.college,
                "department": data.department,
                "year": data.year,
                "place": data.place,
                "experience": data.experience,
                "reason": data.reason,
            }
        )
        .execute()
    )

    return response.data


def get_registrations():
    response = (
        supabase.table("registrations")
        .select("*")
        .order("id", desc=True)
        .execute()
    )

    return response.data


def delete_registration(id: int):
    response = (
        supabase.table("registrations")
        .delete()
        .eq("id", id)
        .execute()
    )

    return response.data