
// Functions

// Initialize
function initialize() {
  // Load config
  loadConfig();
}

// Load config
function loadConfig() {
  // Load config from local storage. If it's not found in local storage, write empty config to it and load that
  chrome.storage.local.get({"config": emptyConfig}, function(data) {
    sublinks.config = data.config;
  });
}

// Check if any of the filters condition match the current tabs url
async function checkFilters() {
  let queryOptions = { active: true, currentWindow: true };
  let [tab] = await chrome.tabs.query(queryOptions);

  await sublinks.config.filters.forEach(function (filter) {
    var rxpCondition = new RegExp(filter.condition);
    if(rxpCondition.test(tab.url)){
      divFilterMatches.querySelector("h1").innerText = filter.name;
      addSublinks(filter, tab.url);
    }
  });
}

// Add a new list item for each sublink in the selected filter
function addSublinks(objFilter, strCurrentUrl) {
  objFilter.sublinks.forEach(function(sublink) {
    addSublink(sublink, strCurrentUrl);
  });
}

// Generate sublink url and create list items with links in them
function addSublink(objSublink, strCurrentUrl) {
  const strBaseUrl = getBaseUrl(strCurrentUrl, objSublink.baseUrlRxp);
  const strLinkUrl = objSublink.link.replace("{BaseUrl}", strBaseUrl);
  const liSublink = document.createElement("li");
  const lnkSublink = document.createElement("a");
  lnkSublink.setAttribute("href", "#");
  lnkSublink.innerText = objSublink.name;
  liSublink.appendChild(lnkSublink);
  ulSublinkList.appendChild(liSublink);
  lnkSublink.addEventListener("click", function() { openPopUpLink(strLinkUrl) });
  console.log(strLinkUrl);
}

// This function is called by the click event handlers of the sublink-links
function openPopUpLink(strLink) {
  chrome.tabs.create({url: strLink});
  return true;
}

// Get the base url of a sublink by applying the regular expression to the URL
function getBaseUrl(strUrl, strRegEx) {
  let rxpBaseUrl = new RegExp(strRegEx);
  let arrMatches = rxpBaseUrl.exec(strUrl);
  return arrMatches[0];
}


// Variables
var btnGetUrl = document.getElementById("btnGetUrl");
var emptyConfig = {
  "filters": []
}
const divFilterMatches = document.getElementById("filter-matches");
const ulSublinkList = document.getElementById("sublink-list");

// Create custom namespace
if (!window.sublinks) {
  window.sublinks = {};
  sublinks.config = {};
}


// run
initialize();
checkFilters();