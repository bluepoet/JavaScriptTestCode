"use strict";

var happyTesterObj = {
	area : jQuery("#happyTester"),
	data : "",
	rollingSec : 3000,
	rollObj : "",
	rollFlag : "",
	selectedIdx : 0,
	maxViewCount : 3,
	isCall: false,

	init : function() {
		var me = this;
		
		if(me.existData()) {
			me.drawBanner(0);
			me.bindEvent();
		}
	},
	setData: function(data) {
		var me = this;
		me.data = data;
	},
	setRollFlag: function(rollFlag) {
		var me = this;
		me.rollFlag = rollFlag;
	},
	setRollingSec: function(rollingSec) {
		var me = this;
		me.rollingSec = rollingSec;
	},
	bindEvent: function() {
		var me = this;
		
		me.rollingBanner();
		me.bannerBtn();
	},
	rollingBanner: function() {
		var me = this;
		
		if(me.rollingSec > 0){
			jQuery(me.area).bind("mouseenter mouseleave",
				function(event){
					if(event.type === "mouseenter"){
						me.stopRolling();
					}

					if(event.type === "mouseleave"){
						me.startRolling();
					}
				}
			);
		}

		if(me.rollingSec > 0) {
			me.startRolling();
		}
	},
	bannerBtn: function() {
		var me = this;
		
		jQuery("#bannerBtn", me.area).bind("mouseenter", function(event) {
			var selectedIdx = $(this).attr("data-idx");
			me.selectedIdx = selectedIdx;
			
			me.area.find("li").removeClass("selected");
			jQuery(jQuery("li", me.area)[me.selectedIdx]).addClass("selected");
						
			me.drawBanner(me.selectedIdx);
			me.stopRolling();
		});
	},
	existData: function() {
		var me = this;
		
		if(me.data.length == 0) {
			jQuery(".cmp_bnr_ctr.seq2").parent().css("display","none");
			return false;
		}
		
		return true;
	},
	drawBanner : function(dataIdx) {
		var me = this;
		var $bannerArea = jQuery(".in_bnr", me.area);
		$bannerArea.empty();
		$bannerArea.html('<a href="'+me.data[dataIdx].bigImageLink+'"><img src="'+me.data[dataIdx].bigImage+'" alt="행사이름"></a>');
	},
	startRolling : function() {
		var me = this;
		
		if(me.rollObj == "" && me.rollFlag != undefined){
			me.rollObj = setInterval(
				function() {
					if(me.maxViewCount > 1) {
						me.area.find("li").removeClass("selected");
						jQuery(jQuery("li", me.area)[me.selectedIdx]).addClass("selected");
						
						me.drawBanner(me.selectedIdx);
						
						me.selectedIdx++;
						
						if(me.selectedIdx > me.maxViewCount-1){
							me.selectedIdx = 0;
						}
					}
				}, me.rollingSec
			);
		}
	},
	stopRolling : function() {
		var me = this;
		clearInterval(me.rollObj);
		me.rollObj = "";
	}
}