import Button from '@/components/profileComponents/Button';
import Form from '@/components/profileComponents/Form';
import ProfileHeader from '@/components/profileComponents/Header';
import React from 'react';
import Footer from "@/components/Footer";

function ProfilePage() {
  return (
    <div className="max-w-md mt-2 mx-auto space-y-4">
      <ProfileHeader />
      <Form />
      <div className='mb-6 '>
      <Button/>
      </div>
      <Footer/>
    </div>
  );
}

export default ProfilePage;
