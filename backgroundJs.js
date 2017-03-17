chrome.runtime.onMessage.addListener(callback);
<<<<<<< HEAD
function callback(request,sender, sendRsponse) {
    console.log("onMessage");
    var cmd = request.cmd;

    if (cmd == "new page")
=======
<<<<<<< HEAD
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
        var tabid=sender.id;
        console.log(sender.url);
        chrome.tabs.remove(sender.id,sendRsponse);
    }

=======
function callback(request,sender,sendRsponse)
{
    var day=request.day;
    var preday=localStorage["day"];
    newTabObj=
>>>>>>> f3e2080e636742c5a039b38bc864f21b10f95f1c
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
        var queInfo=
        {
            "active": true
        }
        chrome.tabs.query(queInfo,function(tabs){
            chrome.tabs.remove(tabs[0].id);
        })
        
    }
<<<<<<< HEAD
=======
    else
    {
        //alert("no");
        chrome.tabs.create(newTabObj);
        localStorage["day"]=day;
    }
    
>>>>>>> 2a127457b73166f9f9c846c51888fe7010296580
>>>>>>> f3e2080e636742c5a039b38bc864f21b10f95f1c
}