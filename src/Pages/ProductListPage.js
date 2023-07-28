import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactPaginate from "react-paginate";

const ProductListPage = () => {
  const { categoryId } = useParams();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const queryParam = searchParams.get("q");
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [loading, setLoading] = useState(true);
  const productsPerPage = 3;

  useEffect(() => {
    fetchProducts(); // eslint-disable-next-line
  }, [categoryId, queryParam]);

  const fetchProducts = async () => {
    try {
      const url = queryParam
        ? `https://dummyjson.com/products/search?q=${encodeURIComponent(
            queryParam
          )}`
        : `https://dummyjson.com/products/category/${categoryId}`;

      const response = await axios.get(url);
      setProducts(response.data.products);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching products:", error);
      setLoading(false);
    }
  };

  const handlePageChange = ({ selected }) => {
    setPageNumber(selected);
  };

  const paginatedProducts = products.slice(
    pageNumber * productsPerPage,
    (pageNumber + 1) * productsPerPage
  );

  return (
    <div className="container mt-5">
      <h1 className="text-capitalize">Product List - Category: {categoryId}</h1>
      {/* Product List */}
      <div className="row">
        {loading ? (
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ minHeight: "300px" }}
          >
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          paginatedProducts.map((product) => (
            <div key={product.id} className="col-md-4 mb-3">
              <div className="card">
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="card-img-top"
                  height={200}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">Price: ${product.price}</p>
                  <Link
                    to={`/product-details/${product.id}`}
                    className="btn btn-primary"
                  >
                    More
                  </Link>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      {paginatedProducts.length === 0 && <>No Product Found of {queryParam} </>}
      {paginatedProducts.length > 0 && (
        <div className="mt-4">
          <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            breakLabel={"..."}
            breakClassName={"page-item"}
            breakLinkClassName={"page-link"}
            pageCount={Math.ceil(products.length / productsPerPage)}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handlePageChange}
            containerClassName={"pagination"}
            pageClassName={"page-item"}
            pageLinkClassName={"page-link"}
            previousClassName={"page-item"}
            previousLinkClassName={"page-link"}
            nextClassName={"page-item"}
            nextLinkClassName={"page-link"}
            activeClassName={"active"}
          />
        </div>
      )}
      <div>
        <button className="btn btn-primary" onClick={() => navigate("/")}>
          Back
        </button>
      </div>
    </div>
  );
};

export default ProductListPage;
