import { Link } from "react-router-dom";

export default function ProductCard({product}) {

    return (
        <div className="pruduct-card">
            <img src={product.image} className="product-card-image"></img>
            <div className="product-card-content">
                <h3 className="product-card-content">
                    {product.name}
                </h3>
                <p className="product-card-price">
                    {product.price}
                </p>
                <div className="product-card-actions">
                    <Link className="btn btn-secondary">
                        View Details
                    </Link>

                    <button className="btn btn-primary">
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    );
}