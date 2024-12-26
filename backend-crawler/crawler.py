import scrapy
import requests
import asyncio
from bs4 import BeautifulSoup


async def discover_product_urls(domain):
    response = await asyncio.get(domain)
    soup = BeautifulSoup(response.text, 'html.parser')
    product_urls = soup.find_all('a', class_='product-link')
    return [url['href'] for url in product_urls]


async def crawl_domains(domains):
    tasks = []
    for domain in domains:
        tasks.append(asyncio.create_task(discover_product_urls(domain)))
    return await asyncio.gather(*tasks)


# List of domains to crawl
domains = ['example.com', 'anotherexample.com', ...]


# Main async function to call other functions
async def main():
    # Discover and save product URLs
    discovered_urls = {}
    for domain in domains:
        urls = await crawl_domains([domain])
        discovered_urls[domain] = urls

    # Save discovered URLs to a file
    with open('urls.txt', 'w') as file:
        for domain, urls in discovered_urls.items():
            file.write(f"{domain}\n")
            for url in urls:
                file.write(f"{url}\n")

    # Call the main function
    asyncio.run(main())