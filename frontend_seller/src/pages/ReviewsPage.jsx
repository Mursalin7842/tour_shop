import React from 'react';
import Rating from '../components/Rating';

const ReviewsPage = ({ products }) => {
  const allReviews = products.flatMap(p => p.reviews.map(r => ({ ...r, productName: p.name })));
  const allReports = products.flatMap(p => p.reports.map(r => ({ ...r, productName: p.name })));
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="bg-gray-800 rounded-lg shadow-lg"><div className="p-6 border-b border-gray-700"><h2 className="text-2xl font-bold">Customer Reviews</h2></div><div className="p-6 space-y-4">{allReviews.map(r => <div key={r.id} className="bg-gray-900/50 p-4 rounded-lg"><div className="flex justify-between items-center mb-2"><div className="font-semibold">{r.user} on <span className="text-blue-400">{r.productName}</span></div><Rating rating={r.rating} /></div><p className="text-sm text-gray-400">{r.comment}</p></div>)}</div></div>
      <div className="bg-gray-800 rounded-lg shadow-lg"><div className="p-6 border-b border-gray-700"><h2 className="text-2xl font-bold">Customer Reports</h2></div><div className="p-6 space-y-4">{allReports.map(r => <div key={r.id} className="bg-red-900/30 p-4 rounded-lg"><p className="font-semibold">{r.user} reported <span className="text-red-300">{r.productName}</span></p><p className="text-sm text-gray-400 mt-1">Reason: {r.subject}</p></div>)}</div></div>
    </div>
  );
};

export default ReviewsPage;
