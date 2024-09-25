import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import instance from "../../axios"; // Axios instance for API calls
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai"; // Icons for show/hide password
import { useSelector } from "react-redux";

// Validation schema using Yup
const schema = yup.object({
    firstName: yup.string().required("First name is required"),
    lastName: yup.string().required("Last name is required"),
    email: yup.string().email("Enter a valid email").required("Email is required"),
    password: yup.string().min(6, "Password must be at least 6 characters").optional(),
}).required();

const MyProfileUpdate = () => {
    const navigate = useNavigate();
    const isDarkMode = useSelector((state) => state.theme.isDarkMode); 
    
    const [showPassword, setShowPassword] = useState(false); // State for toggling password visibility

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: yupResolver(schema) });

    const onSubmit = async (data) => {
        try {
            const res = await instance.put("/api/v1/user/userupdate", data, { withCredentials: true });
            if (res.data.success) {
                toast.success(res.data.message, { autoClose: 2000 });
                navigate("/user/userupdate"); // Redirect to profile after update
            } else {
                toast.error(res.data.message, { autoClose: 2000 });
            }
        } catch (error) {
            console.error("Error updating profile:", error.response ? error.response.data : error.message);
        }
    };

    // Set icon color based on dark mode state
    const iconColor = isDarkMode ? '#ffffff' : '#000000'; // White for dark mode, black for light mode

    return (
        <div className={`min-h-screen ${isDarkMode ? "bg-gray-900" : "bg-gray-100"} flex items-center justify-center`}>
            <ToastContainer />
            <div className={`${isDarkMode ? "bg-gray-800" : "bg-white"} shadow-lg rounded-lg p-8 w-full max-w-md`}>
                <h1 className={`text-2xl font-semibold text-center mb-6 ${isDarkMode ? "text-white" : "text-gray-700"}`}>Update Profile</h1>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    {/* First Name */}
                    <div>
                        <input
                            {...register("firstName")}
                            placeholder="First Name"
                            className={`w-full rounded-md border ${isDarkMode ? "border-gray-700 bg-gray-700 text-white" : "border-gray-300"} px-4 py-2 text-sm focus:outline-none focus:ring focus:ring-green-300`}
                        />
                        {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName.message}</p>}
                    </div>

                    {/* Last Name */}
                    <div>
                        <input
                            {...register("lastName")}
                            placeholder="Last Name"
                            className={`w-full rounded-md border ${isDarkMode ? "border-gray-700 bg-gray-700 text-white" : "border-gray-300"} px-4 py-2 text-sm focus:outline-none focus:ring focus:ring-green-300`}
                        />
                        {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName.message}</p>}
                    </div>

                    {/* Email */}
                    <div>
                        <input
                            {...register("email")}
                            placeholder="Email"
                            className={`w-full rounded-md border ${isDarkMode ? "border-gray-700 bg-gray-700 text-white" : "border-gray-300"} px-4 py-2 text-sm focus:outline-none focus:ring focus:ring-green-300`}
                        />
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                    </div>

                    {/* Password */}
                    <div className="relative">
                        <input
                            {...register("password")}
                            type={showPassword ? "text" : "password"}
                            placeholder="New Password (Optional)"
                            className={`w-full rounded-md border ${isDarkMode ? "border-gray-700 bg-gray-700 text-white" : "border-gray-300"} px-4 py-2 text-sm focus:outline-none focus:ring focus:ring-green-300`}
                        />
                        {/* Show/Hide Icon */}
                        <div
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
                        >
                            {showPassword ? <AiFillEyeInvisible size={20} color={iconColor} /> : <AiFillEye size={20} color={iconColor} />}
                        </div>
                        {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
                    </div>

                    {/* Submit Button */}
                    <div>
                        <input
                            type="submit"
                            value="Update Profile"
                            className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-md cursor-pointer transition duration-300"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default MyProfileUpdate;
