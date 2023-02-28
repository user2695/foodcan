import { useState } from 'react'

const Card = () => {
    const [cards] = useState([
        {
          "id": 1,
          "name": "lorem",
          "description": "Donec efficitur dignissim nulla eget hendrerit. Donec dignissim, nunc sed lobortis semper, ligula lectus fringilla tortor, a tempus ipsum nibh eget dui. Mauris in justo vehicula",
          "image": "https://unsplash.com/photos/JoFr5jad9KQ",
          "price": "30 Rs"
        },
        {
          "id": 2,
          "name": "Ipsum",
          "description": "Donec efficitur dignissim nulla eget hendrerit. Donec dignissim, nunc sed lobortis semper, ligula lectus fringilla tortor, a tempus ipsum nibh eget dui. Mauris in justo vehicula",
          "image": "https://unsplash.com/photos/UG3ai7F_GYM",
          "price": "50 Rs"
        },
        {
          "id": 3,
          "name": "Fanta",
          "description": "Donec efficitur dignissim nulla eget hendrerit. Donec dignissim, nunc sed lobortis semper, ligula lectus fringilla tortor, a tempus ipsum nibh eget dui. Mauris in justo vehicula",
          "image": "https://unsplash.com/photos/aKYu-H5pHJY",
          "price": "40 Rs"
        },
        {
          "id": 4,
          "name": "Donec",
          "description": "Donec efficitur dignissim nulla eget hendrerit. Donec dignissim, nunc sed lobortis semper, ligula lectus fringilla tortor, a tempus ipsum nibh eget dui. Mauris in justo vehicula",
          "image": "https://unsplash.com/photos/lw_aaZtdNWI",
          "price": ""
        },
        {
          "id": 5,
          "name": "Eget",
          "description": "Donec efficitur dignissim nulla eget hendrerit. Donec dignissim, nunc sed lobortis semper, ligula lectus fringilla tortor, a tempus ipsum nibh eget dui. Mauris in justo vehicula",
          "image": "https://unsplash.com/photos/Q3KK3lI9aDU",
          "price": "70 Rs"
        },
        {
          "id": 6,
          "name": "Efficitur",
          "description": "Donec efficitur dignissim nulla eget hendrerit. Donec dignissim, nunc sed lobortis semper, ligula lectus fringilla tortor, a tempus ipsum nibh eget dui. Mauris in justo vehicula",
          "image": "https://unsplash.com/photos/mSCiBh0YUgo",
          "price": "20 Rs"
        },
        {
          "id": 7,
          "name": "Cola",
          "description": "Donec efficitur dignissim nulla eget hendrerit. Donec dignissim, nunc sed lobortis semper, ligula lectus fringilla tortor, a tempus ipsum nibh eget dui. Mauris in justo vehicula",
          "image": "https://unsplash.com/photos/Av-esLsvDvs",
          "price": "45 Rs"
        },
      
        {
          "id": 8,
          "name": "La Croix",
          "description": "Donec efficitur dignissim nulla eget hendrerit. Donec dignissim, nunc sed lobortis semper, ligula lectus fringilla tortor, a tempus ipsum nibh eget dui. Mauris in justo vehicula",
          "image": "https://unsplash.com/photos/3Vfdiz2Re80",
          "price": ""
        },
        {
          "id": 9,
          "name": "Leone",
          "description": "Donec efficitur dignissim nulla eget hendrerit. Donec dignissim, nunc sed lobortis semper, ligula lectus fringilla tortor, a tempus ipsum nibh eget dui. Mauris in justo vehicula",
          "image": "https://unsplash.com/photos/XZPeuimDn0g",
          "price": "10 Rs"
        },
        {
          "id": 10,
          "name": "Tiger",
          "description": "Donec efficitur dignissim nulla eget hendrerit. Donec dignissim, nunc sed lobortis semper, ligula lectus fringilla tortor, a tempus ipsum nibh eget dui. Mauris in justo vehicula",
          "image": "https://unsplash.com/photos/gqqXdTJivAs",
          "price": "20 Rs"
        },
        {
          "id": 11,
          "name": "",
          "description": "Donec efficitur dignissim nulla eget hendrerit. Donec dignissim, nunc sed lobortis semper, ligula lectus fringilla tortor, a tempus ipsum nibh eget dui. Mauris in justo vehicula",
          "image": "https://unsplash.com/photos/SZOToqeG1SY",
          "price": "50 Rs"
        },
      
        {
          "id": 12,
          "name": "Villosa",
          "description": "Donec efficitur dignissim nulla eget hendrerit. Donec dignissim, nunc sed lobortis semper, ligula lectus fringilla tortor, a tempus ipsum nibh eget dui. Mauris in justo vehicula",
          "image": "https://unsplash.com/photos/SZOToqeG1SY",
          "price": "55 Rs"
        }
      ]
      )
    return (
    <div>
        <section>
            <div>
                <h1> Featured Products </h1>
                <div className="cards">
                    {cards.map((card, i) => {
                        <div key={i} className="card">
                            <h2>{card.name}</h2>
                            <h3>{card.description}</h3>
                            <img src={card.image} alt="" />
                            <h3>{card.price}</h3>
                        </div>
                    })}    
                </div>
            </div>
        </section>
    </div>
)}

export default Card;