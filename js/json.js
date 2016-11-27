//首先define是一个方法，需要两个参数，
//第一个：数组类型，依赖的js文件，相等于在页面通过script 标签，引入js
//第二个：一个是函数参数，一般在函数体内进行相关逻辑的处理
//
define(['./host'], function(host) {



        //json对象
        return {

            sayName:function(){
            	alert(host.port);
            }
        };
    }

);