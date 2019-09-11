$(function(){
    //顶部轮播图
    var timer = setInterval(task,1000)
    var index = 0
    function task(){
        index++;
        var child = $('.banner_one').children()
        console.log(child)
        setInterval(function(){
            if(i==child.length-1){
                child[i].className = ''
                child[0].className = 'active'
            }else{
                if(child[i].className == 'active'){
                    hild[i].className = ''
                    child[i].siblings().addClass="active"
                }
            }
        },3000)
    }
    





})