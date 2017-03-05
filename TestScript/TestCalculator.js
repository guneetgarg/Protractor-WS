var SP = require('../Pages/SuperCalculator.js');
SP = new SP();

describe('Calculator',function() {
			
	it('DIVISION', function() {
		SP.setfirstFieldText(6);
		SP.changeOperator("DIVISION")
		SP.setsecondFieldText(3)
		SP.clickGo
		browser.sleep(5555)
	});

	it('ADDITION', function() {
		SP.setfirstFieldText(12);
		SP.changeOperator("ADDITION")
		SP.setsecondFieldText(3)
		SP.clickGo
		browser.sleep(5555)
	});
	
	
	it("Retrieving Repeater Value", function() {
		element(by.repeater("result in memory").row(0)).getText().then(function(arg0) {
			console.log(arg0);
		})
		element(by.repeater("result in memory").row(0).column("result.first")).getText().then(function(text) {
			console.log(text);
		})
		element.all(by.repeater("result in memory").column("result.first")).getText().then(function(text) {
			console.log(text);
		})
		
	})
	
	it("Print the entire table", function() {
		element.all(by.repeater("result in memory")).getText().then(function(text) {
			console.log(text);
		})
	});

	
	it("Print the table line by line", function() {
		console.log("Print the table line by line")
		element.all(by.repeater("result in memory")).getText().then(function(text) {
			var noOfRows = text.length;
			console.log(noOfRows);
			for (var i = 0; i < noOfRows.length; i++) {
				element(by.repeater("result in memory").row(i)).getText().then(function(arg1) {
					console.log(arg1);
				})
			}
		})
	});
	
	
});