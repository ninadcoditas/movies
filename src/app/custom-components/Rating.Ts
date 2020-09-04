import { LitElement, html } from 'lit-element';

// Extend the LitElement base class
// export the class, so it can be imported where it is needed
export class Rating extends LitElement {
    constructor() {
        super();
        // console.log('called from rate component')
    }

    render() {

        //     let score = this.getAttribute("score")
        //     return html`
        //     <span>
        //        Rating: ${score} / 10
        //     </span>
        // `;

        return html`
        <span>
           Rating: <slot></slot> / 10
        </span>
        `
    }
}