import { html, css, LitElement } from 'lit';
import { property, state } from 'lit/decorators.js';
import { ScopedElementsMixin } from '@open-wc/scoped-elements';
import {
  Button,
  Card,
  IconButton,
  ListItem,
  Dialog,
  Select,
  TextField,
} from '@scoped-elements/material-web';
import {
  ConfigurationSchema,
  FieldDefinition,
  TypeDefinition,
  Vocabulary,
} from '@type-craft/vocabulary';

import { JsonSchemaForm } from './json-schema-form';
import { UniqueFieldsController } from './unique-fields-controller';

export class CraftFields extends ScopedElementsMixin(LitElement) {
  @property({ type: Object }) vocabulary!: Vocabulary;

  _fieldsCount = 0;

  @property()
  fields: Array<FieldDefinition<any>> = [];

  @state()
  _selectedConfigFieldIndex: number | undefined;

  firstUpdated() {
    if (this.fields.length === 0 && Object.keys(this.vocabulary).length > 0)
      this.fields = [
        {
          configuration: {},
          name: `new_field_${this._fieldsCount++}`,
          type: Object.keys(this.vocabulary)[0],
        },
      ];
  }

  uniqueFieldsController = new UniqueFieldsController(
    this,
    () => this.uniqueFields
  );

  get uniqueFields(): HTMLInputElement[] {
    return Array.from(
      this.shadowRoot!.querySelectorAll('.unique-field')
    ) as HTMLInputElement[];
  }

  get value(): Array<FieldDefinition<any>> {
    return this.fields;
  }

  getType(type: string): TypeDefinition<any, any> {
    return this.vocabulary[type];
  }

  renderConfigDialog() {
    if (this._selectedConfigFieldIndex === undefined) return html``;

    const selectedField = this.fields[this._selectedConfigFieldIndex];

    const fieldType = this.getType(selectedField.type);

    return html`
      <mwc-dialog
        open
        .heading=${`${fieldType.name} Configuration`}
        @closed=${() => (this._selectedConfigFieldIndex = undefined)}
      >
        <json-schema-form
          .value=${selectedField.configuration}
          .schema=${fieldType.configurationSchema}
          @change=${(e: Event) => {
            selectedField.configuration = (e.target as JsonSchemaForm).value;
            this.dispatchEvent(new Event('change'));
          }}
        ></json-schema-form>
        <mwc-button
          label="ok"
          slot="primaryAction"
          dialogAction="close"
        ></mwc-button>
      </mwc-dialog>
    `;
  }

  renderField(field: FieldDefinition<any>, index: number) {
    const typeDefs = Object.entries(this.vocabulary);
    return html`
      <div class="column" style="margin-top: 16px;">
        <div class="row" style="align-items: start">
          <mwc-textfield
            outlined
            label="Field Name"
            class="unique-field"
            required
            .value=${field.name}
            helper="Required and unique"
            @input=${(e: CustomEvent) => {
              field.name = (e.target as TextField).value;
              this.dispatchEvent(new Event('change'));
            }}
            style="width: 12em; margin-right: 8px"
          ></mwc-textfield>
          <mwc-select
            .fixedMenuPosition=${true}
            outlined
            style="width: 12em; margin-right: 8px"
            label="Field Type"
            @selected=${(e: CustomEvent) => {
              field.type = typeDefs[e.detail.index][0] as string;
              this.requestUpdate();
              this.dispatchEvent(new Event('change'));
            }}
          >
            ${typeDefs.map(
              t =>
                html`
                  <mwc-list-item
                    .value=${t[1].name}
                    .selected=${t[0] === field.type}
                    >${t[1].name}</mwc-list-item
                  >
                `
            )}
          </mwc-select>

          <mwc-icon-button
            icon="settings"
            .disabled=${!this.getType(field.type).configurationSchema}
            @click=${() => (this._selectedConfigFieldIndex = index)}
          ></mwc-icon-button>

          <mwc-icon-button
            icon="delete"
            .disabled=${this.fields.length < 2}
            @click=${() => {
              this.fields.splice(index, 1);
              this.requestUpdate();
              this.dispatchEvent(new Event('change'));
            }}
          ></mwc-icon-button>
        </div>
      </div>
    `;
  }

  render() {
    return html`
      ${this.renderConfigDialog()}
      <div class="column">
        ${this.fields.map((f, i) => this.renderField(f, i))}
        <div>
          <mwc-button
            label="Add Field"
            icon="add"
            @click=${() => {
              this.fields = [
                ...this.fields,
                {
                  name: `new_field_${this._fieldsCount++}`,
                  type: Object.keys(this.vocabulary)[0],
                  configuration: {},
                },
              ];
              this.dispatchEvent(new Event('change'));
            }}
          ></mwc-button>
        </div>
      </div>
    `;
  }

  static get scopedElements() {
    return {
      'mwc-textfield': TextField,
      'mwc-button': Button,
      'mwc-select': Select,
      'mwc-dialog': Dialog,
      'mwc-list-item': ListItem,
      'mwc-card': Card,
      'mwc-icon-button': IconButton,
      'json-schema-form': JsonSchemaForm,
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
