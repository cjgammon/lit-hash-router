import { customElement, property } from "lit/decorators.js";
import { LitElement, html } from "lit";

@customElement("wc-link")
export class WCLink extends LitElement {
    @property()
    href: string = ''

    render() {
        return html`<a href=${this.href}><slot></slot></a>`
    }
}
