/**
 * Created by lenovo on 2017/8/22.
 */
requirejs.config({
    paths: {
        jquery: 'jquery-1.11.2'
    }
});

define(['jquery'],function($){
    function Carousel(settings){
        this.defaultSettings = {
            selector: document.body,
            imgArr: [],
            speed: 500,
            btnStyle: 'squary',
            arrowsPos: 'bottom'
        };
        $.extend(this.defaultSettings,settings);
        this.$container = $('<div class="carousel-container"></div>');
        this.$imgs = $('<div class="carousel-imgs"></div>');
        this.$nav = $('<ul class="carousel-nav"></ul>');
        this.$arrows = $('<div class="carousel-arrows"></div>');
        this.$prev = $('<div class="carousel-left">&lt;</div>');
        this.$next = $('<div class="carousel-right">&gt;</div>');
    }

    Carousel.prototype.init = function(){
        this.$container.append(this.$imgs).append(this.$nav).append(this.$arrows);

        for(var i=0; i<this.defaultSettings.imgArr.length; i++){
            var li = '<li></li>';
            this.$imgs.append('<img src="'+ this.defaultSettings.imgArr[i] +'"/>');
            $(li).appendTo(this.$nav).html(i + 1);
        }
        this.$arrows.append(this.$prev).append(this.$next);
        $("li",this.$nav).eq(0).addClass("selected");
        $("img",this.$imgs).eq(0).addClass("selected");
        $(this.defaultSettings.selector).append(this.$container);
        var nowIndex = 0;
        $("li",this.$nav).on("mouseover",function(e){
            nowIndex = $(e.target).index();
            changeImg.call(this);
        }.bind(this));

        this.$prev.on("click",function(){
            nowIndex --;
            if(nowIndex == -1){
                nowIndex = this.defaultSettings.imgArr.length - 1;
            }
            changeImg.call(this);
        }.bind(this));
        this.$next.on("click",function(){
            nowIndex ++;
            if(nowIndex == this.defaultSettings.imgArr.length){
                nowIndex = 0;
            }
            changeImg.call(this);
        }.bind(this));

        var timer;
        this.$container.hover(function(){
            clearInterval(timer);
        },function() {
            run.call(this);
        }.bind(this));

        run.call(this);

        function run(){
            timer = setInterval(function(){
                this.$next.trigger("click");
            }.bind(this),this.defaultSettings.speed);
        }
        function changeImg(){
            $("li",this.$nav).eq(nowIndex).addClass("selected").siblings().removeClass("selected");
            $("img",this.$imgs).eq(nowIndex).addClass("selected").siblings().removeClass("selected");
        }

        if(this.defaultSettings.btnStyle == "roundness"){
            $("li",this.$nav).html("").css({
                borderRadius : "50%"
            });
        }
        this.$prev.addClass(this.defaultSettings.arrowsPos);
        this.$next.addClass(this.defaultSettings.arrowsPos);
    };
    return Carousel;
});