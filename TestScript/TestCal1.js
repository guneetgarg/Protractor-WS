'use strict';

var SP = require('../Pages/SuperCalculator.js');
SP = new SP();

describe('Calculator', function() {

	it('DIVISION', function() {
		SP.setfirstFieldText(6);
		SP.changeOperator("DIVISION")
		SP.setsecondFieldText(3)
		SP.clickGo
		browser.sleep(5555)

	})
	it('DIVISION', function() {
		SP.setfirstFieldText(12);
		SP.changeOperator("DIVISION")
		SP.setsecondFieldText(3)
		SP.clickGo
		browser.sleep(5555)
	})

});
