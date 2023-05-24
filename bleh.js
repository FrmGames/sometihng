javascript:(function() {
  var currentUrl = window.location.href;
  if (currentUrl.indexOf('google.com') !== -1) {
    window.location.href ='https://www.bing.com';
  }
 })();
