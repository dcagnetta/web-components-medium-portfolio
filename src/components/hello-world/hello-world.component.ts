import { html, css, LitElement, TemplateResult } from "lit";
import { customElement, property } from "lit/decorators.js";
import { sharedStyles } from '../../shared/style';
import scopedStyles from "./hello-world.module.scss";

@customElement("hello-world")
class HelloWorld extends LitElement {
  static styles = [scopedStyles];

  @property()
  message!: string;

  render(): TemplateResult  {
    return html`
      <h1>Hello, ${this.message}</h1>
            
      testing
    `;
  }
}
