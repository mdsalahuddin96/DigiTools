import React from 'react';
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const Footerbody = () => {
    return (
        <div className='max-w-300 mx-auto text-white grid gap-12 text-center md:text-left md:grid-cols-3 lg:grid-cols-5'>
            <div className='space-y-4'>
                <h1 className='text-4xl font-bold'>DigiTools</h1>
                <p>Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p>
            </div>
            <div className='space-y-4'>
                <h2 className='font-medium text-xl'>Product</h2>
                <ul className='space-y-4'>
                    <li>Features</li>
                    <li>Pricing</li>
                    <li>Templates</li>
                    <li>Integrations</li>
                </ul>
            </div>
            <div className='space-y-4'>
                <h2 className='font-medium text-xl'>Company</h2>
                <ul className='space-y-4'>
                    <li>About</li>
                    <li>Blog</li>
                    <li>Careers</li>
                    <li>Press</li>
                </ul>
            </div>
            <div className='space-y-4'>
                <h2 className='font-medium text-xl'>Resources</h2>
                <ul className='space-y-4'>
                    <li>Documentation</li>
                    <li>Help Center</li>
                    <li>Community</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className='space-y-4'>
                <h2 className='font-medium text-xl'>Social Links</h2>
                <div className='flex gap-3 justify-center md:justify-start items-center'>
                    <div className='h-10 w-10 flex items-center justify-center bg-amber-50 rounded-full border-none'>
                        <FaInstagram color='black' size={25}/>
                    </div>
                    <div className='h-10 w-10 flex items-center justify-center bg-amber-50 rounded-full border-none'>
                        <FaFacebookF color='black' size={25}/>
                    </div>
                    <div className='h-10 w-10 flex items-center justify-center bg-amber-50 rounded-full border-none'>
                        <FaXTwitter color='black' size={25}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footerbody;