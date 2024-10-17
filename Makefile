.PHONY: build up down restart logs

default: build

build:
	docker-compose -p merlin-z1a8k build

up:
	docker-compose -p merlin-z1a8k up --build -d

down:
	docker-compose -p merlin-z1a8k stop -t 1

restart: down up

logs:
	docker-compose -p merlin-z1a8k logs -f