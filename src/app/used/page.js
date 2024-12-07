import React, { Suspense }  from 'react'
import Used from '@/components/usedComponents/Used'
import '@fortawesome/fontawesome-free/css/all.min.css';
function UsedPage() {
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
    <div>
        <Used/>
    </div>
    </Suspense>
  )
}

export default UsedPage