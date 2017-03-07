var SelWrap = function(loc) {
	this.WebElement = element(loc);
};

SelWrap.prototype.SelectByValue = function() {
	console.log("SelectByValue");
};

SelWrap.prototype.SelectByIndex = function() {
	console.log("SelectByIndex");
};

module.exports = SelWrap;