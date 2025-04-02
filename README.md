# DC Searchbox

A modular, responsive search interface built with Next.js, TypeScript, and Tailwind CSS. This project was developed as part of a frontend evaluation for Digital Creative, focused on delivering a pixel-accurate, accessible, and performant UI.

## Feature Evaluation

| Criteria                                                                 | Status   | Notes                                                                 |
|--------------------------------------------------------------------------|----------|-----------------------------------------------------------------------|
| Developed using React or Vue                                             | ✅       | Built with Next.js (React App Router)                                |
| Split into logical reusable components                                   | ✅       | SearchBar, Tag, ResultItem, SearchBox, StatusBar, etc.               |
| Includes required components (Search bar, Tag, Result item)             | ✅       | All required components are implemented                              |
| Styling with Tailwind CSS or Sass                                        | ✅       | Tailwind CSS with custom tokens via CSS variables                    |
| README with thinking process and install instructions                    | ✅       | Included in this document                                            |
| TypeScript used throughout                                               | ✅       | Full type safety with shared interface (`Tool`)                      |
| Pixel-perfect implementation                                             | ✅       | Matches Figma specs on spacing, typography, layout                   |
| Uses up-to-date frameworks/tools                                         | ✅       | Next.js App Router, next/font, Tailwind 3, modern patterns           |
| CSS animations / transitions                                             | ✅       | Applied to icons, input borders, hover effects                       |
| Keyboard controls (Tab navigation, focus-visible)                       | ✅       | Fully accessible tags, input, and result cards                       |
| Improved UI/UX based on judgment                                         | ✅       | Added accessibility, debouncing, keyboard support, error visuals     |

## Features

- Component-driven architecture using modern React (App Router)
- Debounced search input with API integration
- Result states: loading, no results, error handling
- Keyboard accessibility and focus-visible enhancements
- Mobile-first responsive layout
- Type-safe implementation using shared interfaces
- Clean separation of concerns between presentation and logic

## Components Overview

- `SearchBox` – Coordinates UI and state between input, tags, and results
- `SearchBar` – Controlled input with debounced updates and focus handling
- `Tag` – Selectable category filters with hover/active/focus states
- `ResultList` – Handles visual state and renders matched results
- `ResultItem` – Individual technology card with title, description, icon, and external link
- `StatusBar` – Displays footer message based on current state
- `Loading` – Displays a centered spinner using a custom SVG

## Technical Stack

- Framework: Next.js (App Router)
- Language: TypeScript
- Styling: Tailwind CSS + custom design tokens via CSS variables
- Fonts: Poppins and Geist via `next/font`
- Icons: FontAwesome + inline SVGs
- API: Mocked search endpoint with simulated latency support

## Project Structure

```
src/
  app/
    layout.tsx         # Global layout, fonts, and styling
    page.tsx           # Main entry with SearchBox
  components/          # All UI elements (search, tag, results, etc.)
  hooks/
    useSearch.ts       # Debounced API request hook with cancellation
  lib/
    fontawesome.ts     # FA core setup with styles injection disabled
  types/
    index.ts           # Shared types and interfaces
  utils/
    debounce.ts        # Reusable debounce function
public/
  icons/               # Inline SVGs (search, loading, external-link)
  images/              # Error/empty state illustrations
```

## Setup Instructions

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open in browser:

```
http://localhost:3000
```

## Development Notes

- Accessibility features include keyboard navigation and visible focus indicators.
- Results automatically scroll if the list exceeds vertical space.
- SVGs are optimized and animated via Tailwind’s `animate-spin` where applicable.
- Layout and styles are responsive, with utility class fallbacks for mobile breakpoints.

## Testing Considerations

This implementation was manually tested on Chromium-based browsers and mobile viewports. If this were a production deployment, additional layers such as unit tests (Jest + RTL), accessibility testing (axe-core), and E2E coverage (Playwright or Cypress) would be recommended.

## Author Notes

The implementation reflects the goal of clarity, maintainability, and user experience. All UI behavior matches the provided Figma design, with enhancements where appropriate (e.g. keyboard UX, mobile fallback behavior). All code has been reviewed for modern conventions and clean architecture.