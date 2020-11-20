const tags = {
    bckgnd: ["body"],
}

const applyPage = (propName, properties) => {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        const tagsToApplyStyle = tags[propName];

        if (tagsToApplyStyle) {
            console.log("TAGSTOAPPLY", tagsToApplyStyle)
            tagsToApplyStyle.map((tag) => {
                chrome.tabs.executeScript(
                    tabs[0].id,
                    {code: `document.${tag}.style.backgroundColor = "${properties[propName]}";`});
            })
        }
        
    });
}