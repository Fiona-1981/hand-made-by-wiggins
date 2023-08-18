class Header extends HTMLElement {
  constructor() {
    super();
  }

  // Remember the CSS in here is overridden by the CSS in the Footer file!

  connectedCallback() {
    this.innerHTML = `
      <style>
        CSS goes here
      </style>

      <header>
      Header content for every page goes here, using JavaScript.
      </header>
    `;
  }
}

customElements.define('header-component', Header);