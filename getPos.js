/**
 * Created by alice on 2016/7/19.
 */
function getPos(ev) {
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    var scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft;

    return {
        x: ev.clientX + scrollLeft,
        y: ev.clientY + scrollTop
    }
}


/*
 如何使用
 var aDiv=document.getElementsByTagName('div');
 var oEvent=ev||event;
 var pos=getPos(oEvent);

 aDiv[0].style.left=pos.x+'px';  //x坐标
 aDiv[0].style.top=pos.y+'px';   //y坐标
 */
