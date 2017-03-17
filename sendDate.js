onload=function()
{
    var mdate=new Date();
    var day=mdate.getDay();
    var sendObj=
    {
        "cmd":"new page",
        "day":day
    }
    chrome.runtime.sendMessage(sendObj,null);
}