
var someClass={
	_singleton:null,
	getSingleton:function(){
		if(!this._singleton){
			this._singleton={

			}
		}
		return this._singleton;
	}
}

var instance = someClass.getSingleton();
debugger
console.log(instance)

/*Object.defineProperty(namespace,
	                  "singleton",{

						writable:false,
						configurable:false,
						value:{...}

					});*/