import { LitElement, html } from 'lit-element';

// Extend the LitElement base class
// export the class, so it can be imported where it is needed
export class Rating extends LitElement {

    /**
     * Implement `render` to define a template for your element.
     *
     * You must provide an implementation of `render` for any element
     * that uses LitElement as a base class.
     */

    constructor() {
        super();
        // console.log('called from rate component')
    }
    // score: number = 2;
    render() {
        /**
         * `render` must return a lit-html `TemplateResult`.
         *
         * To create a `TemplateResult`, tag a JavaScript template literal
         * with the `html` helper function:
         */
        let score = this.getAttribute("score")
        return html`
        <span>
           Rating: ${score} / 10
        </span>
    `;
    }
}