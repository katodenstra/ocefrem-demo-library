# OCEFREM Angular UI Library

This project is a **component library and demo application** built with Angular.  
It was created to replicate and modernize the design patterns used in the official OCEFREM site, providing reusable and styled UI components based on tokens (colors, typography, spacing, radius, etc.).

The project has two main parts:

- **Library (`ocefrem-ui`)**  
  A publishable Angular library that contains all UI components with SCSS token-based styles.  
  Components are designed to be reusable across applications.

- **Demo Application (`demo`)**  
  A simple Angular app that imports the library and showcases all components in a single page, similar to a Storybook environment.

---

## Features

- Angular workspace with a separate `projects/ocefrem-ui` library.
- Components styled using SCSS tokens for:
  - Colors
  - Typography
  - Font sizes
  - Spacing
  - Border radius
- Pre-built components included:
  - **Button** (primary, secondary variants)
  - **Card** (left and right aligned)
  - **Service Card** (image, title, text, optional 0–2 buttons)
  - **Certificate Card** (icon, title, subtitle, button)
  - **Text Field** (styled input)
  - **Text Area** (styled textarea)
  - **Blog Extract** (title, author, trimmed text extract, button)
- Demo app that displays all components in a showcase page.

---

## Requirements

- Node.js (latest LTS recommended)
- Angular CLI v17 or later

---

## Installation

Clone the repository:

```bash
git clone https://github.com/katodenstra/ocefrem-demo-library.git
cd ocefrem-demo-library
npm install
```

---

## Running the Demo App

```bash
npm start
```

This will run the demo application and open it at `http://localhost:4200/`.

---

## Building the Library

```bash
npm run build:lib
```

This builds the `ocefrem-ui` Angular library into the `dist/` folder, making it ready for publishing or reuse in other Angular applications.

---

## File Structure

```
projects/ocefrem-ui
  ├── src/lib
  │   ├── button
  │   ├── card
  │   ├── service-card
  │   ├── certificate-card
  │   ├── text-field
  │   ├── text-area
  │   ├── blog-extract
  │   └── styles/_tokens.scss
  ├── ng-package.json
  └── public-api.ts

src (demo app)
  ├── app
  │   └── showcase (component that renders all library components)
  ├── assets
  └── styles.scss
```

---

## Tokens

The `_tokens.scss` file defines design tokens for the library:

- **Colors**: primary, secondary, background, surface, text, muted, border
- **Radius**: sm, md, lg, pill
- **Fonts**: heading, body
- **Font Sizes**: xs, sm, md, lg, xl
- **Spacing**: xs, sm, md, lg, xl

These tokens ensure consistent styling across all components.

---

## Usage in Another Angular Project

To use this library in another project:

1. Build the library with `npm run build:lib`.
2. Copy or publish the package from `dist/ocefrem-ui`.
3. Install it in the target Angular project.
4. Import the components directly into your modules or standalone components.

---

## Status

This project is actively being developed and styled to closely follow the OCEFREM design system. The current implementation focuses on:

- Component structure
- SCSS token usage
- A demo page for showcasing components

Future improvements may include accessibility refinements, responsive behavior adjustments, and additional UI elements.

---
