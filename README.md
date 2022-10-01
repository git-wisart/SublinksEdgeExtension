# SublinksEdgeExtension
Edge chromium extension to propose sublinks for certain urls

The idea for this extension is born when I was using SharePoint online at work and found myself waiting for settings icon to appear.
In it's current form, the extension can load a config json file. When clicked on, it checks if the url of the current tab matches one of the regex
in the config file and if so, proposes links to so-called "sublinks" defined for this specific url.

The config file in the test folder provides an example which proposes you two links to Site settings and Site permissions whenever you are on a SharePoint Online site.

Work in Progress
