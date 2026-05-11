from pydantic import BaseModel, EmailStr
from typing import Optional
from uuid import UUID
from datetime import datetime

class UserBase(BaseModel):
    email: EmailStr

class UserCreate(UserBase):
    name: str # Note: DB schema only has email, but frontend wants name. We can extend DB later or just ignore name for now. We will just take email and password for MVP.
    password: str

class UserLogin(UserBase):
    password: str

class UserResponse(UserBase):
    user_id: UUID
    role: str
    current_tier: int
    is_active: bool
    created_at: datetime

    class Config:
        from_attributes = True

class Token(BaseModel):
    access_token: str
    token_type: str

class TokenData(BaseModel):
    email: Optional[str] = None
