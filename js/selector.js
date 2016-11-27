define(['event'], function(event) {

    //id选择器
    function queryById(id) {
        return document.getElementById(id);
    }

    function queryByName(name){
        return document.getElementsByName(name);
    }

    //绑定事件
    function bindEvent(el, type, fn) {
        event.add(el, type, fn);
    }

    return {
        queryById: queryById,
        bindEvent: bindEvent
    };
});