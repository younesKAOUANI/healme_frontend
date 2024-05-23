import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Corrected import
import { API_BASE_URL, API_ENDPOINTS } from '@/utils/api';
import { jwtDecode } from '@/utils/jwtDecode';
import { useRouter } from 'next/router'; // Imported useRouter hook

export default function RegisterForm() {
    const router = useRouter(); // Initialized useRouter hook
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        address: '',
        dateOfBirth: '',
        country: '',
        password: '',
        confirmPassword: '',
        gender: '',
        role: 'user'
    });

    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false); // Added loading state
    const [redirecting, setRedirecting] = useState(false); // Added redirecting state
    const [signedIn, setSignedIn] = useState(false); // New state variable for redirection status
    useEffect(() => { // Use useEffect to handle redirection logic
        const token = localStorage.getItem('token');
        if (token) {
            const decodedToken = jwtDecode(token); // Correctly use a different variable name
            setSignedIn(true);
            setTimeout(() => {
                if (decodedToken.role === 'user') {
                    router.push('/');
                } else if (decodedToken.role === 'admin') {
                    router.push('/admin');
                }
            }, 2000);
        }
    }, [router]); // Add router to the dependency array to ensure useEffect is correctly triggered

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        const formErrors = validateForm(formData);
        setErrors(formErrors);

        if (Object.keys(formErrors).length === 0) {
            try {
                setLoading(true); // Set loading state
                const response = await axios.post(`${API_BASE_URL}${API_ENDPOINTS.SIGNUP}`, formData, {
                    headers: {
                        'Content-Type': 'application/json'
                    },
                });

                if (response.status === 200) { // Check response status
                    const tokenResponse = await axios.post(`${API_BASE_URL}${API_ENDPOINTS.TOKEN}`, formData, {
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    });

                    const { access_token } = tokenResponse.data;
                    localStorage.setItem('token', access_token);

                    const decodedToken = jwtDecode(access_token);
                    setFormData({ email: '', password: '' });

                    // Set redirecting state and redirect after a short delay
                    setRedirecting(true);
                    setTimeout(() => {
                        if (decodedToken.role === 'user') {
                            router.push('/profile');
                        } else if (decodedToken.role === 'admin') {
                            router.push('/admin');
                        }
                    }, 2000); // Adjust the delay as needed
                } else {
                    console.error('Failed to register user');
                    // Handle registration failure
                }
            } catch (error) {
                console.error('Error:', error);
                // Handle error during registration
            } finally {
                setLoading(false); // Reset loading state
            }
        } else {
            console.log('Form validation failed');
        }
    };

    const validateForm = (formData) => {
        const errors = {};

        // Check if name is empty
        if (!formData.name.trim()) {
            errors.name = 'Name is required';
        }

        // Check if phone is empty
        if (!formData.phone.trim()) {
            errors.phone = 'Phone number is required';
        } else if (!/^\d{3}-\d{3}-\d{4}$/.test(formData.phone)) {
            errors.phone = 'Invalid phone number format (123-456-7890)';
        }

        // Check if email is empty
        if (!formData.email.trim()) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = 'Invalid email address';
        }

        // Check if address is empty
        if (!formData.address.trim()) {
            errors.address = 'Address is required';
        }

        // Check if password is empty
        if (!formData.password.trim()) {
            errors.password = 'Password is required';
        }

        // Check if confirmPassword is empty
        if (!formData.confirmPassword.trim()) {
            errors.confirmPassword = 'Confirm password is required';
        }

        // Check if passwords match
        if (formData.password !== formData.confirmPassword) {
            errors.confirmPassword = 'Passwords do not match';
        }

        // Check if dateOfBirth is empty
        if (!formData.dateOfBirth.trim()) {
            errors.dateOfBirth = 'Date of birth is required';
        }

        // Check if country is empty
        if (!formData.country.trim()) {
            errors.country = 'Country is required';
        }

        if (!formData.gender) {
            errors.gender = 'Gender is required';
        }


        return errors;
    };

    return (
        <div>
            {signedIn ? (
                <div className="flex items-center justify-center">
                    <div className="p-6 bg-white rounded shadow-lg text-center">
                        <h2 className="text-2xl font-semibold mb-4">Redirecting...</h2>
                        <p className="text-gray-600">Please wait a moment.</p>
                    </div>
                </div>
            ) : (
                <div> <form className="max-w-md mx-auto pt-6" onSubmit={handleRegister}>
                    <h4 className='mb-8 text-3xl text-left'>Join us</h4>
                    {/* Input fields */}
                    {/* Name */}
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                        <label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Full name</label>
                        <p className='text-red-500'> {errors.name && `${errors.name}`}</p>
                    </div>
                    <div className="grid md:grid-cols-2 md:gap-6">
                        {/* Phone */}
                        <div className="relative z-0 w-full mb-5 group">
                            <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="phone" id="phone" value={formData.phone} onChange={handleChange} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />

                            <label htmlFor="phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone Number</label>
                            <p className='text-red-500'> {errors.phone && `${errors.phone}`}</p>
                        </div>

                        {/* Email */}
                        <div className="relative z-0 w-full mb-5 group">
                            <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                            <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email Address </label>
                            <p className='text-red-500'> {errors.email && `${errors.email}`}</p>
                        </div>
                    </div>
                    {/* Address */}
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="text" name="address" id="address" value={formData.address} onChange={handleChange} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                        <label htmlFor="address" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Address</label>
                        <p className='text-red-500'> {errors.address && `${errors.address}`}</p>
                    </div>
                    <div className="grid md:grid-cols-2 md:gap-6">
                        {/* Password */}
                        <div className="relative z-0 w-full mb-5 group">
                            <input type="password" name="password" id="password" value={formData.password} onChange={handleChange} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                            <label htmlFor="password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                            <p className='text-red-500'> {errors.password && `${errors.password}`}</p>
                        </div>
                        {/* Confirm Password */}
                        <div className="relative z-0 w-full mb-5 group">
                            <input type="password" name="confirmPassword" id="confirmPassword" value={formData.confirmPassword} onChange={handleChange} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                            <label htmlFor="confirmPassword" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm Password</label>
                            <p className='text-red-500'> {errors.confirmPassword && `${errors.confirmPassword}`}</p>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 md:gap-6">
                        {/* Date of Birth */}
                        <div className="relative z-0 w-full mb-5 group">
                            <input type="text" name="dateOfBirth" id="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                            <label htmlFor="dateOfBirth" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Date of Birth</label>
                            <p className='text-red-500'> {errors.dateOfBirth && `${errors.dateOfBirth}`}</p>

                        </div>
                        {/* Gender */}
                        <div className="relative z-0 w-full mb-5 group">
                            <select
                                name="gender"
                                id="gender"
                                value={formData.gender}
                                onChange={handleChange}
                                className="block py-2.5 px-4 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            >
                                <option value="" className="bg-primary text-gray-200 hover:bg-secondaryLight">Select Gender</option>
                                <option value="male" className="bg-primary text-gray-900 hover:bg-secondaryLight">Male</option>
                                <option value="female" className="bg-primary text-gray-900 hover:bg-secondaryLight">Female</option>
                                <option value="private" className="bg-primary text-gray-900 hover:bg-secondaryLight">Rather not mention</option>
                            </select>

                            <label htmlFor="gender" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Gender</label>
                            <p className='text-red-500'> {errors.gender && `${errors.gender}`}</p>
                        </div>

                    </div>
                    {/* Country */}
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="text" name="country" id="country" value={formData.country} onChange={handleChange} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                        <label htmlFor="country" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Country</label>
                        <p className='text-red-500'> {errors.country && `${errors.country}`}</p>
                    </div>
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                </form >
                    {loading && <p className='mt-6 text-secondaryLight text-center' >Loading...</p>}
                    {redirecting && <p className='mt-6 text-secondaryLight text-center'>Registration successful. Redirecting...</p>}
                </div>
            )}
        </div>
    );
}