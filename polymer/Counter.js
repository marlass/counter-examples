import { LitElement, html } from 'lit-element';

class Counter extends LitElement {
  static get properties() {
    return { count: { type: Number } };
  }

  constructor() {
    super();
    this.count = 0;
  }

  increment() {
    this.count += 1;
  }

  decrement() {
    this.count -= 1;
  }
  
  render() {
    return html`
      <h1>Counter: ${this.count}</h1>
      <button @click=${this.increment}>+</button>
      <button @click=${this.decrement}>-</button>
    `;
  }
}

customElements.define('simple-counter', Counter);
