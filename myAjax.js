/**
 * Created by alice on 2016/7/22.
 */
function myAjax(url, fnSucc, fnFaild) {
    /*1.创建Ajax对象*/
    if (window.XMLHttpRequest)       //全局变量是window的属性，用没定义的变量会报错，用没定义的属性结果是undefined（布尔值为假）
    {
        /*非IE6*/
        var oAjax = new XMLHttpRequest();
    }
    else {
        /*IE6*/
        var oAjax = new ActiveXObject("Microsoft.XMLHTTP");
    }

    /*2.连接服务器*/
    oAjax.open('GET', url, true);      //open(方法，文件名，异步传输)

    /*3.发送请求*/
    oAjax.send();

    /*接收返回*/
    oAjax.onreadystatechange = function () {
        /*
         * oAjax.readyState（Ajax状态值）判断浏览器和服务器进行到哪一步
         * 0 （未初始化）还没有调用open（）方法
         * 1 （载入）以调用send（）方法，正在发送请求
         * 2 （载入完成）send（）方法完成，已收到全部响应内容
         * 3 （解析）正在解析响应内容
         * 4 （完成）响应内容解析完成，可以在客户端调用
         * */

        if (oAjax.readyState == 4) {
            /*Ajax状态码status除了200其他值都为失败*/

            if (oAjax.status == 200)   //读取成功
            {
                fnSucc(oAjax.responseText);     //响应文本
            }
            else {
                fnFaild(oAjax.status)
            }
        }
    }
}


/*
 * 使用方法
 <!DOCTYPE HTML>
 <html>
 <head>
 <meta charset="utf-8">
 <title>无标题文档</title>
 <script src="myAjax.js"></script>
 <script>
 window.onload=function ()
 {
 var oBtn=document.getElementById('btn1');
 var oUl=document.getElementById('ul1');

 oBtn.onclick=function ()
 {
 myAjax('data.txt?t='+new Date().getTime(), function (str)      //清除缓存
 {
 var arr=eval(str);     //将json格式字符串处理成json对象数组

 for(var i=0;i<arr.length;i++)
 {
 var oLi=document.createElement('li');

 oLi.innerHTML='用户名：<strong>'+arr[i].user+'</strong>密码：<span>'+arr[i].pass+'</span>';

 oUl.appendChild(oLi);
 }
 }, function (){
 alert('失败');
 });
 };
 };
 </script>
 </head>

 <body>
 <input id="btn1" type="button" value="读取" />
 <ul id="ul1">
 </ul>
 </body>
 </html>

 * */