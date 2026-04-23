docker ps 
docker ps -a
docker stop <conatainerID>
docker rm <containerID> / docker rm -f <containerID>


docker logs <containerID>
docker logs -f <containerID> //for real time(live) logs
docker logs --tail 100 <containerID>


docker container prune
docker image prune -a
docker system prune      // Everything unused (containers, images, networks)


docker inspect
docker inspect --format='{{.State.ExitCode}}' <container> 
docker image inspect 


docker cp index.html mynginx:/usr/share/nginx/index/html/index.html
docker exec mynginx ls /usr/share/nginx/html/


docker run -d \
  --name stress \
  --memory="256m" \
  --cpus="0.5" \
  -p 8080:80 \
  nginx


docker rename <oldName><newName>
docker pause <containerID>  //(The container stays in RAM but uses 0% CPU).
docker unpause <containerID> //(The container resumes exactly where it left off).


docker ps -q
docker ps -aq
docker stop $(docker ps -q)
docker exec <container_id> whoami // To check the user inside the container


# 1 Create a volume
docker run -d \
--name pgdb \
-e POSTGRES_PASSWORD=secret \
-v pgdata:/var/lib/postgresql/data \
-p 5432:5432 \
postgres


# 1. Create the network
docker network create app-net
# 2. Run Redis on the network
docker run -d --name redis --network app-net redis
# 3. Run Backend on the same network
docker run -d --name backend --network app-net backend-image