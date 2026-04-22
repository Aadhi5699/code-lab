# 1. Build the Docker image
docker run -d --name backend -p 8080:3000 node-app:v1
# 2. Open an interactive shell
docker exec -it backend sh
# 3. Inspect the .env file once inside (or via a single command)
docker exec -it backend cat /app/.env
# 4. View the last 50 lines of logs
docker logs --tail 50 backend
# 5. Follow live logs (useful for watching the crash happen in real-time)
docker logs -f backend
# 6. Restart the container
docker restart backend
# 7. Total Image & Resource Cleanup
docker system prune -a --volumes
# 8. Data Backup (Copying Files)
docker cp mysql-db:/var/lib/mysql/backup.sql .