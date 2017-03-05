var jsonObject = require('../Resources/config.json');

var firstFieldText = by.model('first')

var SuperCalculator = function() {
	browser.get(jsonObject.base_url)
	browser.getTitle().then(function(text) {
		console.log("*****************" + text + "*****************")
		expect("Super Calculator").toBe(text)
	})
};
SuperCalculator.prototype = Object.create({}, {

	secondFieldText : {
		get : function() {
			return element(by.model('second'));
		}
	},
	goButton : {
		get : function() {
			return element(by.buttonText("Go!"))

		}
	},
	setfirstFieldText : {
		value : function(keys) {
			element(firstFieldText).sendKeys(keys);
		}
	},
	setsecondFieldText : {
		value : function(keys) {
			this.secondFieldText.sendKeys(keys);

		}
	},
	clickGo : {
		get : function() {
			this.goButton.click();

		}
	},

	changeOperator : {
		value : function(key) {
			element(by.model("operator")).$("[value=" + key + "]").click();
		}
	}

});

module.exports = SuperCalculator;