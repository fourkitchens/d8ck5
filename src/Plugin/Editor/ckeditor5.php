<?php

namespace Drupal\d8ck5\Plugin\Editor;

use Drupal\Core\Form\FormStateInterface;
use Drupal\editor\Entity\Editor;
use Drupal\editor\Plugin\EditorBase;

/**
 * Defines a CKEditor v5 text editor for Drupal (for testing purposes).
 *
 * @Editor(
 *   id = "ckeditor5",
 *   label = @Translation("CKEditor v5 Editor"),
 *   supports_content_filtering = TRUE,
 *   supports_inline_editing = TRUE,
 *   is_xss_safe = FALSE,
 *   supported_element_types = {
 *     "textarea",
 *     "textfield",
 *   }
 * )
 */
class CKEditor5 extends EditorBase {
  /**
   * {@inheritdoc}
   */
  public function getJSSettings(Editor $editor) {
    return [];
  }

  /**
   * {@inheritdoc}
   */
  public function getLibraries(Editor $editor) {
    return [
      'd8ck5/d8ck5.cdn',
      'd8ck5/d8ck5.ckeditor',
    ];
  }

}
