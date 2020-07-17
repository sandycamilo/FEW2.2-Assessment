const template = document.createElement('template')

template.innerHTML = `
    <style>
      .ticker {
		color: rgb(77, 75, 75);
		padding: 20px;
		font-size: 20px;
		font-weight: 400;
		letter-spacing: 12px;
		position: relative;
		top: 263px;
		background-color: rgba(132, 236, 243, 0.589);
		font-family: 'Fjalla One', sans-serif;
        animation: moveText 8s infinite;
        transition-timing-function: linear;
      }
      @keyframes moveText {
        0% { transform: translate(0, 0); }
        100% { transform: translate(1800px, 0); }
      }
    </style>
    <h3 class='ticker'>
    </h3>
  `

  class TickerTape extends HTMLElement {
    constructor() {
      super() 
      const tempNode = template.content.cloneNode(true)
		  this._shadowRoot = this.attachShadow({ mode: 'open' });
		  this._shadowRoot.appendChild(tempNode)

      this._content = this.shadowRoot.querySelector('.ticker')
      this._text = this.innerHTML
      this._content.innerHTML = this._text
    }
  }
  
  customElements.define('ticker-tape', TickerTape)