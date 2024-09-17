import { LitElement } from "lit";
import { WCRoute } from "./wc-route";
export declare class WCRouter extends LitElement {
    slotElement: HTMLSlotElement;
    routes: WCRoute[];
    routesReady: boolean;
    connectedCallback(): void;
    firstUpdated(): void;
    updateRoute(): void;
    getSlottedChildren(): void;
    handleHashChange(): void;
    render(): import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
//# sourceMappingURL=wc-router.d.ts.map