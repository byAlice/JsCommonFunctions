/**
 * Created by alice on 2016/7/27.
 */
function getByClass(parent, sClass) {
    var oParent = parent ? document.getElementById(parent) : document,
        aResult = [],
        aEle = oParent.getElementsByTagName('*');

    for(var i=0;i<aEle.length;i++){
        if (aEle[i].className == sClass) {
            aResult.push(aEle[i]);
        }
    }
    return aResult;
}

/**
 * 如何使用
 * var aBox=getByClass(oUl,"box");
 */
