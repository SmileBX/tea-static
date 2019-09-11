$(function(){
    //顶部轮播图
    //每个固定的时间移动图片
    var timer = setInterval(picLoop,3000);
    var index = 0;
    function picLoop(){
        index++;
        if (index==3) {index=0;}
        $(".content1").animate({"left":-7.5*index+'rem'},300);
        $(".content2").animate({"left":-7.1*index+'rem'},300);
    }
    //返回顶部表单
    $('button').click(function(){
        $('body,html').animate({'scrollTop':200},500)
    })
    //详情页获取参数展示图片
    var index = window.location.href.split('=')[1]
    console.log(index)

    
   
    
    





})