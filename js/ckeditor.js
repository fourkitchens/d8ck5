/**
 * @file
 * Provides JS utilities.
 */

import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import EasyImageUpload from '@ckeditor/ckeditor5-easy-image/src/easyimage';

import CollaborativeEditing from '@ckeditor/ckeditor5-collaboration/src/collaborativeediting';


(function ($, Drupal) {

  'use strict';

  Drupal.behaviors.ckeditor5Create = {
    attach: function (context) {

      ClassicEditor.create(
       document.querySelector('[data-editor-active-text-format=basic_html]'), {
        plugins: [ Essentials, Paragraph, Bold, Italic, CollaborativeEditing, EasyImageUpload ],
        cloudServices: {
            // From account in ckeditor.com
            tokenUrl: 'https://35834.cke-cs.com/token/dev/rCIlirmnPfSErxaZFY8H53BZldrqsWi49ReQZuPa2GumwzFzn0zgePGhD7n3',
            uploadUrl: 'https://35834.cke-cs.com/easyimage/upload/',
            webSocketUrl: '35834.cke-cs.com/ws',
            documentId: 'collabEditing4'
        },
        toolbar: [ 'bold', 'italic', 'imageUpload' ]
    } ).then( 
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
