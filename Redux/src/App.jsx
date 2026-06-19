
import {useSelector} from 'react-redux'
import { useDispatch } from 'react-redux'
import { fetchUser } from './redux/Features/CounterSlice'
import Card from './components/Card'



const App = () => {


  const data = useSelector(state=>state)
  console.log(data)

  const dispatch = useDispatch()

  const fetchData = ()=>{
     dispatch(fetchUser())
  }

  return (
    <div>
      <h1>Redux</h1>
      <button onClick={fetchData} className='border-amber-200 px-3 py-1.5 bg-blue-300 rounded-md active:scale-95'>fetch data</button>

      <Card  data={data} />







    </div>
  )
}

export default App
