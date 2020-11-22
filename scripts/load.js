const loadPropsExtension = () => {
    searchForPropertieExtension('bckgnd');
    searchForPropertieExtension('main');
    searchForPropertieExtension('h1');
    searchForPropertieExtension('h2_h5');
    searchForPropertieExtension('links');
}

const searchForPropertieExtension = (propName) => {
    chrome.storage.sync.get(propName, function(data) {
        if(data[propName]) {
            const elem = document.getElementById(propName);
            elem.value = data[propName];
            elem.style.backgroundColor = data[propName];
            console.log("CHANGE BG")
        }
    });
}