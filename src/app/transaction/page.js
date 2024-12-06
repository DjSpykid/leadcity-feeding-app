import TransactionDetails from '@/components/TransactionComponents/TransactionDetails'
import React from 'react'
import { Suspense } from "react";

function TransactionPage() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
      <TransactionDetails/>
      </Suspense>
    </div>
  )
}

export default TransactionPage
