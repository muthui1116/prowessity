import React, { useEffect } from 'react'
import { useProductStore } from '../store/useProductStore'
import { useNavigate, useParams } from 'react-router-dom'
import { FaArrowLeft, FaSave, FaTrash } from 'react-icons/fa'

function ProductPage() {
  const {
    currentProduct,
    formData,
    setFormData,
    loading,
    error,
    fetchProduct,
    updateProduct,
    deleteProduct
  } = useProductStore()

  const navigate = useNavigate()
  const { id } = useParams()

  useEffect(() => {
    if (id) {
      fetchProduct(id)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      await deleteProduct(id);
      navigate("/");
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateProduct(id);
    navigate("/");
  }

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center min-vh-100">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container py-5">
        <div className="alert alert-danger">{error}</div>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <button
        type="button"
        onClick={() => navigate('/')}
        className="btn btn-outline-secondary mb-4 d-flex align-items-center"
      >
        <FaArrowLeft className="me-2" />
        Back to Products
      </button>
      {/* Bootstrap row with two columns: image and update info */}
      <div className="row g-0 align-items-stretch" style={{ minHeight: '400px' }}>
        {/* LEFT COLUMN: IMAGE */}
        <div className="col-md-6 d-flex align-items-stretch">
          <div className="card w-100 h-100 shadow-lg border-0">
            <img
              src={currentProduct?.image}
              alt={currentProduct?.name}
              className="card-img-top"
              style={{ height: "100%", maxHeight: "400px", objectFit: "cover" }}
            />
          </div>
        </div>
        {/* RIGHT COLUMN: FORM */}
        <div className="col-md-6 d-flex align-items-stretch">
          <div className="card w-100 h-100 shadow-lg border-0">
            <div className="card-body d-flex flex-column justify-content-center">
              <h2 className="card-title h4 mb-3">Edit Product</h2>
              <form
                className="flex-grow-1 d-flex flex-column justify-content-between"
                onSubmit={handleSubmit}
              >
                <div>
                  {/* PRODUCT NAME */}
                  <div className="mb-2">
                    <label className="form-label">
                      Product Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter product name"
                      className="form-control"
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  {/* PRODUCT PRICE INPUT  */}
                  <div className="mb-2">
                    <label className="form-label">
                      Price
                    </label>
                    <input
                      type="number"
                      min="0"
                      step="0.01"
                      placeholder="0.00"
                      className="form-control"
                      value={formData.price}
                      onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                    />
                  </div>
                  {/* PRODUCT IMAGE  */}
                  <div className="mb-2">
                    <label className="form-label">
                      Image URL
                    </label>
                    <input
                      type="text"
                      placeholder="https://example.com/image.jpg"
                      className="form-control"
                      value={formData.image}
                      onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                    />
                  </div>
                </div>
                {/* FORM ACTIONS */}
                <div className="d-flex justify-content-between mt-3">
                  <button
                    type="button"
                    onClick={handleDelete}
                    className="btn btn-danger"
                  >
                    <FaTrash className="me-2" />

                  </button>

                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={
                      loading ||
                      !formData.name ||
                      !formData.price ||
                      !formData.image
                    }
                  >
                    {loading ? (
                      <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                    ) : (
                      <FaSave className="me-2" />
                    )}

                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductPage