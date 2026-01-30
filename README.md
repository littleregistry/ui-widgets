# UI Widgets - Search Modal

A React-based search modal widget that compiles to pure vanilla JavaScript for easy integration into any website.

## Features

- 🔍 Clean, modern search modal interface
- ⚡ Built with React but compiles to vanilla JavaScript
- 🎨 Smooth animations and transitions
- 📱 Responsive design
- 🚀 Easy to integrate into any project

## Development

### Prerequisites

- Node.js (v14 or higher)
- npm

### Setup

1. Install dependencies:

```bash
npm install
```

2. Run development server:

```bash
npm run dev
```

This will start a local development server at `http://localhost:5173` where you can see the widget in action.

### Building for Production

To compile the React app to vanilla JavaScript:

```bash
npm run build
```

This creates a `dist/` folder containing:

- `search-modal.iife.js` - The compiled widget with **CSS inlined** (no separate CSS file needed!)

## Usage

### Using the Compiled Widget

1. Build the project (see above)

2. Include React dependencies in your HTML (from CDN or local):

```html
<script
    crossorigin
    src="https://unpkg.com/react@18/umd/react.production.min.js"
></script>
<script
    crossorigin
    src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"
></script>
```

3. Add a container element:

```html
<div id="search-modal-root"></div>
```

4. Include the compiled widget (CSS is automatically injected!):

```html
<script src="path/to/dist/search-modal.iife.js"></script>
```

The widget will automatically initialize when the page loads and inject its styles into the page.

### Example

See `example.html` for a complete working example of how to use the compiled widget.

## How It Works

The widget consists of:

- A button that opens a modal
- A search input field inside the modal
- Submit button to perform search
- Ability to close the modal by clicking outside or on the close button

The search functionality logs to the console by default. You can extend the `handleSubmit` function in `src/App.jsx` to add your own search logic.

## Customization

To customize the widget:

1. Edit the components in `src/App.jsx`
2. Modify styles in `src/styles.js`
3. Rebuild with `npm run build`

## Project Structure

```
ui-widgets/
├── src/
│   ├── App.jsx       # Main React component
│   ├── styles.js     # CSS styles (inlined into bundle)
│   └── index.jsx     # Entry point
├── dist/             # Compiled output (after build)
├── index.html        # Development demo page
├── example.html      # Example usage of compiled widget
├── vite.config.js    # Vite configuration
└── package.json      # Project dependencies
```

## License

ISC
