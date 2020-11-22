const props = {};

const loadProps = () => {
    searchForPropertie('bckgnd');
    searchForPropertie('main');
    searchForPropertie('h1');
    searchForPropertie('h2_h5');
    searchForPropertie('links');

    console.log(props, "PROPS")
    return props;
}

const searchForPropertie = (propName) => {
    chrome.storage.sync.get(propName, function(data) {
        if(data[propName]) props[propName] = data[propName];
    });
}