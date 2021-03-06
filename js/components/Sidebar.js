// https://github.com/Heydon/bruck#s-idebar

export default class Sidebar extends HTMLElement {
  constructor() {
    super();

    if (this.children.length > 2) {
      console.error('Each <s-idebar> component needs to have just two child elements; one intended as a sidebar and one as its accompanying content');
      return;
    }

    this.width = this.getAttribute('width') || '15rem';
    this.to = this.getAttribute('to') === 'right' ? 'right' : 'left';
    this.gap = this.getAttribute('gap') || '1';

    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        .inner {
          display: flex;
          flex-wrap: wrap;
          margin: calc((var(--s${this.gap}) * 0.5) * -1) !important;
          overflow: hidden;
        }

        ::slotted(*) {
          flex-grow: 1;
          flex-basis: ${this.width};
          margin: calc(var(--s${this.gap}) * 0.5) !important;
        }

        ::slotted(.not-sidebar) {
          flex: 9999;
          min-width: 50%;
        }
      </style>
      <div class="inner">
        <slot></slot>
      </div>
    `;

    const not = this.to === 'left' ? 1 : 0;
    this.children[not].classList.add('not-sidebar');
  }

  connectedCallback() {
    const childAmount = this.children.length;
    this.setAttribute('role', 'group');
    this.setAttribute('aria-label', `Content with a ${this.to} sidebar`);
  }
}

customElements.define('s-idebar', Sidebar);