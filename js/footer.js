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
      Footer content for every page goes here, using JavaScript.
      <p><a href="mailto:hello@handmadebywiggins.co.uk">Website hand made by Fiona Wiggins</a></p>
      <a href="https://www.freepik.com/free-vector/cats-icon-set_9386621.htm#query=black%20cat%20outline&position=0&from_view=search&track=ais" target="_blank">Black cat image by macrovector</a> on Freepik
      </footer>
    `;
  }
}

customElements.define('footer-component', Footer);