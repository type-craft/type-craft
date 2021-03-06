import { CreateElement } from "@type-craft/vocabulary";
import { LitElement, html } from "lit";
import { ScopedElementsMixin } from "@open-wc/scoped-elements";
import { TextArea } from "@scoped-elements/material-web";
import { property, query } from "lit/decorators.js";
import startCase from "lodash-es/startCase";
import { ContentConfig } from "./config";

export class CreateContent
  extends ScopedElementsMixin(LitElement)
  implements CreateElement<string, ContentConfig>
{
  @property()
  label = "Content";

  @query("#content-field")
  contentField!: TextArea;

  get value(): string {
    return this.contentField.value;
  }

  render() {
    return html`
      <mwc-textarea
        id="content-field"
        outlined
        .label=${this.label}
        @input=${() => this.dispatchEvent(new Event("change"))}
      ></mwc-textarea>
    `;
  }

  static get scopedElements() {
    return { "mwc-textarea": TextArea };
  }
}
