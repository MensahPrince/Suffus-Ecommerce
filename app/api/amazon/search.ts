export async function Searchf() {
    const URL = "https://real-time-amazon-data.p.rapidapi.com/search?query=keyboard&page=1&country=US&sort_by=RELEVANCE&product_condition=ALL&is_prime=false&deals_and_discounts=NONE";
    const RAPIDAPI_KEY = process.env.RAPIDAPI_KEY;
    const X_RAPIDAPI_HOST = process.env.X_RAPIDAPI_HOST;

    if (!X_RAPIDAPI_HOST || !RAPIDAPI_KEY){
        throw new Error("Env files cannot be found");
    }

    const OPTIONS = {
        method : "GET",
        headers : {
            'x-rapidapi-key' : RAPIDAPI_KEY,
            'x-rapidapi-host' : X_RAPIDAPI_HOST,
            'Content-Type' : 'application/json',
        }
    };


    try{
        const RESPONSE = await fetch(URL, OPTIONS);
        const RESULT = await RESPONSE.text();

        console.log(RESULT);
    }catch (error){
        console.error("Something is wrong somewhere. Status:", {status : 500});
    }
}