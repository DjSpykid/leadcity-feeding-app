import React from 'react';

function Form() {
  return (
    <div className="max-w-md mx-auto p-6 space-y-4 bg-gray-50">
      <div className="space-y-1">
        <label htmlFor="firstname" className="block text-sm text-gray-700">
          Firstname
        </label>
        <input
          type="text"
          id="firstname"
          value="Ayomide"
          readOnly
          className="w-full px-4 py-2 rounded-full border border-gray-300 bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400"
        />
      </div>
      <div className="space-y-1">
        <label htmlFor="lastname" className="block text-sm text-gray-700">
          Lastname
        </label>
        <input
          type="text"
          id="lastname"
          value="ADEGBITE"
          readOnly
          className="w-full px-4 py-2 rounded-full border border-gray-300 bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400"
        />
      </div>
      <div className="space-y-1">
        <label htmlFor="middlename" className="block text-sm text-gray-700">
          Middlename
        </label>
        <input
          type="text"
          id="middlename"
          value="Fred"
          readOnly
          className="w-full px-4 py-2 rounded-full border border-gray-300 bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400"
        />
      </div>
      <div className="space-y-1">
        <label htmlFor="email" className="block text-sm text-gray-700">
          Email
        </label>
        <input
          type="email"
          id="email"
          value="ayomideadegbite849@gmail.com"
          readOnly
          className="w-full px-4 py-2 rounded-full border border-gray-300 bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400"
        />
      </div>
      <div className="space-y-1">
        <label htmlFor="funding-date" className="block text-sm text-gray-700">
          Next Funding Date
        </label>
        <input
          type="text"
          id="funding-date"
          value="Loading...."
          readOnly
          className="w-full px-4 py-2 rounded-full border border-gray-300 bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400"
        />
      </div>
    </div>
  );
}

export default Form;
