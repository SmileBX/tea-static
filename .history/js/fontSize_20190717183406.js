// 计算html的font-size
(function(){
    function resizeBaseFontSize(){
        var rootHtml = document.documentElement,
            deviceWidth = rootHtml.clientWidth;
        if(deviceWidth > 768){
            deviceWidth = 768;
        }
        rootHtml.style.fontSize = deviceWidth / 7.5 + "px";
    }
    resizeBaseFontSize();
    window.addEventListener("resize", resizeBaseFontSize, false); //onresize 事件会在窗口或框架被调整大小时发生。
    window.addEventListener("orientationchange", resizeBaseFontSize, false);  //屏幕旋转事件：onorientationchange
})();
