// import React from 'react'
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import '../styles/navbar.css' ;

// const Navbar = ({size,setShow}) => {
//   return (
//     <nav>
//         <div className="nav_box">
//             <span className='my_shop'>
//                 DxO Shop
//             </span>
//             <div className="cart" onClick={()=>setShow(false)}>
//                 <span>
//                     <i className='fas
//                     fa-cart-plus'></i>

//                 </span>
//                 <span>{size}</span>

//             </div>
            

//         </div>
//     </nav>
//   )
// }

// export default Navbar
import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
 import '../styles/navbar.css' ;

const Navbar = ({ size, setShow, handleSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSearch(searchTerm);
  };
  // const handleMainPageClick = () => {
  //   // Call setShow with true to show the main page
  //   setShow(true);
  // };

  return (
    <nav>
      <div className="nav_box">
        <span className='my_shop'>
        {/* <Link to="/" className='my_shop' onClick={handleMainPageClick}> */}
          Book Store App
        </span>
        {/* </Link> */}
        {<div className="cart" onClick={() => setShow(false)}>
          
          
        </div>
         }
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleChange}
          />
          <button type="submit">Search</button>
        </form>
        <div className="cart" onClick={() => setShow(false)}>
          <span>
            <i className='fas fa-cart-plus'></i>
          </span>
          <span>{size}</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
