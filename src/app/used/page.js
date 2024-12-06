import React, { Suspense }  from 'react'
import Used from '@/components/usedComponents/Used'
function UsedPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
    <div>
        <Used/>
    </div>
    </Suspense>
  )
}

export default UsedPage