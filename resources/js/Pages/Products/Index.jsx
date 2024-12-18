import { Link } from "@inertiajs/react";
export default function Index({ products }) {
    return (
        <>
            <div>
                <ul>
                    {products.map((products) => (
                        <li key={products.id}>
                            <Link href={`/products/${products.id}`}>
                                {products.name}-${products.price}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}
