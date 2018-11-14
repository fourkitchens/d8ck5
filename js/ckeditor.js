/**
 * @file
 * Provides JS utilities.
 */

(function ($, Drupal) {

  'use strict';

  Drupal.behaviors.ckeditor5Create = {
    attach: function (context) {

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

    }
  };
})(jQuery, Drupal);
