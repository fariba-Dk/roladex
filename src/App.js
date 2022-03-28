import Card from './components/Card.js';
import {useState, useEffect} from 'react'


function App({}) {

  // const url = ()

  // const randomUser = async () =>{

  //   const response = await fetch(url)
  //   const data = await response.json()
  // }
  const [contactList, setContactList] = useState({
    first_ame: "",
    last_name:"",
    phone:"",
    email:""
  })
  // const [filterQuery, setFilterQuery] = useState('')

  // useEffect(() =>{
  //   if(filterQuery){
  //     //use filter query

  //   }else{
  //     setContactList(randomUser)
  //   }
  // },[])

  return (
    <div className="bg-green-200">
      <section>

        <form>

        <input type="text" className="ml-20 mt-6 rounded-md p-2" placeholder="Search for names..."/>

        </form>

      </section>

      <section className="p-20 grid sm:grid-cols-2 md:grid-cols-4 gap-6">
         <Card/>
      </section>

    </div>
  );
}

export default App;
