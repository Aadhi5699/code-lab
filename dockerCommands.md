docker ps 
docker ps -a
docker stop <conatainerID>
docker rm <containerID> / docker rm -f <containerID>


docker logs <containerID>
docker logs -f <containerID> // for real time
docker logs --tail 100 <containerID>



docker container prune
docker image prune -a
docker system prune      // Everything unused (containers, images, networks)

docker inspect
docker inspect --format='{{.State.ExitCode}}' <container> 
docker image inspect 