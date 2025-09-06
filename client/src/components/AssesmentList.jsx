import React from "react";
import { useProductStore } from "../store/useProductStore";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

const AssesmentList = () => {
  const { products, deleteProduct } = useProductStore();

  return (
    <div className="productCard">
      <div className="row">
        {products.map((product) => (
          <div className="col-12 col-md-6 col-lg-3 mb-3" key={product.id}>
            <div className="card h-100 shadow-sm">
              <img
                src={product.image || "https://via.placeholder.com/150"}
                className="card-img-top"
                alt={product.name}
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "200px",
                  borderRadius: "0.5rem 0.5rem 0 0",
                }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title fw-bold text-truncate">{product.name}</h5>
                <p className="card-text mb-2">
                  <span className="fw-semibold">Price:</span> ${product.price}
                </p>
                <div className="mt-auto d-flex justify-content-between align-items-center">
                  <a href="#" className="btn btn-primary btn-sm">View Product</a>
                  <div>
                    <Link to={`/product/${product.id}`}>
                      <button className="btn btn-outline-secondary btn-sm me-2" title="Edit">
                        <FaEdit />
                      </button>
                    </Link>
                    <button
                      className="btn btn-outline-danger btn-sm"
                      title="Delete"
                      onClick={() => {
                        if (window.confirm("Are you sure you want to delete this product?")) {
                          deleteProduct(product.id);
                        }
                      }}
                    >
                      <FaTrash />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AssesmentList;