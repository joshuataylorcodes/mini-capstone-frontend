export function ProductsIndex(shoes) {
  console.log(shoes);
  return (
    <div id="products-index">
      <h2>All Products</h2>
      {shoes.products.map((product) => (
        <div key={product.id} className="products">
          <h3>{product.name}</h3>
          <img src={product.image} alt="No Image" />
          <p>{product.price}</p>
          <p>{product.description}</p>
          <button>Add to Order</button>
        </div>
      ))}
      ;
    </div>
  );
}
