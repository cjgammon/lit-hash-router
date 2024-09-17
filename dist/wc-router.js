import { __decorate } from "tslib";
import { customElement, query, state } from "lit/decorators.js";
import { LitElement, html, css } from "lit";
let WCRouter = class WCRouter extends LitElement {
    constructor() {
        super(...arguments);
        this.routes = [];
        this.routesReady = false;
    }
    connectedCallback() {
        super.connectedCallback();
    }
    firstUpdated() {
        this.getSlottedChildren();
        this.updateRoute();
        this.routesReady = true; // Mark routes as ready once they're processed
        window.addEventListener('hashchange', () => this.handleHashChange());
    }
    updateRoute() {
        const currentHash = window.location.hash.slice(1); // Remove '#' more efficiently
        let matchFound = false;
        for (const route of this.routes) {
            const hash = route.getAttribute('hash');
            if (hash === currentHash) {
                if (!this.contains(route)) {
                    this.appendChild(route);
                }
                matchFound = true;
            }
            else if (route.parentNode === this) {
                this.removeChild(route);
            }
        }
        if (!matchFound) {
            // Handle case when no matching route is found
            console.warn(`No route found for hash: ${currentHash}`);
        }
    }
    getSlottedChildren() {
        const slottedElements = this.slotElement.assignedElements();
        slottedElements.forEach(element => {
            if (element instanceof HTMLElement) {
                this.routes.push(element);
            }
        });
    }
    handleHashChange() {
        this.updateRoute();
    }
    render() {
        return html `<slot class="${this.routesReady ? '' : 'hidden'}"></slot>`;
    }
};
WCRouter.styles = css `
    :host {
        display: block;
    }

    .hidden {
        display: none;
    }
`;
__decorate([
    query('slot')
], WCRouter.prototype, "slotElement", void 0);
__decorate([
    state()
], WCRouter.prototype, "routes", void 0);
__decorate([
    state()
], WCRouter.prototype, "routesReady", void 0);
WCRouter = __decorate([
    customElement("wc-router")
], WCRouter);
export { WCRouter };
//# sourceMappingURL=wc-router.js.map