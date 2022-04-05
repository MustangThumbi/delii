import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProductAction } from "../redux/actions/productActions";

const AddProductForm = () => {
    const [image, setImage] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");

    const [addingProduct, setAddingProduct] = useState(false);

    const dispatch =  useDispatch();

    const handleAddProduct = () => {

        dispatch(addProductAction({
            image,
            title,
            description,
            price,
        }))

        setImage("")
        setTitle("")
        setPrice("")
        setDescription("")
        setAddingProduct(false)
    };

    return (
        <div>
            <div className="m-4 d-flex justify-content-end">
                <label htmlFor="">
                    <input
                        value={addingProduct}
                        onChange={(e) => setAddingProduct(e.target.checked)}
                        type="checkbox"
                        name=""
                        id=""
                    />{" "}
                    Add product
                </label>
            </div>
            {addingProduct && (
                <div className="row">
                    <div
                        style={{ margin: "auto" }}
                        className="my-5 col-12 col-md-8 col-lg-6"
                    >
                        <div className="form-group">
                            <label htmlFor="">Image</label>
                            <input
                                value={image}
                                onChange={(e) => setImage(e.target.value)}
                                type="text"
                                className="mt-2 form-control"
                            />
                        </div>
                        <div className="form-group my-2">
                            <label htmlFor="">Title</label>
                            <input
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                type="text"
                                className="mt-2 form-control"
                            />
                        </div>
                        <div className="form-group my-2">
                            <label htmlFor="">Description</label>
                            <textarea
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                type="text"
                                className="mt-2 form-control"
                            ></textarea>
                        </div>
                        <div className="form-group my-2">
                            <label htmlFor="">Price</label>
                            <input
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                type="number"
                                className="mt-2 form-control"
                            />
                        </div>
                        <div className="my-4">
                            <button
                                onClick={handleAddProduct}
                                className="btn btn-primary"
                            >
                                Add Product
                            </button>
                        </div>
                    </div>
                </div>
            )}
            
        </div>
    );
};

export default AddProductForm;
