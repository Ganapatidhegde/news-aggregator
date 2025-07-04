# News Aggregator React App

A responsive React-based news aggregator that fetches articles from:

- NewsAPI
- The Guardian API
- New York Times API

## 🌟 Features

- Keyword, category, and date filtering
- Toggle sources (NewsAPI, NYT, Guardian)
- Responsive design with smooth UI

## 🚀 Tech Stack

- React
- JavaScript (ES6+)
- CSS (custom styling)
- Axios

## 🛠 Setup Instructions

1. Clone the repo:
   ```bash
   git clone https://github.com/ganapatidhegde/news-aggregator.git
   cd news-aggregator
   npm install
   npm start



   ## 🐳 Running the Project with Docker

### 1. Build the Docker image

## 🐳 Running the Project with Docker
docker build -t news-aggregator-frontend .


## Run the container
docker run -d -p 3000:80 news-aggregator-frontend
