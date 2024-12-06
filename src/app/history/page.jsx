import Footer from '@/components/Footer';
import TextTransaction from '@/components/HistoryComponent/TextTransaction';
import TransactionList from '@/components/HistoryComponent/TransactionList';
import React, { Suspense }  from 'react';

function History() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
    <div className="relative min-h-screen bg-gray-50 ">
      {/* Fixed Header */}
      <div className="fixed top-0 left-0 w-full bg-white z-10 shadow-sm p-2">
        <div className="max-w-md mx-auto text-center text-2xl">
          <TextTransaction />
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="mt-16 mb-20 overflow-y-auto">
        <TransactionList />
      </div>

      {/* Fixed Footer */}
      <div className="fixed bottom-0 left-0 w-full bg-gray-100 z-10 shadow-t p-4">
        <Footer />
      </div>
    </div>
    </Suspense>
  );
}

export default History;
