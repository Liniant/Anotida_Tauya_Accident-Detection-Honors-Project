// import React, { useState } from "react";
//
// export default function SignUp() {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [confirmPassword, setConfirmPassword] = useState("");
//     const [errors, setErrors] = useState({});
//
//     const validate = () => {
//         const newErrors = {};
//         if (!email) {
//             newErrors.email = "Email is required";
//         } else if (!/\S+@\S+\.\S+/.test(email)) {
//             newErrors.email = "Email address is invalid";
//         }
//         if (!password) {
//             newErrors.password = "Password is required";
//         } else if (password.length < 6) {
//             newErrors.password = "Password must be at least 6 characters";
//         }
//         if (!confirmPassword) {
//             newErrors.confirmPassword = "Confirm password is required";
//         } else if (confirmPassword !== password) {
//             newErrors.confirmPassword = "Passwords do not match";
//         }
//         setErrors(newErrors);
//         return Object.keys(newErrors).length === 0;
//     };
//
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (validate()) {
//             console.log("Form submitted", { email, password });
//             // Perform the actual sign-up logic here
//         }
//     };
//
//     return (
//         <div className="min-h-screen flex items-center justify-center bg-gray-100">
//             <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
//                 <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
//                 <form onSubmit={handleSubmit}>
//                     <div className="mb-4">
//                         <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
//                             Email
//                         </label>
//                         <input
//                             type="email"
//                             id="email"
//                             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                             value={email}
//                             onChange={(e) => setEmail(e.target.value)}
//                         />
//                         {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
//                     </div>
//                     <div className="mb-4">
//                         <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
//                             Password
//                         </label>
//                         <input
//                             type="password"
//                             id="password"
//                             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                         />
//                         {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
//                     </div>
//                     <div className="mb-6">
//                         <label className="block text-gray-700 font-bold mb-2" htmlFor="confirmPassword">
//                             Confirm Password
//                         </label>
//                         <input
//                             type="password"
//                             id="confirmPassword"
//                             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                             value={confirmPassword}
//                             onChange={(e) => setConfirmPassword(e.target.value)}
//                         />
//                         {errors.confirmPassword && (
//                             <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>
//                         )}
//                     </div>
//                     <div className="flex items-center justify-between">
//                         <button
//                             type="submit"
//                             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//                         >
//                             Sign Up
//                         </button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// }


import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

export default function SignUpPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);

    const validate = () => {
        const newErrors = {};
        if (!email) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = "Email address is invalid";
        }
        if (!password) {
            newErrors.password = "Password is required";
        } else if (password.length < 6) {
            newErrors.password = "Password must be at least 6 characters";
        }
        if (!confirmPassword) {
            newErrors.confirmPassword = "Confirm password is required";
        } else if (confirmPassword !== password) {
            newErrors.confirmPassword = "Passwords do not match";
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            console.log("Form submitted", { email, password });
            // Perform the actual sign-up logic here
        }
    };

    return (
        <div className="min-h-screen flex justify-center bg-gray-100 h-screen">
            <div className="bg-white p-8 rounded-lg shadow-lg w-1/2 flex flex-col justify-center">
                <div className="w-full p-8">
                    <h1 className="text-4xl font-bold text-purple-700 mb-4">Mhanya</h1>
                    <p className="text-gray-600 mb-8">Accident Detection And Emergency Response System</p>
                    <h2 className="text-2xl font-bold mb-6">Sign Up</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                        </div>
                        <div className="mb-4 relative">
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
                                Password
                            </label>
                            <input
                                type={showPassword ? "text" : "password"}
                                id="password"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
                                {showPassword ? (
                                    <AiFillEyeInvisible
                                        className="text-gray-600 cursor-pointer"
                                        onClick={() => setShowPassword(false)}
                                    />
                                ) : (
                                    <AiFillEye
                                        className="text-gray-600 cursor-pointer"
                                        onClick={() => setShowPassword(true)}
                                    />
                                )}
                            </div>
                            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
                        </div>
                        <div className="mb-6 relative">
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="confirmPassword">
                                Confirm Password
                            </label>
                            <input
                                type={showPassword ? "text" : "password"}
                                id="confirmPassword"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                            <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
                                {showPassword ? (
                                    <AiFillEyeInvisible
                                        className="text-gray-600 cursor-pointer"
                                        onClick={() => setShowPassword(false)}
                                    />
                                ) : (
                                    <AiFillEye
                                        className="text-gray-600 cursor-pointer"
                                        onClick={() => setShowPassword(true)}
                                    />
                                )}
                            </div>
                            {errors.confirmPassword && (
                                <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>
                            )}
                        </div>
                        <div className="flex items-center justify-between mb-6">
                            <label className="flex items-center text-gray-700 text-sm">
                                <input
                                    type="checkbox"
                                    className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                                />
                                <span className="ml-2">Remember Me</span>
                            </label>
                            <Link to="#" className="text-sm text-indigo-600 hover:text-indigo-800">
                                Forgot Password?
                            </Link>
                        </div>
                        <div className="flex items-center justify-between">
                            <button
                                type="submit"
                                className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            >
                                Sign Up
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="w-1/2 h-full">
                <img
                    src="https://images.pexels.com/photos/163016/crash-test-collision-60-km-h-distraction-163016.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Sign Up"
                    className="w-full h-full object-cover"
                />
            </div>
        </div>
    );
}
