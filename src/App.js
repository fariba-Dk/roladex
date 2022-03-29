import myroladex from './images/myroladex.png'
import Card from './components/Card.js';
import Header from "./components/Header";


import {useState, useEffect} from 'react'


function App() {


  return (
    <div>
    <Header/>

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
    </div>
  );
}

export default App;
