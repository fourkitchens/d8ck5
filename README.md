# drupal-ckeditor5
Drupal module that exposes a basic version of CKEditor v5

Installation:
- Move to the module folder
- `npm install --save`
- `./node_modules/.bin/webpack --mode development` (also necessary everytime `js/ckeditor.js` is modified)
- Enable the module normally
- To make it work with AJAX-rendered textareas, the following drupal/core patch is necessary: 
  - "Drupal.ajax does not guarantee that 'add new JS file to page' commands have finished before calling said JS": "https://www.drupal.org/files/issues/2018-09-07/1988968-130.patch"
