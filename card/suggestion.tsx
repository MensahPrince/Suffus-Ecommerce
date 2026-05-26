import Image from "next/image";
import { getAmazonProducts } from "@/lib/amazon";

export default async function SuggestionCard() {
    const DATA = await getAmazonProducts();

    const PRODUCTS = DATA.data.products;

    return (
        <>
            <section className="px-6 py-16">

                {/* Section Header */}
                <div className="mb-8">
                    <h2 className="text-3xl font-bold text-gray-900">Suggested Products</h2>
                    <p className="text-gray-500 mt-1 text-sm">Top picks from Amazon for you</p>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                    {PRODUCTS.map((product: any) => (
                        <a
                            key={product.asin}
                            href={product.product_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex flex-col bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200"
                        >
                            {/* Product Image */}
                            <div className="relative w-full aspect-square bg-gray-50 overflow-hidden">
                                <Image
                                    src={product.product_photo}
                                    alt={product.product_title}
                                    fill
                                    className="object-contain p-3 group-hover:scale-105 transition-transform duration-200"
                                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 16vw"
                                />
                            </div>

                            {/* Product Info */}
                            <div className="flex flex-col gap-1 p-3 flex-1">
                                <p className="text-xs text-gray-700 font-medium leading-snug line-clamp-2">
                                    {product.product_title}
                                </p>

                                <div className="mt-auto pt-2 flex items-center justify-between">
                                    <span className="text-sm font-bold text-gray-900">
                                        {product.product_price}
                                    </span>
                                    <span className="text-xs text-yellow-500 font-medium">
                                        ⭐ {product.product_star_rating}
                                    </span>
                                </div>

                                {product.sales_volume && (
                                    <p className="text-[10px] text-gray-400">{product.sales_volume}</p>
                                )}
                            </div>
                        </a>
                    ))}
                </div>
            </section>
        </>
    );
}