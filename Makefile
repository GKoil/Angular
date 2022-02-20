install:
	npm i

server:
	cd ./backend/ && npm run start

serve:
	npx ng serve -o

start:
	npx concurrently "make server" "make serve"
