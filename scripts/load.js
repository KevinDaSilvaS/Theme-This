const props = {};

const loadProps = () => {
    
    searchForPropertie('bckgnd');
    searchForPropertie('main');
    searchForPropertie('h1');
    searchForPropertie('h2_h5');
    searchForPropertie('links');
}

const searchForPropertie = (propName) => {
    /* const defaultColor = "#212121"; */

/*     props[propName] = defaultColor; */

    chrome.storage.sync.get(propName, function(data) {
        if(data[propName]) props[propName] = data[propName];
        
        applyPage(propName, props);
        console.log("PROPS", props)
    });
}

console.log("LOADED");