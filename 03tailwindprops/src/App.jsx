import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
import pastaImage from './assets/pasta.jpg'
import soupImage from './assets/soup.jpg';
import pizzaImage from './assets/pizza.jpg';
import Landingpage from './pages/Landingpage'

function App() {
  return (
      <>
        <h1 className="bg-gradient-to-r from-gray-700 to-gray-500 text-white font-semibold text-2xl p-5 rounded-lg shadow-xl mb-6">Menu</h1>
    
        <div className="flex flex-wrap gap-4">
          <Card name="Penne Pasta" imgPath={pastaImage} desText = "A classic Italian dish featuring al dente penne pasta tossed in a rich marinara sauce, topped with fresh herbs and parmesan cheese." />
          <Card name="Chicken Soup" imgPath={soupImage} desText = "A comforting and nourishing soup made with tender chicken, hearty vegetables, and a flavorful broth, perfect for warming up on a cold day."/>
          <Card name="Pizza" imgPath={pizzaImage} desText = "A delicious pizza with a crispy crust, rich tomato sauce, and melted mozzarella, topped with your favorite ingredients."/>
        </div>
      </>
    )
//  return(
//   <>
//   <Landingpage/>
//   </>
//  )
}

export default App