

const Card = ({ postData, like, count }) => {

  

  return (
    <div className="flex flex-row">
     {postData.map((items, index) => (
      <div>
        <div key={items.id ?? index} className="m-4 p-2 card w-100 h-110 bg-zinc-600 rounded-md flex flex-col justify-content items-center gap-4">
          <img
            className="w-50 h-50 rounded-full object-cover "
            src={items.image}
            alt=""
          />
          <h1 className="text-3xl font-bold caret-amber-100">{items.name}</h1>
          <div className="desc text-2xl  font-medium text-violet-300">
            {items.desc}
          </div>
          <p className="text-xl font-bold ">likeCount:{count}</p>
          <div className="buttons gap-2 flex flex-row">
            <button onClick={like} className="px-4 py-3 border rounded-2xl backdrop-blur-2xl bg-red-400 hover:active:scale-95">
              like
            </button>
            <button className="px-4 py-3 border rounded-2xl backdrop-blur-2xl bg-purple-500 hover:active:scale-95">
              dislike
            </button>
          </div>
        </div>
      </div>
     ))}
    </div>
  );
}

export default Card
