import { customElement, LitElement, property, html } from "lit-element";
import { styling } from "@src/utils/style.util";

@customElement("todo-list")
export class TodoList extends LitElement {
  @property() todos: any[] = [];

  constructor() {
    super();
    console.log(this.todos);
  }

  render() {
    return html`
      ${styling}
      <div class="todo-list">
        <p>wASUP</p>
        <ul>
          ${this.todos.map(
            todo =>
              html`
                <li><p>${todo.name}</p></li>
              `
          )}
        </ul>
      </div>
    `;
  }
}
