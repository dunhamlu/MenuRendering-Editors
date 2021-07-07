var data=null;

function init(){
    getData();
}

function getData(){
    $.ajax({
        url:"json/menutitle.json",
        type:"get",
        async:false,
        dataType:"json",
        success:function(result){
            data=result.Menu;
            var Menutitle=data.MenuName[0].menutitle;
            $("#MenuTitle").html(Menutitle);
            renderToDom();
        },
        error:function(){
            alert("此项目需要环境才能观看!请打开环境并进入环境后再进行观看,谢谢合作!");
        }
    })
}

function renderToDom(){
    var $menuList=$('#menu-list'),
        $mt=data.MenuName[0],
        pagesum="",
        innerhtml_content="";
    $.each($mt.lititle,function(i,obj){
        pagesum=i+1;
        innerhtml_content+='<li data-id="'+i+'"><span>'+'第'+pagesum+'章 '+obj+'</span></li>'; 
    });
    $(innerhtml_content).appendTo($menuList);    
}


init();


