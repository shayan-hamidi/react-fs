# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

# Project Architecture Report

## Overview

This project is organized using a combination of **monorepo** and **modular architecture**. This approach provides a scalable, maintainable, and reusable codebase that is particularly well-suited for large-scale applications. By organizing the code into distinct modules within a single repository, we can simplify dependency management, encourage code reuse, and maintain consistency across the project.

### Monorepo Structure

The project is housed within a single repository, known as a **monorepo**. This structure allows all code for different packages and modules to coexist in one place, which simplifies the management of dependencies and ensures that all teams can work with a consistent set of tools and standards.

### Modular Architecture

Within the monorepo, the code is organized into self-contained **modules**. Each module is responsible for a specific piece of functionality, such as UI components, forms, utilities, or pages. This modular approach enhances reusability and maintainability by isolating concerns, making it easier to develop, test, and maintain each part of the codebase independently.

## Benefits of the Architecture

- **Reusability**: Components, services, and utilities are organized into modules, allowing them to be reused across different parts of the application.
- **Maintainability**: The modular design ensures that changes in one module do not affect others, making it easier to maintain and update the codebase.
- **Scalability**: New features can be added in new modules without impacting existing code, enabling the application to scale efficiently.
- **Consistency**: A single repository ensures that coding standards, tooling, and dependencies are consistent across the entire project.

## Development

To set up the project for development, follow these steps:

1. **Install dependencies**:

    Using npm:

    ```bash
    npm install
    ```

    Or using Yarn:

    ```bash
    yarn
    ```

2. **Start the development server**:

    Using npm:

    ```bash
    npm run dev
    ```

    Or using Yarn:

    ```bash
    yarn dev
    ```

This will start the development server and you can access the application on `http://localhost:3000`.

## Sentry Usage

To enable Sentry monitoring for the application:

1. **Add the .env file**:

   Copy the `.env.example` file into a new `.env` file and fill in your Sentry account details, including the project-specific `SENTRY_DSN` and other relevant keys.Sentry starts monitoring after running development server.


## Dockerizing the Application

To run the application using Docker, follow these steps:

1. **Build the Docker image**:

    ```bash
    docker build -t my-react-app .
    ```

2. **Run the Docker container**:

    ```bash
    docker run -p 3000:3000 my-react-app
    ```

This will build the application into a Docker image and then run it on port 3000 of your local machine.
## Folder Structure

Below is the detailed structure of the project, which illustrates the organization of the code into different packages and modules:

```plaintext
root/
│
├── packages/
│    ├── core
│        ├── Atom                  # Independ components
│            ├── Button
│            └── Chip
│        └── Organ                 # components which are using Atom or big enough to known as a organization
│            ├── Table
│            └── Accordion
│    ├── form
│        ├── ErrorMessage
│        ├── FormFields
│            ├── AutoComplete
│            └── Input
│        ├── FormProvider
│        ├── useExtractErrorInfo
│        └── validators           # form validators
│    └── utils
│        ├── http                 # http system as useService hook, axios instance, ...
│            ├── getInstance
│            ├── qureyClient
│            └── useService
│        ├── PageProvider                 # each page context (involve page services, i18n, entity name, ...)
│            ├── Context
│            └── Provider
│        ├── theme                 # Theming utilities (colors, fonts, etc.)
│        ├── breakpoints           # Media query breakpoints for responsive design
│        ├── i18next               # Internationalization configuration and utilities
│        └── helper                # General utility functions
│
├── public/
│    └── react.svg                 # Static asset (SVG image of React logo)
│
├── src/
│   ├── assets/
|       ├── fonts/
│       └── images/
│           └── pdf.svg          # Example of an image asset (PDF icon)
│   ├── common/
|       ├── components/
│           └── NotFoundPage         # A common "404 Not Found" page component
│       └── hooks/
│           └── useVersion           # Custom hook to manage versioning
│
│   ├── i18n/
│        ├── en.json                 # English translations
│        └── fa.json                 # Farsi (Persian) translations
│   ├── pages/
│       └── Login/
│           ├── components/        # Components specific to the Login page
│           ├── i18n/              # Translations specific to the Login page
│           ├── index.tsx          # Main file for the Login page
│           ├── SubPages/          # Directory for subpages under Login, if any
│           └── loginService.ts    # Service functions related to Login
│
│   ├── routes/
│       └── AppRoutes.tsx        # Application routing configuration
│   ├── App.css                  # Global CSS for the application
│   ├── App.tsx                  # Main application component
│   ├── i18nConfig.ts            # Configuration file for internationalization
│   ├── index.css                # Global CSS settings
│   ├── main.tsx                 # Entry point for the application
│   └── vite-env.d.ts            # TypeScript environment configuration for Vite
│
├── .dockerignore                # Ignore files in docker
├── .eslintrc.cjs                # ESLint configuration file
├── .gitignore                   # Git ignore file to exclude specific files from version control
├── .prettierignore              # Files to ignore for Prettier formatting
├── .prettierrc.json             # Prettier configuration file
├── Dockerfile                   # Docker file config
├── index.html                   # Main HTML file for the application
├── package.json                 # Project metadata and dependencies
├── README.md                    # Project documentation
├── tsconfig.json                # TypeScript configuration file
├── tsconfig.node.json           # TypeScript configuration for Node.js
├── vite.config.ts               # Configuration for Vite build tool
└── yarn.lock                    # Yarn lock file for consistent dependency resolution
```
