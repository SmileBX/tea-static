$(function(){
    //顶部轮播图
    function task(){
        var child = $('banner_one').children()
        console.log(child)
        var i = 0
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
        })
    }
    





})