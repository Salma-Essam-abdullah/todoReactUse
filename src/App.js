import './App.css';
import Card from './Card'
import Create from './Create'
import React ,{ useState , useEffect} from 'react';

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [todo, settodo] = useState('');
  
 
  function GETDATA(){
 
      fetch("http://localhost:8000/api/todo")
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            settodo(result);
            console.log(result)
           
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
        }
     useEffect(() => {  
GETDATA()
     }, [])
     function DateTime(i){
 let today = new Date(i);

return today.getDate(i) + "/"+ parseInt(today.getMonth(i)+1) +"/"+today.getFullYear(i)+ "  Time: "+
 parseInt(today.getHours(i)+1) +":"+today.getMinutes(i)
     }
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <>
        <Create getdata={GETDATA}/>

      {todo?
      todo.slice(0).reverse().map((i) => {
        return  <Card
        title={i.title}
        completed={i.completed}
        date= {DateTime(i.created_at)} 
        user_id={i.user_id}
        /> 
      })
      
       :
       null
        }  
       
    </>
    );
  }
}
export default App;