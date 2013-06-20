
build: components index.js
	@component build --dev

components: component.json
	@component install --dev

clean:
	rm -fr build components template.js

REPORTER = spec
test:
	$(MAKE) lint
	echo TRAVIS_JOB_ID $(TRAVIS_JOB_ID)
	@NODE_ENV=test ./node_modules/.bin/mocha -b --reporter $(REPORTER)

lint:
	./node_modules/.bin/jshint ./lib ./test ./index.js

lib-cov:
	./node_modules/jscoverage/bin/jscoverage lib lib-cov

test-cov:	lib-cov
	echo TRAVIS_JOB_ID $(TRAVIS_JOB_ID)
	@COVERALLS_COVERAGE=1 $(MAKE) test REPORTER=html-cov 1> coverage.html
	rm -rf lib-cov

test-coveralls:lib-cov
	$(MAKE) test REPORTER=spec
	echo TRAVIS_JOB_ID $(TRAVIS_JOB_ID)
	@COVERALLS_COVERAGE=1 $(MAKE) test REPORTER=mocha-lcov-reporter | ./node_modules/coveralls/bin/coveralls.js --verbose
	rm -rf lib-cov

.PHONY: test
