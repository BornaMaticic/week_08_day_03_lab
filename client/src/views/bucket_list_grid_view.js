const PubSub = require('../helpers/pub_sub.js');
const BucketListView = require('./bucket_list_view');


const BucketListGridView = function (container) {
  this.container = container;
};

BucketListGridView.prototype.bindEvents = function () {
  PubSub.subscribe('Locations:data-loaded', (evt) => {
    this.render(evt.detail);
  })
};

BucketListGridView.prototype.render = function (locations) {
  this.container.innerHTML = '';
  const bucketListView = new BucketListView(this.container);
  locations.forEach((location) => bucketListView.render(location));
};

module.exports = BucketListGridView;
