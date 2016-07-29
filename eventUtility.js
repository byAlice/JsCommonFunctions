/**
 * Created by alice on 2016/7/25.
 */

// 跨浏览器兼容性事件处理函数
var eventUtility = {
    //添加事件
    addHandle: function(element, type, handle) { //element：要操作的对象；type：事件类型（去掉on）；handle：事件处理函数
        //firefox、chrome
        if (element.addEventListener) {
            element.addEventListener(type, handle, false); //事件冒泡
        }
        //低版本IE、opera
        else if (attachEvent) {
            element.attachEvent('on' + type, handle);
        }
        //不认DOM2级事件事件处理程序的使用DOM0级处理函数
        else {
            element['on' + type] = handle;
        }
    }, //这里使用,隔开
    //删除事件
    removeHandle: function(element, type, handle) {
        if (element.removeEventListener) {
            element.removeEventListener(type, handle, false);
        } else if (retachEvent) {
            element.retachEvent('on' + type, handle);
        } else {
            element['on' + type] = null;
        }
    },
    //获取兼容的事件对象
    getEvent: function(event) {
        return event ? event : window.event;
    },
    //获取事件类型
    getType: function(event) {
        return event.type;
    },
    //获取事件来自哪个元素
    getElement: function(event) {
        return event.target || event.srcElement;
    },
    //阻止事件默认行为
    preventDefault: function(event) {
        //chrome,firefox
        if (event.preventDefault) {
            event.preventDefault();
        }
        //IE
        else {
            event.returnValue = false;
        }
    },
    //阻止事件冒泡
    stopPropagation: function(event) {
        //chrome,firefox
        if (event.stopPropagation) {
            event.propagation();
        }
        //IE
        else {
            event.cancelBubble = true;
        }
    }
}


/*
如何使用
eventUtility.addHandle(btn,'click',showName);       //添加事件
eventUtility.removeHandle(btn,'click',showName);    //删除事件
var ev=eventUtility.getEvent(ev);                   //获取兼容的事件对象
alert(eventUtility.getType(ev);                     //获取事件类型
alert(eventUtility.getElement(ev).nodeName);        //获取事件来自哪个元素
eventUtility.preventDefault(ev);                    //阻止事件默认行为
eventUtility.stopPropagation(ev);                   //阻止事件冒泡
 */
