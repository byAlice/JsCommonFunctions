/**
 * Created by alice on 2016/7/20.
 */
function myAddEvent(obj, ev, fn) {
    if (obj.attachEvent) {
        obj.attachEvent('on' + ev, fn);
    }
    else {
        obj.addEventListener(ev, fn, false);
    }
}


/*如何使用
 * window.onload=function ()
 {
 var oBtn=document.getElementById('btn1');

 myAddEvent(oBtn, 'click', function (){
 alert('a');
 });

 myAddEvent(oBtn, 'click', function (){
 alert('b');
 });
 };
 * */