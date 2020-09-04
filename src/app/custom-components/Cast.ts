import { LitElement, html, css } from 'lit-element';

// Extend the LitElement base class
// export the class, so it can be imported where it is needed
export class Cast extends LitElement {
    constructor() {
        super();
        // console.log('called from cast component')
    }

    show: boolean = false;

    static get styles() {
        return css`
      .cast { 
          cursor: pointer; 
        }
    
        .cast-detail{
            height:100%;

        }

        .hidden {
  display: none;
  -webkit-transition: display .5s ease;
  
}

.active {
  -webkit-transition: display .5s ease;
}

        
    `;
    }


    render() {
        return html`

        <slot></slot> 
    <ul>
    <li><slot name="name" > </slot> </li>
        </ul>

     `
    }
}

// <div class="cast" @click="${() => { this.show = !this.show }}> more < /div>
// ${ this.show ? html`<p>shoow </p>` : html`<p>hide</p>` }
