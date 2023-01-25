import Cards from "./Cards";
import Productos from "./Productos";

const ItemList = () => {
  return (
    <section className="product-container">
      {Productos.map((product) => {
        return <Cards product={product} Img={product.Img} key={product.id} />;
      })}
    </section>
  );
};

export default ItemList;
