const btnImport = document.getElementById("btnImport");
const btnExport = document.getElementById("btnExport");
var emptyConfig = {
    "filters": []
  }

// Create custom namespace
if (!window.sublinks) {
    window.sublinks = {};
    sublinks.config = {};
}

btnImport.addEventListener("click", async () => {
    [fileHandle] = await window.showOpenFilePicker();
    const file = await fileHandle.getFile();
    const contents = await file.text();
    importConfig(contents);
});

btnExport.addEventListener("click", async () => {
    chrome.storage.local.get({"config": emptyConfig}, function(data) {
        console.dir(data.config);
      });
});

function importConfig(strJson) {
    const config = JSON.parse(strJson);
    sublinks.config = config;
    storeConfig();
}

function storeConfig() {

    chrome.storage.local.set({"config": sublinks.config }, () => {
        if(chrome.runtime.lastError) {
            console.error(chrome.runtime.lastError.message);
        }
    });
}


function loadConfig() {
    // Load config from local storage. If it's not found in local storage, write empty config to it and load that
    chrome.storage.local.get({"config": emptyConfig}, function(data) {
      return data.config;
    });
  }