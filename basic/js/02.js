
// console.log($(`li`));
    $('li:first').css('border', '5px solid red') // 첫번째 요소
    $('li').first().css('border', '5px solid blue') // 첫번째 요소

    $('li:last').css('border', '5px solid red') // 마지막 요소
    $('li').last().css('border', '5px solid blue') // 마지막 요소

    $('li:odd').css('border', '5px solid green') // 홀수 인덱스 (0부터시작)
    $('li').odd().css('border', '5px solid green')
    $('li:even').css('border', '5px solid red') // 짝수 인덱스
    $('li').even().css('border', '5px solid red')


    $('li:first-of-type').css('border', '5px solid blue') // 요소 무리 중 첫번째 요소
    $('li:last-of-type').css('border', '5px solid blue') // 요소 무리 중 마지막 요소
    $('li:nth-child(2)').css('fontSize', 30) // 요소 무리 중 (n)번째 요소
    $('li:nth-child(3n)').css('backgroundColor', '#ccc') // 요소 무리 중 *n배수 요소

    $('li:eq(1)').css('border', '5px solid black') // 요소 중 인덱스 n인 요소
    $('li').eq(8).css('border', '5px solid black') // 요소 중 인덱스 n인 요소

    $('li:gt(5)').css('border', '5px solid pink') // 인덱스 n보다 큰 요소
    $('li:lt(4)').css('border', '5px solid pink') // 인덱스 n보다 작은 요소

    $('li').slice(7).css('border', '10px solid #ccc') // 요소 중 인덱스 n부터 전부
    
