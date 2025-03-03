import React, { useRef } from 'react';
import { X, Download } from 'lucide-react';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';

function Modal({ onClose }) {
    const modalRef = useRef();

    // Add a swal alert when user clicks 
    function sendEmail(event) {
        event.preventDefault();

        emailjs.sendForm(
            import.meta.env.VITE_SERVICE_ID,
            import.meta.env.VITE_TEMPLATE_ID,
            event.target,
            import.meta.env.VITE_USER_ID
        )
        .then((result) => {
            console.log("Email sent successfully!", result.text);
            Swal.fire({
                title: 'Success!',
                text: 'Email sent successfully! Please check your email for the free guide.',
                icon: 'success',
                confirmButtonText: 'OK'
            });
        })
        .catch((error) => {
            console.error("Error sending email:", error.text || error);
            Swal.fire({
                title: 'Error!',
                text: 'Failed to send email. Please try again.',
                icon: 'error',
                confirmButtonText: 'OK'
            });
        });

        event.target.reset(); // Clear form fields after submission
    }

    const closeModal = (e) => {
        if (modalRef.current === e.target) {
            onClose();
        }
    }

    return (
        <div ref={modalRef} onClick={closeModal} className='fixed inset-0 bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>
            <div className='mt-10 flex flex-col gap-4 text-white'>
                <button onClick={onClose} className='place-self-end'><X size={30}/></button>
                <div className='bg-indigo-600 rounded-xl px-10 py-8 flex flex-col gap-5 items-center mx-4'>
                    <h1 className='text-xl font-extrabold'>DOWNLOAD FREE CAREER GUIDE</h1>
                    <p className='text-lg font-bold max-w-md text-center'>Enter your details to get your free career guide!</p>
                    
                    <form className='w-full flex flex-col items-center' onSubmit={sendEmail}>
                        <input 
                            type="text" 
                            name="user_name" 
                            placeholder="Name" 
                            required 
                            className='w-3/4 px-4 py-2 mb-3 text-black bg-white border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent'
                        />
                        <input 
                            type="tel" 
                            name="user_phone" 
                            placeholder="Phone" 
                            required 
                            className='w-3/4 px-4 py-2 mb-3 text-black bg-white border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent'
                        />
                        <input 
                            type="email" 
                            name="user_email" 
                            placeholder="Email" 
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