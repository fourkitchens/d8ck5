/**
 * @file
 * Provides JS utilities.
 */

import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';
// Basic Styles
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline';
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough';
import Code from '@ckeditor/ckeditor5-basic-styles/src/code';
// Block toolbar
import BlockToolbar from '@ckeditor/ckeditor5-ui/src/toolbar/block/blocktoolbar';
// Fonts
import Font from '@ckeditor/ckeditor5-font/src/font';
// Headings
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
// Highlight
import Highlight from '@ckeditor/ckeditor5-highlight/src/highlight';
// Link
import Link from '@ckeditor/ckeditor5-link/src/link';

(function ($, Drupal) {

  'use strict';

  Drupal.behaviors.ckeditor5Create = {
    attach: function (context) {
      if (jQuery('[data-editor-active-text-format=basic_html]:not([ckeditor-applied=1])').length > 0) {
        // Prevent duplicated execution.
        jQuery('[data-editor-active-text-format=basic_html]').attr('ckeditor-applied', 1);
        // Create editor.
        ClassicEditor.create(
          document.querySelector('[data-editor-active-text-format=basic_html]'), 
          {
            plugins: [ Essentials, Paragraph, Bold, Italic, Underline, Strikethrough, Code, Alignment, BlockToolbar, Font, Heading, Highlight, Link ],
            blockToolbar: [
              'bold', 'italic',
              '|',
              'underline', 'strikethrough', 'code'
            ],            
            cloudServices: {
              // From account in ckeditor.com
              tokenUrl: 'https://35834.cke-cs.com/token/dev/rCIlirmnPfSErxaZFY8H53BZldrqsWi49ReQZuPa2GumwzFzn0zgePGhD7n3',
              uploadUrl: 'https://35834.cke-cs.com/easyimage/upload/',
              webSocketUrl: '35834.cke-cs.com/ws',
              documentId: 'node-4'
            },
            fontSize: {
              options: [9, 11, 13, 'default', 17, 19, 21]
            },
            fontFamily: {
              options: [
                'default',
                'Ubuntu, Arial, sans-serif',
                'Ubuntu Mono, Courier New, Courier, monospace'
              ]
            },
            highlight: {
              options: [
                {
                  model: 'greenMarker',
                  class: 'marker-green',
                  title: 'Green marker',
                  color: 'rgb(25, 156, 25)',
                  type: 'marker'
                },
                {
                  model: 'yellowMarker',
                  class: 'marker-yellow',
                  title: 'Yellow marker',
                  color: '#cac407',
                  type: 'marker'
                },
                {
                  model: 'redPen',
                  class: 'pen-red',
                  title: 'Red pen',
                  color: 'hsl(343, 82%, 58%)',
                  type: 'pen'
                }
              ]
            },
            toolbar: [ 'heading', 'fontSize', 'fontFamily', '|', 'bold', 'italic', 'underline', 'strikethrough', 'code', 'link', '|', 'undo', 'redo', '|', 'alignment:right', 'alignment:left', '|', 'highlight' ]
          } 
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
    }
  };
})(jQuery, Drupal);
