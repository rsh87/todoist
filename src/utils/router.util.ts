interface route {
  path: string;
  component: string;
  active?: boolean;
}

interface options {
  pageTransition: boolean;
}

export class Router {
  private outlet: HTMLElement | null;
  private routes: route[] | null;
  private options: options | null;

  constructor(outlet: HTMLElement | null, options?: options) {
    this.outlet = null;
    this.routes = null;
    this.options = null;

    if (!outlet) {
      console.error("Missing outlet!");
      return;
    }

    if (options) {
      this.options = options;
    }
    this.outlet = outlet;
  }

  public changeRoute(e: MouseEvent) {
    e.preventDefault();
    const path = (e.target as HTMLAnchorElement).pathname;
    this.updateRoute(path);
  }

  public updateRoute(path: string) {
    const route = this.findRoute(path);
    if (!route) {
      console.error("Could not find component corresponding to: ", path);
      return;
    }

    if (!route.active && this.routes) {
      this.updateHistory(route);
      this.routes = this.routes.map(r => ({
        ...r,
        active: r.path === route.path
      }));

      if (this.options && this.options.pageTransition) {
        const body = document.getElementsByTagName("body")[0];
        body.classList.add("loading");
        setTimeout(() => {
          body.classList.remove("loading");
          this.cleanOutlet();
          this.appendRoute(route);
        }, 600);
        return;
      }

      this.cleanOutlet();
      this.appendRoute(route);
    }
  }

  public setRoutes(routes: route[]): void {
    this.routes = routes;
    this.initRouter();
  }

  public getRoutes(): route[] | null {
    return this.routes;
  }

  public findRoute(path: string): route | undefined | null {
    if (this.routes) {
      return this.routes.find(route => route.path === path);
    }

    return null;
  }

  private initRouter() {
    const path = this.getPath;
    if (path) {
      this.updateRoute(path);
    }

    window.onpopstate = event => {
      const path = this.getPath;
      if (path) {
        this.updateRoute(path);
      }
    };
  }

  private get getPath(): string {
    return window.location.pathname;
  }

  private updateHistory(route: route): void {
    window.history.pushState({}, route.path, route.path);
  }

  private cleanOutlet(): void {
    if (this.outlet) {
      this.outlet.innerHTML = "";
    }
  }

  private appendRoute(route: route) {
    const element = document.createElement(route.component);
    if (this.outlet) {
      this.outlet.append(element);
    }
  }
}

export const router = new Router(document.getElementById("outlet"), {
  pageTransition: true
});
