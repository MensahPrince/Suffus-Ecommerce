const CATEGORY_URL =
  "https://real-time-amazon-data.p.rapidapi.com/products-by-category?category_id=281407&page=1&country=US&sort_by=RELEVANCE&product_condition=ALL&is_prime=false&deals_and_discounts=NONE";

function getHeaders() {
  const API_KEY = process.env.RAPIDAPI_KEY;
  const HOST = process.env.X_RAPIDAPI_HOST;

  if (!API_KEY || !HOST) {
    throw new Error("Missing required environment variables: RAPIDAPI_KEY or X_RAPIDAPI_HOST");
  }

  return {
    "x-rapidapi-key": API_KEY,
    "x-rapidapi-host": HOST,
    "Content-Type": "application/json",
  };
}

export async function getAmazonProducts() {
  const response = await fetch(CATEGORY_URL, {
    headers: getHeaders(),
    next: { revalidate: 3600 }, // cache for 1 hour
  });

  if (!response.ok) {
    throw new Error(`Amazon API error: ${response.status}`);
  }

  return response.json();
}

export async function searchAmazonProducts(query: string) {
  const url = `https://real-time-amazon-data.p.rapidapi.com/search?query=${encodeURIComponent(query)}&page=1&country=US&sort_by=RELEVANCE&product_condition=ALL&is_prime=false&deals_and_discounts=NONE`;

  const response = await fetch(url, {
    headers: getHeaders(),
  });

  if (!response.ok) {
    throw new Error(`Amazon search API error: ${response.status}`);
  }

  return response.json();
}
