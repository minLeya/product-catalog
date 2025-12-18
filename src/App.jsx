import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import ProductList from "./components/ProductList";
import ProductModal from './components/ProductModal';
import productsData from "./data/products.json";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setFilteredProducts(productsData);
      setIsLoading(false);
    }, 500);
  }, []);

  useEffect(() => {
    if (!searchQuery.trim()) {
      setFilteredProducts(productsData);
      return;
    }

    const filtered = productsData.filter((product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchQuery]);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="pt-7">
        <SearchBar onSearch={handleSearch} />
      </div>

      <main className="max-w-6xl mx-auto p-4">
        {isLoading ? (
          <div className="text-center py-12">
            <p className="text-gray-500">Загрузка товаров...</p>
          </div>
        ) : (
          <ProductList 
            products={filteredProducts} 
            onProductClick={handleProductClick}
          />
        )}
      </main>

      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </div>
  );
}

export default App;