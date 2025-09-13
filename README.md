# DJS02 – Web Component: Podcast Preview
/src
├── /components
│   ├── createPodcastCard.js      # Legacy factory function
│   ├── createModal.js           # Modal controller
│   └── PodcastPreview.js        # NEW Web Component
├── /utils
│   ├── DateUtils.js             # Date formatting utilities
│   └── GenreService.js          # Genre ID to name mapping
├── /views
│   └── createGrid.js            # Legacy grid renderer
├── data.js                      # Sample podcast data
└── index.js                     # Application entry point
/html.index
/README.md
/styles.css


Features 
 Web Component Standard 
Uses customElements.define() for proper registration
Implements Shadow DOM for style encapsulation
Follows modern Web Component specifications
 

 Reusability 
Can be used declaratively in HTML or programmatically in JavaScript
Stateless design relies on external data
Self-contained rendering and styling
 

 Encapsulation 
Shadow DOM isolates component styles
No global CSS conflicts
Private implementation details
 

Event Communication 
Dispatches custom events for parent application handling
Clean separation between component and application logic
No tight coupling

Application Flow

html.index loads index.js as module
index.js imports and registers PodcastPreview.js
index.js creates components for each podcast in data.js
Components dispatch events when clicked
index.js handles events and opens modal

Code Quality & Maintainability

Single Responsibility

Each component has one clear purpose
Utilities handle specific formatting tasks
Separation of concerns maintained
No Side Effects

Components don't modify global state
Pure rendering based on input data
Clean event communication
Extensible Design

Easy to add new attributes/properties
Simple to extend styling
Straightforward to add new events
Backward Compatibility

Existing factory functions remain untouched
Gradual migration possible
No breaking changes
Technical Constraints

Browser Support

Requires modern browser with Web Component support
No polyfills included for older browsers
Tested on Chrome,Safari, Edge
 Data Format Requirements

genres: Must be array of numbers (genre IDs)
image: Must be valid image URL/path
seasons: Must be number
updated: Must be ISO date string (YYYY-MM-DD)
title: String
 Shadow DOM Limitations

Styles cannot be overridden from outside
Debugging requires expanding Shadow DOM in dev tools
Some CSS features behave differently in Shadow DOM
 Module System Requirements

Custom events must use bubbles: true and composed: true
Event listeners must be added after component creation
Event detail contains only basic podcast data (no seasons details)
 


## Overview

In this project, you will build a reusable and encapsulated **custom HTML element** that displays a podcast preview. The component must follow the **Web Component standard**, using `customElements.define()` and should work independently from the main application logic. This component will enhance modularity, promote reuse, and reduce code duplication across the app.

The component should be designed to **accept podcast data via attributes or properties**, display relevant UI elements (such as title, cover image, and genres), and **communicate with the main application** through custom events.

---

## Core Objectives

### Web Component Functionality

- Create a **custom HTML element** using `customElements.define()`.
- Accept data (cover image, title, genres, number of seasons, and last updated date) **as attributes or properties**.
- Keep the component **stateless** and reliant on external data provided by the parent.
- Use **Shadow DOM** for style and logic encapsulation to avoid global conflicts.
- Trigger a **custom event** when a user interacts with the component (e.g., clicking), so that the parent application can open a modal or take other actions without tightly coupling to the component’s logic.

---

## UI/UX Requirements

- The component should render a clean and **visually consistent preview** of each podcast.
- Display:
  - Podcast **cover image**
  - Podcast **title**
  - **Genre names**
  - **Number of seasons**
  - **Last updated** in a human-readable format
- The component must be **responsive**, and match the overall app design on desktop and mobile.
- On click, the component must notify the parent app to **open a modal** or navigate to details.

---

## Code Quality & Maintainability

- Write clear, consistent, and modular code.
- Follow **functional and object-oriented programming** patterns.
- Document major functions using **JSDoc comments** (parameters, return types, etc.).
- Use consistent **code formatting** across HTML, CSS, and JavaScript.

---

## Technical Constraints

- Do **not** use any third-party frameworks for creating the web component.
- Use **native JavaScript (ES6+)**, HTML, and CSS.
- No page reloads or navigation.
- Ensure compatibility with modern browsers.

---

## Deliverables

- A working custom Web Component file (e.g., `PodcastPreview.js`).
- An HTML demo page showcasing the component usage.
- A `README.md` file with:
  - How to use and register the component
  - Instructions for passing data
  - How to listen for interaction events

---
