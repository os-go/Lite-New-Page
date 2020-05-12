// 鏂囨。鍔犺浇瀹屾瘯
$(function () {
    let type = localStorage.getItem('type');

    // 濡傛灉鏄痭ull,璁剧疆榛樿鍊煎苟涓旇缃瓨鍌�
    if(type===null){
        type='Baidu';
        localStorage.setItem('type','Baidu');
    }
    // 璁剧疆榛樿閫変腑
    $('.btn-group li').each(function(){
        if ($(this).text()==type){
            $(this).addClass('this');
            let src='img/'+$(this).attr('data-logo')+'.png';
            $('#set').attr('src',src);
        }
    })
});


// 褰撶偣鍑诲浘鏍囩殑鏃跺€欐樉绀哄垏鎹�
$('#set').click(function () {
    $('.container').toggleClass('set');
})

// 鍒囨崲鎼滅储
$('.btn-group li').click(function(){
    $('.btn-group li').removeClass('this')
    $(this).addClass('this');
    localStorage.setItem('type',$(this).text());
    let src='img/'+$(this).attr('data-logo')+'.png';
    $('#set').attr('src',src);
    $('.container').removeClass('set');
});

// 鍥炶溅鎼滅储
document.getElementById('searchInput').onkeydown=function(e){
   if(e.keyCode==13){
       let type=localStorage.getItem('type');
       let url='';
        switch (type) {
            case 'Baidu':
                url='https://www.baidu.com/s?wd=';
                break;
            case 'Google':
                url='https://www.google.com/search?q=';
                break;
            case 'Bing':
                url='https://cn.bing.com/search?FORM=BESBTB&q=';
                break;
            case 'Doge':
                url='https://www.dogedoge.com/results?q=';
                break;
        }
        location.href=url+$(this).val();
}
}