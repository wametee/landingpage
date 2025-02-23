import React, { useRef } from 'react';
import { X, Download } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Modal component to display a download prompt
function Modal({ onClose }) {
    // Ref to track the modal div
    const modalRef = useRef();
    const navigate = useNavigate();

    // Function to close the modal when clicking outside of it
    const closeModal = (e) => {
        if (modalRef.current === e.target) {
            onClose();
        }
    }

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/thankyou');
    }

    return (
        // Modal background and container
        <div ref={modalRef} onClick={closeModal} className='fixed inset-0 bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>
            <div className='mt-10 flex flex-col gap-4 text-white'>
                {/* Button to close the modal */}
                <button onClick={onClose} className='place-self-end'><X size={30}/></button>
                
                {/* Modal content */}
                <div className='bg-indigo-600 rounded-xl px-10 py-8 flex flex-col gap-5 items-center mx-4'>
                    <h1 className='text-xl font-extrabold'>DOWNLOAD FREE CAREER GUIDE</h1>
                    <p className='text-lg font-bold max-w-md text-center'>Enter your details to get your free career guide!</p>
                    
                    {/* Form to collect lead information */}
                    <form className='w-full flex flex-col items-center' onSubmit={handleSubmit}>
                        <input 
                           type="text" 
                           placeholder="Name" 
                           required 
                           className='w-3/4 px-4 py-2 mb-3 text-black bg-white border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent'
                        />
                        <input 
                           type="tel" 
                           placeholder="Phone" 
                           required 
                           className='w-3/4 px-4 py-2 mb-3 text-black bg-white border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent'
                        />
                        <input 
                           type="email" 
                           placeholder="Email" 
                           required 
                           className='w-3/4 px-4 py-2 mb-3 text-black bg-white border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent'
                        />
                        <input 
                           type="text" 
                           placeholder="Course Interest" 
                           required 
                           className='w-3/4 px-4 py-2 mb-3 text-black bg-white border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent'
                        />
                        <button type="submit" className='mt-4 w-3/4 flex justify-center items-center gap-2 px-5 py-2 font-medium rounded-md bg-black text-white hover:bg-gray-800'>
                            <Download /> Get Your Free Career Guide
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Modal;