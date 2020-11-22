
var styleEl = document.createElement('style');
document.head.appendChild(styleEl);
var styleSheet = styleEl.sheet;

const props = {}

const loadProps = () => {
    searchForPropertie('bckgnd');
    searchForPropertie('main');
    searchForPropertie('h1');
    searchForPropertie('h2_h5');
    searchForPropertie('links');

    console.log(props, "DATA")
    
}

const searchForPropertie = (propName) => {
    chrome.storage.sync.get(propName, function(data) {
        if(data[propName]) props[propName] = data[propName];

        apply(propName);
    });
}

const apply = (propName) => {

    switch (propName) {
        case "bckgnd":
            background();
            break;
    
        case "main":
            mainText();
            break;

        case "h1":
            mainTitleText();
            break;

        case "h2_h5":
            headerText();
            break;

        case "links":
            links();
            break;

        default:
            break;
    }
    
}

const background = () => {
    document.body.style.backgroundColor = props.bckgnd;

    styleSheet.insertRule(`
    div { background-color: ${props.bckgnd}; }`
    , styleSheet.cssRules.length);

    styleSheet.insertRule(`
    #hdtbSum { background-color: ${props.bckgnd} !important; }`
    , styleSheet.cssRules.length);

    styleSheet.insertRule(`
    div img{ background-color: #00000000; }`
    , styleSheet.cssRules.length);

    styleSheet.insertRule(`
    main { background-color: ${props.bckgnd} !important; }`
    , styleSheet.cssRules.length);

    styleSheet.insertRule(`
    header, footer { background-color: ${props.bckgnd} !important; }`
    , styleSheet.cssRules.length);
}

const mainText = () => {
    document.body.style.color = props.main;

    styleSheet.insertRule(`
    p { color: ${props.main} !important; }`
    , styleSheet.cssRules.length);

    styleSheet.insertRule(`
    div { color: ${props.main} !important; }`
    , styleSheet.cssRules.length);

    styleSheet.insertRule(`
    li { color: ${props.main} !important; }`
    , styleSheet.cssRules.length);

    styleSheet.insertRule(`
    span { color: ${props.main} !important; }`
    , styleSheet.cssRules.length);
}

const mainTitleText = () => {
    styleSheet.insertRule(`
    h1 { color: ${props.h1} !important; }`
    , styleSheet.cssRules.length);

    styleSheet.insertRule(`
    input { color: ${props.h1} !important; }`
    , styleSheet.cssRules.length);

    styleSheet.insertRule(`
    em { color: ${props.h1} !important; }`
    , styleSheet.cssRules.length);
}

const headerText = () => {
    styleSheet.insertRule(`
    h2 { color: ${props.h2_h5} !important; }`
    , styleSheet.cssRules.length);

    styleSheet.insertRule(`
    div h2 { color: ${props.h2_h5} !important; }`
    , styleSheet.cssRules.length);

    styleSheet.insertRule(`
    h3 { color: ${props.h2_h5} !important; }`
    , styleSheet.cssRules.length);

    styleSheet.insertRule(`
    h4 { color: ${props.h2_h5} !important; }`
    , styleSheet.cssRules.length);

    styleSheet.insertRule(`
    h5 { color: ${props.h2_h5} !important; }`
    , styleSheet.cssRules.length);
}

const links = () => {
    styleSheet.insertRule(`
    a { color: ${props.links} !important; }`
    , styleSheet.cssRules.length);

    styleSheet.insertRule(`
    input { color: ${props.links} !important; }`
    , styleSheet.cssRules.length);

    styleSheet.insertRule(`
    svg {color: ${props.links} !important; }`
    , styleSheet.cssRules.length);

    styleSheet.insertRule(`
    path {color: ${props.links} !important; }`
    , styleSheet.cssRules.length);

    styleSheet.insertRule(`
    cite { color: ${props.links} !important; }`
    , styleSheet.cssRules.length);

    styleSheet.insertRule(`
    .iUh30 { color: ${props.links} !important; }`
    , styleSheet.cssRules.length);

    styleSheet.insertRule(`
    yt-formatted-string.ytd-guide-signin-promo-renderer {
        color: aqua;
    }`
    , styleSheet.cssRules.length);

    styleSheet.insertRule(`
    code { background-color: #151515;}`
    , styleSheet.cssRules.length);

    styleSheet.insertRule(`
    code { color: aliceblue;}`
    , styleSheet.cssRules.length);
}

window.onload = function() {
    loadProps()
};
/* background-color: #151515;
color: aliceblue; */
