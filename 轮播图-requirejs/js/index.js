/**
 * Created by lenovo on 2017/8/22.
 */
requirejs.config({
    paths: {
        jquery: 'jquery-1.11.2'
    }
});

require(['jquery','carousel'],function($,Carousel){
    var setting = {
        selector: '#container1',
        imgArr: ['img/1.jpg','img/2.jpg','img/3.jpg','img/4.jpg'],
        speed: 500,
        btnStyle: 'squary',
        arrowsPos: 'bottom'
    };
    var settings = new Carousel(setting);
    settings.init();

    var setting2 = {
        selector: '#container2',
        imgArr: ['img/2.jpg','img/3.jpg','img/4.jpg'],
        speed: 1000,
        btnStyle: 'roundness',
        arrowsPos: 'center'
    };
    var settings2 = new Carousel(setting2);
    settings2.init();

});/**
 * Created by lenovo on 2017/8/25.
 */
