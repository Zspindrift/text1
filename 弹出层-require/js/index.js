requirejs.config({
    paths:{
        jquery: 'jquery-1.11.2'
    }
});
require(['jquery','dialog'],function($,Dialog){
    $(function(){
        $("#open").on("click",function(){
            var settings = {
                title: '我的弹出层',
                content: 'login.html'
            };
            var dialog = new Dialog(settings);
            dialog.open();
        });
    });

});