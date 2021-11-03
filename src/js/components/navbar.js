
// const showClass = "show";


$(document).ready(function() {
    
    // $('ul li a:first').addClass('active');
    // $('.secciones article').hide();
    // $('.secciones article:first').show();

    // $('ul li a').click(function() {
    //     $('ul li a').removeClass('active');
    //     $(this).addClass('active');
    //     $('.secciones article').hide();
    //     $('.slider').hide();

    //     var activeTab = $(this).attr('href');
    //     $(activeTab).show();
    //     return false;
    // });

    $('ul li a:first').click(function() {
        $('.slider').show();
    });

    // Para cerrar el toggle

    $('.navbar-nav>li>a').on('click', function(){
        $('.navbar-collapse').collapse('hide');
    });
});





