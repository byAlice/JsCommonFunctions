/**
 * Created by alice on 2016/7/25.
 */

/*
 *跨浏览器兼容性事件处理函数
 * */
var eventUtility={
    //添加句柄
    addHandle:function(element,type,handle){    //element：要操作的对象；type：事件类型（去掉on）；handle：事件处理函数
        //firefox、chrome
        if (element.addEventListener) {
            element.addEventListener(type,handle,false);    //事件冒泡
        }
        //低版本IE、opera
        else if (attachEvent) {
            element.attachEvent('on'+type,handle);
        }
        //不认DOM2级事件事件处理程序的使用DOM0级处理函数
        else {
            element['on'+type]=handle;
        }
    },
    //删除句柄
    removeHandle:function(element,type,handle){
        if (element.removeEventListener) {
            element.removeEventListener(type,handle,false);
        }
        else if (retachEvent) {
            element.retachEvent('on'+type,handle);
        }
        else {
            element['on'+type]=null;
        }
    }
}


/*
如何使用
eventUtility.addHandle(btn,'click',showName);
eventUtility.removeHandle(btn,'click',showName);
 */
