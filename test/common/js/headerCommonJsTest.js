test("[isEmpty]������ null�� �Ҵ����� �� �׽�Ʈ", function() {
	//When,Then
	equal(HeaderComm.isEmpty(null), true);
});

test("[isEmpty]������ undefined�� �� �׽�Ʈ", function() {
	//When,Then
	equal(HeaderComm.isEmpty(undefined), true);
});

test("[isEmpty]������ undefined�� �Ҵ����� �� �׽�Ʈ", function() {
	//When,Then
	equal(HeaderComm.isEmpty('undefined'), true);
});

test("[isEmpty]������ ���ڰ��� �Ҵ����� �� �׽�Ʈ", function() {
	//When,Then
	equal(HeaderComm.isEmpty(2), false);
});

test("[isEmpty]������ boolean���� �Ҵ����� �� �׽�Ʈ", function() {
	//When,Then
	equal(HeaderComm.isEmpty(false), false);
});

test("[isEmpty]���� �ִ� string���� �Ҵ����� �� �׽�Ʈ", function() {
	//When,Then
	equal(HeaderComm.isEmpty("test"), false);
});

test("[isEmpty]������ �ִ� string���� �Ҵ����� �� �׽�Ʈ", function() {
	//When,Then
	equal(HeaderComm.isEmpty(" tes t "), false);
});

test("[isEmpty]���� String���� �Ҵ����� �׽�Ʈ", function() {
	//When,Then
	equal(HeaderComm.isEmpty("  "), true);
});

