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