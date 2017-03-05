var jsonObject = require('../Resources/config.json');

describe('Super Calculator Demo', function() {

	var firstNumber = element(by.model('first'));
	var secondNumber = element(by.model('second'));
	var goButton = element(by.id('gobutton'));
	var operatorDropDown = element(by.model('operator'));

	function add(a, b) {
		firstNumber.sendKeys(a);
		browser.debugger();
		secondNumber.sendKeys(b);
		goButton.click();
	}

	beforeEach(function() {
		browser.get(jsonObject.base_url);
	    expect(browser.getTitle()).toEqual('Super Calculator');

	});

	it('Add Number', function() {
		add(5, 10);

		element.all(by.model('operator')).all(by.tagName("option")).then(function(items) {
			console.log("Total Values in dropdown :- " + items.length);
		})
		
		/*element.all(by.model('operator')).then(function(items) {
			console.log("Total Values in dropdown :- " + items.length);
			for (i = 0; i < items.length; i++) {
				items[i].getText().then(function(text) {
					console.log(text);
				}), items[i].getAttribute('value').then(function(text1) {
					console.log(text1);
				});
			}
		});*/
	});

});