// import React from 'react'
// import list from '../list'
// import Card from './Card';

// const Shop = () => {
//     console.log("List:", list); 
//   return (
//     <section>
//         {list.map((item) => (
//             return <Card item={item} key={item.id}/>
//         //   <div key={item.id}>
//         //     <h2>{item.name}</h2>
//         //     <p>Author: {item.author}</p>
//         //     <img src={item.image} alt={item.name} />
//         //     <p>Price: ${item.price}</p>
//         //   </div>
//         ))}
        

//     </section>
//   )
// }

// export default Shop
// import React from 'react';
// import list from '../list';
// import Card from './Card';

// const Shop = ({handleClick}) => {
//     console.log("List:", list); 
//     return (
//         <section>
//             {list.map((item) => (
//                 <Card item={item} key={item.id} handleClick={handleClick}/>
//             ))}
//         </section>
//     );
    
// }
// console.log("App - handleClick:", typeof handleClick);
// export default Shop;
// Shop.jsx
// import React, { useState ,useEffect} from 'react';
// import Card from './Card';
// import list from '../list';

// const Shop = ({ items, searchTerm,handleClick, }) => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const [itemsPerPage] = useState(8); // Number of items per page
//   const [filteredItems, setFilteredItems] = useState([]);


//   useEffect(() => {
//     const filtered = items.filter(item =>
//       item.name.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//     setFilteredItems(filtered);
//     setCurrentPage(1); // Reset current page to 1 when search term changes
//   }, [items, searchTerm]);

//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
   
//   const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);
//   const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

//   const handlePageChange = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };
//   //const filteredItems = items.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()));
  



//   return (
//     <section>
//       <div className="items">
//       {currentItems.map((item) => (
//         <Card item={item} key={item.id} handleClick={handleClick} />
//       ))}
//       </div>
      
       
      
//       {/* Pagination controls */}
//       <div className="pagination">
//         {Array.from({length: totalPages }).map((_, index) => (
//           <button key={index + 1} onClick={() => handlePageChange(index + 1)}>
//             {index + 1}
//           </button>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Shop;

import React, { useState, useEffect } from 'react';
import Card from './Card';

const Shop = ({ items, searchTerm, handleClick }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(9); // Number of items per page
  const [filteredItems, setFilteredItems] = useState([]);

  // Effect to filter items based on the search term whenever it changes
  useEffect(() => {
    const filtered = items.filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredItems(filtered);
    setCurrentPage(1); // Reset current page to 1 when search term changes
  }, [items, searchTerm]);

  // Calculate the indexes of the first and last item to display
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  // Extract the items to display on the current page
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

  // Calculate the total number of pages
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <section>
      {/* Render the current items */}
      {currentItems.map((item) => (
        <Card item={item} key={item.id} handleClick={handleClick} />
      ))}

      {/* Pagination controls */}
      <div className="pagination">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button key={index + 1} onClick={() => handlePageChange(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>
    </section>
  );
};

export default Shop;

