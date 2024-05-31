$('#list a[target]').css('color','red')
// target 속성이 있는 a요소
$('#list a[href^=https]').css('border', '5px solid green')
// href 속성 중에서 https로 시작하는 a요소
$('#list a[href$=net]').css('border', '5px solid blue')
// href 속성 중에서 net으로 끝나는 a요소
$('#list a[href*=google]').css('border', '5px solid red')
// href 속성 중에서 google있는 a요소
$('li:hidden').css('display', 'block')
// li 히든 요소

$('input:text').css('background', 'red')
//input 타입이 text인 요소
$('input:password').css('background', 'green')
//input 타입이 password인 요소

var v1 = $('#f3 :selected').val()
console.log(v1);

var v2 = $('#f4 :checked').val()
console.log(v2);

var v3 = $('#f5 :checked').val()
console.log(v3);

$('li:contains("구글")').css('background', 'orange')
// '("text")'를 포함한 요소

$('#f2').contents().filter('input').css('background', 'blue')
// contents 전체 // 선택한 요소(filter()) 를 반환
$('li a').has('span').css('border', '10px solid green')
// has(x) a 중에서 span을 가진 요소
$('li').not(':first').css('border', '4px solid aqua')
//.not(':x') 첫번째 요소를 제외한 전체

$('form section').filter('#f5').css('background', 'red')
//filter(x) 중에서 id=f5 인 요소
$('form').find('#f4').css('background','pink')
//find(x) 중에서 id=f4 인 요소를 찾아냄


// is() 매서드
console.log($('#list li').eq(3).is(':visible'));
console.log($('#list li').eq(3).is(':hidden'));
console.log($('#chk').is(':checked'));
console.log($('#chk2').is(':checked'));
console.log($('#sel').is(':selected'));

