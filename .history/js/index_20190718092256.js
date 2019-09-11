$(function(){
    //顶部轮播图
    //每个固定的时间移动图片
    var timer = setInterval(picLoop,1000);
    var index = 0;
    function picLoop(){
        index++;
        if (index==3) {index=0;}
        $(".content").animate({"left":-790*index},300);
        $("li").eq(index).css("background-color","red")
               .siblings().css("background-color","rgba(100,100,100,0.3)");
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