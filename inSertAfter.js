/**
 * Created by alice on 2016/5/29.
 */
function insertAfter(newElement,targetElement){
    var parent = targetElement.parentNode;
    if(parent.lastChild == targetElement){
        parent.appendChild(newElement);
    }
    else{
        parent.insertBefore(newElement,targetElement.nextSibling)
    }
}
/*
 insertAfter(description,gallery);
 insertAfter(placeholder,gallery);*/
