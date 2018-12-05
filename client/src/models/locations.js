const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

const Locations = function (url) {
  this.url = url;
  this.request = new RequestHelper(this.url);
};

Locations.prototype.bindEvents = function () {
  PubSub.subscribe('BucketListFormView:location-submitted', (evt) => {
    this.postLocation(evt.detail);
  });
  PubSub.subscribe('BucketListView:location-delete-clicked', (evt) => {
    this.deleteLocation(evt.detail);
  })
};

Locations.prototype.getData = function () {
  this.request.get()
  .then( (locations) => {
    PubSub.publish('Locations:data-loaded', locations);
  })
  .catch(console.error);
};

Locations.prototype.deleteLocation = function (locationId) {
  this.request.delete(locationId)
  .then((locations) => {
    PubSub.publish('Locations:data-loaded', locations)
  })
  .catch(console.error);
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
