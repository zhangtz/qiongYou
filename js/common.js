/**
 * Created by 彭林 on 2017/5/10.
 */
function id(id){
  return document.getElementById(id);
}


//兼容 写一个函数
//获取某一个元素里面的文本的。
function getText(ele){
//    ele.textContent
//    ele.innerText
  //a.能力检测 （检测当前运行这个js代码的浏览器有没有这个功能）
  //如果当前这个浏览器支持textContent，那么ele.textContent就会有返回值， 不可能是undefined。
  if(typeof ele.textContent  == "string"){
    return ele.textContent;
  }else {
    return ele.innerText;
  }
}


//设置某一个元素里面的文本  //兼容 写一个函数
function setText(ele,text){
  //能力检测
  if(typeof ele.textContent  == "string"){
    ele.textContent = text;
  }else {
    ele.innerText = text;
  }
}


//要得到下一个元素节点，做兼容。
function getNextElement(ele){
  //能力检测
  if(ele.nextElementSibling){
    return ele.nextElementSibling;
  }else{
    var node = ele.nextSibling;
    while(node.nodeType != 1){
      node = node.nextSibling;
    }
    return node;
  }
}

//求上一个元素节点，做兼容
function getPreviousElement(ele){
  //能力检测
  if(ele.previousElementSibling){
    return ele.previousElementSibling;
  }else {
    var node = ele.previousSibling;
    while(node.nodeType != 1){
      node = node.previousSibling;
    }
    return node;
  }
}


//找第一个子元素节点，做兼容
function getFirstChildElement(ele){
  //能力检测
  if(ele.firstElementChild){
    return ele.firstElementChild;
  }else {
    var node = ele.firstChild;
    while(node.nodeType != 1){
      node= node.nextSibling;
    }
    return node;
  }
}


//得到最后一个子元素节点   兼容
function getLastChildElement(ele){
  //能力检测
  if(ele.lastElementChild){
    return ele.lastElementChild;
  }else {
    var node = ele.lastChild;
    while(node.nodeType != 1){
      node = node.previousSibling;
    }
    return node;
  }
}

