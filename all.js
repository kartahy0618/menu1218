// fadeOut往上飛出去
$('.view').fadeOut(0)



// fadeIn往下飛進來
// click 點擊
// 開始訂餐點擊事件
$('#goMenu').click(function(){
    //點擊後做得事
    $('.view').fadeIn(1000)
})
// 訂餐畫面點擊事件
$('.view').click(function(){
$('.view').fadeOut(1000)
}).children().click(function(){
    return false
})


