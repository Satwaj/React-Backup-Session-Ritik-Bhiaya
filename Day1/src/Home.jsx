import React from 'react'

const Home = () => {
  return (
    <div>
      <div className=" m-4 card w-100 h-100 bg-zinc-600 rounded-md  flex flex-col justify-content items-center gap-4" >
        <img className='w-50 h-50 rounded-full '
          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGdpcmwlMjBwb3J0cmFpdHxlbnwwfHwwfHx8MA%3D%3D"
          alt=""
        />
        <h1 className="text-3xl font-bold caret-amber-100" >Name</h1>
        <div className="desc text-2xl  font-medium text-violet-300">Description</div>
        <div className="buttons gap-2 flex flex-row">
          <button className='px-4 py-3 border rounded-2xl backdrop-blur-2xl bg-red-400 hover:active:scale-95'>like</button>
          <button className='px-4 py-3 border rounded-2xl backdrop-blur-2xl bg-purple-500 hover:active:scale-95'>dislike</button>
        </div>
      </div>
    </div>
  );
}

export default Home
