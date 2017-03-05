var jsonObject = require('../Resources/config.json');

var AngularHomepage = function() {

	var firstNumber = element(by.model('first'));
	var secondNumber = element(by.model('second'));
	var goButton = element(by.id('gobutton'));

	this.get = function() {
		browser.get(jsonObject.base_url);
	};

	this.firstNumber = function(a) {
		firstNumber.sendKeys(a);
	};

	this.secondNumber = function(b) {
		secondNumber.sendKeys(b);
	};

	this.goButton = function() {
		goButton.click();
	};

	/*
	 * this.getGreeting = function() { return greeting.getText(); };
	 */
};