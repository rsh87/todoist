import "../styles/main.css";

// Components
import "./components/app-container/app-container.component";
import "./components/main-container/main-container.component";
import "./components/todo-list/todo-list.component";
import "./components/list/list.component";
import { router } from "./utils/router.util";

router.setRoutes([
  {
    component: "main-container",
    path: "/"
  },
  {
    component: "todo-list",
    path: "/todo"
  },
  {
    component: "list-element",
    path: "/list"
  }
]);
