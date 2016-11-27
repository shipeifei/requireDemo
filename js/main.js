require.config({
    baseUrl: 'js',
    paths: {
        jquery: '../node_modules/jquery/dist/jquery.min'
    }
});


//使用jquery

require(['jquery','./json','./selector'], function($,json,selector) {

   alert(selector.queryById('test').innerHTML);
});