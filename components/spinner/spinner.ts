import { Component } from "../../src/core";
import { IComponent } from "../../src/interfaces";

import "./spinner.css";

export class Spinner implements IComponent {
  private component: Component;

  constructor() {
    this.component = new Component({
      className: "spinner",
    });
  }

  getComponent(): HTMLElement {
    return this.component.getComponent();
  }
}