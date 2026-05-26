export async function GET() {
    const API_URL_BY_CATEGORY = "https://real-time-amazon-data.p.rapidapi.com/products-by-category?category_id=281407&page=1&country=US&sort_by=RELEVANCE&product_condition=ALL&is_prime=false&deals_and_discounts=NONE";
    const API_KEY = process.env.RAPIDAPI_KEY;
    const X_RAPIDAPI_HOST = process.env.X_RAPIDAPI_HOST;

    if (!API_KEY || !X_RAPIDAPI_HOST) {
        return Response.json({ error: "Missing required environment variables" }, { status: 500 });
    }

    const OPTIONS = {
        method: "GET",
        headers: {
            'x-rapidapi-key': API_KEY,
            'x-rapidapi-host': X_RAPIDAPI_HOST,
            'Content-Type': 'application/json',
        }
    };

    try {
        const response = await fetch(API_URL_BY_CATEGORY, OPTIONS);
        const data = await response.json();
        return Response.json(data);
    } catch (error) {
        console.error(error);
        return Response.json({ error: "Failed to fetch Amazon data" }, { status: 500 });
    }
}
