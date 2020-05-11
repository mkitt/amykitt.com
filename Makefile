# Wrappers for package.json scripts

#/ help            Print this message (default)
help:
	@printf "%sUsage: make TARGET\n"
	@cat ./Makefile | grep '^#\/' | sed "s/#\//  /g"
.PHONY: help

#/ lint            Runs the src directory through eslint
lint:
	yarn eslint $(PWD)/src --ext .js,.jsx,.ts,.tsx
.PHONY: lint

#/ deploy          Deploys the build directory to the Netlify Site Id
deploy:
	yarn netlify deploy \
		--prod \
		--dir=${PWD}/build \
		--message="Deployed $(shell git rev-parse --short HEAD)"
.PHONY: deploy
