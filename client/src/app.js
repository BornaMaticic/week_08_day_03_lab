const BucketListFormView = require('./views/bucket_list_form_view.js');
const Locations = require('./models/locations.js');
const BucketListGridView = require('./views/bucket_list_grid_view.js');

document.addEventListener('DOMContentLoaded', () => {
  const bucketListsForm = document.querySelector('#locations-form');
  const bucketListsFormView = new BucketListFormView(bucketListsForm);
  bucketListsFormView.bindEvents();

  const locationsContainer = document.querySelector('#locations');
  const locationsGridView = new BucketListGridView(locationsContainer);
  locationsGridView.bindEvents();

const url = 'http://localhost:3000/api/locations';
const locations = new Locations(url);
locations.bindEvents();
locations.getData();
});
