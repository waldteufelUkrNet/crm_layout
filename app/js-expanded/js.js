$(document).ready(function(){

  /* ↓↓↓ navigation datetimer ↓↓↓ */
  var datetimer = document.getElementById('nav-datetimer');

  setInterval(function() {
    var date = new Date();
    var dd = date.getDate();
    if (dd < 10) dd = '0' + dd;

    var mm = date.getMonth() + 1;
    if (mm < 10) mm = '0' + mm;

    var yy = date.getFullYear();
    if (yy < 10) yy = '0' + yy;

    var hh = date.getHours();
    if (hh < 10) hh = '0' + hh;

    var mn = date.getMinutes();
    if (mn < 10) mn = '0' + mn;

    var ss = date.getSeconds();
    if (ss < 10) ss = '0' + ss;

    datetimer.innerHTML = dd + "." + mm + "." + yy + "   " + hh + ":" + mn + ":" + ss;
  }, 1000);

  /* ↑↑↑ /navigation datetimer ↑↑↑ */

  /* ↓↓↓ accordion ↓↓↓ */
  $('.toggle').click(function(e) {
    e.preventDefault();

    var $this = $(this);

    //close
    if ($this.next().hasClass('show')) {
      $this.next().removeClass('show');
      $this.next().slideUp(350);

        $this.children('span').children('svg').removeClass('fa-minus').addClass('fa-plus');

    //open
    } else {
      $this.parent().parent().find('li .inner').removeClass('show');
      $this.parent().parent().find('li .inner').slideUp(350);
      $this.next().toggleClass('show');
      $this.next().slideToggle(350);

        $('.toggle').children('span').children('svg').removeClass('fa-minus').addClass('fa-plus');
        $this.children('span').children('svg').removeClass('fa-plus').addClass('fa-minus');

        if ($this.parent().parent().siblings('.toggle').length != 0) {
          $this.parent().parent().siblings('.toggle').children('span').children('svg').removeClass('fa-plus').addClass('fa-minus');
        }
    }
  });

  $('.accordion a').click(function(e) {

    if ( $(this).parent().siblings('li').children('a').hasClass('toggle') ) {
      $(this).parent().siblings('li').children('.toggle').siblings('.inner').removeClass('show');
      $(this).parent().siblings('li').children('.toggle').siblings('.inner').slideUp(350);
      $(this).parent().siblings('li').children('.toggle').children('span').children('svg').removeClass('fa-minus').addClass('fa-plus');
    }

    $('.accordion a').css({'background-color':'#353535'});
    $(this).css({'background-color':'black'});



    // $('.accordion a').mouseenter(function(){
    //   if ( $(this).css('background-color') == 'rgb(0, 0, 0)' ) { console.log(1);
    //   } else {
    //     $(this).mouseleave(function(){
    //       //$(this).css({'background-color':'#353535'})
    //     });
    //   }
    // });

  });

    // $('.accordion a').mouseleave(function(){
    //   if (  $(this) == THIS ) {
    //     $(this).css({'background-color':'black'});
    //   };
    //   $(this).css({'background-color':'#353535'});
    // });
  /* ↑↑↑ /accordion ↑↑↑ */

});