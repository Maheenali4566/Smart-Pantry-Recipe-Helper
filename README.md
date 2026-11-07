# Smart Pantry & Recipe Helper

A React and Vite web application for managing pantry items and helping users organize recipes and shopping needs.

## Features

- User-friendly React interface
- Login and signup screens for the demo experience
- Pantry and inventory management interface
- Shopping-list functionality
- Recipe-helper interface
- Responsive layout

> **Note:** This repository currently contains the frontend application. If authentication or app data is stored in browser `localStorage`, it is demo/local-browser storage—not secure server-side authentication or a shared database. Add a backend and database before using it for real user accounts or production data.

## Tech Stack

- React
- Vite
- JavaScript
- CSS

## Prerequisites

Install a current supported version of [Node.js](https://nodejs.org/). npm is included with Node.js.

Check your installation:

```bash
node -v
npm -v
```

## Run Locally

1. Clone the repository:

   ```bash
   git clone https://github.com/Maheenali4566/Smart-Pantry-Recipe-Helper.git
   ```

2. Open the project directory:

   ```bash
   cd Smart-Pantry-Recipe-Helper
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL printed in the terminal (usually `http://localhost:5173`).

## Production Build

Create an optimized production build:

```bash
npm run build
```

Preview the build locally:

```bash
npm run preview
```

The production files are generated in the `dist/` directory.

## Deployment

This project can be deployed using GitHub Pages. Configure Vite's `base` path to match the GitHub repository name, then add a GitHub Actions workflow to build and publish the `dist/` directory.

For this repository, the base path is:

```js
base: '/Smart-Pantry-Recipe-Helper/',
```

See the repository's GitHub Pages settings and workflow configuration for the deployment status.

## Project Structure

```text
Smart-Pantry-Recipe-Helper/
├── public/
├── src/
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

Your actual project may contain additional files and folders.

## Contributing

1. Create a branch for your changes.
2. Make and test your updates.
3. Commit your changes with a clear message.
4. Push the branch and open a pull request.

## License

Add a license file if you intend to distribute this project for reuse. Until a license is added, the source code is not granted an open-source license by this README.
