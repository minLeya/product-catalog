function ProductCard({ product, onClick }) {
  return (
    <div
      onClick={() => onClick(product)}
      className="border rounded-lg p-4 shadow cursor-pointer hover:shadow-lg transition-shadow"
    >
      <div className="h-48 overflow-hidden mb-4">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover"
        />
      </div>

      <div>
        <div className="mb-2">
          <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
            {product.category}
          </span>
        </div>

        <h3 className="font-bold text-lg mb-2">{product.title}</h3>

        <div className="flex justify-between items-center">
          <p className="text-xl font-bold text-gray-900">
            {`${product.price} руб.`}
          </p>

          <button
            onClick={(e) => {
              e.stopPropagation();
              alert(`Товар "${product.title}" добавлен в корзину`);
            }}
            className="px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Купить
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
