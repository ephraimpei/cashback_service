build:
	docker-compose build

start:
	docker-compose up app

down:
	docker-compose down --remove-orphans
	rm -rf postgres-data

clean:
	docker-compose down --remove-orphans
	docker rmi cashback_app
	rm -rf postgres-data

list-migrations:
	docker-compose run --rm app npm run list-migrations

migrate-initial:
	docker-compose run --rm app npm run migrate-initial

migrate:
	docker-compose run --rm app npm run migrate

rollback:
	docker-compose run --rm app npm run rollback

new-migration:
	docker-compose run --rm app npm run new-migration -- $(MIGRATION)

seed:
	docker-compose run --rm app npm run seed

new-seed:
	docker-compose run --rm app npm run new-seed -- $(SEED)