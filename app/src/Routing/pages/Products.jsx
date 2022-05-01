import React from 'react'
import { Link, Outlet } from 'react-router-dom';

let data = [
    {
        id:1,
        name: "Mouse",
        image: "https://resource.logitechg.com/w_659,c_limit,f_auto,q_auto,f_auto,dpr_2.0/d_transparent.gif/content/dam/gaming/en/products/refreshed-g203/g203-hero.png?v=1",
    },
    {
        id:2,
        name: "Keyboard",
        image: "https://cdn.shopify.com/s/files/1/0332/3917/1117/products/1_809ced88-1a80-4369-994d-fb60c749d2af.jpg?v=1601970680",
    },
    {
        id:3,
        name: "Monitor",
        image: "https://www.lg.com/in/images/monitors/md07534746/gallery/32SP510M-D-01.jpg",
    },
];
const Products = () => {
  return (
    <div>
        Products:
        <div style={{display: 'grid', gridTemplateColumns:"1fr 1fr"}}>
            <div>
                {data.map((item) => (
                    <div key={item.id} style={{padding:"10px", margin: "10px"}}>
                        <Link to={`/products/${item.id}`}>
                            <img src={item.image} style={{width: "100px",}}/>
                            {item.name}
                            </Link>
                    </div>
                ))}
            </div>
            <div>
                <Outlet/>
            </div>
        </div>
    </div>
  )
}

export default Products