# Weather App

This is a simple React-based Weather Application that allows users to search for current weather conditions in any city. The app fetches weather data from the OpenWeatherMap API and displays it in an easy-to-read format.

## Screenshot

<div align="center">
  <img src="https://github.com/user-attachments/assets/e8c58882-3610-4290-8cfa-3d783535ab93" alt="Weather App Screenshot" width="600"/>
</div>

## Features

- **City Search**: Enter a city name to get the current weather information.
- **Weather Details**: Displays temperature, humidity, and wind speed.
- **Dynamic Weather Icons**: Shows different icons based on the current weather conditions.
- **Error Handling**: Alerts users when an error occurs, such as entering an invalid city name.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **React Query**: For fetching, caching, and updating asynchronous data in React.
- **OpenWeatherMap API**: Provides current weather data for any location.
- **CSS**: For styling the components.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/weather-app.git
   ```

2. Navigate to the project directory:

   ```bash
   cd weather-app
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file in the root directory and add your OpenWeatherMap API key:

   ```bash
   REACT_APP_API_KEY=your_openweathermap_api_key
   ```

5. Start the development server:

   ```bash
   npm start
   ```

## Usage

1. Enter a city name in the input field.
2. Click on the search icon or press `Enter` to fetch the weather details.
3. The app will display the current temperature, humidity, and wind speed for the entered city.

## Deployment

You can deploy this app to platforms like Vercel, Netlify, or GitHub Pages.

1. Build the project:

   ```bash
   npm run build
   ```

2. Deploy the contents of the `build` folder to your hosting platform.

## Credits

- [OpenWeatherMap](https://openweathermap.org/) for providing the weather data.
- Icons used in the app are sourced from various free icon libraries.

Feel free to contribute to the project or open an issue if you find any bugs!
