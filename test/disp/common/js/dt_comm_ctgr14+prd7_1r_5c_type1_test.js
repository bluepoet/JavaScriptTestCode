test("����� ���ǰ����� 2��, ù��° ī�װ��� ��ǰ ���ǰ����� 2���̴�!.", function() {
	//When,Then
	ok(brandBestObj.data.length === 3, "pass!");
	ok(brandBestObj.data[0].dtPrdDomainRelList.length === 2, "pass!");
});

test("�Ʒ�ȭ��ǥ�� ������ �� currentTopIdx,currentBottomIdx,currentActIdx,brandName ���� Ȯ���Ѵ�.", function() {
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
	equal($("#selectedBrand").html(), "���̴�");
});

test("��ȭ��ǥ�� ������ �� currentTopIdx,currentBottomIdx,currentActIdx,brandName ���� Ȯ���Ѵ�.", function() {
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
	equal($("#selectedBrand").html(), "����");
});

test("ī�װ� ������ 5���̸��϶��� �ش翵���� �����ó���Ѵ�.", function() {
	//When,Then
	ok(brandBestObj.existCategoryData() === false, "���� ����� ���ǰ����� 3��");
});