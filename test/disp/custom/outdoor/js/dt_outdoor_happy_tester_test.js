test("3초후에 다음 배너를 그리는 걸 Mock객체로 확인한다.", function() {
	//Given
	TimerMock.replace();
	happyTesterObj.setData([{"dispSpceNo":154617526,"title":"QA임경환해피상품1","bigImage":"http://i.011st.com/browsing/banner/2014/03/12/1001/2014031215281257718_8137483_1.png","bigImageLink":"http://11st.co.kr","smallImage":"","dtMstrCd":"","dispCtgrNo":"","dispSpceId":"","smallImageLink":"","clickScript":"stat.track(\u0027154617526\u0027,\u0027DT\u0027,\u0027\u0027);","dispObjBgnDate":"20140312","dispObjNo":8137483,"extraText":""},{"dispSpceNo":154617526,"title":"QA임경환해피상품1","bigImage":"b.png","bigImageLink":"http://11st.com","smallImage":"","dtMstrCd":"","dispCtgrNo":"","dispSpceId":"","smallImageLink":"","clickScript":"stat.track(\u0027154617526\u0027,\u0027DT\u0027,\u0027\u0027);","dispObjBgnDate":"20140312","dispObjNo":8137483,"extraText":""},{"dispSpceNo":154617526,"title":"QA임경환해피상품1","bigImage":"http://i.011st.com/browsing/banner/2014/03/12/1001/2014031215281257718_8137483_1.png","bigImageLink":"http://11st.co.kr","smallImage":"","dtMstrCd":"","dispCtgrNo":"","dispSpceId":"","smallImageLink":"","clickScript":"stat.track(\u0027154617526\u0027,\u0027DT\u0027,\u0027\u0027);","dispObjBgnDate":"20140312","dispObjNo":8137483,"extraText":""}]);
	happyTesterObj.setRollFlag("rollOk");
	
	//When
	happyTesterObj.startRolling();
	TimerMock.flow(3000);
		
	//Then
	//equal(jQuery(".in_bnr").html(), "<a href=\"http://11st.com\"><img src=\"b.png\" alt=\"행사이름\"></a>");
	equal(happyTesterObj.data.length, 3, "배너갯수는 3개이다.");
	equal(happyTesterObj.existData(), true, "배너데이터가 1개이상이다.");
	equal(happyTesterObj.selectedIdx, 1, "3초후에 selectedIdx가 1이 된다.");
	
	//When
	TimerMock.flow(3000);
	
	//Then
	equal(happyTesterObj.selectedIdx, 2, "6초후에 selectedIdx가 2가 된다.");
	
	//When
	TimerMock.flow(3000);
	
	//Then
	equal(happyTesterObj.selectedIdx, 0, "9초후에 selectedIdx가 다시 0이 된다.");
	
	TimerMock.restore();
});