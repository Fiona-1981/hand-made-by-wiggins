class Footer extends HTMLElement {
  constructor() {
    super();
  }

// Remember the CSS in here overrides the CSS in the Header file!

  connectedCallback() {
    this.innerHTML = `
      <style>
        CSS goes here
      </style>

      <footer>
      Footer content for every page goes here.
      </footer>
    `;
  }
}

customElements.define('footer-component', Footer);