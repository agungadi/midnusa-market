Start :

npm install

npm run

docker build --platform linux/amd64 -t stransdigi/midnusa-demo:0.0.1-rc .
docker run -d -p 3002:3003 stransdigi/midnusa-demo:0.0.1-rc

