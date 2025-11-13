# Tirupati Universal Repair Hub

This is the official website for the Tirupati Universal Repair Hub, a premier service center for electronic appliance repairs and training in Tirupati.

## About The Project

This project is a single-page, fully responsive website designed to showcase the services offered by Tirupati Universal Repair Hub. It allows customers to learn about the company, view repair services, understand the training programs, and submit inquiries for both repairs and training.

## Tech Stack

This project is built with a modern, component-based architecture using the following technologies:

*   **[Next.js](https://nextjs.org/)** - A React framework for production-grade applications.
*   **[React](https://reactjs.org/)** - A JavaScript library for building user interfaces.
*   **[Tailwind CSS](https://tailwindcss.com/)** - A utility-first CSS framework for rapid UI development.
*   **[ShadCN/UI](https://ui.shadcn.com/)** - A collection of re-usable UI components.
*   **[TypeScript](https://www.typescriptlang.org/)** - A typed superset of JavaScript that compiles to plain JavaScript.

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

You need to have Node.js and npm (or yarn/pnpm) installed on your machine.
*   You can download Node.js from [here](https://nodejs.org/).

### Installation

1.  Clone the repository to your local machine:
    ```sh
    git clone https://github.com/your-username/your-repository.git
    ```
2.  Navigate to the project directory:
    ```sh
    cd your-repository
    ```
3.  Install NPM packages:
    ```sh
    npm install
    ```

### Running the Development Server

To start the development server, run the following command. This will start the app on `http://localhost:3000`.

```sh
npm run dev
```

## Deployment to Netlify

This project is ready to be deployed on Netlify. Here’s how to do it:

1.  **Push to GitHub:** Make sure all your code is pushed to a GitHub repository.
2.  **Sign up/Log in to Netlify:** Go to [Netlify](https://www.netlify.com/) and create an account or log in.
3.  **Create a New Site:** From your Netlify dashboard, click "Add new site" and choose "Import an existing project" from a Git provider.
4.  **Connect to GitHub:** Select GitHub and authorize Netlify to access your repositories. Choose the repository for this project.
5.  **Configure Build Settings:** Netlify will automatically detect that this is a Next.js project and configure the build settings for you. The standard settings are:
    *   **Build Command:** `npm run build` or `next build`
    *   **Publish Directory:** `.next`
6.  **Deploy Site:** Click the "Deploy site" button. Netlify will start building and deploying your website.
7.  **Change Your Site Name:** After deployment, Netlify will assign a random URL (e.g., `random-name-123.netlify.app`). To change it:
    *   Go to your site's dashboard on Netlify.
    *   Click on **"Site configuration"** or **"Domain settings"**.
    *   Under "Site details", you'll see an option to **"Change site name"**.
    *   Enter your desired name, like `turhraju`. If it's available, your new URL will be `https://turhraju.netlify.app`.
