
import { useState } from 'react';
import Card from './components/Card';

const App = () => {

const [count, setCount] = useState(0);

  const [postData, setPostData] = useState([
    {
      name: "shreyash",
      desc: "i am noob",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBvcnRyYWl0fGVufDB8fDB8fHww",
      likecount: 10,
    },
    {
      name: "satwaj",
      desc: "i am pro",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGdpcmwlMjBwb3J0cmFpdHxlbnwwfHwwfHx8MA%3D%3D",
      likecount: 0,
    },
  ]);

  const like = ()=>{
    setCount(count+1);
    console.log(count);
  }


  return (
<>


<Card postData={postData}  like={like} count={count}/>

</>
  )
}

export default App
