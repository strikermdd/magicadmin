//---------------------------------------------------------------------------
// MagicAdmin - The Best Free Admin Template
// Developed by: Bruno Cavalcante Barbosa <bruno.netadmin@gmail.com>
// Site: http://magicadmin.magicmidia.com
//---------------------------------------------------------------------------
// Main Template JS
//---------------------------------------------------------------------------

$(document).ready(function () {
    
    'use strict';
    
    $('.nav-scrollable').slimScroll({
        height: '246px',
        color: '#2980b9',
    });
    
    /* Fullscreen */
	$('.toggle-fullscreen').click(function() {
		$(document).toggleFullScreen();
	});
    
    $('[data-toggle="tooltip"]').tooltip()
    
    $('[data-toggle="popover"]').popover()
    
    // Responsive Sidebar Behavior
    if ( $(window).width() < 739) {      
        // Remove a Sidebar por padrão em telas pequenas
        $("body").removeClass("sidebar-nav");
        
        // Se clicar fora da tela recolhe o menu novamente
        $('.main').click(function(){
            $('body').removeClass('sidebar-nav');
        });
    } 
	
	//----------------------------------
	// SIDEBAR HEIGHT SETTINGS
	//----------------------------------
    function AsideHeight() {
        var wh = $(window).outerHeight(),
            TopBarHeight = $('header').height(),
            FooterHeight = $('footer').height(),
            calc_wh = wh - TopBarHeight - 40;
            
        $('.sidebar-accordion').slimscroll({
            height: calc_wh,
            width: "220px",
            size: '5px',
            color: '#90A4AE',
            distance: '0px',
            railVisible: true,
            railColor: 'rgba(255,255,255,.1)',
            railOpacity: .8,
            wheelStep: 40,
            borderRadius: '3px',
            railBorderRadius: '0px',
            allowPageScroll: false,
			opacity: 0
			}).mouseover(function() {
			$(this).next('.slimScrollBar').css('opacity', 0.7);
        });
    }
    
    AsideHeight();

    $(window).smartresize(function() {
        AsideHeight();
    });
    
    //----------------------------------
    // SIDEBAR NAVIGATION
    //----------------------------------
	if ($.fn.navAccordion) {
        $('.sidebar-accordion').each(function() {
            $(this).navAccordion({
                eventType: 'click',
                hoverDelay: 100,
                autoClose: true,
                saveState: false,
                disableLink: true,
                speed: 'fast',
                showCount: false,
                autoExpand: true,
                classExpand: 'acc-current-parent'
            });
        });
	}
    
    // Handle with Sidebar
    $('.navbar-toggler').on('click', function(event){
        event.preventDefault();
        $("body").toggleClass("sidebar-nav");
    });
    
    //TODO: Transform this functions in a single function and call with the others

    if($('body').hasClass('animated')){
        $("#cl-wrapper").css({opacity:1,'margin-left':0});
    }
    
    /* Cards Actions */
    $('.minimize').click(function(e){
        var h = $(this).parents(".card-header");
        var c = h.next('.card-body');
        var p = h.parent();
            
        c.slideToggle();
      
        p.toggleClass('closed');
      
        e.preventDefault();
    });
    
    $('.refresh').click(function(e){
        var h = $(this).parents(".card-header");
        var p = h.parent();
        var loading = $('<div class="loading"><i class="fa fa-refresh fa-spin"></i></div>');
      
        loading.appendTo(p);
        loading.fadeIn();
        
        setTimeout(function() {
            loading.fadeOut();
        }, 1000);
      
        e.preventDefault();
    });
    
    $('.close-down').click(function(e){
        var h = $(this).parents(".card-header");
        var p = h.parent();
              
        p.fadeOut(function(){
            $(this).remove();
        });
        e.preventDefault();
    })
    
    /* End of porlets actions */
});
    