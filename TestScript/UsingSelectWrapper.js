var SelectWrap = require('../Utilities/SelectWrapper.js');
var mySelect = new SelectWrap("LOCCCCCCCCCCCCC");

var SP = require('../Pages/SuperCalculator.js');
SP = new SP();

describe('Calculator',function() {
			
	it('DIVISION', function() {
		
		mySelect.
		SP.setfirstFieldText(6);
		SP.changeOperator("DIVISION")
		SP.setsecondFieldText(3)
		SP.clickGo
		browser.sleep(5555)
	});

	
});