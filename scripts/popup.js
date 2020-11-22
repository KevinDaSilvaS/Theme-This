let changeColor = document.getElementById('changeColor');

changeColor.onclick = function() {
  generate();
};

chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
  if (changeInfo.status == 'complete') {

    loadProps();
    loadPropsExtension();
  }
})