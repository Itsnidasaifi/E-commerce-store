
import React,{useEffect, useState} from "react"
import '../styles/cart.css';


//import list from '../list';

const Cart = ({ cart,setCart,handleChange }) => {
  const[price,setPrice]=useState(0);
  const handleRemove=(id)=>{
    const arr=cart.filter((item)=>item.id !==id);
    setCart(arr);
  }
  const handlePrice=()=>{
    let ans=0;
    cart.map((item) =>{
      ans+=item.amount*item.price;

    })
    setPrice(ans);
  }
  useEffect(()=>{
    handlePrice();
  })
  return (
    <div>
      <article>
        {
          cart?.map((item) => (
            <div className="cart_box" key={item.id}>
              <div className="cart_img">
                <img src={item.image} alt={item.name} />
                <p>{item.name}</p>
              </div>
              <div>
                <button onClick={()=>handleChange(item,+1)}> + </button>
                <br />
                <button onClick={()=>handleChange(item,-1)}> - </button>
              </div>
              <div>
                <span>{item.price}</span>
                <button onClick={()=>handleRemove(item.id)}>Remove</button>
              </div>
             
            
            </div>
            
          ))
}
<div className="total">
            <span>Total price of your cart : </span>
            <span>{price}</span>
            
    
            
          </div>

        
          
  
          
        
       
      </article>
    </div>
  )
}

export default Cart

// import React from 'react';

// const Cart = ({ cart }) => {
//   // Calculate total price of all items in the cart
//   // const totalPrice = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);

//   return (
//     <div>
//       <article>
//         {cart.map((item) => (
//           <div className="cart_box" key={item.id}>
//             <div className="cart_img">
//               <img src={item.image} alt={item.name} />
//               <p>{item.name}</p>
//             </div>
//             <div>
//               <button>+</button>
//               <button>-</button>
//             </div>
//             <div>
//               <span>{item.price}</span>
//               <button>Remove</button>
//             </div>
//             <div className="total">
//               {/* <span>Total price for {item.name}: </span> */}
//               {/* <span>{item.price * item.quantity}</span> */}
//             </div>
//           </div>
//         ))}
//         <div className="total">
//           <span>Total price of your cart: </span>
//           {/* <span>{totalPrice}</span> */}
//           <span>{'item.price'}</span>
//         </div>
//       </article>
//     </div>
//   );
// };

// export default Cart;
