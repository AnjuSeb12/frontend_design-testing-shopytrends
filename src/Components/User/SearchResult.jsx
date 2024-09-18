
// import React, { useEffect, useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import { Button, Card } from 'react-bootstrap';
// import AddCart from './AddCart';
// import instance from '../../axios';
// import { useSelector } from 'react-redux';

// const SearchResult = () => {
//   const [results, setResults] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();
//   const isDarkMode = useSelector((state) => state.theme.isDarkMode);

//   useEffect(() => {
//     const fetchResults = async () => {
//       const queryParams = new URLSearchParams(window.location.search);
//       const query = queryParams.get('query') || '';

//       try {
//         const response = await instance.get('/api/v1/searches/search', {
//           params: { query },
//         });
//         setResults(response.data.searchItem || []);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching search results:', error);
//         setLoading(false);
//       }
//     };
//     fetchResults();
//   }, []);

//   const handlePayNow = (product) => {
//     navigate('/order-form', { state: { product } });
//   };

//   if (loading) return <p className={`text-center ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Loading...</p>;

//   const cardClass = isDarkMode ? 'bg-dark text-light' : 'bg-light text-dark';
//   const cardBorderClass = isDarkMode ? 'border-gray-700' : 'border-gray-300';
//   const buttonVariant = isDarkMode ? 'warning' : 'primary';
//   const containerClass = isDarkMode ? 'bg-black text-white' : 'bg-white text-dark';

//   return (
//     <div className={`container mx-auto px-4 py-10 ${containerClass}`}>
//       {results.length > 0 ? (
//         <div>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//             {results.map((item) => (
//               <Card
//                 key={item._id}
//                 className={`${cardClass} shadow-lg rounded-lg overflow-hidden border ${cardBorderClass}`}  // Card styles
//                 style={{ height: '450px' }}  // Fixed card height
//               >
//                 <Link to={`/product/${item._id}`}>
//                   <Card.Img
//                     variant="top"
//                     src={item.image}
//                     alt={item.title}
//                     className="h-64 object-cover"  // Fixed height and cover image
//                   />
//                 </Link>
//                 <Card.Body className="d-flex flex-column">
//                   <Card.Title className={`text-lg font-semibold mb-2 truncate ${isDarkMode ? 'text-light' : 'text-dark'}`}>{item.title}</Card.Title>
//                   <Card.Text className={`mb-2 truncate ${isDarkMode ? 'text-light' : 'text-dark'}`}>{item.description}</Card.Text>
//                   <Card.Text className={`text-xl font-bold ${isDarkMode ? 'text-light' : 'text-dark'}`}>₹{item.price}</Card.Text>
//                   <Card.Text className={`text-sm font-semibold mb-3 ${isDarkMode ? 'text-light' : 'text-dark'}`}>
//                     Stock: {item.stock > 0 ? item.stock : "Out of Stock"}
//                   </Card.Text>

//                   <div className="mt-auto flex flex-col items-center space-y-4">  {/* Space between items and sticks to the bottom */}
//                     <div className="d-flex justify-content-center space-x-4"> {/* Horizontal space between buttons */}
//                       <AddCart product={item} disabled={item.stock <= 0} />
//                       <Button
//                         variant={buttonVariant}
//                         onClick={() => handlePayNow(item)}
//                         disabled={item.stock <= 0}
//                         className="text-white"
//                       >
//                         Pay Now
//                       </Button>
//                     </div>
//                     <div className="h-10" /> {/* Explicit height for spacing */}
//                   </div>
//                 </Card.Body>
//               </Card>
//             ))}
//           </div>
//         </div>
//       ) : (
//         <p className={`text-center ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>No results found</p>
//       )}
//     </div>
//   );
// };

// export default SearchResult;

import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';
import AddCart from './AddCart';
import instance from '../../axios';
import { useSelector } from 'react-redux';

const SearchResult = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();  // Use location to listen for query changes
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);

  useEffect(() => {
    const fetchResults = async () => {
      const queryParams = new URLSearchParams(location.search); // Fetch query from URL
      const query = queryParams.get('query') || '';  // Get 'query' parameter

      if (query.trim()) {
        try {
          const response = await instance.get('/api/v1/searches/search', {
            params: { query },
          });
          setResults(response.data.searchItem || []);
        } catch (error) {
          console.error('Error fetching search results:', error);
          setResults([]);  // Handle error by setting an empty array
        }
      } else {
        setResults([]);  // If no query, set an empty array
      }

      setLoading(false);
    };

    fetchResults(); // Call the fetch function on initial load or query change
  }, [location.search]);  // Trigger re-fetch when search query changes

  const handlePayNow = (product) => {
    navigate('/order-form', { state: { product } });
  };

  if (loading) return <p className={`text-center ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Loading...</p>;

  const cardClass = isDarkMode ? 'bg-dark text-light' : 'bg-light text-dark';
  const cardBorderClass = isDarkMode ? 'border-gray-700' : 'border-gray-300';
  const buttonVariant = isDarkMode ? 'warning' : 'primary';
  const containerClass = isDarkMode ? 'bg-black text-white' : 'bg-white text-dark';

  return (
    <div className={`container mx-auto px-4 py-10 ${containerClass}`}>
      {results.length > 0 ? (
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {results.map((item) => (
              <Card
                key={item._id}
                className={`${cardClass} shadow-lg rounded-lg overflow-hidden border ${cardBorderClass}`}  // Card styles
                style={{ height: '450px' }}  // Fixed card height
              >
                <Link to={`/product/${item._id}`}>
                  <Card.Img
                    variant="top"
                    src={item.image}
                    alt={item.title}
                    className="h-64 object-cover"  // Fixed height and cover image
                  />
                </Link>
                <Card.Body className="d-flex flex-column">
                  <Card.Title className={`text-lg font-semibold mb-2 truncate ${isDarkMode ? 'text-light' : 'text-dark'}`}>{item.title}</Card.Title>
                  <Card.Text className={`mb-2 truncate ${isDarkMode ? 'text-light' : 'text-dark'}`}>{item.description}</Card.Text>
                  <Card.Text className={`text-xl font-bold ${isDarkMode ? 'text-light' : 'text-dark'}`}>₹{item.price}</Card.Text>
                  <Card.Text className={`text-sm font-semibold mb-3 ${isDarkMode ? 'text-light' : 'text-dark'}`}>
                    Stock: {item.stock > 0 ? item.stock : "Out of Stock"}
                  </Card.Text>

                  <div className="mt-auto flex flex-col items-center space-y-4">  {/* Space between items and sticks to the bottom */}
                    <div className="d-flex justify-content-center space-x-4"> {/* Horizontal space between buttons */}
                      <AddCart product={item} disabled={item.stock <= 0} />
                      <Button
                        variant={buttonVariant}
                        onClick={() => handlePayNow(item)}
                        disabled={item.stock <= 0}
                        className="text-white"
                      >
                        Pay Now
                      </Button>
                    </div>
                    <div className="h-10" /> {/* Explicit height for spacing */}
                  </div>
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
      ) : (
        <p className={`text-center ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>No results found</p>
      )}
    </div>
  );
};

export default SearchResult;




