import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        console.log("Form submitted with email:", email); // Debugging log to check if the handler is triggered
        try {
            // const response = await axios.post('http://localhost:5174/api/user/forgot-password', { email }); // Ensure the URL is correct
            const response = await axios.post('https://flyboybackend.onrender.com/api/user/forgot-password', { email }); // Ensure the URL is correct

            console.log("Response from backend:", response.data); // Debugging log for backend response
            if (response.data.success) {
                toast.success(response.data.message || 'Password reset email sent successfully!');
            } else {
                toast.error(response.data.message || 'Failed to send reset email!');
            }
        } catch (error) {
            console.error("Error during API call:", error); // Debugging log for any errors
            toast.error("Something went wrong! Please try again.");
        }
    };

    return (
        <form
            onSubmit={onSubmitHandler}
            className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800"
        >
            <h2 className="text-3xl">Forgot Password</h2>
            <input
                type="email"
                value={email}
                onChange={(e) => {
                    setEmail(e.target.value);
                    console.log("Email input value:", e.target.value); // Debugging log to verify email input
                }}
                className="w-full px-3 py-2 border border-gray-800"
                placeholder="Enter your email"
                required
            />
            <button
                type="submit"
                className="border border-white text-white px-8 py-4 text-sm bg-[#333333] hover:bg-black hover:text-white transition-all duration-500"
            >
                Send Reset Link
            </button>
        </form>
    );
};

export default ForgotPassword;














// import React, { useState } from 'react';
// import axios from 'axios';
// import { toast } from 'react-toastify';

// const ForgotPassword = () => {
//     const [email, setEmail] = useState('');
//     const onSubmitHandler = async (event) => {
//         event.preventDefault();
//         try {
//             const response = await axios.post('/api/user/forgot-password', { email });
//             if (response.data.success) {
//                 toast.success(response.data.message);
//             } else {
//                 toast.error(response.data.message);
//             }
//         } catch (error) {
//             console.error(error);
//             toast.error("Something went wrong!");
//         }
//     };

//     return (
//         <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
//             <h2 className='text-3xl'>Forgot Password</h2>
//             <input
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className='w-full px-3 py-2 border border-gray-800'
//                 placeholder='Enter your email'
//                 required
//             />
//             <button type='submit' className='border border-white text-white px-8 py-4 text-sm bg-[#333333]'>
//                 Send Reset Link
//             </button>
//         </form>
//     );
// };

// export default ForgotPassword;
