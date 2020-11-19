const loadProps = () => {
    const props = {};

    props['bckgnd'] = searchForPropertie('bckgnd');
    props['main'] = searchForPropertie('main');
    props['h1'] = searchForPropertie('h1');
    props['h2_h5'] = searchForPropertie('h2_h5');
    props['links'] = searchForPropertie('links');

    console.log(props, "PROPS")
    return props;

}

const searchForPropertie = (propName) => {
    const defaultColor = "#212121";
    let prop = defaultColor;
    chrome.storage.sync.get(propName, function(data) {
        if(data[propName]) prop = data[propName];
    });

    return prop;
}

console.log("LOADED");