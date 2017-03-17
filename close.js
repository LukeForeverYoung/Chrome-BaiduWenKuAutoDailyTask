onload = function () {
    var textArea = document.getElementById("weiboPublisher");
    var str = textArea.innerHTML;
    var finds = "百度文库";
    if (str.indexOf(finds) >= 0) {
        var queryinfo =
            {
                "active": true
            }
        var sendObj =
            {
                "cmd": "close page",
            }
        chrome.runtime.sendMessage(sendObj, function (response) { console.log("close rec!"); })
    }
    else
        console.log(textArea.innerHTML);
}
