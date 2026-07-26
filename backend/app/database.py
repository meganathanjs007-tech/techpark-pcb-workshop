try:
    from supabase import create_client, Client
except Exception as e:  # ImportError or other import issues
    raise ImportError(
        "Unable to import 'supabase'. Install the package with 'pip install supabase' (or 'pip install supabase-py') and ensure your environment is correct. Original error: {}".format(e)
    )
from dotenv import load_dotenv
import os

load_dotenv()

SUPABASE_URL = os.getenv("SUPABASE_URL")
SUPABASE_KEY = os.getenv("SUPABASE_KEY")

if not SUPABASE_URL or not SUPABASE_KEY:
    raise Exception("SUPABASE_URL or SUPABASE_KEY is missing in .env")

supabase: Client = create_client(
    SUPABASE_URL,
    SUPABASE_KEY
)