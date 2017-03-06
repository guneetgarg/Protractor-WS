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
	//	specs : [ './TestScript/*.js' ],
	
	
	// Spec patterns are relative to the location of the spec file. They may include glob patterns.
	  suites: {
	    homepage: './TestScript/*.js',
	    search: ['tests/e2e/contact_search/**/*Spec.js','tests/e2e/venue_search/**/*Spec.js']
	  },

	// Options to be passed to Jasmine.
	jasmineNodeOpts : {
		defaultTimeoutInterval : 30000,
		 showColors: true // Use colors in the command line report.
	}
};