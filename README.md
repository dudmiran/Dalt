# AI-Assisted Dynamic Website Creation

This platform dynamically tailors restaurant suggestions based on user location and preferences. By leveraging geolocation data, the website identifies nearby restaurants using Google Places API. Users can specify their dining preferences, such as cuisine type, budget, or dietary restrictions, which are sent to OpenAI's natural language processing model. The AI analyzes this data to curate personalized dining suggestions, providing users with the most suitable restaurant choices.

## Features
- **Geolocation Support**: Automatically fetches user location to find nearby restaurants.
- **Google Places API Integration**: Retrieves real-time data about restaurants in the user's vicinity.
- **AI-Powered Personalization**: Processes user preferences through OpenAI to generate tailored recommendations.
- **Seamless User Experience**: Combines real-time data and advanced AI analysis for enhanced decision-making.

## Getting Started

Follow these instructions to set up and run the project on your local machine.

### Prerequisites
- [Node.js](https://nodejs.org) (LTS version recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ZIHAAAN/Dalt.git
   cd ai-assisted-restaurant-suggestions
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `config.js` file in the project folder /config, and configure the following variables:

const config = {
  GoogleKey: "Your_Google_API_Key",
};
module.exports = config;


### Running the Application

1. Start the server:
   ```bash
   npm start
   ```

2. Open your browser and navigate to:
   http://localhost:3000/index.html
