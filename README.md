# drupal-ckeditor5
Drupal module that exposes a basic version of CKEditor v5

## Installation
- Move to the module folder
- `npm install --save`
- `./node_modules/.bin/webpack --mode development` (also necessary everytime `js/ckeditor.js` is modified)
- Enable the module normally
- To make it work with AJAX-rendered textareas, the following drupal/core patch is necessary: 
  - "Drupal.ajax does not guarantee that 'add new JS file to page' commands have finished before calling said JS": "https://www.drupal.org/files/issues/2018-09-07/1988968-130.patch"

## Usage
Use  a like a normal text editor, choose a text format and apply the _CKEditor 5 Editor_ option.

### Known issue:
- In some instances, when the editor is chosen for a text format, it throws a fatal error (_The script tried to execute a method or access a property of an incomplete object. Please ensure that the class definition of the object you are trying to operate on was loaded before unserialize() gets called or provide an autoloader to load the class definition_)
