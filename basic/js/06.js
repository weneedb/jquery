// 요소의 넓이와 높이
// width(), height()
// innerWidth(), innerHeight() 여백을 포함한 넓이와 높이(inner)
// outerWidth(), outerHeigt()   여백 및 선을 포함한(border) 넓이와 높이(outer)

console.log($('.p1').width());

$('.p2').outerWidth(100).outerHeight(100)

// 요소의 위치
// offset() 요소가 문서에서 가로 세로 얼마나 떨어져 있는지 벨류값
console.log($('.box').offset().top);
console.log($('.box').offset().left);

// positionm() 기준이 된느 요소에서의 위치 가로 세로 위치값
console.log($('.box').position().top);
console.log($('.box').position().left);

// 스크롤바 위치
$(window).on('scroll', function(){
    console.log($(window).scrollTop());
})




