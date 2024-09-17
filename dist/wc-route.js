import { __decorate } from "tslib";
import { customElement } from "lit/decorators.js";
import { LitElement, html } from "lit";
let WCRoute = class WCRoute extends LitElement {
    render() {
        return html `<slot></slot>`;
    }
};
WCRoute = __decorate([
    customElement("wc-route")
], WCRoute);
export { WCRoute };
//# sourceMappingURL=wc-route.js.map