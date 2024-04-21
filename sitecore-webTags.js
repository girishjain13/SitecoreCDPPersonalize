
 var _boxeverq = _boxeverq || [];

    // Define the Boxever settings
    var _boxever_settings = {
      client_key: 'sndbxus06p9cxhoqoiowkr1sbq5casz3', // Replace with your client key
      target: 'https://api-us.boxever.com/v1.2', // Replace with your API target endpoint specific to your data center region
      cookie_domain: '.sitecore-cdp-personalize.vercel.app', // Replace with the top level cookie domain of the website that is being integrated e.g ".example.com" and not "www.example.com"
      
    };
    // Import the Boxever library asynchronously
    (function () {
      var s = document.createElement('script');
      s.type = 'text/javascript';
      s.async = true;
      s.src = 'https://d1mj578wat5n4o.cloudfront.net/boxever-1.4.9.min.js';
      var x = document.getElementsByTagName('script')[0];
      x.parentNode.insertBefore(s, x);
    })();