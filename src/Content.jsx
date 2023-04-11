import { ProductsNew } from "./ProductsNew";
import { ProductsIndex } from "./ProductsIndex";

export function Content() {
  let products = [
    {
      id: 1,
      name: "Adidas Sambas",
      image: "https://media.gq.com/photos/603ffdf7fa4169891572a186/master/pass/Samba.jpg",
      price: "$60",
      description: "Very Cool shoe",
    },
    {
      id: 2,
      name: "Nike Airforce 1",
      image:
        "https://images.complex.com/complex/image/upload/c_fill,dpr_auto,f_auto,fl_lossy,g_face,q_auto,w_1280/iot1dbjmzr7z6kfkoxrb.png",
      price: "$80",
      description: "Very Cool shoe",
    },
    {
      id: 3,
      name: "Puma Cortez",
      image: "https://i.pinimg.com/736x/de/f3/c2/def3c21bc2a660b5b3d7e111dbccb79d--men-clothes-pumas.jpg",
      price: "$65",
      description: "Very Cool shoe",
    },
  ];

  return (
    <div>
      <ProductsNew />
      <ProductsIndex products={products} />
    </div>
  );
}
