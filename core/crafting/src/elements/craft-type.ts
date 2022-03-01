import { html, css, LitElement } from 'lit';
import { property, query } from 'lit/decorators.js';
import { ScopedElementsMixin } from '@open-wc/scoped-elements';
import {
  Button,
  Card,
  IconButton,
  ListItem,
  Select,
  TextArea,
  TextField,
} from '@scoped-elements/material-web';
import {
  defaultSample,
  TypeDefinition,
  Vocabulary,
} from '@type-craft/vocabulary';

import { CraftFields } from './craft-fields';

export class CraftType extends ScopedElementsMixin(LitElement) {
  @property({ type: Object }) vocabulary!: Vocabulary;

  @query('craft-fields')
  craftFields!: CraftFields;

  @query('#type-name')
  typeNameField!: TextField;

  @query('#type-description')
  typeDescriptionField!: TextArea;

  get value(): TypeDefinition<any, any> {
    const name = this.typeNameField.value;
    const description = this.typeDescriptionField.value;
    const fields = this.craftFields.value;

    return {
      name,
      description,
      fields,
      sample: () => defaultSample(this.vocabulary, fields),
    };
  }

  render() {
    return html`
      <div class="column">
        <mwc-textfield
          id="type-name"
          outlined
          label="Type Name"
          style="margin-top: 16px; width: 30em;"
        ></mwc-textfield>
        <mwc-textarea
          outlined
          id="type-description"
          label="Type Description"
          style="margin-top: 16px"
        ></mwc-textarea>

        <span style="font-size: 18px; margin-top: 16px;">Fields</span>

        <craft-fields
          .vocabulary=${this.vocabulary}
        ></craft-fields>
      </div>
    `;
  }

  static get scopedElements() {
    return {
      'craft-fields': CraftFields,
      'mwc-textfield': TextField,
      'mwc-textarea': TextArea,
      'mwc-button': Button,
      'mwc-select': Select,
      'mwc-list-item': ListItem,
      'mwc-card': Card,
      'mwc-icon-button': IconButton
    };
  }

  static styles = css`
    .column {
      display: flex;
      flex-direction: column;
    }
    .row {
      display: flex;
      flex-direction: row;
    }
  `;
}
