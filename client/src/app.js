const BucketListFormView = require('./views/bucket_list_form_view.js');
const BucketList = require('./models/bucket_list.js');

document.addEventListener('DOMContentLoaded', () => {
  const bucketListsForm = document.querySelector('#locations-form');
  const bucketListsFormView = new BucketListFormView(bucketListForm);
  bucketListFormView.bindEvents();


const url = 'http://localhost:3000/api/locations';
const locations = 
});
