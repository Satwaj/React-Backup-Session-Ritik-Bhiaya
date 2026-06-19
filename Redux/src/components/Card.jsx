import { useSelector } from "react-redux";

const Card = () => {
  const products = useSelector((state) => state.user.data);

  return (
    <div className="flex flex-wrap gap-4">
      {products?.map((item) => (
        <div
          key={item.id}
          className="h-60 w-60 bg-amber-100 rounded-2xl border border-zinc-300 p-3"
        >
          <h1 className="font-black">{item.title}</h1>
          <h2>₹{item.price}</h2>
          <p className="font-light">{item.description.slice(0, 50)}...</p>
          <h3 className="font-mono">{item.category}</h3>
        </div>
      ))}
    </div>
  );
};

export default Card;
