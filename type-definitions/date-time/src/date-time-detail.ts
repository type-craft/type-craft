import { DetailElement } from "@type-craft/vocabulary";
import { html, LitElement } from "lit";
import { property } from "lit/decorators.js";
import { ScopedElementsMixin } from "@open-wc/scoped-elements";
import { DateTimeConfig } from "./types";
import { SlFormatDate, SlRelativeTime } from "@scoped-elements/shoelace";

export class DateTimeDetail
  extends ScopedElementsMixin(LitElement)
  implements DetailElement<number, DateTimeConfig>
{
  @property()
  label = "";

  @property({ type: Boolean })
  relativeTime = false;

  @property({ type: Number })
  value: number;

  renderDate() {
    if (this.relativeTime)
      return html`<sl-relative-time
        .date=${new Date(this.value)}
      ></sl-relative-time> `;

    return html`
      <sl-format-date
        month="long"
        day="numeric"
        year="numeric"
        hour="numeric"
        minute="numeric"
        hour-format="12"
        .date=${new Date(this.value)}
      ></sl-format-date
      ><br />
    `;
  }

  renderLabel() {
    if (this.label) return html`${this.label}: `;
    return html``;
  }

  render() {
    return html`${this.renderLabel()}${this.renderDate()}`;
  }

  static get scopedElements() {
    return {
      "sl-format-date": SlFormatDate,
      "sl-relative-time": SlRelativeTime,
    };
  }
}
