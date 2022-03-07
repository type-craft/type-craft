import { DetailElement } from "@type-craft/vocabulary";
import { html, LitElement } from "lit";
import { property } from "lit/decorators.js";
import { ScopedElementsMixin } from "@open-wc/scoped-elements";
import { TitleConfig } from "./config";

export class TitleDetail
  extends ScopedElementsMixin(LitElement)
  implements DetailElement<string, TitleConfig>
{
  @property()
  label = "Title";

  @property()
  value!: string;

  render() {
    return html` <span style="font-size: 24px">${this.value}</span> `;
  }
}
