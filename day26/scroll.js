
//浏览器的兼容处理
function getScroll(){
	//Window pageXOffset 和 pageYOffset 属性：pageXOffset 设置或返回当前页面相对于窗口显示区左上角的 X 位置。
	//pageYOffset 设置或返回当前页面相对于窗口显示区左上角的 Y 位置。
	if (window.pageXOffset){
		console.log("11");
		return {
			top: window.pageYOffset,
			left: window.pageXOffset
		}
	} else if (document.body.scrollTop){
		console.log("22");
		return {
			top: document.body.scrollTop,
			left: document.body.scrollLeft
		}
	} else {
		console.log("33");
		return {
			top: document.documentElement.scrollTop,
			left: document.documentElement.scrollLeft
		}
	}
}
