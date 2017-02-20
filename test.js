onload=function()
{
    var mdate=new Date();
    var day=mdate.getDay();
    var sendObj=
    {
        "cmd":"new page",
        "day":day
    }
    var toID="paalpdggmmlphgmpdbhcdhjoccmohpkh";
    chrome.runtime.sendMessage(toID,sendObj);
}