$(function(){
    //顶部轮播图
    //每个固定的时间移动图片
    var timer = setInterval(picLoop,1000);
    var index = 0;
    function picLoop(){
        index++;
        if (index==3) {index=0;}
        $(".content").animate({"left":-750*index},3000);
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