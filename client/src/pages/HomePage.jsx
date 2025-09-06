import React, { useEffect } from "react";
import { useProductStore } from "../store/useProductStore";
import { GoPackage } from "react-icons/go";
import AssesmentList from "../components/AssesmentList";
import AddProductModal from "../components/AddProductModal";


function HomePage() {
  const { products, loading, error, fetchProducts } = useProductStore();

  useEffect(() => {
    fetchProducts();
    // Only run on mount. If you want to refetch on demand, use a button.
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-transparent">
        <a className="navbar-brand" href="#">
          <button className="btn btn-outline-secondary rounded-5 " data-bs-toggle="modal"
            data-bs-target="#add_product_modal" onClick={() => document.getElementById("add_product_modal")}>
            Add Product
          </button>
        </a>
        <ul className="navbar-nav ms-auto">
          <button
            className="btn btn-outline-secondary btn-circle"
            onClick={fetchProducts}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-clockwise"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2z"
              />
              <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466" />
            </svg>
          </button>
        </ul>
      </nav>

      <AddProductModal />

      <main className="home-page-main">
        {error && (
          <div className="alert alert-danger mb-8" role="alert">
            {error}
          </div>
        )}

        {products.length === 0 && !loading && (
          <div className="d-flex flex-column justify-content-center align-items-center" style={{ height: '24rem', gap: '1.5rem' }}>
            <div className="bg-light rounded-circle p-4 d-flex justify-content-center align-items-center">
              <GoPackage style={{ fontSize: '3rem' }} />
            </div>
            <div className="text-center mb-2">
              <h3 className="h3 fw-semibold">No products found</h3>
              <p className="text-muted w-57 mx-auto">
                Get started by adding your first product to the inventory
              </p>
            </div>
          </div>
        )}

        {loading ? (
          <div className="d-flex justify-content-center align-items-center" style={{ height: "200px" }}>
            <div
              className="spinner-border"
              role="status"
              style={{ width: "4rem", height: "4rem" }}
            ></div>
          </div>
        ) : (
          <div className="">
            <AssesmentList />
          </div>
        )}
      </main>
    </>
  );
}

export default HomePage;