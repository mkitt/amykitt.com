
watchsass:
	@sass --watch assets/sass:assets/

sass:
	@sass -t compressed assets/sass/application.sass > assets/application.css

uglify:
	@uglifyjs -v -o assets/application.min.js assets/application.js

publish: sass uglify
	@echo "change the path to application.js"

.PHONY: sass watchsass uglify publish

