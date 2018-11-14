/**
 * @file
 * Provides JS utilities.
 */

(function ($, Drupal) {

  'use strict';

  Drupal.behaviors.ckeditor5Create = {
    attach: function (context) {
      console.log('Creating CKEditor v5...');

      ClassicEditor.create(
       document.querySelector('[data-editor-active-text-format=basic_html]') 
      ).then( 
          editor => {
            console.log( editor );
          } 
        ).catch( 
            error => {
              console.error( error );
            } 
          );

      console.log('Finished attaching CKEditor v5.');
    }
  };
})(jQuery, Drupal);
