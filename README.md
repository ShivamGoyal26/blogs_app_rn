# React Native Blog Post App

This repository contains a React Native application for a blog post app. The app utilizes various libraries and technologies to enhance functionality and user experience.

## Libraries and Technologies Used

- **Redux Toolkit with Redux Persistor**: Utilized for state management and persisted state across app launches and session store support.

- **React Navigation (Version 6)**: Integrated for smooth and efficient navigation within the app.

- **React Drawer Navigation (Version 6)**: Implemented for a fully customise drawer-style for navigation menu.

- **Theming Support**: The app supports theming with the ability to switch between dark and light modes. This feature is achieved using React Navigation and the `useColor` hook.

- **react-native-fast-image**: Employed to cache and load app images faster compared to the native Image component.

- **react-native-config**: Utilized for environment variable management within the app.

- **Axios for API Management**: Axios is used for making HTTP requests to APIs. Interceptors and custom thunk functions are integrated for enhanced API management.

## Installation and Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/ShivamGoyal26/blogs_app_rn.git
   cd task_rn
   ```

2. Install dependencies:

   ```bash
   yarn
   ```

3. Configure environment variables:

   - Create a `.env` file at the root of the project.
   - Define the required environment variables in the `.env` file.

4. Run the app:
   ```bash
   npx react-native run-android
   # or
   npx react-native run-ios
   ```

## Usage

After successfully running the app, you can use and explore the various features such as viewing blog posts, navigating through the app, and switching between light and dark themes.

## Contributing

If you would like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix: `git checkout -b feature/your-feature-name` or `git checkout -b bugfix/your-bug-fix`.
3. Make your changes and commit them: `git commit -m 'Your commit message here'`.
4. Push to the forked repository: `git push origin feature/your-feature-name` or `git push origin bugfix/your-bug-fix`.
5. Create a pull request in the original repository.

## License

This project is licensed under the [MIT License](LICENSE).

Feel free to reach out if you have any questions or concerns. Happy coding!
