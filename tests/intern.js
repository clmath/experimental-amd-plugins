// run grunt --help for help on how to run
// Learn more about configuring this file at <https://github.com/theintern/intern/wiki/Configuring-Intern>.
// These default settings work OK for most people. The options that *must* be changed below are the
// packages, suites, excludeInstrumentation, and (if you want functional tests) functionalSuites.
define({
	// The port on which the instrumenting proxy will listen
	proxyPort: 9000,

	// Browsers to run integration testing against. Note that version numbers must be strings if used with Sauce
	// OnDemand. Options that will be permutated are browserName, version, platform, and platformVersion; any other
	// capabilities options specified for an environment will be copied as-is
	environments: [
		// Desktop
		{
			browserName: "internet explorer",
			version: "11",
			platform: "Windows 8.1",
			name: "requirejs-dplugins"
		}, {
			browserName: "internet explorer",
			version: "10",
			platform: "Windows 8",
			name: "requirejs-dplugins"
		}, {
			browserName: "firefox",
			version: "25",
			platform: "Windows 7",
			name: "requirejs-dplugins"
		}, {
			browserName: "chrome",
			version: "33",
			platform: "Windows 7",
			name: "requirejs-dplugins"
		}
		
		// Disabled because environments are often unavailable on sauce and randomly break the build.
		// {
			// browserName: "safari",
			// version: "7",
			// platform: "OS X 10.9",
			// name: "requirejs-dplugins"
		// }

		// Mobile
		// Disabled because environments are often unavailable on sauce and randomly break the build.
		// {
			// browserName: "iphone",
			// version: "7.0",
			// platform: "OS X 10.9",
			// name: "requirejs-dplugins"
		// }, {
			// browserName: "iphone",
			// version: "7.1",
			// platform: "OS X 10.9",
			// name: "requirejs-dplugins"
		// },
		// {
			// browserName: "ipad",
			// version: "7.0",
			// platform: "OS X 10.9",
			// name: "requirejs-dplugins"
		// }, {
			// browserName: "ipad",
			// version: "7.1",
			// platform: "OS X 10.9",
			// name: "requirejs-dplugins"
		// }

	],

	// Maximum number of simultaneous integration tests that should be executed on the remote WebDriver service
	maxConcurrency: 3,

	// Whether or not to start Sauce Connect before running tests
	tunnel: "SauceLabsTunnel",

	loader: {
		baseUrl: typeof window !== "undefined" ? "../../.." : ".."
	},
	useLoader: {
		"host-node": "requirejs",
		"host-browser": "../../../requirejs/require.js"
	},

	// Non-functional test suite(s) to run in each browser
	suites: ["requirejs-dplugins/tests/unit/all"],

	// A regular expression matching URLs to files that should not be included in code coverage analysis
	excludeInstrumentation: /(?:requirejs(\/|\\)|dojo|tests|node_modules)/
});
