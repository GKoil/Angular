backend:
	cd ./backend/ && npm run start

serve:
	npx ng serve -o

start:
	npx concurrently "make backend" "make serve"
