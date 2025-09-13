import { GenreService } from "../utils/GenreService.js";
import { DateUtils } from "../utils/DateUtils.js";

class PodcastPreview extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  static get observedAttributes() {
    return ['title', 'image', 'genres', 'seasons', 'updated'];
  }

  connectedCallback() {
    this.render();
    this.shadowRoot.querySelector('.card').addEventListener('click', this.handleClick.bind(this));
  }

  disconnectedCallback() {
    this.shadowRoot.querySelector('.card').removeEventListener('click', this.handleClick.bind(this));
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      this.render();
    }
  }

  get title() {
    return this.getAttribute('title') || '';
  }

  set title(value) {
    this.setAttribute('title', value);
  }

  get image() {
    return this.getAttribute('image') || '';
  }

  set image(value) {
    this.setAttribute('image', value);
  }

  get genres() {
    const genresAttr = this.getAttribute('genres');
    try {
      return genresAttr ? JSON.parse(genresAttr) : [];
    } catch {
      return [];
    }
  }

  set genres(value) {
    this.setAttribute('genres', JSON.stringify(value));
  }

  get seasons() {
    return parseInt(this.getAttribute('seasons'), 10) || 0;
  }

  set seasons(value) {
    this.setAttribute('seasons', value);
  }

  get updated() {
    return this.getAttribute('updated') || '';
  }

  set updated(value) {
    this.setAttribute('updated', value);
  }

  handleClick() {
    this.dispatchEvent(new CustomEvent('podcast-selected', {
      detail: {
        title: this.title,
        image: this.image,
        genres: this.genres,
        seasons: this.seasons,
        updated: this.updated
      },
      bubbles: true,
      composed: true
    }));
  }

  render() {
    const genreNames = GenreService.getNames(this.genres);
    const seasonText = `${this.seasons} season${this.seasons !== 1 ? 's' : ''}`;
    const updatedText = DateUtils.format(this.updated);

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
        }
        
        .card {
          background: white;
          padding: 1rem;
          border-radius: 8px;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
          cursor: pointer;
          transition: transform 0.2s;
        }

        .card:hover {
          transform: scale(1.02);
        }

        .card img {
          width: 100%;
          border-radius: 6px;
        }

        .card h3 {
          margin: 0.5rem 0;
        }

        .card p {
          margin: 0px;
          font-size: 0.8rem;
          color: #555;
        }

        .tags {
          margin: 0.5rem 0;
        }

        .tag {
          background: #eee;
          padding: 0.3rem 0.6rem;
          margin-right: 0.5rem;
          margin-top: 0.5rem;
          border-radius: 4px;
          display: inline-block;
          font-size: 0.8rem;
        }

        .updated-text {
          font-size: 0.8rem;
          color: #555;
        }
      </style>
      
      <div class="card">
        <img src="${this.image}" alt="${this.title} cover"/>
        <h3>${this.title}</h3>
        <p>${seasonText}</p>
        <div class="tags">
          ${genreNames.map(g => `<span class="tag">${g}</span>`).join('')}
        </div>
        <p class="updated-text">${updatedText}</p>
      </div>
    `;
  }
}

customElements.define('podcast-preview', PodcastPreview);


// logging
console.log(' Podcast Preview Web Component Registered!');