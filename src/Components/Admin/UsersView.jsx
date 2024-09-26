
import React, { useEffect, useState } from 'react';
import instance from '../../axios';
import { useSelector } from 'react-redux';

const UsersView = () => {
  const [users, setUsers] = useState([]);
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);

  useEffect(() => {
    const getAllUsers = async () => {
      try {
        const res = await instance.get("/api/v1/user/users", {
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        setUsers(res.data.users);
      } catch (error) {
        console.log(error);
      }
    };
    getAllUsers();
  }, []);

  
  const borderColor = isDarkMode ? 'border-gray-600' : 'border-gray-300';
  const textColor = isDarkMode ? 'text-gray-200' : 'text-gray-800';
  const backgroundColor = isDarkMode ? 'bg-gray-900' : 'bg-white';


  return (
    <div className={`container mx-auto p-4 ${backgroundColor}`}>
      <h1 className={`text-2xl font-bold mb-4 ${textColor}`}>
        Users List
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {users && users.map((user, index) => (
          <div
            key={index}
            className={`p-4 border rounded-lg shadow-md ${backgroundColor} ${borderColor}`}
          >
            <h2 className={`text-lg font-semibold ${textColor}`}>#{index + 1}</h2>
            <p className={`text-sm ${textColor}`}><strong>First Name:</strong> {user.firstName}</p>
            <p className={`text-sm ${textColor}`}><strong>Last Name:</strong> {user.lastName}</p>
            <p className={`text-sm ${textColor}`}><strong>Email:</strong> {user.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsersView;



