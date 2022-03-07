import { DetailElement } from "@type-craft/vocabulary";
import { html, LitElement } from "lit";
import { property } from "lit/decorators.js";
import { ScopedElementsMixin } from "@open-wc/scoped-elements";
import { ContentConfig } from "./config";

export class ContentDetail
  extends ScopedElementsMixin(LitElement)
  implements DetailElement<string, ContentConfig>
{
  @property({ type: String })
  label = "Content";

  @property()
  value!: string;

  render() {
    return html`
      <div style="display: flex; flex-direction: column">
        <span><strong>${this.label}</strong></span>
        <span style="white-space: pre-line">${this.value}</span>
      </div>
    `;
  }
}
