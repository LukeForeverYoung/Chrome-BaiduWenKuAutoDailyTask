chrome.runtime.onMessage.addListener(callback);
function callback(request, sender, sendRsponse) {
    console.log("onMessage");
    var cmd = request.cmd;
    if (cmd == "new page")
    {
        var day = request.day;
        var preday = localStorage["day"];
        newTabObj =
            {
                "url": "http://wenku.baidu.com/task/browse/daily"
            }
        if (preday == day) {
            //alert("yes");
        }
        else {
            //alert("no");
            chrome.tabs.create(newTabObj);
            localStorage["day"] = day;
        }
    }
    else if(cmd=="close page")
    {
        var queryInfo=
        {
            "active": true
        }
        chrome.tabs.query(queryInfo,function(tabs){chrome.tabs.remove(tabs[0].id);})
        
    }
}