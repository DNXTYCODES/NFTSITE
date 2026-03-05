import React, { useState } from "react";
import { FiMail } from "react-icons/fi";

const NewsletterBox = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("https://flyboybackend.onrender.com/api/newsletter/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("Success! You're now subscribed 🎉");
        setEmail("");
      } else {
        setMessage(data.error || "Subscription failed. Please try again.");
      }
    } catch (error) {
      setMessage("Network error. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div className="bg-blue-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-6">
          <FiMail className="w-8 h-8 text-white" />
        </div>
        
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Stay Updated with Tech Trends
        </h2>
        
        <p className="text-lg text-gray-600 mb-8">
          Get exclusive deals, new product alerts, and tech insights delivered straight to your inbox.
          Join our community of gadget enthusiasts today!
        </p>

        <form onSubmit={onSubmitHandler} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <div className="flex-1 relative">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={loading}
              className="w-full px-5 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400"
            />
          </div>
          
          <button
            type="submit"
            disabled={loading}
            className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                SUBSCRIBING...
              </>
            ) : (
              "SUBSCRIBE NOW"
            )}
          </button>
        </form>

        {message && (
          <p className={`mt-4 text-sm ${
            message.includes("Success") ? "text-green-600" : "text-red-600"
          }`}>
            {message}
          </p>
        )}
      </div>
    </div>
  );
};

export default NewsletterBox;


























// import React, { useState } from "react";

// const NewsletterBox = () => {
//   const [email, setEmail] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState("");

//   const onSubmitHandler = async (event) => {
//     event.preventDefault();
//     setLoading(true);
//     setMessage("");

//     try {
//       const response = await fetch("https://flyboybackend.onrender.com/api/newsletter/subscribe", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         setMessage("Subscription successful! 🎉");
//         setEmail(""); // Clear input after success
//       } else {
//         setMessage(data.error || "Subscription failed. Please try again.");
//       }
//     } catch (error) {
//       setMessage("Network error. Please try again.");
//     }

//     setLoading(false);
//   };

//   return (
//     <div className="text-center bg-[#FEF3ED] ">
//       <p className="prata-regular text-2xl font-medium text-gray-800  bg-[#FEF3ED] ">
//         Subscribe now to stay in the loop
//       </p>
//       <p className="text-gray-400 mt-3  bg-[#FEF3ED] ">
//         Join our newsletter and be the first to discover exclusive player offers, the
//         latest arrivals, and insider news on the world of scouted players and rising talent. Sign
//         up today and elevate your team with Benistig!
//       </p>
//       <form
//         onSubmit={onSubmitHandler}
//         className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3"
//       >
//         <input
//           className="w-full sm:flex-1 outline-none text-black"
//           type="email"
//           placeholder="Enter your email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//           disabled={loading}
//         />
//         <button
//           type="submit"
//           className="bg-[#333333] text-white text-xs px-10 py-4"
//           disabled={loading}
//         >
//           {loading ? "SUBSCRIBING..." : "SUBSCRIBE"}
//         </button>
//       </form>
//       {message && <p className="text-gray-600 mt-2">{message}</p>}
//     </div>
//   );
// };

// export default NewsletterBox;
