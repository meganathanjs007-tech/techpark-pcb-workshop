from supabase import create_client, Client
import os
from pathlib import Path

env_path = Path(__file__).resolve().parent.parent / ".env"
if env_path.exists():
    with env_path.open() as env_file:
        for line in env_file:
            line = line.strip()
            if not line or line.startswith("#"):
                continue
            key, sep, value = line.partition("=")
            if sep:
                os.environ.setdefault(key, value.strip().strip('"').strip("'"))

SUPABASE_URL = os.getenv("SUPABASE_URL")
SUPABASE_KEY = os.getenv("SUPABASE_KEY")

if not SUPABASE_URL or not SUPABASE_KEY:
    raise Exception("SUPABASE_URL or SUPABASE_KEY is missing in .env")

supabase: Client = create_client(
    SUPABASE_URL,
    SUPABASE_KEY
)