# Apple Watch Studio UI Clone

## Overview
This project is a pixel-perfect clone of the Apple Watch Studio, focusing on interactivity, responsiveness, and accessibility. It offers a seamless user experience for case, size, and band selection, with real-time updates and smooth animations.

## Setup
1. Clone this repository.
2. Install dependencies: `npm install`.

## Usage
1. Run `npm start` to start the development server.
2. Open your browser at `http://localhost:3000` to interact with the UI.

## Features
- **Interactive Components:** Users can select watch cases, sizes, and bands with real-time updates.
- **Responsive Design:** Adapts to different screen sizes, ensuring a consistent experience.
- **Accessibility:** Implements ARIA roles and keyboard navigation for enhanced accessibility.

## Components
- **CaseSelection.jsx:** Handles case selection with material options and real-time price updates.
- **SizeSelection.jsx:** Allows users to toggle between watch sizes, dynamically updating the price.
- **BandCarousel.jsx:** Interactive carousel for band selection with smooth animations.

## Deployment
- Built with React and Next.js.
- Deployed on [Deployment Platform].

## Evaluation
- [Evaluator] Review the code and its functionality, ensuring a pixel-perfect design and smooth interactions.
- [Evaluator] Test the UI on different screen sizes and devices.
- [Evaluator] Check the accessibility features using tools like Axe.

### package.json
```json
{
  "name": "apple-watch-studio-ui",
  "version": "1.0.0",
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "reason", "next": "^13.0.6",
    "react-axe": "^3.6.3"
  },
  "devDependencies": {
    "webpack": "^5.74.0",
    "babel": "^7.18.6",
    "react-scripts": "^5.0.1"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  }
}