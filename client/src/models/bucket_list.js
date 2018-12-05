const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

const Locations  function (url) {
  this.url = url;
  this.request = new RequestHelper(this.url);
};

Locations.prototype.bindEvents = function () {
  
}
