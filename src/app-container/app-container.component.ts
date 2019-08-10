import { customElement, LitElement, property, html } from "lit-element";

@customElement("app-container")
export class AppContainer extends LitElement {
  @property() name = "my-element.ts";

  public arr: any[];

  constructor() {
    super();
    this.arr = [{ name: "Im 1" }, { name: "im 2" }];
  }

  render() {
    return html`
      <todo-list .todos="${this.arr}"></todo-list>
    `;
  }
}
