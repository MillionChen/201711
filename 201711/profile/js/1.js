//全局变量记录当前位置
var position = "home";
var nav=document.getElementById("rightNav");

//设置跳转页面时的动作
function show(str) {
	if(str != position) {
		var page = document.getElementById(position);
		var newPage = document.getElementById(str);
		// 将原页面移至新页面之前，再实现屏幕移动的效果
		page.parentNode.insertBefore(page,newPage);
		page.style.animation="moveOut 0.7s 1 forwards"
		newPage.style.animation="moveIn 0.7s 1 forwards";
	}
	position = str;
}


//从按钮跳转页面

nav.onclick = function(e) {
	var e = e || window.event;
	var t = e.target || e.srcElement;
	if(t.tagName == "li" || t.tagName == "LI") {
		show(t.innerHTML);
	}
}