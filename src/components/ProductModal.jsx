import { useEffect } from 'react';

function ProductModal({ product, isOpen, onClose }) {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !product) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };


  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
      onClick={handleOverlayClick}
    >
      <div className="bg-white rounded-lg max-w-lg w-full">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-bold">{product.title}</h2>
          <button
            onClick={onClose}
            className="text-2xl text-gray-500 hover:text-gray-700"
          >
            ×
          </button>
        </div>

        <div className="p-4">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-48 object-cover rounded mb-4"
          />

          <div className="mb-4">
            <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
              {product.category}
            </span>
            <p className="text-2xl font-bold mt-2">
              {`${product.price} руб.`}
            </p>
          </div>

          <p className="text-gray-600 mb-6">{product.description}</p>

          <button
            onClick={() => {
              alert(`Товар "${product.title}" добавлен в корзину!`);
              onClose();
            }}
            className="w-full py-3 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700"
          >
            Купить
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductModal;