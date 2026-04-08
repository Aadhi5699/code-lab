docker ps 
docker ps -a
docker stop <conatainerID>
docker rm <containerID> / docker rm -f <containerID>


docker logs <containerID>
docker logs -f <containerID> //for real time
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