test("3���Ŀ� ���� ��ʸ� �׸��� �� Mock��ü�� Ȯ���Ѵ�.", function() {
	//Given
	TimerMock.replace();
	happyTesterObj.setData([{"dispSpceNo":154617526,"title":"QA�Ӱ�ȯ���ǻ�ǰ1","bigImage":"http://i.011st.com/browsing/banner/2014/03/12/1001/2014031215281257718_8137483_1.png","bigImageLink":"http://11st.co.kr","smallImage":"","dtMstrCd":"","dispCtgrNo":"","dispSpceId":"","smallImageLink":"","clickScript":"stat.track(\u0027154617526\u0027,\u0027DT\u0027,\u0027\u0027);","dispObjBgnDate":"20140312","dispObjNo":8137483,"extraText":""},{"dispSpceNo":154617526,"title":"QA�Ӱ�ȯ���ǻ�ǰ1","bigImage":"b.png","bigImageLink":"http://11st.com","smallImage":"","dtMstrCd":"","dispCtgrNo":"","dispSpceId":"","smallImageLink":"","clickScript":"stat.track(\u0027154617526\u0027,\u0027DT\u0027,\u0027\u0027);","dispObjBgnDate":"20140312","dispObjNo":8137483,"extraText":""},{"dispSpceNo":154617526,"title":"QA�Ӱ�ȯ���ǻ�ǰ1","bigImage":"http://i.011st.com/browsing/banner/2014/03/12/1001/2014031215281257718_8137483_1.png","bigImageLink":"http://11st.co.kr","smallImage":"","dtMstrCd":"","dispCtgrNo":"","dispSpceId":"","smallImageLink":"","clickScript":"stat.track(\u0027154617526\u0027,\u0027DT\u0027,\u0027\u0027);","dispObjBgnDate":"20140312","dispObjNo":8137483,"extraText":""}]);
	happyTesterObj.setRollFlag("rollOk");
	
	//When
	happyTesterObj.startRolling();
	TimerMock.flow(3000);
		
	//Then
	//equal(jQuery(".in_bnr").html(), "<a href=\"http://11st.com\"><img src=\"b.png\" alt=\"����̸�\"></a>");
	equal(happyTesterObj.data.length, 3, "��ʰ����� 3���̴�.");
	equal(happyTesterObj.existData(), true, "��ʵ����Ͱ� 1���̻��̴�.");
	equal(happyTesterObj.selectedIdx, 1, "3���Ŀ� selectedIdx�� 1�� �ȴ�.");
	
	//When
	TimerMock.flow(3000);
	
	//Then
	equal(happyTesterObj.selectedIdx, 2, "6���Ŀ� selectedIdx�� 2�� �ȴ�.");
	
	//When
	TimerMock.flow(3000);
	
	//Then
	equal(happyTesterObj.selectedIdx, 0, "9���Ŀ� selectedIdx�� �ٽ� 0�� �ȴ�.");
	
	TimerMock.restore();
});