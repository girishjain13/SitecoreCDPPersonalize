var _boxeverq = _boxeverq || [];

// Define the Boxever settings
var _boxever_settings = {
  client_key: "sndbxus06p9cxhoqoiowkr1sbq5casz3", // Replace with your client key
  target: "https://api-us.boxever.com/v1.2", // Replace with your API target endpoint specific to your data center region
  cookie_domain: ".sitecore-cdp-personalize.vercel.app", // Replace with the top level cookie domain of the website that is being integrated e.g ".example.com" and not "www.example.com"
  web_flow_target: "https://d35vb5cccm4xzp.cloudfront.net",
  pointOfSale: "SpinBurger",
  cookieExpiryDays: 365,
  forceServerCookieMode: false,
  includeUTMParameters: true,
  webPersonalization: true,
};
// Import the Boxever library asynchronously
(function () {
  var s = document.createElement("script");
  s.type = "text/javascript";
  s.async = true;
  s.src = "https://d1mj578wat5n4o.cloudfront.net/boxever-1.4.9.min.js";
  var x = document.getElementsByTagName("script")[0];
  x.parentNode.insertBefore(s, x);
})();

_boxeverq.push(function () {
  // Create a "VIEW" event object
  var viewEvent = {
    browser_id: Boxever.getID(),
    channel: "WEB",
    type: "VIEW",
    language: "EN",
    currency: "USD",
    page: "homepage",
    pos: "SpinBurger",
  };

  // Send the event data to the server
  Boxever.eventCreate(viewEvent, function (data) {}, "json");
});

function login(email) {
  _boxeverq.push(function () {
    // Create a "VIEW" event object
    var identityEvent = {
      browser_id: Boxever.getID(),
      channel: "WEB",
      type: "IDENTITY",
      language: "EN",
      currency: "USD",
      page: "homepage",
      pos: "SpinBurger",
      email: email,
      identifiers: [
        {
          id: email,
          provider: "email",
        },
      ],
    };

    // Send the event data to the server
    Boxever.eventCreate(identityEvent, function (data) {}, "json");
  });
}

function sendAddEvent(
  productType,
  itemID,
  productName,
  productPrice,
  productid,
  productCurrency
) {
  _boxeverq.push(function () {
    var addEvent = {
      browser_id: Boxever.getID(),
      channel: "WEB",
      type: "ADD",
      language: "EN",
      currency: "USD",
      page: "homepage",
      pos: "SpinBurger",
      product: {
        type: productType,
        item_id: itemID,
        name: productName,
        orderedAt: new Date().toISOString(),
        quantity: 1,
        price: productPrice,
        product_id: productid,
        currencyCode: productCurrency,
      },
    };
    Boxever.eventCreate(addEvent, function (data) {}, "json");
  });
}

function sendConfirmEvent(confirmedProducts) {
  _boxeverq.push(function () {
    var confirmEvent = {
      browser_id: Boxever.getID(),
      channel: "WEB",
      type: "CONFIRM",
      language: "EN",
      currency: "USD",
      page: "checkout",
      pos: "SpinBurger",
      product: [
        {
          item_id: "ITEM_1",
        },
      ],
    };
    Boxever.eventCreate(confirmEvent, function (data) {}, "json");
  });
}
function sentCheckoutEvent() {
  _boxeverq.push(function () {
    var checkoutEvent = {
      browser_id: Boxever.getID(),
      channel: "WEB",
      type: "CHECKOUT",
      language: "EN",
      currency: "USD",
      page: "checkout",
      pos: "SpinBurger",
      refernce_id: "ORDER_111",
      status: "PURCHASED",
    };
    Boxever.eventCreate(checkoutEvent, function (data) {}, "json");
  });
}

function callExperience() {
  _boxeverq.push(function () {
    var flowObject = {
      clientKey: "sndbxus06p9cxhoqoiowkr1sbq5casz3",
      friendlyId: "comptenece_test_5",
      channel: "WEB",
      language: "EN",
      currencyCode: "EUR",
      pointOfSale: "SpinBurger",
      // guest identifier:
      email: "girishjain13@gmail.com",
      //browserId: Boxever.getID()
    };
    //Boxever.callFlows(flowObject, (response) => alert(response));
    Boxever.callFlows(flowObject, function (data) {}, "json");
  });
}
