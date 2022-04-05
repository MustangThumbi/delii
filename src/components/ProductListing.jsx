import React from "react";
import { useSelector } from "react-redux";
const ProductListing = () => {
    const {products} = useSelector((state) => state.productsState);

    return (
        <div className="m-4">
            <div className="row">
                {products.map((product, i) => (
                    <div
                        key={i}
                        className="col col-12 col-sm-6 col-md-4 col-lg-3 rounded border m-2"
                    >
                        <img
                            style={{
                                width: "100%",
                            }}
                            src={product.image}
                            alt=""
                            className="rounded image-responsive"
                        />
                        <div className="d-flex justify-content-between align-items-center">
                            <h4 className="my-2">{product.title}</h4>
                            <strong>{product.price}</strong>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductListing;
