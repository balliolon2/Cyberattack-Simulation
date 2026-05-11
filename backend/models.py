from sqlalchemy import Column, String, Integer, Boolean, DateTime, text
from sqlalchemy.dialects.postgresql import UUID
from datetime import datetime
from database import Base

class User(Base):
    __tablename__ = "users"

    user_id = Column(UUID(as_uuid=True), primary_key=True, server_default=text("gen_random_uuid()"))
    email = Column(String, unique=True, index=True, nullable=False)
    password_hash = Column(String, nullable=False)
    role = Column(String, server_default="learner") # ENUM in DB
    current_tier = Column(Integer, server_default="1")
    created_at = Column(DateTime, server_default=text("now()"))
    last_login = Column(DateTime, nullable=True)
    is_active = Column(Boolean, server_default="true")
