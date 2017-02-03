chrome.runtime.onMessage.addListener(callback);
function callback(request,sender,sendRsponse)
{
    var day=request.day;
    var preday=localStorage["day"];
    newTabObj=
    {
        "url":"http://wenku.baidu.com/task/browse/daily"
    }
    if(preday==day)
    {
        //alert("yes");
    }
    else
    {
        //alert("no");
        chrome.tabs.create(newTabObj);
        localStorage["day"]=day;
    }
    
}