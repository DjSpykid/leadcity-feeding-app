import React from 'react'

function Button() {
    return (
        <div className="max-w-md mx-auto p-4 mb-24 space-y-4">

            <button
                className="w-full py-3 text-blue-600 border border-blue-600 rounded-full text-center font-medium hover:bg-blue-100 transition"
            >
                Update Profile
            </button>

            <button
                className="w-full py-3 text-blue-600 border border-blue-600 rounded-full text-center font-medium hover:bg-blue-100 transition"
            >
                Reset Pin
            </button>

            <button
                className="w-full py-3 text-red-600 border border-red-600 rounded-full text-center font-medium hover:bg-red-100 transition"
            >
                Delete Account
            </button>
        </div>
    )
}

export default Button