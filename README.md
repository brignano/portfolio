# portfolio

## Description

This project is a personal portfolio website built using React. The purpose of this project is to display my resume, showcase my projects, and provide contact information.

## Setup and Run

To set up and run the project, follow these steps:

1. Clone the repository:
   ```
   git clone https://github.com/brignano/portfolio.git
   ```
2. Navigate to the project directory:
   ```
   cd portfolio
   ```
3. Install the dependencies:
   ```
   npm install
   ```
4. Start the development server:
   ```
   npm start
   ```

The application will be available at `http://localhost:3000`.

## Deployment

To deploy the site to GitHub Pages, follow these steps:

1. Ensure the `homepage` field in `package.json` is set to the URL of your GitHub Pages site.
2. Run the following command to build and deploy the site:
   ```
   npm run deploy
   ```

The `predeploy` and `deploy` scripts in `package.json` will handle the build and deployment process.

Additionally, a GitHub Actions workflow is configured in `.github/workflows` to automate the deployment process.

## Contributing

If you would like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Make your changes and commit them with descriptive messages.
4. Push your changes to your forked repository.
5. Create a pull request to the main repository.

Thank you for your contributions!
