// $(function() { js-code }) <script src>위에 추가할시
$(function(){


    // 직접 선택자
    $('*').css('color', 'red') // 전체 선택자
    $('#title').css('color', 'green') // id 선택자
    $('.sub_title').css({
        color:'blue',
        border:'4px solid red'
    })  // class

    $('h3').css('fontSize', 40) // 요소 , 안적으면 기본단위 px
    $('h1, #title').css('backgroundColor', '#ccc') // 그룹
    $('h1.logo').css('color','white') // 종속

    // 인접 관계 선택기
    $('h2').parent().css('border', '4px solid #ccc') // 부모 요소
    $('section h2').css('color', 'blue') //하위 요소
    $('#list > li').css('border', '2px solid red') // 자식 요소
    $('.section h2').prev().css({
        color:'yellow',
        backgroundColor: 'lightgreen'
    }) // 이전 요소
    $('.section h2').next().css('color' , 'blue') // 다음 요소
    $('.section h3').prevAll().css('fontSize', 40) // 이전 요소 전부
    $('.section h3').nextAll().css('fontSize', 40) // 다음 요소 전부
    $('.text_1').prevUntil('.title_1').css('border', '2px solid green') // 범위제한 이전
    $('.text_1').nextUntil('.text_5').css('backgroundColor', '#666') // 범위제한 다음

    $('.section h3').siblings().css('color', 'red') // 형제

    $('.sub_item_1').parents().css('border', '3px dotted green') // 상위 요소 전체
    $('.sub_item_1').parents('#list').css('border', '5px solid blue') // 상위 요소 전체 중에서
    $('.sub_item_1').closest('ul').css('border', '10px solid red') // 가장 가까운 상위 요소
})