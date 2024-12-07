import Button from '@/components/profileComponents/Button';
import Form from '@/components/profileComponents/Form';
import ProfileHeader from '@/components/profileComponents/Header';
import React, { Suspense } from 'react';
import Footer from "@/components/Footer";
import '@fortawesome/fontawesome-free/css/all.min.css';

function ProfilePage() {
  return (
    <Suspense
    fallback={
      <div className="flex justify-center items-center h-screen">
      {/* Horizontal moving Font Awesome spinner */}
      <div className="flex space-x-4">
        <i className="fas fa-circle text-indigo-700 text-2xl animate-horizontal-move"></i>
        <i className="fas fa-circle text-indigo-700 text-2xl animate-horizontal-move [animation-delay:200ms]"></i>
        <i className="fas fa-circle text-indigo-700 text-2xl animate-horizontal-move [animation-delay:400ms]"></i>
      </div>
    </div>
    }
    >
    <div className="max-w-md mt-2 mx-auto space-y-4">
      <ProfileHeader />
      <Form />
      <div className='mb-6 '>
      <Button/>
      </div>
      <Footer/>
    </div>
         
    </Suspense>
  );
}

export default ProfilePage;
