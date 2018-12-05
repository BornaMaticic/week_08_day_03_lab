const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

const Locations  function (url) {
  this.url = url;
  this.request = new RequestHelper(this.url);
};

Locations.prototype.bindEvents = function () {
  PubSub.subscribe('BucketListFormView:location-submitted' (evt) => {
    this.postLocation(evt.detail);
  })
};

Locations.prototype.postLocation = function (location) {
  const request = new RequestHelper(this.url);
  console.log(location);
  request.post(location)
    .then((locations) => {
      PubSub.publish('Locations:data-loaded', locations)
    })
    .catch(console.error);
};

module.exports = Locations;
