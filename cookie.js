/**
 * Created by alice on 2016/7/24.
 */

/*设置cookie*/
function setCookie(name, value, iDay) {
    var oDate = new Data();
    oDate.setDate(oDate.getDate() + iDay);

    document.cookie = name + '=' + value + ';expires=' + oDate;
}


/*读取cookie*/
function getCookie(name) {
    var arr = document.cookie.split('; ');    //拆分
    for (var i = 0; i < arr.length; i++) {
        var arr2 = arr[i].split('=');     //拆分
        if (arr2[0] == name) {
            return arr2[1];
        }
    }

    return '';
}

/*删除cookie*/
function removeCookie(name) {
    setCookie(name, 1, -1);
}


/*如何使用
 *
 * window.onload=function ()
 {
 var oForm=document.getElementById('form1');
 var oUser=document.getElementsByName('user')[0];

 oForm.onsubmit=function ()
 {
 setCookie('user', oUser.value, 14);
 };

 oUser.value=getCookie('user');
 };
 *
 *
 *
 *
 *
 * */

























