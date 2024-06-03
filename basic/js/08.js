// 단독 이벤트 등록
$('.btn1').click(function(){
    $(this).next().text('hello')
})

// on 복수 이벤트 등록 , 
// $('.btn2').on('click', function(){
//     $(this).next().text('jquery')
// })


$('.btn2').on(
    {
        'mouseover focus' : function () {
            $(this).next().text('안녕하세요')
        },

        'mouseleave blur' : function () {
            $(this).next().text('안녕히가세요')
        }
    }
)