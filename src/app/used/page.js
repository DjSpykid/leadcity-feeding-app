import React, { Suspense }  from 'react'
import Used from '@/components/usedComponents/Used'
import '@fortawesome/fontawesome-free/css/all.min.css';
function UsedPage() {
  return (
    <Suspense
    fallback={
      <div className="flex justify-center items-center h-screen">
        {/* Font Awesome spinner */}
        <i className="fas fa-ellipsis-h fa-spin text-indigo-700 text-4xl"></i>
      </div>
    }
    >
    <div>
        <Used/>
    </div>
    </Suspense>
  )
}

export default UsedPage