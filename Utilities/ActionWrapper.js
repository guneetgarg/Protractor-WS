var ActionWrapper = function() {
	this.firstField = element(by.model(config.locators.firstField));
	this.secondField = element(by.model('second'));
	this.goButton = element(by.buttonText("Go!"));

	this.get = function() {

		console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
	};

	this.login = function(firstField, secondField) {
		this.firstField.sendKeys(firstField);
		this.secondField.sendKeys(secondField);
		this.goButton.click();
		browser.sleep(7777)
	};
});
module.exports = new ActionWrapper();