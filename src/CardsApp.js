import { LitElement, html, css } from 'lit';
import "@lrnwebcomponents/meme-maker/meme-maker.js";
import "@ref5378/my-card/src/my-card.js";

const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;

export class CardsApp extends LitElement {
  static get properties() {
    return {
      title: { type: String },
    };
  }

  static get styles() {
    return css`
      :host {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        font-size: calc(10px + 2vmin);
        color: #1a2b42;
        max-width: 960px;
        margin: 0 auto;
        text-align: center;
        background-color: var(--cards-app-background-color);
      }

      main {
        flex-grow: 1;
      }

      .logo {
        margin-top: 36px;
        animation: app-logo-spin infinite 20s linear;
      }

      @keyframes app-logo-spin {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }

      .app-footer {
        font-size: calc(12px + 0.5vmin);
        align-items: center;
      }

      .app-footer a {
        margin-left: 5px;
      }
    `;
  }

  constructor() {
    super();
    this.title = 'My app';
  }

  render() {
    return html`
      <main>
          <meme-maker alt="Cat stalking a small toy" image-url="https://cdn2.thecatapi.com/images/9j5.jpg" top-text="I bring you" bottom-text="the death">
      </meme-maker>
      <accent-card image-src="http://placekitten.com/200/600" accent-color="red" horizontal accent-heading>
  <div slot="heading">Accent Card</div>
  <div slot="subheading">A card with optional accent stylings.</div>
  <div slot="content"><p>This card is highly customizable to contain any content you'd like</p></div>
</accent-card>
        <my-card>
        </my-card>
    `;
  }
}