import { __decorate } from "tslib";
import { customElement, property } from "lit/decorators.js";
import { LitElement, html } from "lit";
let WCLink = class WCLink extends LitElement {
    constructor() {
        super(...arguments);
        this.href = '';
    }
    render() {
        return html `<a href=${this.href}><slot></slot></a>`;
    }
};
__decorate([
    property()
], WCLink.prototype, "href", void 0);
WCLink = __decorate([
    customElement("wc-link")
], WCLink);
export { WCLink };
//# sourceMappingURL=wc-link.js.map