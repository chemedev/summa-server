db:
	@npx sequelize-cli db:drop
	@npx sequelize-cli db:create
	@npx sequelize-cli db:migrate
	@npx sequelize-cli db:seed:all

dev:
	make db
	@nodemon

prod:
	make db
	@node .

clean:
	@npm run dev:clean
	@npm run prod:clean