import React from 'react'
import './App.css'
import world from './assets/world.png'
import wheel from './assets/wheel.png'
import customer from './assets/customer.png'
import cab from './assets/cab.png'

function App() {

  return (
    <>
      <div>
      <div className='title__card'>WHY CHOOSE RICA?</div>
          <article>
           <h2>Welcome To Rica</h2>
           <p>Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit. Adipisci Alias 
            Aperiam At, Aut Commodi Corporis Dolorum Ducimus Labore Magnam 
            Mollitia Natus Porro Possimus Quae Sit Tenetur Veniam Veritatis Voluptate Voluptatem!</p>     
          </article>

          <section className='container__icons'>

            <div className='card'>
              <img src={wheel}/>
              <h3>4500 + Rides Daily</h3>
              <p>Every Day More Than 4500 Customer Take Rides With Rica Cab</p>
            </div>

            <div className='card'>
              <img src={customer}/>
              <h3>3,00,000 Happy Client</h3>
              <p>Till Today Rica Cab Has More Than Three Lakhs Happy Customer</p>
            </div>

            <div className='card'>
              <img src={world}/>
              <h3>45,000 + Location</h3>
              <p>Rica Cab Has More Than 45k Location At Different Countries & Citys</p>
            </div>

            <div className='card'>
              <img src={cab}/>
              <h3>10,000 Cabs</h3>
              <p>Rica Cab Has More Than 10000 Cabs Which Include Luxury Cabs Too.</p>
            </div>

          </section>

      </div>
      
    </>
  )
}

export default App
