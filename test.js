onload=function()
{
    var mdate=new Date();
    var day=mdate.getDay();
    var sendObj=
    {
<<<<<<< HEAD
        "cmd":"new page",
        "day":day
    }
    var toID="paalpdggmmlphgmpdbhcdhjoccmohpkh";
=======
        "day":day
    }
    var toID="gmibgeigikibbbdbbaieddafdlglaoac";
>>>>>>> 2a127457b73166f9f9c846c51888fe7010296580
    chrome.runtime.sendMessage(toID,sendObj);
}