$(function () {

    "use strict";

    //===== Prealoder

    $(window).on('load', function (event) {
        $('#preloader').delay(500).fadeOut(500);
    });


    //===== Mobile Menu 

    $(".navbar-toggler").on('click', function () {
        $(this).toggleClass('active');
    });

    $(".navbar-nav a").on('click', function () {
        $(".navbar-toggler").removeClass('active');
    });


    //===== close navbar-collapse when a  clicked

    $(".navbar-nav a").on('click', function () {
        $(".navbar-collapse").removeClass("show");
    });


    //===== Sticky

    $(window).on('scroll', function (event) {
        var scroll = $(window).scrollTop();
        if (scroll < 10) {
            $(".navgition").removeClass("sticky");
        } else {
            $(".navgition").addClass("sticky");
        }
    });


    //===== Section Menu Active

    var scrollLink = $('.page-scroll');
    // Active link switching
    $(window).scroll(function () {
        var scrollbarLocation = $(this).scrollTop();

        scrollLink.each(function () {

            var sectionOffset = $(this.hash).offset().top - 90;

            if (sectionOffset <= scrollbarLocation) {
                $(this).parent().addClass('active');
                $(this).parent().siblings().removeClass('active');
            }
        });
    });


    //====== Magnific Popup

    $('.video-popup').magnificPopup({
        type: 'iframe'
        // other options
    });


    //===== Back to top

    // Show or hide the sticky footer button
    $(window).on('scroll', function (event) {
        if ($(this).scrollTop() > 600) {
            $('.back-to-top').fadeIn(200)
        } else {
            $('.back-to-top').fadeOut(200)
        }
    });


    //Animate the scroll to yop
    $('.back-to-top').on('click', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: 0,
        }, 1500);
    });


    //===== 

    let tiles = document.querySelectorAll('.tiles')
    let tilesBg = document.querySelectorAll('.tiles-wrap')
    let tilesBorder = document.querySelectorAll('.tiles-border')

    let setDimensions = () => {
        let tileWidth = document.querySelector('.tiles-border').clientWidth
        let tileHeight = document.querySelector('.tiles-border').clientHeight
        let dimensions

        for (let y = 0; y < tilesBorder.length; y++) {
            dimensions = (tilesBorder[y].offsetLeft / 2.8)
        }

        for (let i = 0; i < tilesBg.length; i++) {
            tilesBg[i].style.height = tileHeight + 'px'
            tilesBg[i].style.width = (tileWidth * 2) + 'px'
            tilesBg[i].style.left = '-' + dimensions + 'px'
        }

        for (let x = 0; x < tiles.length; x++) {
            if (x % 2 !== 0) {
                tiles[x].style.top = (tileHeight / 2) + 'px'
            }
        }
    }

    setDimensions()
    window.addEventListener('resize', () => { setDimensions() })

    document.querySelectorAll(".m7w29c").forEach(el => {
        el.style.display = "none";
    });

    // Add window resize handler
    $(window).on('resize', function() {
        if ($(window).width() <= 768) {
            $('#cobe').hide();
        } else {
            $('#cobe').show();
        }
        
        // Update map size
        if (typeof map !== 'undefined') {
            map.updateSize();
        }
    });









});