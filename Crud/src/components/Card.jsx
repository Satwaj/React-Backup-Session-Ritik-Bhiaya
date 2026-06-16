

const Card = ({ data , deleteHandler}) => {
  return (
    <div>
      {data.map((item, index) => (
        <div key={index} className='bg-white shadow-md rounded p-4 m-4'>
          <h1 className='text-3xl font-bold  bg-red-300 underline text-center mt-10'>{item.title}</h1>
          <h2 className='text-lg font-semibold text-gray-700 mt-4'>{item.desc}</h2>
          <button className='bg-red-500 text-white p-2 rounded' onClick={() => deleteHandler(index)}>delete</button>
        </div>
      ))}
    </div>
  )
}

export default Card
