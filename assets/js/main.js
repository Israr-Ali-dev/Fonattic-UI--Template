$(document).ready(function () {
  //  Sidebar Menu

  $('.sidebar-toggle').click(function () {
    $('.sidenav').css('width', '250px');
    $('.overlay').addClass('overlyClass');
  });

  $('.sidebar-close').click(function () {
    $('.sidenav').css('width', '0');
    $('.overlay').removeClass('overlyClass');
  });

  // Sidebar submenu
  $('#sub-menu').click(function () {
    $('.side-submenu').css({ width: '250px' });
    $('.sidenav').css({ width: '0' });
  });

  $('.sidemenu-close').click(function () {
    $('.side-submenu').css({ width: '0' });
    $('.sidenav').css({ width: '250px' });
  });

  // Mega menu

  //responsive menu toggle
  $('#menutoggle').click(function () {
    $('.xs-menu').toggleClass('displaynone');
  });

  //add active class on menu
  $('ul li').click(function (e) {
    // e.preventDefault();
    $('li').removeClass('active');
    $(this).addClass('active');
  });

  //drop down menu
  $('.drop-down').hover(function () {
    $('.mega-menu').addClass('display-on');
  });
  $('.drop-down').mouseleave(function () {
    $('.mega-menu').removeClass('display-on');
  });

  // Sticky Header
  $(window).scroll(function () {
    if ($(window).scrollTop() >= 130) {
      $('.desktop-nav--menu').addClass('sticky');
    } else {
      $('.desktop-nav--menu').removeClass('sticky');
    }
  });

  // List & Grid View
  $('#grid').click(function (event) {
    event.preventDefault();
    $('#products-view').addClass('product_grid');
    $('#products-view').removeClass('product_list');
  });
  $('#list').click(function (event) {
    event.preventDefault();
    $('#products-view').addClass('product_list');
    $('#products-view').removeClass('product_grid');
  });

  // Category Collapse
  $('.cat-collapsible').click(function () {
    this.classList.toggle('activePlus');
    $('.content-category').slideToggle();
  });

  // active link on side categories
  $(function () {
    $('.sideCat-filter').each(function () {
      if ($(this).attr('href') == window.location.pathname) {
        $(this).addClass('sideCat-filter--selected');
      }
    });
  });

  // active link on gid and list icons
  $('.view-link .btn').click(function (e) {
    $('.view-link .btn').removeClass('active');

    var $this = $(this);
    if (!$this.hasClass('active')) {
      $this.addClass('active');
    }
    //e.preventDefault();
  });

  //-- Click on detail
  $('ul.menu-items > li').on('click', function () {
    $('ul.menu-items > li').removeClass('active');
    $(this).addClass('active');
  });

  $('.attr,.attr2').on('click', function () {
    var clase = $(this).attr('class');

    $('.' + clase).removeClass('active');
    $(this).addClass('active');
  });

  //-- Click on QUANTITY
  $('.btn-minus').on('click', function () {
    var now = $('.section > div > input').val();
    if ($.isNumeric(now)) {
      if (parseInt(now) - 1 > 0) {
        now--;
      }
      $('.section > div > input').val(now);
    } else {
      $('.section > div > input').val('1');
    }
  });
  $('.btn-plus').on('click', function () {
    var now = $('.section > div > input').val();
    if ($.isNumeric(now)) {
      $('.section > div > input').val(parseInt(now) + 1);
    } else {
      $('.section > div > input').val('1');
    }
  });

  // Single Product Slider

  // Product Slider
  $('.productslider_wrapper').slick({
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: false,
    dots: true,
    arrows: true,
    accessibility: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  });

  // Best Seller Product Slider
  $('.best-seller--product').slick({
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: false,
    dots: true,
    arrows: true,
    accessibility: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  });

  // Best Seller Product Slider
  $('.related--products').slick({
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    dots: true,
    arrows: true,
    accessibility: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  });

  // Category Slick Slider
  $('.cat-slick').slick({
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: false,
    dots: true,
    arrows: false,
    accessibility: false,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 2000,
        settings: 'unslick',
      },
      {
        breakpoint: 1600,
        settings: 'unslick',
      },
      {
        breakpoint: 1024,
        settings: 'unslick',
      },
      {
        breakpoint: 600,
        settings: 'unslick',
      },
      {
        breakpoint: 468,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
    ],
  });

  //  Blog Slick left
  $('.blog-slick').slick({
    centerMode: true,
    slidesToShow: 3,
    swipe: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          slidesToShow: 1,
        },
      },
    ],
  });

  // Slider Caresoul
  $('.slick-carousel').slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1, // Shows a three slides at a time
    slidesToScroll: 1, // When you click an arrow, it scrolls 1 slide at a time
    arrows: true, // Adds arrows to sides of slider
    dots: true, // Adds the dots on the bottom
    accessibility: false,
  });

  // Latest Product
  $('.slick-wrap').on('init', function (event, slick) {
    var dots = $('.slick-wrap .slick-dots li');
    dots.each(function (k, v) {
      console.log($(this));
      $(this)
        .find('button')
        .addClass('heading' + k);
    });
    var items = $('.h-l-item');
    //console.log(items);
    items.each(function (k, v) {
      $(this).find('h2').text();
      var text = $('.h-l-item').eq(k).text();
      console.log(text);
      $('.heading' + k).text(text);
    });
  });
  $('.slick-wrap').slick({
    dots: true,
    focusOnSelect: true,
    infinite: true,
    arrows: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '30px',
  });

  // Cart Page
  $('.tax-edit').click(function () {
    $(this).toggleClass('te-open').parent;
    $('.tax-calculate').slideToggle(200);
  });

  $('.if-left').click(function () {
    $(this).prev('.if-message').slideToggle(200);
  });

  $('.bp-toggle').click(function () {
    $('.bonus-products').slideToggle(200);
  });

  // Checkout Page validations

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.getElementsByClassName('needs-validation');

  // Loop over them and prevent submission
  Array.prototype.filter.call(forms, function (form) {
    form.addEventListener(
      'submit',
      function (event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      },
      false
    );
  });

  // Popup Order Detail
  $('.order-detail-link ').click(function (e) {
    setTimeout(function () {
      $('.popup').removeClass('animationClose').addClass('animationOpen');
    }, 100);
    $('.obscure').fadeIn(50);
    e.preventDefault();
  });

  $('.closeOrderDetail').click(function (e) {
    e.preventDefault();
    setTimeout(function () {
      $('.obscure').fadeOut(350);
    }, 50);
    $('.popup').removeClass('animationOpen').addClass('animationClose');
  });

  // Side Cart
  // Declare the body variable
  var $body = $('body');

  // Function that shows and hides the sidebar cart
  $('.cart-button, .close-button, #sidebar-cart-curtain, #side-cart').click(
    function (e) {
      e.preventDefault();

      // Add the show-sidebar-cart class to the body tag
      $body.toggleClass('show-sidebar-cart');

      // Check if the sidebar curtain is visible
      if ($('#sidebar-cart-curtain').is(':visible')) {
        // Hide the curtain
        $('#sidebar-cart-curtain').fadeOut(500);
      } else {
        // Show the curtain
        $('#sidebar-cart-curtain').fadeIn(500);
      }
    }
  );

  // Function that adds or subtracts quantity when a
  // plus or minus button is clicked
  $body.on('click', '.plus-button, .minus-button', function () {
    // Get quanitity input values
    var qty = $(this).closest('.qty').find('.qty-input');
    var val = parseFloat(qty.val());
    var max = parseFloat(qty.attr('max'));
    var min = parseFloat(qty.attr('min'));
    var step = parseFloat(qty.attr('step'));

    // Check which button is clicked
    if ($(this).is('.plus-button')) {
      // Increase the value
      qty.val(val + step);
    } else {
      // Check if minimum button is clicked and that value is
      // >= to the minimum required
      if (min && min >= val) {
        // Do nothing because value is the minimum required
        qty.val(min);
      } else if (val > 0) {
        // Subtract the value
        qty.val(val - step);
      }
    }
  });
});
