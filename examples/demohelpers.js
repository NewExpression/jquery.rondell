/* General demo helpers */
$(function() {
  hostname = document.location.hostname;
  if (hostname && (hostname.indexOf('github') >= 0 || hostname.indexOf('sebastianhelzle') >= 0)) {
    try {
      piwikTracker = Piwik.getTracker('https://tracking.sebastianhelzle.net/piwik.php', 5);
      piwikTracker.trackPageView();
      piwikTracker.enableLinkTracking();
    } catch (err) {}

    var urls = ['http://api.flattr.com/js/0.6/load.js?mode=auto', '//s7.addthis.com/js/300/addthis_widget.js#pubid=sebobo'];
    for (key in urls) {
      var s = document.createElement('script');
      s.type = 'text/javascript';
      s.async = true;
      s.src = urls[key];

      var t = document.getElementsByTagName('script')[0];
      t.parentNode.insertBefore(s, t);
    }
  }
});
