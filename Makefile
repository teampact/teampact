test:
	bin/rspec

prepare:
	bundle && yarn

dev:
	docker-compose up
