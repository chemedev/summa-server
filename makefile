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

test:
	make db
	@npx mocha src/tests --exit
	@npm run test:clean

clean:
	@npm run dev:clean
	@npm run test:clean
	@npm run prod:clean