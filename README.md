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

## Building for Production

To create a production-ready build of the application, run the following command. This will generate an optimized build in the `.next` folder.

```sh
npm run build
```
Netlify will typically run this command automatically when you deploy.

## Deployment

This project is ready to be deployed on any static hosting service that supports Next.js, such as **Netlify**, Vercel, or Firebase Hosting.

For Netlify, you can connect your GitHub repository, and it will automatically detect the build settings.
*   **Build Command:** `npm run build`
*   **Publish Directory:** `.next`
