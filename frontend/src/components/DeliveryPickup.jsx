import { useState } from 'react';
import { Tab } from '@headlessui/react';
import { FaTruck, FaStore, FaClock, FaWhatsapp } from 'react-icons/fa';

const DeliveryPickup = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [deliveryAddress, setDeliveryAddress] = useState({
    street: '',
    city: '',
    zip: '',
    isWithinLagos: true
  });
  const [pickupStore, setPickupStore] = useState('');
  const [deliveryDate, setDeliveryDate] = useState('');
  const [pickupTime, setPickupTime] = useState('');

  // WhatsApp contact details (replace with actual number)
  const whatsappNumber = '+2348123456789';
  const whatsappBaseUrl = `https://wa.me/${whatsappNumber}?text=`;

  const stores = [
    { id: 1, name: 'Lagos Main Store', address: '123 Tech Street, Victoria Island' },
    { id: 2, name: 'Ikeja City Store', address: '456 Innovation Blvd, Ikeja' },
    { id: 3, name: 'Lekki Digital Store', address: '789 Circuit Road, Lekki' }
  ];

  const timeSlots = [
    '09:00 AM - 11:00 AM',
    '11:00 AM - 01:00 PM',
    '01:00 PM - 03:00 PM',
    '03:00 PM - 05:00 PM',
    '05:00 PM - 07:00 PM'
  ];

  const generateDeliveryMessage = () => {
    const message = `New Delivery Request:%0A
      Address: ${deliveryAddress.street}, ${deliveryAddress.city}, ${deliveryAddress.zip}%0A
      Date: ${deliveryDate}%0A
      Time: ${deliveryDate}%0A
      Location: ${deliveryAddress.isWithinLagos ? 'Within Lagos' : 'Outside Lagos'}%0A
      Express Delivery: ${document.getElementById('express')?.checked ? 'Yes' : 'No'}`;
      
    return encodeURI(message);
  };

  const generatePickupMessage = () => {
    const selectedStore = stores.find(store => store.id === Number(pickupStore));
    const message = `New Pickup Request:%0A
      Store: ${selectedStore?.name}%0A
      Address: ${selectedStore?.address}%0A
      Date: ${deliveryDate}%0A
      Time: ${pickupTime}%0A
      Setup Assistance: ${document.getElementById('setup')?.checked ? 'Yes' : 'No'}`;
      
    return encodeURI(message);
  };

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8 ">
      <Tab.Group selectedIndex={selectedTab} onChange={setSelectedTab}>
        <Tab.List className="flex space-x-2 mb-8">
          <Tab
            className={({ selected }) =>
              `flex-1 py-3 px-4 text-sm font-medium rounded-lg focus:outline-none ${
                selected ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`
            }
          >
            <div className="flex items-center justify-center gap-2">
              <FaTruck className="w-5 h-5" />
              Delivery
            </div>
          </Tab>
          <Tab
            className={({ selected }) =>
              `flex-1 py-3 px-4 text-sm font-medium rounded-lg focus:outline-none ${
                selected ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`
            }
          >
            <div className="flex items-center justify-center gap-2">
              <FaStore className="w-5 h-5" />
              Store Pickup
            </div>
          </Tab>
        </Tab.List>

        <Tab.Panels>
          {/* Delivery Panel */}
          <Tab.Panel>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Delivery Address
                  </label>
                  <div className="space-y-4">
                    <input
                      type="text"
                      placeholder="Street Address"
                      className="w-full px-4 py-2 border rounded-lg"
                      value={deliveryAddress.street}
                      onChange={(e) => setDeliveryAddress({...deliveryAddress, street: e.target.value})}
                    />
                    <div className="flex gap-4">
                      <input
                        type="text"
                        placeholder="City"
                        className="w-full px-4 py-2 border rounded-lg"
                        value={deliveryAddress.city}
                        onChange={(e) => setDeliveryAddress({...deliveryAddress, city: e.target.value})}
                      />
                      <select
                        className="w-full px-4 py-2 border rounded-lg"
                        value={deliveryAddress.isWithinLagos}
                        onChange={(e) => setDeliveryAddress({...deliveryAddress, isWithinLagos: e.target.value === 'true'})}
                      >
                        <option value={true}>Within Lagos</option>
                        <option value={false}>Outside Lagos</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Delivery Date
                    </label>
                    <input
                      type="date"
                      className="w-full px-4 py-2 border rounded-lg"
                      value={deliveryDate}
                      onChange={(e) => setDeliveryDate(e.target.value)}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Time Slot
                    </label>
                    <select
                      className="w-full px-4 py-2 border rounded-lg"
                      value={deliveryDate}
                      onChange={(e) => setDeliveryDate(e.target.value)}
                    >
                      <option value="">Select Time Slot</option>
                      {timeSlots.map((time, index) => (
                        <option key={index} value={time}>{time}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <a
                href={`${whatsappBaseUrl}${generateDeliveryMessage()}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
              >
                <FaWhatsapp className="w-5 h-5" />
                Request Delivery via WhatsApp
              </a>
            </div>
          </Tab.Panel>

          {/* Pickup Panel */}
          <Tab.Panel>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Select Store
                  </label>
                  <select
                    className="w-full px-4 py-2 border rounded-lg"
                    value={pickupStore}
                    onChange={(e) => setPickupStore(e.target.value)}
                  >
                    <option value="">Choose Store Location</option>
                    {stores.map(store => (
                      <option key={store.id} value={store.id}>
                        {store.name} - {store.address}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Pickup Date
                    </label>
                    <input
                      type="date"
                      className="w-full px-4 py-2 border rounded-lg"
                      value={deliveryDate}
                      onChange={(e) => setDeliveryDate(e.target.value)}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Time Slot
                    </label>
                    <select
                      className="w-full px-4 py-2 border rounded-lg"
                      value={pickupTime}
                      onChange={(e) => setPickupTime(e.target.value)}
                    >
                      <option value="">Select Time Slot</option>
                      {timeSlots.map((time, index) => (
                        <option key={index} value={time}>{time}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <a
                href={`${whatsappBaseUrl}${generatePickupMessage()}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
              >
                <FaWhatsapp className="w-5 h-5" />
                Confirm Pickup via WhatsApp
              </a>
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>

      <div className="mt-8 p-6 bg-gray-50 rounded-lg flex items-start gap-4">
        <div className="flex-shrink-0 text-blue-600">
          <FaClock className="w-8 h-8" />
        </div>
        <div>
          <h3 className="font-medium text-gray-900 mb-2">Delivery Information & Pricing</h3>
          <ul className="text-sm text-gray-600 space-y-2">
            <li>• Lagos Metro Area: ₦5,000 (1-2 business days)</li>
            <li>• Outside Lagos: ₦15,000 (3-5 business days)</li>
            <li>• Express Delivery: +₦10,000 (Same/Next day)</li>
            <li>• Free store pickup available at all locations</li>
            <li>• Device setup assistance: ₦5,000</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">
            Final pricing will be confirmed by our team via WhatsApp after address verification.
            Payment via bank transfer only.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DeliveryPickup;











// import { useState } from 'react';
// import { Tab } from '@headlessui/react';
// import { FaTruck, FaStore, FaCreditCard, FaClock, FaMapMarker } from 'react-icons/fa';

// const DeliveryPickup = () => {
//   const [selectedTab, setSelectedTab] = useState(0);
//   const [deliveryAddress, setDeliveryAddress] = useState({
//     street: '',
//     city: '',
//     zip: ''
//   });
//   const [pickupStore, setPickupStore] = useState('');
//   const [deliveryDate, setDeliveryDate] = useState('');
//   const [pickupTime, setPickupTime] = useState('');

//   const stores = [
//     { id: 1, name: 'Downtown Tech Hub', address: '123 Tech Street, Silicon Valley' },
//     { id: 2, name: 'Metro Gadget Center', address: '456 Innovation Blvd, Tech City' },
//     { id: 3, name: 'Digital Plaza Store', address: '789 Circuit Road, Byte Town' }
//   ];

//   const timeSlots = [
//     '09:00 AM - 11:00 AM',
//     '11:00 AM - 01:00 PM',
//     '01:00 PM - 03:00 PM',
//     '03:00 PM - 05:00 PM',
//     '05:00 PM - 07:00 PM'
//   ];

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic
//   };

//   return (
//     <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
//       <Tab.Group selectedIndex={selectedTab} onChange={setSelectedTab}>
//         <Tab.List className="flex space-x-2 mb-8">
//           <Tab
//             className={({ selected }) =>
//               `flex-1 py-3 px-4 text-sm font-medium rounded-lg focus:outline-none ${
//                 selected ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
//               }`
//             }
//           >
//             <div className="flex items-center justify-center gap-2">
//               <FaTruck className="w-5 h-5" />
//               Delivery
//             </div>
//           </Tab>
//           <Tab
//             className={({ selected }) =>
//               `flex-1 py-3 px-4 text-sm font-medium rounded-lg focus:outline-none ${
//                 selected ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
//               }`
//             }
//           >
//             <div className="flex items-center justify-center gap-2">
//               <FaStore className="w-5 h-5" />
//               Store Pickup
//             </div>
//           </Tab>
//         </Tab.List>

//         <Tab.Panels>
//           {/* Delivery Panel */}
//           <Tab.Panel>
//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Delivery Address
//                   </label>
//                   <div className="space-y-4">
//                     <input
//                       type="text"
//                       placeholder="Street Address"
//                       className="w-full px-4 py-2 border rounded-lg"
//                       value={deliveryAddress.street}
//                       onChange={(e) => setDeliveryAddress({...deliveryAddress, street: e.target.value})}
//                       required
//                     />
//                     <div className="flex gap-4">
//                       <input
//                         type="text"
//                         placeholder="City"
//                         className="w-full px-4 py-2 border rounded-lg"
//                         value={deliveryAddress.city}
//                         onChange={(e) => setDeliveryAddress({...deliveryAddress, city: e.target.value})}
//                         required
//                       />
//                       <input
//                         type="text"
//                         placeholder="ZIP Code"
//                         className="w-full px-4 py-2 border rounded-lg"
//                         value={deliveryAddress.zip}
//                         onChange={(e) => setDeliveryAddress({...deliveryAddress, zip: e.target.value})}
//                         required
//                       />
//                     </div>
//                   </div>
//                 </div>

//                 <div className="space-y-6">
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                       Delivery Date
//                     </label>
//                     <input
//                       type="date"
//                       className="w-full px-4 py-2 border rounded-lg"
//                       value={deliveryDate}
//                       onChange={(e) => setDeliveryDate(e.target.value)}
//                       required
//                     />
//                   </div>
                  
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                       Time Slot
//                     </label>
//                     <select
//                       className="w-full px-4 py-2 border rounded-lg"
//                       value={deliveryDate}
//                       onChange={(e) => setDeliveryDate(e.target.value)}
//                       required
//                     >
//                       <option value="">Select Time Slot</option>
//                       {timeSlots.map((time, index) => (
//                         <option key={index} value={time}>{time}</option>
//                       ))}
//                     </select>
//                   </div>
//                 </div>
//               </div>

//               <div className="flex items-center gap-2">
//                 <input type="checkbox" id="express" className="w-4 h-4" />
//                 <label htmlFor="express" className="text-sm text-gray-600">
//                   Express Delivery (+$15)
//                 </label>
//               </div>

//               <button
//                 type="submit"
//                 className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
//               >
//                 Schedule Delivery
//               </button>
//             </form>
//           </Tab.Panel>

//           {/* Pickup Panel */}
//           <Tab.Panel>
//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Select Store
//                   </label>
//                   <select
//                     className="w-full px-4 py-2 border rounded-lg"
//                     value={pickupStore}
//                     onChange={(e) => setPickupStore(e.target.value)}
//                     required
//                   >
//                     <option value="">Choose Store Location</option>
//                     {stores.map(store => (
//                       <option key={store.id} value={store.id}>
//                         {store.name} - {store.address}
//                       </option>
//                     ))}
//                   </select>
//                 </div>

//                 <div className="space-y-6">
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                       Pickup Date
//                     </label>
//                     <input
//                       type="date"
//                       className="w-full px-4 py-2 border rounded-lg"
//                       value={deliveryDate}
//                       onChange={(e) => setDeliveryDate(e.target.value)}
//                       required
//                     />
//                   </div>
                  
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                       Available Time
//                     </label>
//                     <select
//                       className="w-full px-4 py-2 border rounded-lg"
//                       value={pickupTime}
//                       onChange={(e) => setPickupTime(e.target.value)}
//                       required
//                     >
//                       <option value="">Select Time Slot</option>
//                       {timeSlots.map((time, index) => (
//                         <option key={index} value={time}>{time}</option>
//                       ))}
//                     </select>
//                   </div>
//                 </div>
//               </div>

//               <div className="flex items-center gap-2">
//                 <input type="checkbox" id="setup" className="w-4 h-4" />
//                 <label htmlFor="setup" className="text-sm text-gray-600">
//                   Request Device Setup Assistance (+$25)
//                 </label>
//               </div>

//               <button
//                 type="submit"
//                 className="w-full bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-colors"
//               >
//                 Reserve In-Store Pickup
//               </button>
//             </form>
//           </Tab.Panel>
//         </Tab.Panels>
//       </Tab.Group>

//       <div className="mt-8 p-6 bg-gray-50 rounded-lg flex items-center gap-4">
//         <div className="flex-shrink-0 text-blue-600">
//           <FaClock className="w-8 h-8" />
//         </div>
//         <div>
//           <h3 className="font-medium text-gray-900">Delivery Information</h3>
//           <p className="text-sm text-gray-600 mt-1">
//             Standard delivery: 2-3 business days • Express delivery: Next day
//             <br />
//             Store pickup available immediately after order confirmation
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DeliveryPickup;