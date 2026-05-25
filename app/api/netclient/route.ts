export async function GET() {
  const API_URL = 'https://netflix54.p.rapidapi.com/title/details/?ids=80057281&lang=en';

  const API_KEY = process.env.RAPIDAPI_KEY;

  if (!API_KEY) {
    return Response.json({ error: "Missing API key" }, { status: 500 })
  }

  const OPTIONS = {
    method: "GET",
    headers: {
      "x-rapidapi-host": "netflix54.p.rapidapi.com",
      "x-rapidapi-key": API_KEY,
      "Content-Type": "application/json",
    },
  }

  const response = await fetch(API_URL, OPTIONS)
  const result = await response.text()

  return Response.json({ ok : true })
}
