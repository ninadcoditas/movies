import { LitElement, html, css } from 'lit-element';

// Extend the LitElement base class
// export the class, so it can be imported where it is needed
export class Cast extends LitElement {
    constructor() {
        super();
        // console.log('called from cast component')
    }

    static get styles() {
        return css`
      li { 
          cursor: pointer; 
        }
    `;
    }

    render() {
        return html`
        <slot></slot>
      <ul>
       <li> <slot name="name"></slot> </li>
      </li>
        `
    }
}