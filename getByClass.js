function getByClass(oParent,sClass) {
    var aResult=[];
    var aEle=oParent.getElementsByTagName('*');

    for(var i=0;i<aEle.length;i++){
        if (aEle[i].className==sClass) {
            aResult.push(aEle[i]);  //把符合条件的暂存入aResult,待for函数循环完后一起返回
        }
    }
    return aResult;
}

/**
 * 如何使用
 * var aBox=getByClass(oUl,"box");
 */
