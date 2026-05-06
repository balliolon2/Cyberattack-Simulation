# Use the pgvector image which includes PostgreSQL and the vector extension
FROM pgvector/pgvector:pg15

# Copy the initialization script to the special directory
# All scripts in /docker-entrypoint-initdb.d/ are executed on container startup
COPY init.sql /docker-entrypoint-initdb.d/

EXPOSE 5432
