import { customElement, LitElement, property, html } from "lit-element";

@customElement("todo-list")
export class TodoList extends LitElement {
  @property() todos: any[] = [];

  constructor() {
    super();
    console.log(this.todos);
  }

  render() {
    return html`
      <p>wASUP</p>
      <ul>
        ${this.todos.map(
          todo =>
            html`
              <li>${todo.name}</li>
            `
        )}
      </ul>
    `;
  }
}
