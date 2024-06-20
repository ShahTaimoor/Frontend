import { useState } from "react"
import Layout from "./layout"

const Products = () => {
  const [Products,setProducts] = useState([
    {
        title: 'Mens Shirt Blue',
        des: ' Mens Product',
        price: 2000,
        disc: 15,
        image:'/images/products/p1.jpeg'
    },
    {
        title: 'Mens Shirt Blue',
        des: ' Mens Product',
        price: 2000,
        disc: 15,
        image:'/images/products/p2.jpeg'
    },
    {
        title: 'Mens Shirt Blue',
        des: ' Mens Product',
        price: 2000,
        disc: 15,
        image:'/images/products/p3.jpeg'
    },
    {
        title: 'Mens Shirt Blue',
        des: ' Mens Product',
        price: 2000,
        disc: 15,
        image:'/images/products/p4.jpeg'
    },
    {
        title: 'Mens Shirt Blue',
        des: ' Mens Product',
        price: 2000,
        disc: 15,
        image:'/images/products/p5.jpeg'
    },
    {
        title: 'Mens Shirt Blue',
        des: ' Mens Product',
        price: 2000,
        disc: 15,
        image:'/images/products/p6.jpeg'
    },
    {
        title: 'Mens Shirt Blue',
        des: ' Mens Product',
        price: 2000,
        disc: 15,
        image:'/images/products/p7.jpeg'
    },
  ])
   
    return (
    <Layout>
    
    <div>
       <h1 className="text-xl font-semibold">Products</h1>
       <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {
        Products.map((item,index)=>(
            <div key={index} className="bg-white rounded-md shadow-lg">
                <img src={item.image} alt="" className="rounded-t-md w-full"/>
                   <div className="p-4">
                     <h1 className="text-md font-semibold">{item.title}</h1>
                      <p className="text-gray-400">{item.des}</p>
                      <div className="flex gap-2">
                        <label>
                            {item.price-(item.price*item.disc)/100}
                        </label>
                        <del className="font-semibold">{item.price}</del>
                        <label>({item.disc}% off)</label>
                      </div>
                   </div>
            </div>    
        ))
       }
       </div>
    </div>
    
    </Layout>
  )
}

export default Products
