export function ProductsNew() {
  return (
    <div id="products-new">
      <h2>New Product</h2>
      <form>
        <div>
          Product Name: <input type="text" />
        </div>
        <div>
          Product price: <input type="number" />
        </div>
        <div>
          Product description: <input type="text" />
        </div>
      </form>
    </div>
  );
}
