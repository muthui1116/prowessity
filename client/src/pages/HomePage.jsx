import React, { useEffect } from "react";
import { useProductStore } from "../store/useProductStore";
import { GoPackage } from "react-icons/go";
import AssesmentList from "../components/AssesmentList";
import AuthButtons from "../components/AuthButtons";
import AddProductModal from "../components/AddProductModal";

function HomePage() {
  const { products, loading, error, fetchProducts } = useProductStore();

  useEffect(() => {
    fetchProducts();
    // Only run on mount. If you want to refetch on demand, use a button.
    // eslint-disable-next-line
  }, []);

  return (
    <div className="bg-transparent">
      <nav className="navbar navbar-expand-lg bg-transparent">
        <a className="navbar-brand" href="#">
          <button
            className="btn btn-outline-secondary rounded-5 me-auto"
            data-bs-toggle="modal"
            data-bs-target="#add_product_modal"
            onClick={() => document.getElementById("add_product_modal")}
          >
            Add Course
          </button>
        </a>
        <div className="ms-auto d-flex align-items-center">
          <AuthButtons />
        </div>
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
    </div>
  );
}

export default HomePage;