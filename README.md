build docker
docker build . -t acrwebdev/deploy-bulletin-board-service

docker push
docker push acrwebdev/deploy-bulletin-board-service

docker pull
docker pull acrwebdev/deploy-bulletin-board-service:latest

run docker
docker run -p 8081:8081 --env SERVER_PORT=8081 --env TZ=Asia/Taipei --restart=always --name=deploy-bulletin-board-service -d acrwebdev/deploy-bulletin-board-service
