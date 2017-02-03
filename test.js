onload=function()
{
    var mdate=new Date();
    var day=mdate.getDay();
    var sendObj=
    {
        "day":day
    }
    var toID="gmibgeigikibbbdbbaieddafdlglaoac";
    chrome.runtime.sendMessage(toID,sendObj);
}