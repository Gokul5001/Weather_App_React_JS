# WeatherApp

WeatherApp is a simple application demonstrating role-based access control (RBAC) and integration with an Express server for permission management.

## Overview

WeatherApp allows users to view weather data based on their assigned roles. The application distinguishes between "admin" and "guest" roles, with different permissions for accessing weather information.

## Features

- **Role Selection**: Users can choose between "admin" and "guest" roles using a dropdown menu.
- **Permission Enforcement**: The application enforces permissions when fetching weather data. Admins have full access, while guests have restricted access.
- **Error Handling**: Basic error handling ensures users are notified when permissions are denied or when weather data retrieval fails.
- **Integration with Express Server**: The backend server (`opal-server.js`) evaluates permissions based on role and action (`search-weather`).

## Setup

To run the WeatherApp locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/WeatherApp.git
   cd WeatherApp
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the server**:
   ```bash
   node opal-server.js
   ```

   This will start the Express server on `http://localhost:3000`.

4. **Start the frontend**:
   ```bash
   npm start
   ```

   This will start the React development server and open the WeatherApp in your default web browser.

## Usage

- Select a role ("admin" or "guest") from the dropdown.
- Click the "Search Weather" button to fetch weather data.
- Depending on your role, you will either see weather information or a message indicating access is denied.

## Technologies Used

- React
- Express
- JavaScript
- Node.js
- Express

## Future Enhancements

- **Advanced Policy Management**: Consider integrating OPAL for more robust policy definition and management.
- **UI/UX Improvements**: Enhance the user interface with better error handling and visual feedback.
- **Testing**: Implement unit tests to ensure functionality and permission enforcement.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your improvements.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Inspired by challenges in learning role-based access control and API integration.
