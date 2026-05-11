from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from database import engine, Base
from routes import auth

# Create database tables (if they don't exist, though init.sql should handle it)
# Base.metadata.create_all(bind=engine)

app = FastAPI(title="SOC Trainer API")

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://localhost:5173"], # React dev server ports
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
app.include_router(auth.router, prefix="/api/auth", tags=["Authentication"])

@app.get("/api/health")
def health_check():
    return {"status": "ok", "service": "SOC Trainer API"}
