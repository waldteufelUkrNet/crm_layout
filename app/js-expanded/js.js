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

    if ($this.next().hasClass('show')) {
      $this.next().removeClass('show');
      $this.next().slideUp(350);
        //$('.toggle').children('span').children('i').css({'color':'red'});
        alert(1);
    } else {
      $this.parent().parent().find('li .inner').removeClass('show');
      $this.parent().parent().find('li .inner').slideUp(350);
      $this.next().toggleClass('show');
      $this.next().slideToggle(350);
    }
  });
  /* ↑↑↑ /accordion ↑↑↑ */

});

