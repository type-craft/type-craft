import { CreateElement } from "@type-craft/vocabulary";
import { LitElement, html } from "lit";
import { ScopedElementsMixin } from "@open-wc/scoped-elements";
import { TextField } from "@scoped-elements/material-web";
import { property, query } from "lit/decorators.js";
import startCase from "lodash-es/startCase";

export class CreateTitle
  extends ScopedElementsMixin(LitElement)
  implements CreateElement<string, {}>
{
  @property()
  fieldName = "Title";

  @query("#title-field")
  titleField!: TextField;

  get value(): string {
    return this.titleField.value;
  }

  render() {
    return html`
      <mwc-textfield
        id="title-field"
        outlined
        .label=${startCase(this.fieldName)}
        @input=${() => this.dispatchEvent(new Event("change"))}
      ></mwc-textfield>
    `;
  }

  static get scopedElements() {
    return { "mwc-textfield": TextField };
  }
}
