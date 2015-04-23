test("[isEmpty]변수에 null을 할당했을 때 테스트", function() {
	//When,Then
	equal(HeaderComm.isEmpty(null), true);
});

test("[isEmpty]변수가 undefined일 때 테스트", function() {
	//When,Then
	equal(HeaderComm.isEmpty(undefined), true);
});

test("[isEmpty]변수에 undefined를 할당했을 때 테스트", function() {
	//When,Then
	equal(HeaderComm.isEmpty('undefined'), true);
});

test("[isEmpty]변수에 숫자값을 할당했을 때 테스트", function() {
	//When,Then
	equal(HeaderComm.isEmpty(2), false);
});

test("[isEmpty]변수에 boolean값을 할당했을 때 테스트", function() {
	//When,Then
	equal(HeaderComm.isEmpty(false), false);
});

test("[isEmpty]값이 있는 string값을 할당했을 때 테스트", function() {
	//When,Then
	equal(HeaderComm.isEmpty("test"), false);
});

test("[isEmpty]공백이 있는 string값을 할당했을 때 테스트", function() {
	//When,Then
	equal(HeaderComm.isEmpty(" tes t "), false);
});

test("[isEmpty]공백 String값을 할당했을 테스트", function() {
	//When,Then
	equal(HeaderComm.isEmpty("  "), true);
});

