 import React from 'react'
import { useProductStore } from '../store/useProductStore';
import { FaDollarSign, FaImage } from 'react-icons/fa';
import { GoPackage } from 'react-icons/go';

function AddProductModal() {
    const { addProduct, formData, setFormData } = useProductStore();

    return (
        <div
            className="modal fade"
            id="add_product_modal"
            tabIndex="-1"
            aria-labelledby="addProductModalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog">
                <div className="modal-content">
                    {/* CLOSE BUTTON & HEADER */}
                    <div className="modal-header">
                        <h5 className="modal-title fw-bold" id="addProductModalLabel">Add New Course</h5>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>

                    <form onSubmit={addProduct}>
                        <div className="modal-body">
                            {/* PRODUCT NAME INPUT */}
                            <div className="mb-4 position-relative">
                                <label htmlFor="productName" className="form-label fw-medium">
                                    Course Name
                                </label>
                                <span
                                    className="position-absolute top-50 start-0 translate-middle-y ps-3 text-secondary"
                                    style={{ pointerEvents: "none" }}
                                >
                                    <GoPackage size={20} />
                                </span>
                                <input
                                    id="productName"
                                    type="text"
                                    placeholder="Enter product name"
                                    className="form-control ps-5 py-3"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    autoFocus
                                />
                            </div>
                            {/* PRODUCT PRICE INPUT  */}
                            <div className="mb-4 position-relative">
                                <label htmlFor="productPrice" className="form-label fw-medium">
                                    Price
                                </label>
                                <span
                                    className="position-absolute top-50 start-0 translate-middle-y ps-3 text-secondary"
                                    style={{ pointerEvents: "none" }}
                                >
                                    <FaDollarSign size={20} />
                                </span>
                                <input
                                    id="productPrice"
                                    type="number"
                                    min="0"
                                    step="0.01"
                                    placeholder="0.00"
                                    className="form-control ps-5 py-3"
                                    value={formData.price}
                                    onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                                />
                            </div>

                            {/* LEARNER  INPUT  */}
                            <div className="mb-4 position-relative">
                                <label htmlFor="productPrice" className="form-label fw-medium">
                                    Learner
                                </label>
                                <span
                                    className="position-absolute top-50 start-0 translate-middle-y ps-3 text-secondary"
                                    style={{ pointerEvents: "none" }}
                                >
                                    <FaDollarSign size={20} />
                                </span>
                                <input
                                    id="learner"
                                    type="text"
                                    placeholder="Enter Learner Name"
                                    className="form-control ps-5 py-3"
                                    value={formData.learner}
                                    onChange={(e) => setFormData({ ...formData, learner: e.target.value })}
                                />
                            </div>

                             {/* INSTUCTOR  INPUT  */}
                            <div className="mb-4 position-relative">
                                <label htmlFor="productPrice" className="form-label fw-medium">
                                    Instructor
                                </label>
                                <span
                                    className="position-absolute top-50 start-0 translate-middle-y ps-3 text-secondary"
                                    style={{ pointerEvents: "none" }}
                                >
                                    <FaDollarSign size={20} />
                                </span>
                                <input
                                    id="instructor"
                                    type="text"
                                    placeholder="Enter Insructor Name"
                                    className="form-control ps-5 py-3"
                                    value={formData.instructor}
                                    onChange={(e) => setFormData({ ...formData, instructor: e.target.value })}
                                />
                            </div>

                            {/* PRODUCT IMAGE  */}
                            <div className="mb-4 position-relative">
                                <label htmlFor="productImage" className="form-label fw-medium">
                                    Image URL
                                </label>
                                <span
                                    className="position-absolute top-50 start-0 translate-middle-y ps-3 text-secondary"
                                    style={{ pointerEvents: "none" }}
                                >
                                    <FaImage size={20} />
                                </span>
                                <input
                                    id="productImage"
                                    type="text"
                                    placeholder="https://example.com/image.jpg"
                                    className="form-control ps-5 py-3"
                                    value={formData.image}
                                    onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                                />
                            </div>
                        </div>

                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Cancel
                            </button>
                            <button type="submit" className="btn btn-primary">
                                Add Course
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AddProductModal;