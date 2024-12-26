import asyncio

# Helper function to handle large lists of domains
async def crawl_domains_helper(domains, function):
    tasks = [asyncio.create_task(function(domain)) for domain in domains]
    return await asyncio.gather(*tasks)