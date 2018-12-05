const PubSub = require('../helpers/pub_sub.js');

const BucketListView = function (container) {
  this.container = container;
};

BucketListView.prototype.render = function (location) {
  const locationContainer = document.createElement('div');
  locationContainer.id = 'location';

  const name = this.createHeading(location.name);
  locationContainer.appendChild(name);

  const activity = this.createDetail('Activity', location.activity);
  locationContainer.appendChild(activity);

  const date = this.createDetail('Date', location.date);
  locationContainer.appendChild(date);

  const deleteButton = this.createDeleteButton(location._id);
  locationContainer.appendChild(deleteButton);

  this.container.appendChild(locationContainer);
};

BucketListView.prototype.createHeading = function (textContent) {
  const heading = document.createElement('h3');
  heading.textContent = textContent;
  return heading;
};

BucketListView.prototype.createDetail = function (label, text) {
  const detail = document.createElement('p');
  detail.textContent = `${label}: ${text}`;
  return detail;
};

BucketListView.prototype.createDeleteButton = function (locationId) {
  const button = document.createElement('button');
  button.classList.add('delete-btn');
  button.value = locationId;

  button.addEventListener('click', (evt) => {
    PubSub.publish('BucketListView:location-delete-clicked', evt.target.value);
  });
  return button;
};

module.exports = BucketListView;
