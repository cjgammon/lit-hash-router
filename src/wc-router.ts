import { customElement, query, state } from "lit/decorators.js";
import { LitElement, html, css } from "lit";
import { WCRoute } from "./wc-route";

@customElement("wc-router")
export class WCRouter extends LitElement {
    @query('slot') slotElement!: HTMLSlotElement;

    @state()
    routes: WCRoute[] = []
    
    @state()
    routesReady: boolean = false;

    connectedCallback(): void {
        super.connectedCallback();
    }

    firstUpdated() {
        this.getSlottedChildren()
        this.updateRoute();
        this.routesReady = true; // Mark routes as ready once they're processed

        window.addEventListener('hashchange', () => this.handleHashChange());
    }

    updateRoute() {
        const currentHash = window.location.hash.slice(1);
        let matchFound = false;
    
        for (const route of this.routes) {
            const hash = route.getAttribute('hash');
            if (hash === currentHash) {
                if (!this.contains(route)) {
                    this.appendChild(route);
                }
                matchFound = true;
            } else if (route.parentNode === this) {
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
                this.routes.push(element as WCRoute)
            }
        });
    }

    handleHashChange() {
        this.updateRoute();
    }

    render() {
        return html`<slot class="${this.routesReady ? '' : 'hidden'}"></slot>`
    }

    static styles = css`
    :host {
        display: block;
    }

    .hidden {
        display: none;
    }
`;
}
