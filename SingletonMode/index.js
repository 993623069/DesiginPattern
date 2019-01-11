//1.独立的对象，建2个 一个为xiaowang 一个为xiaoli
//2.让Xiaoli跟Xiaowang通过门铃进行通信
//3.先看一下xiaowang家有没有门 如果有门直接通过门铃通讯didi 如果没有先建门
//4.两个单例之间开始通信

var xiaowang=(function(argument){
	var xiaowangjia=function(message){
        this.menling=message;
	}
	var men;
	var info={
		sendMessage:function(message){
            if(!men){
            	men = new xiaowangjia(message);
            }
            return men;
		}
	}
	return info;
})();

var xiaoli={
	callXiaowang:function(msg){
		console.log(xiaowang)
		var _xw=xiaowang.sendMessage(msg);
		//alert(_xw.menling)
		_xw=null;//等待垃圾回收机制
	}
}
xiaoli.callXiaowang('didi')