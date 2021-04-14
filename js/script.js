$(document).ready(function(){
	 
   // mobile
   var phone1 = {
        name: 'phone1',
        loop: true,
        frames: [
          { duration: 2000 },
          { properties: { left: 768 }, duration: 800, easing: 'swing' },
          { properties: { top: 200 }, duration: 3000, easing: 'swing' },
          { properties: { perspective: '100px', rotateX: '180deg'}, type: 'transit', duration: 2000 },
          { duration: 2000 },
          { properties: { top: 10 }, duration: 3000, easing: 'swing' },
          { properties: { perspective: '100px', rotateX: '0deg'}, type: 'transit', duration: 2000 }
        ]
      };
      var phone2 = {
        name: 'phone2',
        loop: true,
        frames: [
          { duration: 2000 },
          { properties: { left: 410 }, duration: 800, easing: 'swing' },
          { properties: { rotate: '+=30' }, type: 'transit', duration: 70, easing: 'swing' },
          { properties: { rotate: '+=30' }, type: 'transit', duration: 70, easing: 'swing' },
          { properties: { rotate: '+=30' }, type: 'transit', duration: 70, easing: 'swing' },
          { properties: { rotate: '+=30' }, type: 'transit', duration: 70, easing: 'swing' },
          { properties: { rotate: '+=30' }, type: 'transit', duration: 70, easing: 'swing' },
          { properties: { rotate: '+=30' }, type: 'transit', duration: 70, easing: 'swing' },
          { properties: { top: 600 }, duration: 2000, easing: 'swing' },
          { duration: 1000 },
          { properties: { top: 10 }, duration: 2000, easing: 'swing' }
        ]
      };
      var phone3 = {
        name: 'phone3',
        loop: true,
        loopStart: 2,
        frames: [
          { duration: 2000 },
          { properties: { left: 1111 }, duration: 800, easing: 'swing' },
          { properties: { top: 600 }, duration: 1000, easing: 'swing' },
          { properties: { top: 10 }, duration: 1000, easing: 'swing' }
        ]
      };
      var phone4 = {
        name: 'phone4',
        loop: true,
        frames: [
          { duration: 5000 },
          { properties: { left: 60, top: 25 }, duration: 1500, easing: 'swing' },
          { properties: { opacity: 1 }, duration: 700, easing: 'swing' },
          { properties: { opacity: 0 }, duration: 700, easing: 'swing' },
          { properties: { opacity: 1 }, duration: 700, easing: 'swing' },
          { properties: { opacity: 0 }, duration: 700, easing: 'swing' },
          { properties: { opacity: 1 }, duration: 700, easing: 'swing' },
          { properties: { left: -400, top: 300 }, duration: 1500, easing: 'swing' },
        ]
      };
      $(function(){

        var stopped = false;
        var clockz = new Clockz();

        $('#stop').click(function(e) {
          stopped = !stopped;
          if (stopped) {
            $(this).html('Play');
            clockz.stopAll();
          }
          else {
            $(this).html('Stop');
            clockz.playAll();
          }
        });

        clockz.playHook = function(node, frame, callback) {

          var duration = frame.duration || 400;
          var properties = frame.properties || null;
          if (properties) {
            var jnode = $(node);
            if (!jnode) {
              this.error( 'playHook(): node is invalid.' );
              return;
            }
            var type = frame.type || 'jquery';
            var easing = frame.easing || 'swing';
            switch (type) {
                    case 'jquery':
                        $(node).animate(properties, duration, easing, callback);
                        break;
                    case 'transit':
                        
                        break;
                }
          }
          else {
            setTimeout(callback, duration);
          }
          };

        clockz.create('.phone1', phone1);
        clockz.create('.phone2', phone2);
        clockz.create('.phone3', phone3);
        clockz.create('.phone4', phone4);
        clockz.playAll();

      });
    
   
  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-36251023-1']);
  _gaq.push(['_setDomainName', 'jqueryscript.net']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();

  // multi slider\
  let slider = $('#multi')
            $('#add').click(function(){
               slider.multislider('increase')
            })
            $('#sub').click(function(){
               slider.multislider('decrease')
            })
   // scroll img
   $( '#example1' ).scrollimageinside();
});

// img hover
$('#demo-1').imgHover({radius: '0.5rem', grow: false, zoomScale: 1.2});
  $('#demo-2').imgHover({radius: '0.5rem', grow: false, zoomScale: 1.2});
  $('#demo-3').imgHover({radius: '0.5rem', zoom: false, growScale: 1.07});
  $('#demo-4').imgHover({radius: '0.5rem', grow: false, zoomScale: 1.2});






