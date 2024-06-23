// import React, { useState } from 'react';
// import './App.css';
// import Navbar from './components/Navbar';
// import Shop from './components/Shop';

// function App() {
//   const[cart,setCart]=useState([]);
//   const handleClick=(item)=>{
//     console.log(item)
//   }
//   return (
//     <div>
//       <Navbar size={cart.length}/>
//       <Shop handleClick={handleClick}/>
//     </div>
//   );
// }

// export default App;

// import React,{useState} from 'react';
// import './App.css';
// import Navbar from './components/Navbar';
// import Shop from './components/Shop';

// function App() {
//   const [cart, setCart] = useState([]);
//   const handleClick = (item) => {
//     let isPresent=false;
//     cart.forEach((product) => {
//       if(item.id === product.id)
//         isPresent=true;
//   });
//       if(isPresent){
//         console.log("item already presented")
//       }
    
//       setCart([...cart,item]);
      
    
//   };

//   return (
//     <div>
//       <Navbar size={cart.size} />
//       <Shop handleClick={handleClick} />
//     </div>
//   );
// }

// export default App;

// import React, { useState } from 'react';
// import './App.css';
// import Navbar from './components/Navbar';
// import Shop from './components/Shop';

// function App() {
//   const[cart,setCart]=useState([]);
//   const handleClick=(item)=>{
//     console.log(item)
//   }
//   return (
//     <div>
//       <Navbar size={cart.length}/>
//       <Shop handleClick={handleClick}/>
//     </div>
//   );
// }

// export default App;

// import React,{useState} from 'react';
// import './App.css';
// import Navbar from './components/Navbar';
// import Shop from './components/Shop';
// import Cart from './components/Cart';


// function App() {
//   const [cart, setCart] = useState([]);
//   const[warning,setWarning]=useState(false);
//   const[show,setShow]=useState(true);
//   const handleClick = (item) => {
//     let isPresent=false;
//     cart.forEach((product) => {
//       if(item.id === product.id)
//         isPresent=true;
//   });
//       if(isPresent){
//         setWarning(true);
//         setTimeout(()=>{
//           setWarning(false);
//         },2000);
//         return;
//       }
    
//       setCart([...cart,item]);
      
    
//   };
//   //console.log("App - handleClick:", typeof handleClick);
//   const handleChange=(item,d)=>{
//     // console.log(item,d);
//     // console.log("hello",item,d);
//     let ind=-1;
//     cart.forEach((data,index)=>{
//       if(data.id===item.id){
//         ind=index;
//       }
//     })
//     const tempArr=cart;
//     tempArr[ind].amount+=d;
//     console.log(tempArr);

//     if (tempArr[ind].amount===0){
//       tempArr[ind].amount=1;
      

//     }
//     setCart([...tempArr]);
//   }

//   return (
//     <div>
//       <Navbar size={cart.length} setShow={setShow}/>
//       { 
//       show?<Shop handleClick={handleClick} />
//     :<Cart cart={cart} setCart={setCart} handleChange={handleChange}/>}
//       {
//       warning && <div className="warning">Item is already present in your cart</div>
// }
//     </div>
//   );
// }

// export default App;

import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Shop from './components/Shop';
import Cart from './components/Cart';
import list from './list'; // Importing the list of items from list.js

function App() {
  const [cart, setCart] = useState([]);
  const [warning, setWarning] = useState(false);
  const [show, setShow] = useState(true);
  const [searchTerm, setSearchTerm] = useState(''); // State to store search term

  const handleSearch = (term) => {
    setSearchTerm(term); // Update search term state
  };

  const handleClick = (item) => {
    let isPresent = false;
    cart.forEach((product) => {
      if (item.id === product.id)
        isPresent = true;
    });
    if (isPresent) {
      setWarning(true);
      setTimeout(() => {
        setWarning(false);
      }, 5000);
      return;
    }

    setCart([...cart, item]);
  };

  const handleChange = (item, d) => {
    let ind = -1;
    cart.forEach((data, index) => {
      if (data.id === item.id) {
        ind = index;
      }
    });
    const tempArr = cart;
    tempArr[ind].amount += d;

    if (tempArr[ind].amount === 0) {
      tempArr[ind].amount = 1;
    }
    setCart([...tempArr]);
  }

  return (
    <div>
      <Navbar size={cart.length} setShow={setShow} handleSearch={handleSearch} /> {/* Pass handleSearch as a prop */}
      {
        show ? <Shop items={list} searchTerm={searchTerm} handleClick={handleClick} /> // Pass searchTerm to the Shop component
          : <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
      }
      {
        warning && <div className="warning">Item is already present in your cart</div>
      }
    </div>
  );
}

export default App;
