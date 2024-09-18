// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';



// const Footer = () => {
//   return (
//     <footer className="bg-gray-800 text-white py-8">
//       <div className="container mx-auto px-4">
//         <div className="flex flex-wrap justify-between">
//           {/* Column 1 */}
//           <div className="w-full sm:w-1/2 lg:w-1/4 mb-6">
//             <h5 className="text-lg font-semibold mb-4">Company</h5>
//             <ul>
//               <li className="mb-2"><a href="#" className="hover:underline">About Us</a></li>
//                <li className="mb-2"><a href="#" className="hover:underline">Contact Us</a></li>
//               {/* <li className="mb-2"><a href="#" className="hover:underline">Press</a></li>  */}
//             </ul>
//           </div>
//           {/* Column 2 */}
//           <div className="w-full sm:w-1/2 lg:w-1/4 mb-6">
//             <h5 className="text-lg font-semibold mb-4">Help</h5>
//             <ul>
//               <li className="mb-2"><a href="#" className="hover:underline">Customer Service</a></li>
//               <li className="mb-2"><a href="#" className="hover:underline">FAQs</a></li>
//               <li className="mb-2"><a href="#" className="hover:underline">Return Policy</a></li>
//             </ul>
//           </div>
//           {/* Column 3 */}
//           <div className="w-full sm:w-1/2 lg:w-1/4 mb-6">
//             <h5 className="text-lg font-semibold mb-4">Shop</h5>
//             <ul>
//               <li className="mb-2"><a href="#" className="hover:underline">Men's Clothing</a></li>
//               <li className="mb-2"><a href="#" className="hover:underline">Women's Clothing</a></li>
//               {/* <li className="mb-2"><a href="#" className="hover:underline">Accessories</a></li> */}
//             </ul>
//           </div>
//           {/* Column 4 */}
//           <div className="w-full sm:w-1/2 lg:w-1/4 mb-6">
//             <h5 className="text-lg font-semibold mb-4">Follow Us</h5>
//             <div className="flex space-x-4">
//               <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-facebook-f"></i></a>
//               <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-twitter"></i></a>
//               <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-instagram"></i></a>
//               <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-linkedin-in"></i></a>
//             </div>
//           </div>
//         </div>
//         <div className="text-center mt-8">
//           <p>&copy; {new Date().getFullYear()} ShopyTrends. All rights reserved.</p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;



import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 w-full">
        <div className="flex flex-wrap justify-between">
          {/* Column 1 */}
          <div className="w-full sm:w-1/2 lg:w-1/4 mb-6">
            <h5 className="text-lg font-semibold mb-4">Company</h5>
            <ul>
              <li className="mb-2"><a href="#" className="hover:underline">About Us</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Contact Us</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Careers</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Press</a></li>
            </ul>
          </div>
          {/* Column 2 */}
          <div className="w-full sm:w-1/2 lg:w-1/4 mb-6">
            <h5 className="text-lg font-semibold mb-4">Help</h5>
            <ul>
              <li className="mb-2"><a href="#" className="hover:underline">Customer Service</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">FAQs</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Return Policy</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Shipping Info</a></li>
            </ul>
          </div>
          {/* Column 3 */}
          <div className="w-full sm:w-1/2 lg:w-1/4 mb-6">
            <h5 className="text-lg font-semibold mb-4">Shop</h5>
            <ul>
              <li className="mb-2"><a href="#" className="hover:underline">Men's Clothing</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Women's Clothing</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Kids' Clothing</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Accessories</a></li>
            </ul>
          </div>
          {/* Column 4 */}
          <div className="w-full sm:w-1/2 lg:w-1/4 mb-6">
            <h5 className="text-lg font-semibold mb-4">Follow Us</h5>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-gray-400 hover:text-white">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="https://twitter.com" className="text-gray-400 hover:text-white">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="https://instagram.com" className="text-gray-400 hover:text-white">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="https://linkedin.com" className="text-gray-400 hover:text-white">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </div>
          </div>
        </div>
        {/* Divider */}
        <hr className="my-6 border-gray-700" />
        {/* Bottom Section */}
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full sm:w-1/2 lg:w-1/4 text-center lg:text-left mb-4 lg:mb-0">
            <p>&copy; {new Date().getFullYear()} ShopyTrends. All rights reserved.</p>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/4 text-center lg:text-right">
            <p>
              <a href="#" className="hover:underline text-gray-400">Privacy Policy</a> | <a href="#" className="hover:underline text-gray-400">Terms of Service</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
