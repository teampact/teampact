test:
	bin/rspec

prepare:
	bundle && yarn

dev:
	foreman run
