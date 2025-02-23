import React from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const ThankYou = () => {
  const navigate = useNavigate();

  const handleOpenDayRegistration = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Success!",
      text: "You have successfully registered for the Open Day.",
      icon: "success",
      confirmButtonText: "OK"
    }).then(() => {
      navigate('/');
    });
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-[#013D73] text-white text-center p-8">
      <h1 className="text-4xl font-bold mb-4">Thank you! Your career guide is on its way to your email.</h1>
      <p className="text-xl mb-8">Want personalized career guidance? Join our Free Open Day!</p>
      <form className="w-full max-w-md" onSubmit={handleOpenDayRegistration}>
        <input 
          type="text" 
          placeholder="Name" 
          required 
          className='w-full px-4 py-2 mb-3 text-black bg-white border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent'
        />
        <input 
          type="tel" 
          placeholder="Phone" 
          required 
          className='w-full px-4 py-2 mb-3 text-black bg-white border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent'
        />
        <input 
          type="date" 
          placeholder="Preferred Date" 
          required 
          className='w-full px-4 py-2 mb-3 text-black bg-white border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent'
        />
        <button type="submit" className='mt-4 w-full flex justify-center items-center gap-2 px-5 py-2 font-medium rounded-md bg-black text-white hover:bg-gray-800'>
          Register for Open Day
        </button>
      </form>
      <button className='mt-4 w-full max-w-md flex justify-center items-center gap-2 px-5 py-2 font-medium rounded-md bg-green-500 text-white hover:bg-green-700'>
        Click here to chat with an admission advisor!
      </button>
    </div>
  );
}

export default ThankYou;