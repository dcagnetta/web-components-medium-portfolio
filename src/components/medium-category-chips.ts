import "./medium-category-chip";
import { sharedStyles } from "../shared/style";
import { customElement, property } from "lit/decorators.js";
import { html, css, LitElement } from "lit";

import '@brightspace-ui/core/components/tag-list/tag-list.js';
import '@brightspace-ui/core/components/tag-list/tag-list-item.js';

const componentStyle = css``;

@customElement("medium-category-chips")
export class MediumCategoryChips extends LitElement {
  static styles = [sharedStyles, componentStyle];

  @property()
  categories!: string[];

  render() {
    return html`
      <div class="chips">
       <!-- ${this.categories.map(
          (category) =>
            html`<medium-category-chip>${category}</medium-category-chip>`
        )} -->
       
       <d2l-tag-list description="Example Tags">
       
       ${this.categories.map(
        (category) =>
            html`<d2l-tag-list-item text="${category}"></d2l-tag-list-item>`
        )}
       
       </d2l-tag-list>
       
      </div>
    `;
  }
}
