$(function(){
    //顶部轮播图
    //每个固定的时间移动图片
    var timer = setInterval(picLoop,3000);
    var index = 0;
    function picLoop(){
        index++;
        if (index==2) {index=0;}
        $(".content").animate({"left":-750*index},300);
    }
    // var timer = setInterval(task,1000)
    // var i = 0
    // function task(){
    //     i++;
    //     var child = $('.banner_one').children()
    //     console.log(child)
    //     setInterval(function(){
    //         if(i==child.length-1){
    //             child[i].removeClass('active') 
    //             child[0].addClass('active') 
    //         }else{
    //             // if(child[i].hasClass('active')){
    //             //     child[i].removeClass('active')
    //             //     child[i].siblings().addClass('active') 
    //             // }
    //         }
    //     },3000)
    // }
    





})