

function addTestData() {
    let testData = {
        "filters": [
            {
                "id": 0,
                "name": "Youtube",
                "condition": "https:\/\/www.youtube.com",
                "sublinks": [
                    {
                        "id": 0,
                        "name": "Link 1",
                        "link": "blabla"
                    },
                    {
                        "id": 1,
                        "name": "Link 2",
                        "link": "blablabla"
                    }
                ]
            },
            {
                "id": 1,
                "name": "Facebook",
                "condition": "https:\/\/www.facebook.com",
                "sublinks": [
                    {
                        "id": 0,
                        "name": "Facbook link 1",
                        "link": "blabla"
                    },
                    {
                        "id": 1,
                        "name": "Facebook link 2",
                        "link": "blablabla"
                    }
                ]
            }
        ]
    }

    chrome.storage.local.set({ 'testData': testData }, () => {
        if(chrome.runtime.lastError) {
            console.error(chrome.runtime.lastError.message);
        }
    });

    console.log("Test data has been written to local storage.");

    chrome.storage.local.get(['testData'], (result) => {
        if(chrome.runtime.lastError) {
            console.error(chrome.runtime.lastError.message);
        } else {
            console.log("Test data from local storage:");
            console.dir(result['testData']);
        }
    });
}

