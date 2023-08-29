# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm install`

Installs the necessary packages.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.


# Analysis of various library for graph visualization

### Library 1: [D3.js](https://www.npmjs.com/package/d3)

Pros:

Highly customizable and versatile for complex visualizations.
Supports a wide range of graph types and interactions.
Strong community and documentation.
Can be integrated with React using wrappers like react-d3-library or react-faux-dom.
Cons:

Steeper learning curve due to its flexibility and complexity.
Requires more effort for handling interactions compared to some dedicated graph libraries.
Might need additional work for responsiveness and mobile-friendly designs.
Reasoning: D3.js provides a lot of flexibility for creating custom graph visualizations. It can cover all the scenarios you've mentioned, but it might require more development effort and time due to its low-level nature and complex learning curve.

### Library 2: [Cytoscape.js](https://www.npmjs.com/package/cytoscape)

Pros:

Designed specifically for graph visualization, making it easier to work with for these scenarios.
Good performance even for large graphs.
Supports various layouts and styles.
Has built-in support for interactions like collapsing, expanding nodes, filtering, and zooming.
Can be integrated with React using the cytoscape-react wrapper.
Cons:

Customization might be limited compared to something like D3.js, but it's often sufficient for many use-cases.
Learning the API and integrating it with React might still require some effort.
Reasoning: Cytoscape.js is a more specialized library for graph visualization and might offer a more out-of-the-box experience compared to D3.js for your specific use-cases.

### Library 3: [Vis.js](https://github.com/visjs)

Pros:

Simplified API for graph visualization.
Good performance for medium-sized graphs.
Supports various layouts, interactions, and customization options.
Provides network events for handling interactions.
Has a React wrapper called react-vis-network.
Cons:

May not handle very large graphs as efficiently as some other libraries.
Customization might be limited compared to more versatile libraries.
Reasoning: Vis.js could be a good balance between ease of use and functionality, especially if your graphs are not extremely large and complex.