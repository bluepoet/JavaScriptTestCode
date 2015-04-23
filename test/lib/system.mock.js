var systemMock = {
	set : function(){
		this.nativeAlert = window.alert;
		window.alert = (function(scope){return function(){scope.alert.apply(scope,arguments)}})(this);
		
		this.nativeConfirm = window.confirm;
		window.confirm = (function(scope){return function(){return scope.confirm.apply(scope,arguments)}})(this);
		
		this.nativeOpen = window.open;
		window.open = (function(scope){return function(){return scope.open.apply(scope,arguments)}})(this);
	},
	alert : function(sMsg){
		this.alertMsg = sMsg;
	},
	getAlertMsg : function(){
		return this.alertMsg;
	},
	open : function(openUrl){
		this.openUrl = openUrl;
	},
	getOpenUrl : function(){
		return this.openUrl;
	},
	confirm : function(sMsg){
		this.confirmMsg = sMsg;
		return this.result;
	},
	confirmResult : function(bResult){
		this.result = bResult;
	},
	getConfirmMsg: function(){
		return this.confirmMsg;
	},
	reset : function(){
		this.alertMsg = "";
		this.confirmMsg = "";
		this.openUrl = "";
		this.result = "";
		window.alert = this.nativeAlert;
		window.confirm = this.nativeConfirm;
		window.open = this.nativeOpen;
	}
};