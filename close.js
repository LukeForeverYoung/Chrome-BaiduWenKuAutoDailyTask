<<<<<<< HEAD
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
=======
var textArea = document.getElementById("weiboPublisher");
var str=textArea.innerHTML;
var finds="百度文库";
if(str.indexOf(finds)>=0)
{
    var toID="paalpdggmmlphgmpdbhcdhjoccmohpkh";
    var sendObj=
    {
        "cmd":"close page"
    }

    chrome.runtime.sendMessage(toID,sendObj);
}
    
else
    console.log(textArea.innerHTML);
>>>>>>> f3e2080e636742c5a039b38bc864f21b10f95f1c
