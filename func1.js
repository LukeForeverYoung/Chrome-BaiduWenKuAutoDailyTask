onload=function()
{
   
    var shareList=document.getElementsByClassName("weibo");
    var cnt=1;
    var i
    var flag=false;
    for(i=0;i<shareList.length;i++)
    {
        var x=shareList[i];
        if(x.getAttribute("target")=="_blank")
        {
            x.click();
            console.log(cnt++);
            flag=true;
        }
    }
    if(flag)
    {
        alert("需要自行点击领取奖励和签到");
    }
        
    /*
        TODO
        自动点击签到
        每日自动启动
    */
}