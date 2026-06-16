
import { useRef } from 'react';


const App = () => {

  console.log("App component rendered");



  const inputRef = useRef({});
  const inputRef2 = useRef({});
  console.log( inputRef, inputRef2);


 
 
const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted");

  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4"
      >
        <input
          ref={(e) => inputRef.current.name = e}
          type="text"
          placeholder="Enter something"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <input
        ref={(e) => inputRef2.current.text = e}
          type="text"
          placeholder="Enter something"
          className="mt-4 px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <button
          type="submit"
          className="mt-4 px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Submit
        </button>
      </form>

    
    </>
  );
}

      
export default App
