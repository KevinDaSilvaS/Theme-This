const saveProps = (elem) => {
    const prop = {};
    prop[elem.id] = elem.value;
    chrome.storage.sync.set(prop);

    loadProps();
    console.log(props, "SAVED NEW ONE");
}