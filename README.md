# CNN Real-Time News Scraper

## Overview
This project is a backend application built with Node.js to scrape real-time news articles from CNN. It utilizes web scraping techniques to extract data from CNN's website and provides an API endpoint to access the latest news articles.

## Features
- **Real-time Scraping**: Scrapes news articles in real-time from CNN's website.
- **API Endpoint**: Provides an API endpoint to access the scraped news articles.
- **Customizable**: Easily customizable to scrape news from different sections or sources of CNN.

## Setup
1. Clone the repository:
   ```
   git clone https://github.com/your_username/cnn-news-scraper.git
   ```
2. Install dependencies:
   ```
   npm install
   ```
3. Start the server:
   ```
   npm start
   ```

## Usage
- **API Endpoint**: Access the latest news articles by sending a GET request to `/api/news`.

## Example
```bash
curl http://localhost:3000/api/news
```

## Dependencies
- `axios`: For making HTTP requests to CNN's website.
- `cheerio`: For parsing HTML and extracting data from web pages.

## Front-End
For a front-end application that consumes the API provided by this backend, check out the [CNN News Front-End](https://newsweb-i8wp.onrender.com).

## Contributing
Contributions are welcome! Feel free to open an issue or submit a pull request.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.