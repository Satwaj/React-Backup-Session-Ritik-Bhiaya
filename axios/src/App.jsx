import { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  const getData = async () => {
    try {
      const response = await axios.get("https://picsum.photos/v2/list", {
        params: {
          page,
          limit: 10,
        },
      });

      setData(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  console.log(data);

  useEffect(() => {
    getData();
  }, [page]);

  return (
    <div>
      {data.map((item) => (
        <div key={item.id} className="h-60 w-60 bg-zinc-600 rounded-md m-4 p-4">
          <img
            className="h-40 w-full object-cover"
            src={item.download_url}
            alt={item.author}
          />
          <h1 className="text-white text-xl font-bold">{item.author}</h1>
        </div>
      ))}

      <button onClick={() => setPage((prev) => prev + 1)}>Next</button>

      <button onClick={() => setPage((prev) => Math.max(prev - 1, 1))}>
        Prev
      </button>
    </div>
  );
};

export default App;
