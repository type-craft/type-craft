import { CreateElement, DetailElement } from "@type-craft/vocabulary";
import { LitElement, html } from "lit";
import { ScopedElementsMixin } from "@open-wc/scoped-elements";
import { DateTimeConfig } from "./types";
import { property, query } from "lit/decorators.js";
import type { DateTimePicker } from "@vaadin/date-time-picker";
import startCase from "lodash-es/startCase";
import "@vaadin/date-time-picker/theme/material/vaadin-date-time-picker.js";

export class CreateDateTime
  extends ScopedElementsMixin(LitElement)
  implements CreateElement<number, DateTimeConfig>
{
  @property()
  fieldName = "time";

  @property({ type: Boolean, attribute: "relative-time" })
  relativeTime: boolean;

  @query("#date-time-picker")
  picker: DateTimePicker;

  get value(): number {
    return new Date(this.picker.value).getTime();
  }

  render() {
    return html`
      <vaadin-date-time-picker
        .label=${`Pick a ${startCase(this.fieldName)}`}
        id="date-time-picker"
        @value-changed=${() => {
          if (this.value) {
            this.dispatchEvent(
              new Event("change", {
                bubbles: true,
                composed: true,
              })
            );
          }
        }}
      >
        <date-picker slot="date-picker" style="margin-right: 8px"></date-picker>
      </vaadin-date-time-picker>
    `;
  }

  static get scopedElements() {
    return {
      "vaadin-date-time-picker": customElements.get("vaadin-date-time-picker"),
      "date-picker": customElements.get("vaadin-date-time-picker-date-picker"),
    };
  }
}
