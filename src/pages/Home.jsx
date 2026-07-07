import { Link } from "react-router-dom";
import { getProducts } from "../data/products";
import ProductCard from "../components/Productcard";

export default function Home() {
    const products = getProducts();

    return (
        <div className="page">  
            <div className="home-hero">
                <h1 className="home-title">
                    Welcome to Shop hub
                </h1>
                <p className="home-subtitle">
                    Discover amzing products
                </p>
            </div>

            <div className="container">
                <h2 className="page-title">
                    Our Products
                </h2>

                <div className="product-grid">
                    {products.map((product) => (
                        <ProductCard product={product} key={product.id} />
                    ))}
                </div>
            </div>
        </div>
    );
}