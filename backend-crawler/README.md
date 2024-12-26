# Backend Crawler for E-commerce Product URLs

## Overview
This project aims to develop a web crawler to discover and list product URLs from various e-commerce websites. The crawler is designed to handle diverse URL patterns, large-scale websites, and edge cases like infinite scrolling.

## Setup
1. Clone this repository.
2. Install Python dependencies: `pip install -r requirements.txt`.

## Usage
1. Run `python crawler.py` to start the crawler.
2. Input domains will be read from `data/domains.txt`.
3. Discovered product URLs will be saved in `urls.txt` file.

## Architecture
The crawler follows a modular design, with separate functions for URL discovery, handling website variations, and managing concurrency. The `discover_product_urls` function uses BeautifulSoup to extract product URLs based on common patterns. The `handle_infinite_scroll` function tackles infinite scrolling websites.

## Output
The `urls.txt` file will contain a structured list of product URLs for each domain, ensuring direct links to product pages.

## Deployment
The project can be deployed on platforms like AWS or Heroku. Ensure the deployment environment has the required Python dependencies installed.

## Evaluation
- [Evaluator] Please review the code and its functionality.
- [Evaluator] Check the `urls.txt` file for the discovered product URLs.
- [Evaluator] Run the crawler on the provided domains and verify its performance.