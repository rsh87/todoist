import { customElement, LitElement, property, html } from "lit-element";
import { styling } from "@src/utils/style.util";
import { router } from "@src/utils/router.util";

@customElement("main-container")
export class MainContainer extends LitElement {
  constructor() {
    super();
  }

  render() {
    return html`
      ${styling}
      <div class="g-container">
        <div class="g-self-center">
          <h1 class="uk-heading-small">Pick one</h1>
          <a
            href="/todo"
            @click=${(e: MouseEvent) => router.changeRoute(e)}
            class="uk-button uk-button-primary"
            >Todos</a
          >
          <a
            href="/list"
            @click=${(e: MouseEvent) => router.changeRoute(e)}
            class="uk-button uk-button-primary"
            >Lists</a
          >
        </div>
      </div>
    `;
  }
}
