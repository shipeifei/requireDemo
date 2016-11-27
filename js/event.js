define(function(){

	function _isEmptyObj(obj){
		for(var a in obj){
			return false;
		}
		return true;
	}
	function _each(ary, callback){
		for(var i=0,len=ary.length; i<len;){
			callback(i, ary[i]) ? i=0 : i++;
		}
	}
	function _remove(el, type){
		var handler = el.listeners[type]['_handler_'];
		el.removeEventListener ?
			el.removeEventListener(type, handler, false) :
			el.detachEvent('on'+type, handler);
		delete el.listeners[type];
		if(_isEmptyObj(el.listeners)){
			delete el.listeners;
		}
	}
	// 添加事件
	function add(el, type, fn){
		el.listeners = el.listeners || {};
		var listeners = el.listeners[type] = el.listeners[type] || [];
		listeners.push(fn);
		if(!listeners['_handler_']){
			listeners['_handler_'] = function(e){
				var evt = e || window.event;
				for(var i=0,fn; fn=listeners[i++];){
					fn.call(el, evt);
				}
			}
			el.addEventListener ?
				el.addEventListener(type, listeners['_handler_'], false) :
				el.attachEvent('on' + type,  listeners['_handler_']);
		}
	}
	// 删除事件
	function remove(el, type, fn){
		if(!el.listeners) return;
		var listeners = el.listeners && el.listeners[type];
		if(listeners) {
			_each(listeners, function(i, f){
				if(f==fn){
					return listeners.splice(i, 1);
				}
			});
			if(listeners.length == 0){
				_remove(el,type);
			}
		}
	}
	//主动触发事件
	function dispatch(el ,type){
		try{
			if(el.dispatchEvent){
				var evt = document.createEvent('Event');
				evt.initEvent(type,true,true);
				el.dispatchEvent(evt);
			}else if(el.fireEvent){
				el.fireEvent('on'+type);
			}
		}catch(e){};
	}
	return {
		add: add,
		remove: remove,
		dispatch: dispatch
	};
});