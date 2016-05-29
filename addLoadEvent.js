/**
 * Created by lenovo on 2016/5/29.
 */
/*“≥√Êº”‘ÿ*/
function addLoadEvent(func){
    var oldonload = window.onload;
    if(typeof window.onload != "function"){
        window.onload = func;
    }
    else{
        window.onload = function(){
            oldonload();
            func();
        }
    }
}
addLoadEvent(firstFunction);
addLoadEvent(secondFunction);