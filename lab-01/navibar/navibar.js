class CustomNavigationBar extends HTMLElement {
  constructor() {
      super();
      const shadowRoot = this.attachShadow({mode: 'open'});
      shadowRoot.innerHTML = `
        <style>   
          div.navibar {
            background-color: #ccc;
            margin: 0;
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
          }
          ::slotted(a) {
            text-align: center;
         }
        </style>
        <div class="navibar">
          <slot></slot>
        </div>`;
  }

};

customElements.define('navigation-bar', CustomNavigationBar);
