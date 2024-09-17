import { customElement } from "lit/decorators.js";
import { LitElement, html } from "lit";

@customElement("wc-route")
export class WCRoute extends LitElement {

    render() {
        return html`<slot></slot>`
    }
}
