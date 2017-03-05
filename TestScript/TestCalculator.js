var SP = require('../Pages/SuperCalculator.js');
SP = new SP();

var SP1 = require('../Pages/SuperCalculator.js');
SP1 = new SP1();

describe('Calculator', function() {

	it('DIVISION', function() {
		SP.setfirstFieldText(6);
		SP.changeOperator("DIVISION")
		SP.setsecondFieldText(3)
		SP.clickGo
		browser.sleep(5555)

	})
	it('ADDITION', function() {
		SP.setfirstFieldText(12);
		SP.changeOperator("ADDITION")
		SP.setsecondFieldText(3)
		SP.clickGo
		browser.sleep(5555)
	})

});