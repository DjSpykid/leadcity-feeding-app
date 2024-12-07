import TransactionDetails from '@/components/TransactionComponents/TransactionDetails'
import React from 'react'
import { Suspense } from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
function TransactionPage() {
  return (
    <div>
      <Suspense 
        fallback={
          <div className="flex justify-center items-center h-screen">
            {/* Font Awesome spinner */}
            <i className="fas fa-ellipsis-h fa-spin text-indigo-900 text-7xl"></i>
          </div>
        }
      >
      <TransactionDetails/>
      </Suspense>
    </div>
  )
}

export default TransactionPage
