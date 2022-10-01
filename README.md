# SublinksEdgeExtension

**Work in Progress**

Edge chromium extension to propose preconfigured sublinks depenging on current url.

The idea for this extension was born when using SharePoint online at work and finding myself waiting for the settings icon to appear.
In it's current state, the extension can load a json config file. When clicked on, it checks if the url of the current tab matches one of the regex
in the config file and if so, proposes links to so-called "sublinks" defined for this specific url.

The config file in the test folder provides an example which proposes two links whenever you are on a SharePoint Online site:
- Site settings 
- Site permissions 



![Screenshot of extension in Microsoft Edge chromium](./docs/screenshot%20extension.png "Screenshot of extension in Microsoft Edge chromium")


