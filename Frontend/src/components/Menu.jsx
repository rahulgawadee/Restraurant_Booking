import React from 'react'
import {data} from "../Pages/RestApi.json"
const Menu = () => {
  return (
    <section className="menu" id='menu'>
        <div className="container">
            <div className="heading_section">
                <h1 className="classname">POPULAR DISHES</h1>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos assumenda quis sed fugit aliquam omnis est sequi atque, quod suscipit voluptas nam eum iste. Incidunt in et mollitia voluptatibus ab sunt velit ipsa provident quas soluta libero deserunt facilis, eos, consectetur voluptates vitae distinctio. Officiis ad ducimus pariatur minima commodi dolore necessitatibus laudantium nesciunt voluptatum.
                </p>

            </div>
            <div className="dishes_container">
                {data[0].dishes.map((element) => {
                    return (
                        <div className="card" key={element.id}>
                            <img src={element.image} alt={element.title}/>
                            <h3>{element.title}</h3>
                            <button>{element.category}</button>
                        </div>
                    )
                })}
            </div>
        </div>
      
    </section>
  )
};

export default Menu
