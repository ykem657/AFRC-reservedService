// 左側選單下拉
$(function () {
    $('.firstfloor_link').on('click', function () {
        $(this).toggleClass('active');
        $(this).siblings('.secondfloor').stop().slideToggle(600);
        $(this).parents().siblings().find('.secondfloor').stop().slideUp(600);
        $(this).parents().siblings().find('.firstfloor_link').removeClass('active');
    });
});

// pagination active

$(function () {
    $('.page-item.page').on('click', function () {
        $('.page-item.page').removeClass('active');
        $(this).addClass('active');
    });
});

// QA
$(function () {
    $('.question').on('click', function () {
        $(this).toggleClass('active');
        $(this).siblings('.answer').stop().slideToggle(600);
        $(this).parents().siblings().find('.answer').stop().slideUp(600);
        $(this).parents().siblings().find('.question').removeClass('active');
    });
});