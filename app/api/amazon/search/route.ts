import { NextRequest } from "next/server";
import { searchAmazonProducts } from "@/lib/amazon";

export async function GET(request: NextRequest) {
  const query = request.nextUrl.searchParams.get("query") || "laptop";

  try {
    const data = await searchAmazonProducts(query);
    return Response.json(data);
  } catch (error) {
    console.error(error);
    return Response.json({ error: "Failed to fetch search results" }, { status: 500 });
  }
}
