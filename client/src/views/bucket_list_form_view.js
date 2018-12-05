const PubSub = require('../helpers/pub_sub.js');

const BucketListFormView = function (form) {
  this.form = form;
};

BucketListFormView.prototype.bindEvents = function () {
  this.form.addEventListener('submit', (evt) => {
    this.handleSubmit(evt);
  });
};

BucketListFormView.prototype.handleSubmit = function (evt) {
  evt.preventDefault();
  const newLocation = this.createLocation(evt.target);
  PubSub.publish('BucketListFormView:location-submitted', newLocation);
  evt.target.reset();
};

BucketListFormView.prototype.createLocation = function (form) {
  const newLocation = {
    name: form.name.value,
    activity: form.activity.value,
    date: form.date.value
  }
  return newLocation;
};

module.exports = BucketListFormView;
