let image = document.querySelector('img');

image.onclick = function(){
    let src = image.getAttribute('src');
    if(src === 'images/jng.png'){
        image.setAttribute('src', 'images/zws.jpg');
    }else{
        image.setAttribute('src', 'images/jng.png');
    }
};

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
    let myName = prompt('请输入你的名字。');
    if(!myName || myName == null){
        setUserName();
    }else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'My Master ' + myName;
    }
}

/**
 * 加载网页时如果发现已经存在键值对 `name` 就直接取出该值，否则要求用户输入
 */
if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent =  'My Master ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}