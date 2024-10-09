# DSA Visualizer

## Overview

DSA Visualizer is a web application designed to visualize various data structures and algorithms (DSA) interactively. Users can select different algorithms, customize their inputs, and view step-by-step visualizations to enhance their understanding of these algorithms. This project focuses on graph algorithms (BFS, DFS), tree visualizations, and more.

## Features

- **Algorithm Selection**: Choose from various algorithms to visualize.
- **Custom Input**: Customize the input for each algorithm (e.g., grid size, start/end nodes).
- **Step-by-Step Description**: Get detailed explanations of each step in the algorithm.
- **Responsive Design**: Works on various devices and screen sizes.
- **Reset and Retry**: Options to reset the visualization for a fresh start.

## Technologies Used

- React
- Vite
- React Router DOM
- CSS for styling
- Custom hooks for algorithm visualization

## Project Structure

```

/dsa-visualizer
├── /public
├── /src
│ ├── /components
│ │ ├── AlgorithmSelector.jsx
│ │ ├── BFSVisualizer.jsx
│ │ ├── DFSVisualizer.jsx
│ │ ├── TreeVisualizer.jsx
│ ├── /hooks
│ │ ├── useBFSVisualization.js
│ │ ├── useDFSVisualization.js
│ │ ├── useTreeVisualization.js
│ ├── /pages
│ │ ├── Home.jsx
│ │ ├── AlgorithmPage.jsx
│ ├── App.jsx
│ ├── index.jsx
│ ├── index.css

```

## Installation

1. Clone the repository:

```
   git clone https://github.com/Pushparaj13811/dsa-visualizor.git
   cd dsa-visualizer
```

2. Install the dependencies:

```
   npm install
```

3. Start the development server:

```
    npm run dev
```

4. Open your browser and go to `http://localhost:3000`.

## Usage

1. Choose an algorithm from the list on the home page.
2. Customize the input settings as needed.
3. Click on the "Start Visualization" button to begin the visualization.
4. Follow the steps displayed to understand how the algorithm works.
5. Use the "Reset" button to clear the visualization and start over.

## Contributing

Contributions are welcome! Please feel free to open issues or submit pull requests.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- This project is inspired by the need for better understanding and visualization of data structures and algorithms.
- Special thanks to online resources and tutorials that guided the development of this project.
