import { customElement, LitElement, property, html } from "lit-element";
import { styling } from "@src/utils/style.util";
import { router } from "@src/utils/router.util";

@customElement("list-element")
export class List extends LitElement {
  @property() list: any[] = [];

  constructor() {
    super();
  }

  render() {
    return html`
      ${styling}
      <a href="/" @click=${(e: MouseEvent) => router.changeRoute(e)}
        >< Go back</a
      >
      <div class="list">
        <p>List</p>
      </div>
    `;
  }
}
