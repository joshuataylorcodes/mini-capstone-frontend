import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function Header() {
  return (
    <header>
      <a href="#">Home</a> | <a href="#products-index">All Products</a> | <a href="#products-new">New Products</a>
      <h1>Welcome to Josh's Kicks Shop</h1>
    </header>
  );
}

function ProductsNew() {
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

function ProductsIndex() {
  return (
    <div id="products-index">
      <h2>All Products</h2>
      <div className="products">
        <h3>Adidas Sambas</h3>
        <img
          src="https://media.gq.com/photos/603ffdf7fa4169891572a186/master/pass/Samba.jpg"
          alt="No Image Availible"
        />
        <p>Price: $60</p>
      </div>

      <div className="products">
        <h3>Nike Airforce 1</h3>
        <img
          src="https://images.complex.com/complex/image/upload/c_fill,dpr_auto,f_auto,fl_lossy,g_face,q_auto,w_1280/iot1dbjmzr7z6kfkoxrb.png"
          alt="No Image Availible"
        />
        <p>Price: $75</p>
      </div>

      <div className="products">
        <h3>Puma Cortez</h3>
        <img
          src="https://i.pinimg.com/736x/de/f3/c2/def3c21bc2a660b5b3d7e111dbccb79d--men-clothes-pumas.jpg"
          alt="No Image Availible"
        />
        <p>Price: $65</p>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <div>
        <p>All Product are Fake, We are in the matrix</p>
      </div>
    </footer>
  );
}

function Content() {
  return (
    <div>
      <ProductsNew />
      <ProductsIndex />
    </div>
  );
}

function App() {
  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
