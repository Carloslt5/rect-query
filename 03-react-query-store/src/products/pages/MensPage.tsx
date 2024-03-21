import { ProductList, useProducts } from "..";

export const MensPage = () => {
  const { products, isLoading } = useProducts({
    filterKey: "men's clothing",
  });

  return (
    <div className="flex-col">
      <h1 className="text-2xl font-bold">Productos para hombres</h1>
      {isLoading && <h1>Loading...</h1>}
      <ProductList products={products} />
    </div>
  );
};
