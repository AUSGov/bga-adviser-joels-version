/*jshint browser: true, devel: true, jquery: true*/



$(document).ready(function () {
    
    
    // Main navigation functionality
    $('.navbar-nav .nav-item.dropdown').on('click', function(){
        $(this).find('.navigation-first-level-menu').toggleClass('show');
    });

    $('body').click(function(e){
        var top_menu_link = $('.navigation-main-menu > .nav-item').has(e.target).length > 0,
            dropdown_menu = $('dropdown-menu').has(e.target).length > 0;
        
        if(!top_menu_link) {
            
            $('.dropdown-menu').each(function(){
                $(this).removeClass('show');
            });
        } else {
        }
    });
    
    // Main nav - top level links
    $('#navbarDropdownMenuLink_0').on('click', function(e){
        e.preventDefault();
    });
    $('#navbarDropdownMenuLink_1').on('click', function(e){
        e.preventDefault();
    });
    $('#navbarDropdownMenuLink_2').on('click', function(e){
        e.preventDefault();
        window.location.pathname = "/bga-adviser-joels-version/finder/tool.html";
    });
    $('#navbarDropdownMenuLink_3').on('click', function(e){
        e.preventDefault();
        window.location.pathname = "/bga-adviser-joels-version/adviser/adviser-finder.html";
    });
    $('#navbarDropdownMenuLink_4').on('click', function(e){
        e.preventDefault();
        window.location.pathname = "/bga-adviser-joels-version/events/events-finder.html";
    });
    $('#navbarDropdownMenuLink_5').on('click', function(e){
        e.preventDefault();
        window.location.pathname = "/bga-adviser-joels-version/news.html";
    }); 

    // Mobile nav (for the moble test version only)
    $('.mobile-test .collapse').css('display', 'none');
    
    $('#ChangeToggle').on('click', function(){
        $('.mobile-test .collapse').toggleClass('open');
    });
    
    $('.mobile-test #navbarDropdownMenuLink_0').on('click', function(e){
        e.preventDefault();
        window.location.pathname = "/bga-adviser-joels-version/registrations";     
    });
    $('.mobile-test #navbarDropdownMenuLink_1').on('click', function(e){
        e.preventDefault();
        window.location.pathname = "/bga-adviser-joels-version/planning";
    });
    
    $('#ChangeToggle').on('click', function(){
        $('#navigation-bar').slideToggle();
    });
    $(window).on('resize', function(){
        if ($(window).width() < 770) {
            $('#navigation-bar').hide();
        } else {
           $('#navigation-bar').show(); 
        }
    });
    
    
    // Prevent click empty 'a' tag from causing scrolling
    $('a').on('click', function(e){
        if (! $(this).attr('href') ) {
            e.preventDefault();
        }
    });
    
    
    // Hide empty breadcrumb links and arrows
    $('a.breadcrumb-link').each(function(){
        if( $(this).is(':empty') ) {
            var wrapper = $(this).parent('.breadcrumb-home-wrapper');
            $(wrapper).remove();
        }
    });
    $('.breadcrumb-home-wrapper').last().addClass('last');

    /*----------- Add side-menu (sticky_list) functionality ----------- */
    
    // Function for menu stickiness on scroll (called within the if .anchor-menu .sticky-container exists block)
    function add_position(positions) {

        for (var i = 0; i < positions.length; i++) {
            var top_position = positions[i];
            if ($(window).scrollTop() >= top_position) {
                $('.anchor-menu a').removeClass('active-sticky');
                $('.anchor-menu a[data-option=' + positions[i] + ']').addClass('active-sticky');
            }
        }
    }
    
    // Function to make the side menu sticky
    var stickyPosition = $('.anchor-menu').offset(); //This var is outside the function because it needs to be determined BEFORE window resizing,.
    
    function menuStickiness() {
        
        var win = $(window),
            stickyWidth = $('.twoCol39-left').width();
        
        // Set side-menu initial horizontal position 
        if(win.width() < 575) {
            $('.anchor-menu').css('position', 'relative').css('top', 'auto');
        } else if (win.width() >= 575) {
            if (win.scrollTop() >= stickyPosition.top) {
                $('.anchor-menu').css('position', 'fixed').css('top', '32px').css('width', stickyWidth);
            } else {
                $('.anchor-menu').css('position', 'relative').css('top', 'auto').css('width', stickyWidth);
            }
        } 
        
        // Reset side-menu position on scroll
        $(window).scroll(function () {

            stickyWidth = $('.twoCol39-left').width();

            if (win.width() < 575) {
                $('.anchor-menu').css('position', 'relative').css('top', 'auto').css('width', stickyWidth);
            } else if (win.width() >= 575) {
                if (win.scrollTop() >= stickyPosition.top) {
                    $('.anchor-menu').css('position', 'fixed').css('top', '32px').css('width', stickyWidth);
                } else if (win.scrollTop() < stickyPosition.top) {
                    $('.anchor-menu').css('position', 'relative').css('top', 'auto').css('width', stickyWidth);
                }
            }
        });
    }

    if ($( ".anchor-menu .sticky-container" ).length) {

        // Apply menu stickiness
        menuStickiness();
        
        // Side menu scroll to section of the page
        // and add top position of element to anchor link as a data-option
        $('.anchor-menu a').each(function(){
            
            // Get rid of punctuation before converting it an ID.
             var a_text = $(this).text(),
                element_name = a_text.replace(". ", "");
                element_name = element_name.replace(/\s+/g, '-').toLowerCase();
                element_name = element_name.replace("'", "");
                element_name = element_name.replace(",", "");
                element_name = element_name.replace(/[0-9]/g, '');
                var name_str = '#' + element_name;
                var element_position = $(name_str).offset();
                //console.log(element_position);
                      
            if ($(name_str).length){
                $(this).attr('data-option', Math.round(element_position.top));
        
                $(this).on('click', function(){
                    $([document.documentElement, document.body]).animate(
                        { scrollTop: $(name_str).offset().top }, 400);
                    $('.anchor-menu a').removeClass('active-sticky');
                    $(this).addClass('active-sticky');
                });
            }   
        });   
    } // END if .anchor-menu .sticky-container EXISTS
    
    // Menu stickiness on .resize()
    $(window).on('resize', function(){
        if ($( ".anchor-menu .sticky-container" ).length) {
            menuStickiness();
        }
    });
    

   
    // Modal functionality
    // Empty href modal
    $('a[href=""]').on("click", function(){
        if (!$(this).parents('.sticky-container').length && !$(this).hasClass("guide_navlink")){
            $(".modal-wrapper").addClass("active");
            $(".modal-background").addClass("active");
        }
    });
    
    $('.inactive-path').on("click", function(){
        $(".modal-wrapper").addClass("active");
        $(".modal-background").addClass("active");
    });
    
    $(".modal-close").on("click", function(){
        $(".modal-wrapper").removeClass("active");
        $(".modal-background").removeClass("active");
    });

    $(".modal-background").on("click", function(){
        $(".modal-wrapper").removeClass("active");
        $(".modal-background").removeClass("active");
        $(".shortlist-wrapper-2").removeClass("active");
    });
    
    // Search not working modal
    $(".search-bar-search").on("click", function(){
        $(".modal-wrapper").addClass("active");
        $(".modal-background").addClass("active");
    });

    
    
    // FUNCTION TO COUNT and SET active filter
    var all_filter_types = ['postcode', 'delivery-type', 'topic'];

    var add_filter_classes= function(filter_type, filter_option, filter_label){
        var show_class = filter_type + "-show";
        var hide_class = filter_type + "-hide";
        var parent = $("label[data-option='" + filter_option + "']").parents('.checkbox-item');
        var grandparent = $("label[data-option='" + filter_option + "']").parents('.filter-item').attr('ID');
        
        $(".list-view.search-card-result").each(function(){
            $(this).removeClass(show_class);   
            $(this).removeClass(hide_class);    
        }); 
        
        var selected_items = [];
        $('#'+grandparent + " .checkbox-item.selected").each(function(){  
            var item = $(this).attr('data-label');
            selected_items.push(item);    
        });
              
        $(".list-view.search-card-result").each(function(){
             
            for (var m = 0; m < selected_items.length; m++ ) {
                if ($(this).hasClass(selected_items[m])) {  
                    $(this).addClass(show_class);
                    $(this).removeClass(hide_class);
                }
            }
        });
        
        $(".list-view.search-card-result").each(function(){
           
            if( selected_items.length === 0 ) {
                $(this).removeClass(hide_class);
                $(this).removeClass(show_class);
            } else {
                if (!$(this).hasClass(show_class) ) {
                   $(this).addClass(hide_class);
                } 
            }   
        });
        
        var filter_count = localStorage.getItem(grandparent);
        
        if(filter_count === null) {
            filter_count = 0;
        }
        
        if(parent.hasClass('selected')) { 
            localStorage.setItem(filter_option, "true");
            filter_count = +filter_count  +1;
            localStorage.setItem(grandparent, filter_count);
        
        } else {
            localStorage.removeItem(filter_option);
            filter_count = +filter_count  -1;
            localStorage.setItem(grandparent, filter_count);    
        }
       
    };
    
    
    // FUNCTIONS TO SET FILTER COUNTS WHEN OPTIONS ARE SELECTED / DESELECTED (mobile)  
    var set_mobile_filters = function(filter_type){
        var filter_total = localStorage.getItem(filter_type);
        
        if (filter_total === '0') {
            
            $('#' + filter_type + ' .mobile-counter').removeClass('active'); 
        } else {
            $('#' + filter_type + ' .mobile-counter').text(filter_total).addClass('active');
        }
    };
    
    var set_total_filter_count = function(){
        var delivery_type = parseInt(localStorage.getItem('delivery-type')),
            topic = parseInt(localStorage.getItem('topic')),
            postcode = parseInt(localStorage.getItem('postcode'));
        
        if (isNaN(delivery_type)) {
            delivery_type = 0;
        }
        if (isNaN(topic)) {
            topic = 0;
        }
        if (isNaN(postcode)) {
            postcode = 0;
        }
        var total_filter_count = delivery_type + topic + postcode;
        $(".filter-counter").text(total_filter_count);
    };
    
    
    // FILTER ACCORDIONS
    // Open filter accordions
    $('.filter-item-title').on('click', function(){
        
        if ( $(this).hasClass('open') ) {
            $(this).parents('.filter-item').find('.filter-item-content').slideUp();
            $(this).removeClass('open');
        } else { 
            $('.filter-item-content').slideUp();
            $('.filter-item-title').removeClass('open');
            
            $(this).parents('.filter-item').find('.filter-item-content').slideDown();
            $(this).addClass('open');
        }
        
    });
   
    
    // FILTER SELECTONS
    // Select filter 'bubble' options - multiple select
    $('.active-filters.multi-select li').on('click', function(){
        
        //total_active_filters();
        var that = $(this);
        var filter_option = $(this).attr('data-option');
        var filter_label = $(this).attr('data-label');
        var filter_type = $(this).parents('.filter-item').attr('ID');

        localStorage.removeItem(filter_option);
        
        $(this).toggleClass('selected');
        $(".checkbox-item[data-option='" + filter_option + "']").toggleClass('selected');

        add_filter_classes(filter_type, filter_option, filter_label);
        change_showing(that, '.checkbox-item', 19);    
        vary_search_order();
    });
  
    // Select filter checkbox options
    $('.checkbox-item label').on('click', function(){
        var that = $(this);
        var filter_option = $(this).attr('data-option');
        var filter_label = $(this).attr('data-label');
        var filter_type = $(this).parents('.filter-item').attr('ID');
        
        $(this).parents('.checkbox-item').toggleClass('selected');
        $(this).parents('.filter-item').find('.active-filters li[data-option="' + filter_option +'"]').toggleClass('selected ');
  
        add_filter_classes(filter_type, filter_option, filter_label);
        set_mobile_filters(filter_type);
        change_showing(that, '.checkbox-item', 19);   
        vary_search_order();
    }); 
    
    
    // Select filter text input options (postcode field)
    $('.text-field-item .apply-postcode').on('click', function(){
        var that = $(this);
        var filter_option = "postcode";
        var postcode_val = $(this).parents('.text-field-item').find('input').val();

        if (postcode_val) {
            $(this).parents('.text-field-item').addClass('selected');

            localStorage.setItem(filter_option, 1);
            localStorage.setItem(filter_option + "_value", postcode_val);

            add_show_classes_on_load('.list-view.search-card-result');

            if( !$(this).parents('.text-field-item').find('input').val() ) {
                $(this).parents('.text-field-item').find('input').removeClass('selected');
            } else {
                 $(this).parents('.text-field-item').find('input').addClass('selected');
            }

            set_mobile_filters(filter_type);
            change_showing(that, '.text-field-item', 1); 
            vary_search_order();
        }
    });
    
    $(".clear-postcode").on('click', function(){
        var that = $(this);
        $(this).parents('.text-field-item').removeClass('selected');
        $(this).parents('.text-field-item').find('input').removeClass('selected').val('');
        localStorage.removeItem('postcode_value');
        localStorage.setItem('postcode', "0");
        
        add_show_classes_on_load('.list-view.search-card-result');
        change_showing(that, '.text-field-item', 1);
        vary_search_order();
    });
    
    
    
    //CREATE 'SHOWING' NUMBER
    var showing = localStorage.getItem('showing');
    
    if (showing === null) {
        showing = 642;
    }
    $('span.number').text(showing);
    
    var showing_range = function(showing){
        if (showing < 10) {
            showing = 11;
        } else if (showing > 642) {
            showing = 642;
        }
        return showing;
    };
    
    var change_showing = function(item, parent, change_factor){
        var showing = parseInt(localStorage.getItem('showing'));  
        if (isNaN(showing)) {
            showing = 642;
        }
        
        if ( $(item).parents(parent).hasClass('selected')) {
            showing = Math.round(showing / 43 * change_factor);
            showing = showing_range(showing);
            localStorage.setItem('showing', showing);
            $('span.number').text(showing);
        } else {
            showing = Math.round(showing * 43 / change_factor);
            showing = showing_range(showing);
            localStorage.setItem('showing', showing);
            $('span.number').text(showing);
        }
        
    };
    
    // LIMIT NUMBER OF SEARCH CARDS DISPLAY
    function shuffle(a) {
        var j, x, i;
        for (i = a.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = a[i];
            a[i] = a[j];
            a[j] = x;
        }
        return a;
    }
    
    var vary_search_order = function(){
        var cards = [];

        $('.list-view.search-card-result').each(function(){
            cards.push($(this));    
        });
        
        var shuffled = shuffle(cards);

        $('#list-view .inner-wrapper').html('');
        
        for (var card = 0; card < shuffled.length; card++) {
            $('#list-view .inner-wrapper').append(shuffled[card]);
        }
    };
    
    
    // MOBILE FILTER VISIBILITY
    $('.view-filters').on('click', function(){
        $('.filter-wrapper').addClass('active');
        $('.modal-background').addClass('active');

        //add active state to mobile filter counters
        for (var m = 0; m < all_filter_types.length; m++) {
            var filter_type = localStorage.getItem(all_filter_types[m]);
            
            if (filter_type !== null) {
                if (filter_type === '0') {
                    $('#' + all_filter_types[m] + ' .mobile-counter').removeClass('active'); 
                } else {
                    $('#' + all_filter_types[m] + ' .mobile-counter').text(filter_type).addClass('active');
                }
            }
        }

        
        //Close open filter accordions
        $('.filter-item-content').hide();
        $('.filter-item-title').removeClass('open');
        
        // Set size of scrolling panel
        var bottom_height = $('.mobile-bottom').height(),
            modal_height = $('.filter-wrapper').height(),
            filters_height = modal_height - bottom_height - 59;
    
        $('.filters').height(filters_height);
        
    });
    $('.filter-wrapper .modal-close').on('click', function(){
        set_total_filter_count();
        $('.filter-wrapper').removeClass('active');
        $('.modal-background').removeClass('active');
        $('.filters').css('height', 'auto');
        
    });
    $('.mobile-apply-filters-button').on('click', function(){
        set_total_filter_count();
        $('.filter-wrapper').removeClass('active');
        $('.modal-background').removeClass('active');
        $('.filters').css('height', 'auto');
    });
    
 
    
    // CLEAR ALL FILTERS / QUESTIONS
    var clear_filters = function(){
        $('.active-filters li.selected').removeClass('selected');
        $('.checkbox-item.selected').removeClass('selected');

        $('.filter-item-title').removeClass('open');
        $('.filter-item-content').slideUp();
        $('.filter-item .custom-control-input').prop('checked', false).removeClass('selected');
        
        $('.text-field-item').removeClass('selected');
        $('#postcode-input').removeClass('selected').val('');
        
        $('.list-view.search-card-result').each(function(){
            if ($(this).hasClass("brisbane")) {
                $(this).removeClass("postcode-show");
                $(this).addClass("postcode-hide");
            } else {
                $(this).removeClass("postcode-hide");
                $(this).addClass("postcode-show");
            }
        });      
        
        localStorage.clear();
        
        $('.mobile-counter').each(function(){
            $(this).removeClass('active').text(0);
        });
        $('.filter-counter').text(0);
        
        var showing = 642;
        localStorage.setItem('showing', 642);
        $('span.number').text(showing);
        
        vary_search_order();
        
    };
    
    $('.clear-all').on('click', function(){
        clear_filters();
    });
    
    
    // Clear postcode on map reset
    $('#reset').on('click', function(){
        var that = $(this);
        
        localStorage.removeItem("postcode_value");
        $('#postcode-input').val("");
        $('.text-field-item').removeClass('selected');
        $('#postcode-input').removeClass('selected'); 
        
        //add_show_classes_on_load('.list-view.search-card-result');
        change_showing(that, '.text-field-item', 1);
    });

        
    // SET ACTIVE FILTERS ON PAGE LOAD - MULTIPLE SELECT
    $('#postcode .active-filters li').text(localStorage.getItem('postcode_value'));
    
    var filter_set_multiple = ['in-person', 'phone', 'online', 'home-and-workplace', 'digital-and-online', 'dispute-resolution', 'employing-people', 'general-business-advice-and-planning', 'government-grant-information', 'importing-and-exporting', 'taxation', 'work-health-and-safety', 'postcode-value'];
    
    var filter_types = ['delivery-type', 'topic'];
    
    var add_show_classes_on_load = function(item){
        var location = localStorage.getItem('postcode_value');
        
        $(item).each(function(){
            if (location === "4000") {
                if ( $(this).hasClass("brisbane")) {
                    $(this).addClass("postcode-show");
                    $(this).removeClass("postcode-hide");
                } else {
                    $(this).addClass("postcode-hide");
                    $(this).removeClass("postcode-show");
                }
            } else {
                if ( $(this).hasClass("brisbane")) {
                    $(this).removeClass("postcode-show");
                    $(this).addClass("postcode-hide");
                } else {
                    $(this).removeClass("postcode-hide");
                    $(this).addClass("postcode-show");
                }
            }  
        });   
    };
    
    for ( var filter = 0; filter < filter_set_multiple.length; filter++) {
        
        var filter_option = filter_set_multiple[filter];    
        
            if (localStorage.getItem(filter_option) === "true") {  
            
                // Select checklist filters on the page  
                var filter_type = $('.active-filters li[data-option="' + filter_option + '"]').attr('filter-type');
                var filter_label = $('.active-filters li[data-option="' + filter_option + '"]').attr('data-label');
                
                
                if (!filter_type) {
                    filter_type =  $('label[data-option="' + filter_option + '"]').attr('filter-type');
                }
                if (!filter_label) {
                    filter_label =  $('label[data-option="' + filter_option + '"]').attr('data-label');
                }
                
                var show_class = filter_type + "-show";
                var hide_class = filter_type + "-hide";
            
                $('.active-filters li[data-option="' + filter_option + '"]').toggleClass('selected');    
                $('label[data-option="' + filter_option + '"]').parent('.checkbox-item').toggleClass('selected');
            }  
    }
    var location = localStorage.getItem('postcode_value');
    $('#postcode-input').val(location);
    
    if (location) {
        $('.text-field-item').addClass('selected');
        $('#postcode-input').addClass('selected'); 
    }
    
    add_show_classes_on_load('.list-view.search-card-result');

    set_total_filter_count();

    

    // LIST VS MAPS VIEW
    $("#view-tabs-buttons button").on('click', function(){
        $("#view-tabs-buttons button").removeClass("active");
        $(this).addClass("active");
        
        var active_view = $(this).attr('data-label');
        $('.view-tab').removeClass('active');
        $('#' + active_view).addClass('active');
        
        var view_type = $(this).attr('data-label');
        localStorage.setItem('view type', view_type);
    });

    
    // AUSTRALIA WIDE SERVICES
    $('.australia-wide-button').on('click', function(){
        $('#australia-wide').toggleClass('open');
        $('.australia-wide-content').slideToggle();
    });

    
    // SET VIEW TYPE On PAGE LOAD
    var view_type = localStorage.getItem('view type');
    if (!view_type) {
        view_type = "list-view";
    }
    $('.view-tab').each(function(){
        $(this).removeClass('active');
        
        if ($(this).attr('id') === view_type) {
            $(this).addClass('active');  
        }
    });
    $("#view-tabs-buttons button").each(function(){
        $(this).removeClass('active');
        
        if ($(this).attr('data-label') === view_type) {
            $(this).addClass('active');  
        }
    });
    
    
    
    
}); // END doc ready

