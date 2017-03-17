onload=function()
{
    var mdate=new Date();
    var day=mdate.getDay();
    var sendObj=
    {
<<<<<<< HEAD:sendDate.js
        "cmd":"new page",
        "day":day
    }
    chrome.runtime.sendMessage(sendObj,null);
=======
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
>>>>>>> f3e2080e636742c5a039b38bc864f21b10f95f1c:test.js
}