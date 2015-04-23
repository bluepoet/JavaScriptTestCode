test("배너의 모의갯수는 2개, 첫번째 카테고리의 상품 모의갯수는 2개이다!.", function() {
	//When,Then
	ok(brandBestObj.data.length === 3, "pass!");
	ok(brandBestObj.data[0].dtPrdDomainRelList.length === 2, "pass!");
});

test("아래화살표를 눌렀을 때 currentTopIdx,currentBottomIdx,currentActIdx,brandName 값을 확인한다.", function() {
	//Given
	brandBestObj.setCurrentActIdx(1);
	brandBestObj.setDivArea("qunit-fixture");	
	brandBestObj.setCurrentTopIdx(0);	
	brandBestObj.setCurrentBottomIdx(2);	
	
	//When
	brandBestObj.beatDownButton(brandBestObj.divArea, 2);
	jQuery(".in_next", "#qunit-fixture").trigger($.Event("click"));
	
	//Then
	equal(brandBestObj.currentActIdx, 2);
	equal(brandBestObj.currentTopIdx, 1);
	equal(brandBestObj.currentBottomIdx, 0);
	equal($("#selectedBrand").html(), "아이더");
});

test("윗화살표를 눌렀을 때 currentTopIdx,currentBottomIdx,currentActIdx,brandName 값을 확인한다.", function() {
	//Given
	brandBestObj.setCurrentActIdx(1);
	brandBestObj.setDivArea("qunit-fixture");	
	brandBestObj.setCurrentTopIdx(0);	
	brandBestObj.setCurrentBottomIdx(2);	
	
	//When
	brandBestObj.beatUpButton(brandBestObj.divArea, 2);
	jQuery(".in_prev", "#qunit-fixture").trigger($.Event("click"));
	
	//Then
	equal(brandBestObj.currentActIdx, 0);
	equal(brandBestObj.currentTopIdx, 2);
	equal(brandBestObj.currentBottomIdx, 1);
	equal($("#selectedBrand").html(), "네파");
});

test("카테고리 갯수가 5개미만일때는 해당영역을 비노출처리한다.", function() {
	//When,Then
	ok(brandBestObj.existCategoryData() === false, "현재 배너의 모의갯수는 3개");
});