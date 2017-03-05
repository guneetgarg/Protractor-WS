// An example configuration file.
exports.config = {
	directConnect : true,
	// seleniumAddress: 'http://localhost:4444/wd/hub',

	// Capabilities to be passed to the webdriver instance.
	capabilities : {
		browserName : 'chrome',
		chromeOptions: {
		    args: ['show-fps-counter=true']
		  }
	},

	/*
	  multiCapabilities: [{ browserName: 'firefox' }, { browserName: 'chrome' }]
	 */

	// Framework to use. Jasmine is recommended.
	framework : 'jasmine2',

	// Spec patterns are relative to the current working directory when
	// protractor is called.
	specs : [ './TestScript/Super_spec.js' ],

	// Options to be passed to Jasmine.
	jasmineNodeOpts : {
		defaultTimeoutInterval : 30000
	}
};