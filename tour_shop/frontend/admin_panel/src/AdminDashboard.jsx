import React, { useState, useEffect, useRef } from 'react';


//--- Icon Components (using inline SVG for simplicity) ---

const DashboardIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>;
const SellerApprovalIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><polyline points="17 11 19 13 23 9"></polyline></svg>;
const ShopApprovalIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 7 4 5-4 5" /><path d="M14 17H8a4 4 0 0 1-4-4V5a2 2 0 0 1 2-2h10v4" /><path d="M4 11h10" /><path d="M8 5v-2" /><path d="M12 5v-2" /></svg>;
const ProductApprovalIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line><polyline points="17 13.5 19 15.5 23 11.5"></polyline></svg>;
const PaymentManagementIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>;
const AnalyticsIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="20" x2="12" y2="10"></line><line x1="18" y1="20" x2="18" y2="4"></line><line x1="6" y1="20" x2="6" y2="16"></line></svg>;
const UserReportsIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 2h18a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z"></path><path d="M9 22V12h6v10"></path><path d="M9 12H3"></path><path d="M15 12h6"></path><path d="M9 7h6"></path></svg>;
const SellerManagementIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22a7 7 0 0 0 7-7h-4a3 3 0 0 1-3-3V8a3 3 0 0 1-3-3H5a7 7 0 0 0 7 7v4a3 3 0 0 1 3 3h4a7 7 0 0 0-7 7z"></path><path d="M5 4v1.5A1.5 1.5 0 0 0 6.5 7H10"></path><path d="M14 17.5a1.5 1.5 0 0 0 1.5 1.5H19V22"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="6" r="3"></circle></svg>;
const LogoutIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>;
const DollarSignIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>;
const UsersIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>;
const StoreIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21V11H4v10M4 7V4h16v3M20 21V11h-8M12 21a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2z" /></svg>;
const BellIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>;
const UserIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>;
const SearchIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-gray-400"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>;
const CloseIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>;
const ShoppingBagIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>;
const ArrowLeftIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>;
const AlertTriangleIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>;
const UserCheckIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="8.5" cy="7" r="4" /><polyline points="17 11 19 13 23 9" /></svg>;
const TrendingDownIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 18 13.5 8.5 8.5 13.5 1 6" /><polyline points="17 18 23 18 23 12" /></svg>;
const ClockIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>;
const ThumbsUpIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 10v12" /><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a2 2 0 0 1 3 1.88z" /></svg>;
const ThumbsDownIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 14V2" /><path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22h0a2 2 0 0 1-3-1.88z" /></svg>;
const FileTextIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>;
const CheckCircleIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>;
const MessageSquareIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>;


// --- Mock Data ---
const MOCK_DATA = {
    sellers: [
        {
            id: 'SEL-i9j0k112', name: 'Jane Smith', email: 'jane.smith@example.com', memberSince: '2025-09-04',
            documents: { nid: 'verified', businessLicense: 'verified' },
            transactions: [
                { id: 'TRN-002', orderId: 'ORD-102', customer: 'Bob', total: 120.00, date: '2025-09-05', status: 'Completed' },
                { id: 'TRN-003', orderId: 'ORD-103', customer: 'Charlie', total: 350.00, date: '2025-09-04', status: 'Completed' },
            ],
            shops: [
                {
                    id: 'SHP-c3d4', name: 'Smith\'s Wares', performance: 'Excellent',
                    products: [
                        { id: 'PROD-003', name: 'Cyber-Knit Jacket', price: 350.00, stock: 80, sales: 450, reviews: { positive: 120, negative: 5, rating: 4.8 }, reports: [{ id: 'REP-002', subject: 'Item not as described' }] },
                        { id: 'PROD-002', name: 'Aether-Light Sneakers', price: 120.00, stock: 200, sales: 800, reviews: { positive: 250, negative: 10, rating: 4.9 }, reports: [] },
                    ]
                }
            ]
        },
        {
            id: 'SEL-e5f6g7h8', name: 'Samuel Green', email: 'sam.green@example.com', memberSince: '2025-09-05',
            documents: { nid: 'pending', businessLicense: 'verified' },
            transactions: [],
            shops: [
                { id: 'SHP-e5f6', name: 'Green Thumb Gardens', performance: 'New', products: [] }
            ]
        },
    ]
};


// --- Reusable Components ---

const ActionReasonModal = ({ isOpen, onClose, onSubmit, actionType }) => {
    if (!isOpen) return null;

    const [reason, setReason] = useState('');
    const [comment, setComment] = useState('');

    const reasons = {
        denied: ['Violates Policy', 'Incomplete Information', 'Spam/Fraudulent', 'Other'],
        modification: ['Business license is blurry', 'More information needed', 'Low-quality images', 'Other'],
        rejected: ['Violates Policy', 'Counterfeit Item', 'Prohibited Item', 'Other'],
    };

    const handleSubmit = () => {
        if (!reason) {
            console.error("Please select a reason.");
            return;
        }
        onSubmit({ reason, comment });
    };

    const titleText = {
        denied: 'Denial',
        modification: 'Modification Request',
        rejected: 'Rejection'
    }

    return (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
            <div className="bg-gray-800 rounded-lg shadow-xl w-full max-w-md">
                <div className="p-6 border-b border-gray-700">
                    <h3 className="text-xl font-bold">Reason for {titleText[actionType]}</h3>
                </div>
                <div className="p-6 space-y-4">
                    <div>
                        <label className="block text-gray-400 mb-2">Reason (Required)</label>
                        <select
                            value={reason}
                            onChange={(e) => setReason(e.target.value)}
                            className="w-full bg-gray-700 border-gray-600 rounded-lg px-3 py-2"
                        >
                            <option value="">-- Select a reason --</option>
                            {(reasons[actionType] || []).map(r => <option key={r} value={r}>{r}</option>)}
                        </select>
                    </div>
                    <div>
                        <label className="block text-gray-400 mb-2">Additional Comments (Optional)</label>
                        <textarea
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                            rows="4"
                            placeholder="Provide specific details for the seller..."
                            className="w-full bg-gray-700 border-gray-600 rounded-lg px-3 py-2"
                        ></textarea>
                    </div>
                </div>
                <div className="p-4 bg-gray-800/50 border-t border-gray-700 flex justify-end space-x-3">
                    <button onClick={onClose} className="bg-gray-600 hover:bg-gray-500 font-bold py-2 px-4 rounded">Cancel</button>
                    <button onClick={handleSubmit} className="bg-blue-600 hover:bg-blue-700 font-bold py-2 px-4 rounded">Submit</button>
                </div>
            </div>
        </div>
    );
};


const SearchBar = ({ searchTerm, setSearchTerm, placeholder }) => (
    <div className="relative w-full max-w-xs">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <SearchIcon />
        </div>
        <input
            type="text"
            placeholder={placeholder}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-gray-700 border border-gray-600 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
    </div>
);

const ApplicationModal = ({ application, onClose, onAction, type = 'seller' }) => {
    if (!application) return null;
    const [actionReasonModal, setActionReasonModal] = useState({ isOpen: false, type: '' });

    const handleActionClick = (actionType) => {
        setActionReasonModal({ isOpen: true, type: actionType });
    };

    const handleReasonSubmit = ({ reason, comment }) => {
        onAction(application.id, actionReasonModal.type, { reason, comment });
        setActionReasonModal({ isOpen: false, type: '' });
        onClose();
    };


    return (
        <>
            <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
                <div className="bg-gray-800 rounded-lg shadow-xl w-full max-w-2xl transform transition-all">
                    <div className="p-6 border-b border-gray-700 flex justify-between items-center">
                        <h3 className="text-xl font-bold">{type === 'seller' ? 'Seller' : 'Shop'} Application Review</h3>
                        <button onClick={onClose} className="p-1 rounded-full hover:bg-gray-700"><CloseIcon /></button>
                    </div>
                    <div className="p-6 space-y-4 max-h-[70vh] overflow-y-auto">
                        {type === 'seller' ? (
                            <>
                                <div className="grid grid-cols-2 gap-4">
                                    <div><p className="text-gray-400">Applicant Name</p><p>{application.name}</p></div>
                                    <div><p className="text-gray-400">Email Address</p><p>{application.email}</p></div>
                                    <div><p className="text-gray-400">Shop Name</p><p>{application.shopName}</p></div>
                                    <div><p className="text-gray-400">Date Applied</p><p>{application.dateApplied}</p></div>
                                </div>
                                <div><p className="text-gray-400">Business Description</p><p>High-quality, futuristic electronic gadgets and accessories. Focused on cutting-edge technology and design.</p></div>
                                <div><p className="text-gray-400">Documents</p><p className="text-blue-400 hover:underline cursor-pointer">business_license.pdf</p></div>
                            </>
                        ) : (
                            <>
                                <div className="grid grid-cols-2 gap-4">
                                    <div><p className="text-gray-400">Shop Name</p><p>{application.shopName}</p></div>
                                    <div><p className="text-gray-400">Seller</p><p>{application.sellerName}</p></div>
                                    <div><p className="text-gray-400">Category</p><p>{application.category}</p></div>
                                    <div><p className="text-gray-400">Date Applied</p><p>{application.dateApplied}</p></div>
                                </div>
                                <div><p className="text-gray-400">Shop Description</p><p>{application.description}</p></div>
                            </>
                        )}
                        <div className="pt-4">
                            <h4 className="font-bold text-gray-300 mb-2">Action History</h4>
                            <div className="space-y-3 text-sm border-l-2 border-gray-700 pl-4">
                                {application.history && application.history.map((item, index) => (
                                    <div key={index}>
                                        <p className="font-semibold">{item.action} by {item.admin}</p>
                                        <p className="text-gray-400">{item.date}</p>
                                        {item.details && <p className="text-gray-400 italic mt-1">Note: "{item.details}"</p>}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="p-6 bg-gray-800/50 border-t border-gray-700 flex justify-between items-center">
                        <button className="flex items-center space-x-2 bg-gray-600 hover:bg-gray-500 font-bold py-2 px-4 rounded transition duration-300">
                            <MessageSquareIcon />
                            <span>Message Seller</span>
                        </button>
                        <div className="space-x-3">
                            <button onClick={() => handleActionClick('modification')} className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded transition duration-300">Request Modification</button>
                            <button onClick={() => handleActionClick('denied')} className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-300">Deny</button>
                            <button onClick={() => { onAction(application.id, 'approved'); onClose(); }} className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition duration-300">Approve</button>
                        </div>
                    </div>
                </div>
            </div>
            <ActionReasonModal
                isOpen={actionReasonModal.isOpen}
                onClose={() => setActionReasonModal({ isOpen: false, type: '' })}
                onSubmit={handleReasonSubmit}
                actionType={actionReasonModal.type}
            />
        </>
    );
};

const ProductModal = ({ product, onClose, onAction, tab }) => {
    if (!product) return null;
    const [actionReasonModal, setActionReasonModal] = useState({ isOpen: false, type: '' });

    const handleActionClick = (actionType) => {
        setActionReasonModal({ isOpen: true, type: actionType });
    };

    const handleReasonSubmit = ({ reason, comment }) => {
        onAction(product.id, actionReasonModal.type, { reason, comment });
        setActionReasonModal({ isOpen: false, type: '' });
        onClose();
    };

    return (
        <>
            <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
                <div className="bg-gray-800 rounded-lg shadow-xl w-full max-w-3xl transform transition-all">
                    <div className="p-6 border-b border-gray-700 flex justify-between items-center">
                        <h3 className="text-xl font-bold">Product Review: {product.name}</h3>
                        <button onClick={onClose} className="p-1 rounded-full hover:bg-gray-700"><CloseIcon /></button>
                    </div>
                    <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6 max-h-[70vh] overflow-y-auto">
                        <div>
                            <img src={`https://placehold.co/600x400/161b22/FFFFFF?text=${product.name.replace(' ', '+')}`} alt={product.name} className="rounded-lg w-full mb-4" />
                            {tab === 'flagged' && (
                                <div className="bg-yellow-900/50 border border-yellow-700 p-4 rounded-lg">
                                    <h4 className="font-bold text-yellow-300">Reason for Flag</h4>
                                    <p className="text-yellow-200">{product.reason}</p>
                                </div>
                            )}
                        </div>
                        <div className="space-y-4">
                            <div><p className="text-gray-400">Seller</p><p>{product.seller}</p></div>
                            <div><p className="text-gray-400">Price</p><p className="font-mono text-lg">${product.price.toFixed(2)}</p></div>
                            <div><p className="text-gray-400">Category</p><p>{product.category}</p></div>
                            <div><p className="text-gray-400">Stock</p><p>{product.stock} units</p></div>
                            <div><p className="text-gray-400">Description</p><p>{product.description}</p></div>
                            <div className="pt-4">
                                <h4 className="font-bold text-gray-300 mb-2">Action History</h4>
                                <div className="space-y-3 text-sm border-l-2 border-gray-700 pl-4">
                                    {product.history && product.history.map((item, index) => (
                                        <div key={index}>
                                            <p className="font-semibold">{item.action} by {item.admin}</p>
                                            <p className="text-gray-400">{item.date}</p>
                                            {item.details && <p className="text-gray-400 italic mt-1">Note: "{item.details}"</p>}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 bg-gray-800/50 border-t border-gray-700 flex justify-between items-center">
                        <button className="flex items-center space-x-2 bg-gray-600 hover:bg-gray-500 font-bold py-2 px-4 rounded transition duration-300">
                            <MessageSquareIcon />
                            <span>Message Seller</span>
                        </button>
                        <div className="flex justify-end space-x-3">
                            {tab === 'flagged' ? (
                                <>
                                    <button onClick={() => { onAction(product.id, 'approved'); onClose(); }} className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Dismiss Flag</button>
                                    <button onClick={() => handleActionClick('modification')} className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">Request Modification</button>
                                    <button onClick={() => handleActionClick('rejected')} className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Unlist Product</button>
                                </>
                            ) : (
                                <>
                                    <button onClick={() => handleActionClick('modification')} className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">Request Modification</button>
                                    <button onClick={() => handleActionClick('rejected')} className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Reject</button>
                                    <button onClick={() => { onAction(product.id, 'approved'); onClose(); }} className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Approve</button>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <ActionReasonModal
                isOpen={actionReasonModal.isOpen}
                onClose={() => setActionReasonModal({ isOpen: false, type: '' })}
                onSubmit={handleReasonSubmit}
                actionType={actionReasonModal.type}
            />
        </>
    );
};

const ReportDetailsModal = ({ report, onClose }) => {
    if (!report) return null;

    return (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
            <div className="bg-gray-800 rounded-lg shadow-xl w-full max-w-3xl">
                <div className="p-6 border-b border-gray-700 flex justify-between items-center">
                    <h3 className="text-xl font-bold">Report Details: #{report.id}</h3>
                    <button onClick={onClose} className="p-1 rounded-full hover:bg-gray-700"><CloseIcon /></button>
                </div>
                <div className="p-6 space-y-4 max-h-[70vh] overflow-y-auto">
                    <div className="grid grid-cols-2 gap-4">
                        <div><p className="text-gray-400">User ID</p><p className="font-mono">{report.userId}</p></div>
                        <div><p className="text-gray-400">Date</p><p>{report.date}</p></div>
                        <div><p className="text-gray-400">Report Type</p><p>{report.type}</p></div>
                        <div><p className="text-gray-400">Status</p><p>{report.status}</p></div>
                    </div>
                    {report.sellerId && <div><p className="text-gray-400">Associated Seller ID</p><p className="font-mono">{report.sellerId}</p></div>}
                    {report.shopId && <div><p className="text-gray-400">Associated Shop ID</p><p className="font-mono">{report.shopId}</p></div>}
                    {report.productId && <div><p className="text-gray-400">Associated Product ID</p><p className="font-mono">{report.productId}</p></div>}
                    <div><p className="text-gray-400">Subject</p><p className="font-semibold">{report.subject}</p></div>
                    <div><p className="text-gray-400">Description</p><p>{report.description}</p></div>
                </div>
                <div className="p-6 bg-gray-800/50 border-t border-gray-700 flex justify-end space-x-3">
                    <button onClick={onClose} className="bg-gray-600 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded">Close</button>
                    <button onClick={onClose} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Mark as Resolved</button>
                </div>
            </div>
        </div>
    );
};


// --- Page Components ---

const StatCard = ({ icon, title, value, onClick }) => (
    <div onClick={onClick} className={`bg-gray-800 p-6 rounded-lg flex items-start transition-transform transform hover:-translate-y-1 ${onClick ? 'cursor-pointer hover:bg-gray-700' : ''}`}>
        <div className="bg-gray-700 p-3 rounded-lg mr-4">{icon}</div>
        <div>
            <p className="text-gray-400 text-sm font-medium">{title}</p>
            <p className="text-2xl font-bold">{value}</p>
        </div>
    </div>
);

const ActivityFeed = () => (
    <div className="bg-gray-800 p-6 rounded-lg h-full">
        <h3 className="text-lg font-bold mb-4">Recent Activity</h3>
        <ul>
            {[
                { id: 1, type: 'seller', text: 'New seller application from JD Electronics.', time: '2 mins ago' },
                { id: 2, type: 'payment', text: 'Payout of $875.00 approved for Smith\'s Wares.', time: '15 mins ago' },
                { id: 3, type: 'product', text: 'Product "Cyber-Knit Jacket" was flagged for review.', time: '1 hour ago' },
                { id: 4, type: 'seller', text: 'New seller application from Green Gardens.', time: '3 hours ago' },
            ].map(activity => (
                <li key={activity.id} className="flex items-center space-x-4 py-3 border-b border-gray-700 last:border-b-0">
                    <div className="bg-gray-700 p-2 rounded-full">
                        {activity.type === 'seller' && <SellerApprovalIcon />}
                        {activity.type === 'payment' && <PaymentManagementIcon />}
                        {activity.type === 'product' && <ProductApprovalIcon />}
                    </div>
                    <div>
                        <p className="text-sm">{activity.text}</p>
                        <p className="text-xs text-gray-400">{activity.time}</p>
                    </div>
                </li>
            ))}
        </ul>
    </div>
);

const ApprovalQueues = ({ navigateTo }) => (
    <div className="bg-gray-800 p-6 rounded-lg h-full">
        <h3 className="text-lg font-bold mb-4">Approval Queues</h3>
        <ul className="space-y-4">
            <li onClick={() => navigateTo('seller-approval', { initialTab: 'pending' })} className="flex justify-between items-center p-3 bg-gray-700/50 rounded-lg cursor-pointer hover:bg-gray-700">
                <span>Pending Seller Applications</span>
                <span className="bg-blue-600 text-white text-sm font-bold px-3 py-1 rounded-full">2</span>
            </li>
            <li onClick={() => navigateTo('shop-approval', { initialTab: 'pending' })} className="flex justify-between items-center p-3 bg-gray-700/50 rounded-lg cursor-pointer hover:bg-gray-700">
                <span>Pending Shop Applications</span>
                <span className="bg-blue-600 text-white text-sm font-bold px-3 py-1 rounded-full">2</span>
            </li>
            <li onClick={() => navigateTo('product-approval', { initialTab: 'pending' })} className="flex justify-between items-center p-3 bg-gray-700/50 rounded-lg cursor-pointer hover:bg-gray-700">
                <span>Pending Products</span>
                <span className="bg-blue-600 text-white text-sm font-bold px-3 py-1 rounded-full">2</span>
            </li>
            <li onClick={() => navigateTo('product-approval', { initialTab: 'flagged' })} className="flex justify-between items-center p-3 bg-gray-700/50 rounded-lg cursor-pointer hover:bg-gray-700">
                <span>Flagged Products for Review</span>
                <span className="bg-yellow-600 text-white text-sm font-bold px-3 py-1 rounded-full">1</span>
            </li>
        </ul>
    </div>
);


const Dashboard = ({ navigateTo }) => (
    <div className="space-y-8">
        <div className="bg-red-900/50 border border-red-700 p-4 rounded-lg">
            <h3 className="font-bold text-red-300 flex items-center gap-2"><AlertTriangleIcon /> Critical Alerts</h3>
            <ul className="list-disc list-inside mt-2 text-red-200">
                <li>3 Payouts Failed</li>
                <li>Spike in User Reports (+50% in 24h)</li>
                <li>New Seller Application from "JD Electronics" waiting {'>'} 48 hours.</li>
            </ul>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard icon={<DollarSignIcon />} title="Total Revenue" value="$128,430" onClick={() => navigateTo('analytics')} />
            <StatCard icon={<UserCheckIcon />} title="New Customers (24h)" value="84" />
            <StatCard icon={<TrendingDownIcon />} title="Seller Churn Rate" value="1.2%" />
            <StatCard icon={<ClockIcon />} title="Avg Time to Approval" value="18 hours" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <ApprovalQueues navigateTo={navigateTo} />
            <ActivityFeed />
        </div>
    </div>
);


const SellerApproval = ({ initialTab = 'pending' }) => {
    const [activeTab, setActiveTab] = useState(initialTab);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedSeller, setSelectedSeller] = useState(null);

    useEffect(() => {
        setActiveTab(initialTab);
    }, [initialTab]);

    const [allSellers, setAllSellers] = useState({
        pending: [
            { id: 'SEL-a1b2c3d4', name: 'John Doe', email: 'john.doe@example.com', shopName: 'JD Electronics', dateApplied: '2025-09-04', history: [{ action: "Submitted", admin: "System", date: "Sep 4, 2025 - 10:15 PM" }] },
            { id: 'SEL-e5f6g7h8', name: 'Samuel Green', email: 'sam.green@example.com', shopName: 'Green Gardens', dateApplied: '2025-09-02', history: [{ action: "Submitted", admin: "System", date: "Sep 2, 2025 - 11:00 AM" }] },
        ],
        approved: [
            { id: 'SEL-i9j0k112', name: 'Jane Smith', email: 'jane.smith@example.com', shopName: 'Smith\'s Wares', dateApplied: '2025-09-03', statusDate: '2025-09-04', history: [{ action: "Submitted", admin: "System", date: "Sep 3, 2025 - 01:20 PM" }, { action: "Approved", admin: "AdminUser", date: "Sep 4, 2025 - 09:00 AM" }] },
        ],
        rejected: [
            { id: 'SEL-m3n405p6', name: 'Mike Ross', email: 'mike.ross@example.com', shopName: 'Ross Gadgets', dateApplied: '2025-09-01', statusDate: '2025-09-02', history: [] },
        ],
        modification: [
            { id: 'SEL-q7r8s9t0', name: 'Emily White', email: 'emily.white@example.com', shopName: 'White Goods', dateApplied: '2025-08-30', statusDate: '2025-09-01', resubmitted: true, history: [] },
            { id: 'SEL-u1v2w3x4', name: 'Chris Black', email: 'chris.black@example.com', shopName: 'Black Box Tech', dateApplied: '2025-08-29', statusDate: '2025-08-30', resubmitted: false, history: [] },
        ]
    });

    const handleAction = (id, status, details) => {
        console.log(`Seller ${id} action: ${status}`, details);
    };

    const handleDeleteRequest = (id) => {
        console.log(`Deleting seller request ${id}`);
        setAllSellers(prevSellers => ({
            ...prevSellers,
            modification: prevSellers.modification.filter(s => s.id !== id)
        }));
    };

    const filteredSellers = allSellers[activeTab].filter(s =>
        s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        s.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        s.shopName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const getStatusDateLabel = () => {
        switch (activeTab) {
            case 'pending': return 'Date Applied';
            case 'modification': return 'Date Requested';
            default: return 'Status Date';
        }
    };

    return (
        <div className="bg-gray-800 rounded-lg shadow-lg">
            <div className="p-6 border-b border-gray-700 flex flex-wrap gap-4 justify-between items-center">
                <div className="flex-grow">
                    <h2 className="text-2xl font-bold">Seller Approval</h2>
                    <div className="flex space-x-1 sm:space-x-4 mt-4 border-b border-gray-700">
                        <button onClick={() => setActiveTab('pending')} className={`py-2 px-1 text-sm font-medium ${activeTab === 'pending' ? 'border-b-2 border-blue-500 text-white' : 'text-gray-400'}`}>Pending</button>
                        <button onClick={() => setActiveTab('approved')} className={`py-2 px-1 text-sm font-medium ${activeTab === 'approved' ? 'border-b-2 border-blue-500 text-white' : 'text-gray-400'}`}>Approved</button>
                        <button onClick={() => setActiveTab('rejected')} className={`py-2 px-1 text-sm font-medium ${activeTab === 'rejected' ? 'border-b-2 border-blue-500 text-white' : 'text-gray-400'}`}>Rejected</button>
                        <button onClick={() => setActiveTab('modification')} className={`py-2 px-1 text-sm font-medium ${activeTab === 'modification' ? 'border-b-2 border-blue-500 text-white' : 'text-gray-400'}`}>Modification</button>
                    </div>
                </div>
                <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} placeholder="Search sellers..." />
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-left">
                    <thead>
                        <tr className="bg-gray-700/50">
                            <th className="p-4">Seller Name</th><th className="p-4">Shop Name</th>
                            <th className="p-4">{getStatusDateLabel()}</th><th className="p-4">Status</th><th className="p-4 text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredSellers.length > 0 ? filteredSellers.map(seller => (
                            <tr key={seller.id} className="border-b border-gray-700 hover:bg-gray-700/50">
                                <td className="p-4">{seller.name}</td><td className="p-4">{seller.shopName}</td>
                                <td className="p-4">{seller.statusDate || seller.dateApplied}</td>
                                <td className="p-4">
                                    {activeTab === 'modification' && (
                                        seller.resubmitted
                                            ? <span className="text-green-400 font-semibold">Resubmitted</span>
                                            : <span className="text-yellow-400 font-semibold">Waiting</span>
                                    )}
                                </td>
                                <td className="p-4 text-center space-x-2">
                                    <button onClick={() => setSelectedSeller(seller)} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300">
                                        View
                                    </button>
                                    {activeTab === 'modification' && (
                                        <button onClick={() => handleDeleteRequest(seller.id)} className="bg-gray-600 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded transition duration-300">
                                            Delete
                                        </button>
                                    )}
                                </td>
                            </tr>
                        )) : (
                            <tr><td colSpan="5" className="text-center p-8 text-gray-400">No sellers in this category.</td></tr>
                        )}
                    </tbody>
                </table>
            </div>
            <ApplicationModal application={selectedSeller} onClose={() => setSelectedSeller(null)} onAction={handleAction} type="seller" />
        </div>
    );
};

const ShopApproval = ({ initialTab = 'pending' }) => {
    const [activeTab, setActiveTab] = useState(initialTab);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedShop, setSelectedShop] = useState(null);

    useEffect(() => {
        setActiveTab(initialTab);
    }, [initialTab]);

    const [allShops, setAllShops] = useState({
        pending: [
            { id: 'SHP-a1b2', shopName: 'Quantum Gaming Gear', sellerName: 'John Doe', category: 'Electronics', dateApplied: '2025-09-05', description: 'A new shop focusing on high-end gaming peripherals.', history: [{ action: "Submitted", admin: "System", date: "Sep 5, 2025 - 12:01 PM" }] },
            { id: 'SHP-c3d4', shopName: 'Vintage Wears', sellerName: 'Jane Smith', category: 'Apparel', dateApplied: '2025-09-05', description: 'A second-hand clothing store with unique finds.', history: [{ action: "Submitted", admin: "System", date: "Sep 5, 2025 - 02:30 PM" }] },
        ],
        approved: [
            { id: 'SHP-e5f6', shopName: 'Green Thumb Gardens', sellerName: 'Samuel Green', category: 'Home & Garden', dateApplied: '2025-09-04', statusDate: '2025-09-05', description: 'Organic gardening supplies.', history: [] },
        ],
        rejected: [
            { id: 'SHP-g7h8', shopName: 'Gadget Gurus', sellerName: 'Mike Ross', category: 'Electronics', dateApplied: '2025-09-03', statusDate: '2025-09-04', description: 'Refurbished electronics.', history: [] },
        ],
        modification: [
            { id: 'SHP-i9j0', shopName: 'The White Collection', sellerName: 'Emily White', category: 'Home Goods', dateApplied: '2025-09-02', statusDate: '2025-09-03', resubmitted: false, description: 'Minimalist home decor.', history: [] },
        ]
    });

    const handleAction = (id, status, details) => {
        console.log(`Shop ${id} action: ${status}`, details);
    };

    const handleDeleteRequest = (id) => {
        console.log(`Deleting shop request ${id}`);
        setAllShops(prevShops => ({
            ...prevShops,
            modification: prevShops.modification.filter(s => s.id !== id)
        }));
    };

    const filteredShops = allShops[activeTab].filter(s =>
        s.shopName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        s.sellerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        s.category.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const getStatusDateLabel = () => {
        switch (activeTab) {
            case 'pending': return 'Date Applied';
            case 'modification': return 'Date Requested';
            default: return 'Status Date';
        }
    };

    return (
        <div className="bg-gray-800 rounded-lg shadow-lg">
            <div className="p-6 border-b border-gray-700 flex flex-wrap gap-4 justify-between items-center">
                <div className="flex-grow">
                    <h2 className="text-2xl font-bold">Shop Approval</h2>
                    <div className="flex space-x-1 sm:space-x-4 mt-4 border-b border-gray-700">
                        <button onClick={() => setActiveTab('pending')} className={`py-2 px-1 text-sm font-medium ${activeTab === 'pending' ? 'border-b-2 border-blue-500 text-white' : 'text-gray-400'}`}>Pending</button>
                        <button onClick={() => setActiveTab('approved')} className={`py-2 px-1 text-sm font-medium ${activeTab === 'approved' ? 'border-b-2 border-blue-500 text-white' : 'text-gray-400'}`}>Approved</button>
                        <button onClick={() => setActiveTab('rejected')} className={`py-2 px-1 text-sm font-medium ${activeTab === 'rejected' ? 'border-b-2 border-blue-500 text-white' : 'text-gray-400'}`}>Rejected</button>
                        <button onClick={() => setActiveTab('modification')} className={`py-2 px-1 text-sm font-medium ${activeTab === 'modification' ? 'border-b-2 border-blue-500 text-white' : 'text-gray-400'}`}>Modification</button>
                    </div>
                </div>
                <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} placeholder="Search shops..." />
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-left">
                    <thead>
                        <tr className="bg-gray-700/50">
                            <th className="p-4">Shop Name</th><th className="p-4">Seller Name</th><th className="p-4">{getStatusDateLabel()}</th><th className="p-4">Status</th><th className="p-4 text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredShops.length > 0 ? filteredShops.map(shop => (
                            <tr key={shop.id} className="border-b border-gray-700 hover:bg-gray-700/50">
                                <td className="p-4">{shop.shopName}</td><td className="p-4">{shop.sellerName}</td>
                                <td className="p-4">{shop.statusDate || shop.dateApplied}</td>
                                <td className="p-4">
                                    {activeTab === 'modification' && (
                                        shop.resubmitted
                                            ? <span className="text-green-400 font-semibold">Resubmitted</span>
                                            : <span className="text-yellow-400 font-semibold">Waiting</span>
                                    )}
                                </td>
                                <td className="p-4 text-center space-x-2">
                                    <button onClick={() => setSelectedShop(shop)} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300">
                                        View
                                    </button>
                                    {activeTab === 'modification' && (
                                        <button onClick={() => handleDeleteRequest(shop.id)} className="bg-gray-600 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded transition duration-300">
                                            Delete
                                        </button>
                                    )}
                                </td>
                            </tr>
                        )) : (
                            <tr><td colSpan="5" className="text-center p-8 text-gray-400">No shops in this category.</td></tr>
                        )}
                    </tbody>
                </table>
            </div>
            <ApplicationModal application={selectedShop} onClose={() => setSelectedShop(null)} onAction={handleAction} type="shop" />
        </div>
    );
};

const ProductApproval = ({ initialTab = 'pending' }) => {
    const [activeTab, setActiveTab] = useState(initialTab);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedProduct, setSelectedProduct] = useState(null);

    useEffect(() => {
        setActiveTab(initialTab);
    }, [initialTab]);

    const [allProducts, setAllProducts] = useState({
        pending: [
            { id: 'PROD-001', name: 'Quantum Headset', seller: 'JD Electronics', price: 199.99, category: 'Electronics', stock: 150, description: 'High-fidelity gaming headset with immersive 7.1 surround sound.', date: '2025-09-05', history: [{ action: "Submitted", admin: "System", date: "Sep 5, 2025 - 12:05 PM" }] },
            { id: 'PROD-002', name: 'Aether-Light Sneakers', seller: 'Smith\'s Wares', price: 120.00, category: 'Apparel', stock: 200, description: 'Lightweight and durable sneakers for everyday use.', date: '2025-09-04', history: [] },
        ],
        approved: [
            { id: 'PROD-003', name: 'Cyber-Knit Jacket', seller: 'Smith\'s Wares', price: 350.00, category: 'Apparel', stock: 80, description: 'A stylish jacket with integrated smart fabric.', date: '2025-09-04', history: [] },
        ],
        rejected: [
            { id: 'PROD-004', name: 'Hover-Drone X1', seller: 'Ross Gadgets', price: 899.00, category: 'Gadgets', stock: 30, description: 'A professional-grade camera drone.', date: '2025-09-03', history: [] },
        ],
        flagged: [
            { id: 'PROD-003', name: 'Cyber-Knit Jacket', seller: 'Smith\'s Wares', price: 350.00, category: 'Apparel', stock: 80, description: 'A stylish jacket with integrated smart fabric.', date: '2025-09-05', reason: 'Potential counterfeit item reported by user.', history: [] },
        ],
        modification: [
            { id: 'PROD-005', name: 'Chrono-Watch', seller: 'Time Keepers Inc.', price: 425.00, category: 'Accessories', stock: 120, description: 'A sleek, modern watch.', date: '2025-09-01', resubmitted: false, history: [] },
        ]
    });

    const handleAction = (id, status, details) => {
        console.log(`Product ${id} action: ${status}`, details);
    };

    const handleDeleteRequest = (id) => {
        console.log(`Deleting product request ${id}`);
        setAllProducts(prev => ({ ...prev, modification: prev.modification.filter(p => p.id !== id) }));
    };

    const filteredProducts = allProducts[activeTab].filter(p =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.seller.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.category.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="bg-gray-800 rounded-lg shadow-lg">
            <div className="p-6 border-b border-gray-700 flex flex-wrap gap-4 justify-between items-center">
                <div className="flex-grow">
                    <h2 className="text-2xl font-bold">Product Approval</h2>
                    <div className="flex space-x-1 sm:space-x-4 mt-4 border-b border-gray-700">
                        {['pending', 'approved', 'rejected', 'flagged', 'modification'].map(tab => (
                            <button key={tab} onClick={() => setActiveTab(tab)} className={`py-2 px-1 text-sm font-medium capitalize ${activeTab === tab ? 'border-b-2 border-blue-500 text-white' : 'text-gray-400'}`}>{tab}</button>
                        ))}
                    </div>
                </div>
                <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} placeholder="Search products..." />
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-left">
                    <thead>
                        <tr className="bg-gray-700/50">
                            <th className="p-4">Product Name</th><th className="p-4">Seller</th>
                            <th className="p-4">Date</th>
                            <th className="p-4">{activeTab === 'flagged' ? 'Flag Reason' : 'Status'}</th>
                            <th className="p-4 text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredProducts.length > 0 ? filteredProducts.map(product => (
                            <tr key={product.id} className="border-b border-gray-700 hover:bg-gray-700/50">
                                <td className="p-4">{product.name}</td><td className="p-4">{product.seller}</td>
                                <td className="p-4">{product.date}</td>
                                <td className="p-4">
                                    {activeTab === 'modification' && (product.resubmitted ? <span className="text-green-400">Resubmitted</span> : <span className="text-yellow-400">Waiting</span>)}
                                    {activeTab === 'flagged' && <span className="text-red-400">{product.reason}</span>}
                                </td>
                                <td className="p-4 text-center space-x-2">
                                    <button onClick={() => setSelectedProduct(product)} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">View</button>
                                    {activeTab === 'modification' && (
                                        <button onClick={() => handleDeleteRequest(product.id)} className="bg-gray-600 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded">Delete</button>
                                    )}
                                </td>
                            </tr>
                        )) : (
                            <tr><td colSpan="5" className="text-center p-8 text-gray-400">No products in this category.</td></tr>
                        )}
                    </tbody>
                </table>
            </div>
            <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} onAction={handleAction} tab={activeTab} />
        </div>
    );
};

const AnalyticsAndReporting = () => {
    const barChartRef = useRef(null);

    useEffect(() => {
        if (!barChartRef.current || !window.Chart) return;

        const ctx = barChartRef.current.getContext('2d');
        const chart = new window.Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
                datasets: [{
                    label: 'Sales',
                    data: [12000, 19000, 15000, 21000, 18000, 24000, 22000, 28000],
                    backgroundColor: '#3B82F6',
                    borderColor: '#3B82F6',
                    borderWidth: 1,
                    borderRadius: 4,
                }]
            },
            options: {
                responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } },
                scales: {
                    x: { grid: { display: false }, ticks: { color: '#9CA3AF' } },
                    y: { grid: { color: '#374151' }, ticks: { color: '#9CA3AF', callback: (value) => `$${value / 1000}k` } }
                }
            }
        });

        return () => chart.destroy();
    }, []);

    const topProducts = [
        { rank: 1, name: 'Cyber-Knit Jacket', units: 450, revenue: 157500 },
        { rank: 2, name: 'Quantum Headset', units: 320, revenue: 63996.80 },
        { rank: 3, name: 'Chrono-Watch', units: 210, revenue: 89250 },
    ];
    const topSellers = [
        { rank: 1, name: 'Smith\'s Wares', orders: 890, revenue: 231400 },
        { rank: 2, name: 'JD Electronics', orders: 650, revenue: 130000 },
        { rank: 3, name: 'Time Keepers Inc.', orders: 430, revenue: 182750 },
    ];

    return (
        <div className="space-y-8">
            <div className="flex justify-between items-center">
                <h2 className="text-3xl font-bold">Analytics & Reporting</h2>
                <div className="bg-gray-700 text-white py-2 px-4 rounded-lg">Last 30 Days</div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard icon={<DollarSignIcon />} title="Gross Sales" value="$152,870" />
                <StatCard icon={<ShoppingBagIcon />} title="Net Revenue" value="$122,296" />
                <StatCard icon={<UsersIcon />} title="Orders" value="1,432" />
                <StatCard icon={<StoreIcon />} title="Avg. Order Value" value="$106.75" />
            </div>
            <div className="bg-gray-800 p-6 rounded-lg h-96">
                <h3 className="text-lg font-bold mb-4">Sales Over Time</h3>
                <canvas ref={barChartRef}></canvas>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-gray-800 rounded-lg p-6">
                    <h3 className="text-lg font-bold mb-4">Top Selling Products</h3>
                    <table className="w-full text-left">
                        <thead><tr className="border-b border-gray-700"><th className="p-2">Rank</th><th className="p-2">Product</th><th className="p-2">Units Sold</th><th className="p-2">Revenue</th></tr></thead>
                        <tbody>{topProducts.map(p => <tr key={p.rank} className="border-b border-gray-700/50 hover:bg-gray-700/50"><td className="p-2">{p.rank}</td><td className="p-2">{p.name}</td><td className="p-2">{p.units}</td><td className="p-2 font-mono">${p.revenue.toFixed(2)}</td></tr>)}</tbody>
                    </table>
                </div>
                <div className="bg-gray-800 rounded-lg p-6">
                    <h3 className="text-lg font-bold mb-4">Top Performing Sellers</h3>
                    <table className="w-full text-left">
                        <thead><tr className="border-b border-gray-700"><th className="p-2">Rank</th><th className="p-2">Seller</th><th className="p-2">Orders</th><th className="p-2">Revenue</th></tr></thead>
                        <tbody>{topSellers.map(s => <tr key={s.rank} className="border-b border-gray-700/50 hover:bg-gray-700/50"><td className="p-2">{s.rank}</td><td className="p-2">{s.name}</td><td className="p-2">{s.orders}</td><td className="p-2 font-mono">${s.revenue.toFixed(2)}</td></tr>)}</tbody>
                    </table>
                </div>
            </div>
        </div>
    )
};


const TransactionDetailsPage = ({ transaction, onBack }) => (
    <div className="bg-gray-800 rounded-lg shadow-lg p-6">
        <button onClick={onBack} className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 mb-6">
            <ArrowLeftIcon />
            <span>Back to Transactions</span>
        </button>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
                <h3 className="text-xl font-bold">Transaction Details</h3>
                <div><p className="text-gray-400">Transaction ID</p><p className="font-mono">{transaction.id}</p></div>
                <div><p className="text-gray-400">Order ID</p><p className="font-mono">{transaction.orderId}</p></div>
                <div><p className="text-gray-400">Customer</p><p>{transaction.customer}</p></div>
                <div><p className="text-gray-400">Seller</p><p>{transaction.seller}</p></div>
                <div><p className="text-gray-400">Date</p><p>{transaction.date}</p></div>
                <div><p className="text-gray-400">Payment Method</p><p>{transaction.method}</p></div>
                <div><p className="text-gray-400">Status</p><span className="bg-green-600/50 text-green-300 px-3 py-1 rounded-full text-sm">{transaction.status}</span></div>
            </div>
            <div className="bg-gray-700/50 p-4 rounded-lg space-y-3">
                <h3 className="text-xl font-bold">Financials</h3>
                <div className="flex justify-between text-lg"><span className="text-gray-400">Total Amount</span> <span className="font-mono">${transaction.total.toFixed(2)}</span></div>
                <div className="flex justify-between"><span className="text-gray-400">Platform Fee (20%)</span> <span className="font-mono text-red-400">-${(transaction.total * 0.2).toFixed(2)}</span></div>
                <hr className="border-gray-600" />
                <div className="flex justify-between font-bold text-lg"><span className="text-gray-300">Net to Seller</span> <span className="font-mono text-green-400">${(transaction.total * 0.8).toFixed(2)}</span></div>
                <div className="pt-4">
                    <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Issue Refund</button>
                </div>
            </div>
        </div>
    </div>
);

const PayoutDetailsPage = ({ payout, onBack }) => (
    <div className="bg-gray-800 rounded-lg shadow-lg p-6">
        <button onClick={onBack} className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 mb-6">
            <ArrowLeftIcon />
            <span>Back to Payouts</span>
        </button>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-1 space-y-4">
                <h3 className="text-xl font-bold">Payout Details</h3>
                <div><p className="text-gray-400">Payout ID</p><p className="font-mono">{payout.id}</p></div>
                <div><p className="text-gray-400">Seller</p><p>{payout.seller}</p></div>
                <div><p className="text-gray-400">Amount</p><p className="text-2xl font-mono text-green-400">${payout.amount.toFixed(2)}</p></div>
                <div><p className="text-gray-400">Requested</p><p>{payout.requestedDate}</p></div>
                <div><p className="text-gray-400">Status</p><span className="bg-yellow-600/50 text-yellow-300 px-3 py-1 rounded-full text-sm">{payout.status}</span></div>
                <div className="pt-4 flex space-x-2">
                    <button className="w-full bg-blue-600 hover:bg-blue-700 font-bold py-2 px-4 rounded">Approve</button>
                    <button className="w-full bg-gray-600 hover:bg-gray-500 font-bold py-2 px-4 rounded">Deny</button>
                </div>
            </div>
            <div className="md:col-span-2">
                <h3 className="text-xl font-bold mb-4">Included Transactions ({payout.transactions.length})</h3>
                <div className="bg-gray-700/50 p-4 rounded-lg max-h-96 overflow-y-auto">
                    <table className="w-full text-left">
                        <thead><tr><th className="p-2">Transaction ID</th><th className="p-2">Order ID</th><th className="p-2">Amount</th></tr></thead>
                        <tbody>
                            {payout.transactions.map(t => (
                                <tr key={t.id} className="border-b border-gray-600"><td className="p-2 font-mono">{t.id}</td><td className="p-2 font-mono">{t.orderId}</td><td className="p-2 font-mono">${t.amount.toFixed(2)}</td></tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
);


const PaymentManagement = () => {
    const [view, setView] = useState('list'); // 'list', 'transaction_details', 'payout_details'
    const [selectedItem, setSelectedItem] = useState(null);
    const [activeTab, setActiveTab] = useState('payouts');
    const [searchTerm, setSearchTerm] = useState("");

    const transactions = [
        { id: 'TRN-001', orderId: 'ORD-101', customer: 'Alice', seller: 'JD Electronics', total: 199.99, date: '2025-09-05', method: 'Stripe', status: 'Completed' },
        { id: 'TRN-002', orderId: 'ORD-102', customer: 'Bob', seller: 'Smith\'s Wares', total: 120.00, date: '2025-09-05', method: 'PayPal', status: 'Completed' },
    ];
    const payouts = [
        { id: 'PAY-001', seller: 'JD Electronics', amount: 1250.75, requestedDate: '2025-09-04', status: 'Pending', transactions: [{ id: 'TRN-001', orderId: 'ORD-101', amount: 159.99 }] },
        { id: 'PAY-002', seller: 'Smith\'s Wares', amount: 875.00, requestedDate: '2025-09-03', status: 'Pending', transactions: [{ id: 'TRN-002', orderId: 'ORD-102', amount: 96.00 }] },
    ];

    if (view === 'transaction_details') {
        return <TransactionDetailsPage transaction={selectedItem} onBack={() => { setView('list'); setSelectedItem(null); }} />
    }
    if (view === 'payout_details') {
        return <PayoutDetailsPage payout={selectedItem} onBack={() => { setView('list'); setSelectedItem(null); }} />
    }

    return (
        <div className="bg-gray-800 rounded-lg shadow-lg">
            <div className="p-6 border-b border-gray-700 flex flex-wrap gap-4 justify-between items-center">
                <div className="flex-grow">
                    <h2 className="text-2xl font-bold">Payment Management</h2>
                    <div className="flex space-x-1 sm:space-x-4 mt-4 border-b border-gray-700">
                        <button onClick={() => setActiveTab('payouts')} className={`py-2 px-1 text-sm font-medium ${activeTab === 'payouts' ? 'border-b-2 border-blue-500 text-white' : 'text-gray-400'}`}>Seller Payouts</button>
                        <button onClick={() => setActiveTab('transactions')} className={`py-2 px-1 text-sm font-medium ${activeTab === 'transactions' ? 'border-b-2 border-blue-500 text-white' : 'text-gray-400'}`}>Transaction History</button>
                    </div>
                </div>
                <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} placeholder="Search..." />
            </div>
            {activeTab === 'payouts' && (
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead><tr className="bg-gray-700/50"><th className="p-4">Payout ID</th><th className="p-4">Seller</th><th className="p-4">Amount</th><th className="p-4">Date</th><th className="p-4">Status</th><th className="p-4 text-center">Actions</th></tr></thead>
                        <tbody>
                            {payouts.map(payout => (
                                <tr key={payout.id} className="border-b border-gray-700 hover:bg-gray-700/50">
                                    <td className="p-4 font-mono">{payout.id}</td><td className="p-4">{payout.seller}</td><td className="p-4 font-mono">${payout.amount.toFixed(2)}</td><td className="p-4">{payout.requestedDate}</td>
                                    <td className="p-4"><span className="bg-yellow-600/50 text-yellow-300 px-3 py-1 rounded-full text-sm">{payout.status}</span></td>
                                    <td className="p-4 text-center">
                                        <button onClick={() => { setView('payout_details'); setSelectedItem(payout); }} className="bg-blue-600 hover:bg-blue-700 font-bold py-2 px-4 rounded">View Details</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
            {activeTab === 'transactions' && (
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead><tr className="bg-gray-700/50"><th className="p-4">Transaction ID</th><th className="p-4">Order ID</th><th className="p-4">Customer</th><th className="p-4">Total</th><th className="p-4">Date</th><th className="p-4 text-center">Actions</th></tr></thead>
                        <tbody>
                            {transactions.map(t => (
                                <tr key={t.id} className="border-b border-gray-700 hover:bg-gray-700/50">
                                    <td className="p-4 font-mono">{t.id}</td><td className="p-4 font-mono">{t.orderId}</td><td className="p-4">{t.customer}</td><td className="p-4 font-mono">${t.total.toFixed(2)}</td><td className="p-4">{t.date}</td>
                                    <td className="p-4 text-center">
                                        <button onClick={() => { setView('transaction_details'); setSelectedItem(t); }} className="bg-blue-600 hover:bg-blue-700 font-bold py-2 px-4 rounded">View Details</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

const UserReports = () => {
    const [activeTab, setActiveTab] = useState('new');
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedReport, setSelectedReport] = useState(null);

    const reports = {
        new: [{ id: 'REP-001', userId: 'USR-xyz123', type: 'Bug Report', subject: 'Cannot update profile picture', date: '2025-09-05', status: 'New', description: 'When I try to upload a new profile picture, I get a 500 server error. I have tried multiple image formats.', sellerId: 'SEL-i9j0k112', shopId: 'SHP-c3d4', productId: 'PROD-002' }],
        progress: [{ id: 'REP-002', userId: 'USR-abc789', type: 'Seller Complaint', subject: 'Item not as described', date: '2025-09-04', status: 'In Progress', description: 'The "Cyber-Knit Jacket" I received is a different color than advertised.', sellerId: 'SEL-i9j0k112', shopId: 'SHP-c3d4', productId: 'PROD-003' }],
        resolved: [{ id: 'REP-003', userId: 'USR-def456', type: 'Feedback', subject: 'Love the new layout!', date: '2025-09-03', status: 'Resolved', description: 'Just wanted to say the new website design is fantastic. Much easier to navigate.', sellerId: null, shopId: null, productId: null }],
    };

    const filteredReports = reports[activeTab]?.filter(r =>
        r.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
        r.userId.toLowerCase().includes(searchTerm.toLowerCase())) || [];

    return (
        <div className="bg-gray-800 rounded-lg shadow-lg">
            <div className="p-6 border-b border-gray-700 flex flex-wrap gap-4 justify-between items-center">
                <div className="flex-grow">
                    <h2 className="text-2xl font-bold">User Reports & Feedback</h2>
                    <div className="flex space-x-1 sm:space-x-4 mt-4 border-b border-gray-700">
                        <button onClick={() => setActiveTab('new')} className={`py-2 px-1 text-sm font-medium ${activeTab === 'new' ? 'border-b-2 border-blue-500 text-white' : 'text-gray-400'}`}>New</button>
                        <button onClick={() => setActiveTab('progress')} className={`py-2 px-1 text-sm font-medium ${activeTab === 'progress' ? 'border-b-2 border-blue-500 text-white' : 'text-gray-400'}`}>In Progress</button>
                        <button onClick={() => setActiveTab('resolved')} className={`py-2 px-1 text-sm font-medium ${activeTab === 'resolved' ? 'border-b-2 border-blue-500 text-white' : 'text-gray-400'}`}>Resolved</button>
                    </div>
                </div>
                <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} placeholder="Search reports..." />
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-left">
                    <thead><tr className="bg-gray-700/50"><th className="p-4">Report ID</th><th className="p-4">User ID</th><th className="p-4">Subject</th><th className="p-4">Date</th><th className="p-4 text-center">Actions</th></tr></thead>
                    <tbody>
                        {filteredReports.length > 0 ? filteredReports.map(report => (
                            <tr key={report.id} className="border-b border-gray-700 hover:bg-gray-700/50">
                                <td className="p-4 font-mono">{report.id}</td>
                                <td className="p-4 font-mono">{report.userId}</td>
                                <td className="p-4">{report.subject}</td>
                                <td className="p-4">{report.date}</td>
                                <td className="p-4 text-center">
                                    <button onClick={() => setSelectedReport(report)} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">View Details</button>
                                </td>
                            </tr>
                        )) : <tr><td colSpan="5" className="text-center p-8 text-gray-400">No reports in this category.</td></tr>}
                    </tbody>
                </table>
            </div>
            <ReportDetailsModal report={selectedReport} onClose={() => setSelectedReport(null)} />
        </div>
    );
};

const ProductDetailsModal = ({ product, onClose }) => {
    if (!product) return null;

    return (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
            <div className="bg-gray-800 rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] flex flex-col">
                <div className="p-4 border-b border-gray-700 flex justify-between items-center">
                    <h3 className="text-xl font-bold">Product Details: {product.name}</h3>
                    <button onClick={onClose} className="p-1 rounded-full hover:bg-gray-700"><CloseIcon /></button>
                </div>
                <div className="p-6 overflow-y-auto grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Left Column */}
                    <div className="md:col-span-1 space-y-4">
                        <img src={`https://placehold.co/600x600/161b22/FFFFFF?text=${product.name.replace(' ', '+')}`} alt={product.name} className="rounded-lg w-full" />
                        <div className="bg-gray-700/50 p-3 rounded-lg">
                            <p className="text-gray-400">Price</p>
                            <p className="text-2xl font-mono">${product.price.toFixed(2)}</p>
                        </div>
                        <div className="bg-gray-700/50 p-3 rounded-lg">
                            <p className="text-gray-400">Stock</p>
                            <p className="text-2xl font-bold">{product.stock} units</p>
                        </div>
                    </div>
                    {/* Right Column */}
                    <div className="md:col-span-2 space-y-6">
                        <div>
                            <h4 className="font-bold text-lg mb-2">Sales & Reviews</h4>
                            <div className="grid grid-cols-2 gap-4">
                                <StatCard icon={<ShoppingBagIcon />} title="Units Sold" value={product.sales} />
                                <StatCard icon={<DollarSignIcon />} title="Total Revenue" value={`$${(product.sales * product.price).toFixed(2)}`} />
                            </div>
                            <div className="mt-4 bg-gray-700/50 p-4 rounded-lg">
                                <p className="font-semibold mb-2">Customer Reviews ({product.reviews.positive + product.reviews.negative}) - {product.reviews.rating} ★</p>
                                <div className="flex items-center gap-4">
                                    <div className="flex items-center text-green-400"><ThumbsUpIcon /> <span className="ml-2">{product.reviews.positive} Positive</span></div>
                                    <div className="flex items-center text-red-400"><ThumbsDownIcon /> <span className="ml-2">{product.reviews.negative} Negative</span></div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h4 className="font-bold text-lg mb-2">Linked User Reports</h4>
                            {product.reports.length > 0 ? (
                                <ul className="space-y-2">
                                    {product.reports.map(report => (
                                        <li key={report.id} className="bg-gray-700/50 p-3 rounded-lg">
                                            <p className="font-semibold text-red-400">{report.subject}</p>
                                            <p className="text-xs text-gray-400 font-mono">Report ID: {report.id}</p>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p className="text-gray-400">No reports found for this product.</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const SellerDetailsPage = ({ seller, onBack }) => {
    const [activeTab, setActiveTab] = useState('overview');
    const [viewingProduct, setViewingProduct] = useState(null);
    const revenueChartRef = useRef(null);

    useEffect(() => {
        if (!revenueChartRef.current || !window.Chart) return;
        const ctx = revenueChartRef.current.getContext('2d');
        const chart = new window.Chart(ctx, {
            type: 'line',
            data: {
                labels: ['May', 'Jun', 'Jul', 'Aug'],
                datasets: [{
                    label: 'Revenue',
                    data: [5000, 7200, 6500, 8900],
                    borderColor: '#3B82F6',
                    tension: 0.1
                }]
            },
            options: { plugins: { legend: { display: false } } }
        });
        return () => chart.destroy();
    }, []);

    const renderContent = () => {
        switch (activeTab) {
            case 'overview':
                return (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-gray-700/50 p-4 rounded-lg h-80"><canvas ref={revenueChartRef}></canvas></div>
                        <div className="space-y-4">
                            <StatCard icon={<DollarSignIcon />} title="Total Revenue" value="$27,600" />
                            <StatCard icon={<ShoppingBagIcon />} title="Total Orders" value="1250" />
                        </div>
                    </div>
                );
            case 'shops':
                return (
                    <div>
                        {seller.shops.map(shop => (
                            <div key={shop.id} className="bg-gray-700/50 p-4 rounded-lg">
                                <h4 className="text-lg font-bold">{shop.name}</h4>
                                <p>Performance: <span className="font-semibold text-green-400">{shop.performance}</span></p>
                                <div className="mt-4">
                                    <h5 className="font-semibold mb-2">Products ({shop.products.length})</h5>
                                    {shop.products.map(product => (
                                        <div key={product.id} onClick={() => setViewingProduct(product)} className="flex justify-between items-center p-2 hover:bg-gray-700 rounded-md cursor-pointer">
                                            <span>{product.name}</span>
                                            <span className="text-sm text-blue-400">View Details</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                );
            case 'transactions':
                return (
                    <div className="bg-gray-700/50 p-4 rounded-lg">
                        <table className="w-full text-left">
                            <thead><tr><th className="p-2">Date</th><th className="p-2">Order ID</th><th className="p-2">Amount</th><th className="p-2">Status</th></tr></thead>
                            <tbody>
                                {seller.transactions.map(t => (
                                    <tr key={t.id} className="border-b border-gray-600">
                                        <td className="p-2">{t.date}</td>
                                        <td className="p-2 font-mono">{t.orderId}</td>
                                        <td className="p-2 font-mono">${t.total.toFixed(2)}</td>
                                        <td className="p-2 text-green-400">{t.status}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                );
            case 'documents':
                return (
                    <div className="space-y-4">
                        <div className="bg-gray-700/50 p-4 rounded-lg flex items-center justify-between">
                            <div className="flex items-center gap-3"><FileTextIcon /> <span>National ID (NID)</span></div>
                            {seller.documents.nid === 'verified' ?
                                <span className="flex items-center gap-2 text-green-400"><CheckCircleIcon /> Verified</span> :
                                <span className="text-yellow-400">Pending</span>}
                        </div>
                        <div className="bg-gray-700/50 p-4 rounded-lg flex items-center justify-between">
                            <div className="flex items-center gap-3"><FileTextIcon /><span>Business License</span></div>
                            {seller.documents.businessLicense === 'verified' ?
                                <span className="flex items-center gap-2 text-green-400"><CheckCircleIcon /> Verified</span> :
                                <span className="text-yellow-400">Pending</span>}
                        </div>
                    </div>
                );
            default: return null;
        }
    };

    return (
        <>
            <div className="bg-gray-800 rounded-lg shadow-lg p-6">
                <button onClick={onBack} className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 mb-6">
                    <ArrowLeftIcon />
                    <span>Back to Seller List</span>
                </button>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="md:col-span-1 space-y-4 bg-gray-700/50 p-4 rounded-lg self-start">
                        <h3 className="text-xl font-bold">{seller.name}</h3>
                        <div><p className="text-gray-400">Seller ID</p><p className="font-mono">{seller.id}</p></div>
                        <div><p className="text-gray-400">Email</p><p>{seller.email}</p></div>
                        <div><p className="text-gray-400">Member Since</p><p>{seller.memberSince}</p></div>
                    </div>
                    <div className="md:col-span-3">
                        <div className="flex space-x-1 border-b border-gray-700 mb-4">
                            <button onClick={() => setActiveTab('overview')} className={`py-2 px-4 ${activeTab === 'overview' ? 'border-b-2 border-blue-500' : ''}`}>Overview</button>
                            <button onClick={() => setActiveTab('shops')} className={`py-2 px-4 ${activeTab === 'shops' ? 'border-b-2 border-blue-500' : ''}`}>Shops</button>
                            <button onClick={() => setActiveTab('transactions')} className={`py-2 px-4 ${activeTab === 'transactions' ? 'border-b-2 border-blue-500' : ''}`}>Transactions</button>
                            <button onClick={() => setActiveTab('documents')} className={`py-2 px-4 ${activeTab === 'documents' ? 'border-b-2 border-blue-500' : ''}`}>Documents</button>
                        </div>
                        {renderContent()}
                    </div>
                </div>
            </div>
            <ProductDetailsModal product={viewingProduct} onClose={() => setViewingProduct(null)} />
        </>
    );
};


const SellerManagement = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [viewingSeller, setViewingSeller] = useState(null);

    const allSellers = MOCK_DATA.sellers;

    const filteredSellers = allSellers.filter(s =>
        s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        s.id.toLowerCase().includes(searchTerm.toLowerCase()));

    if (viewingSeller) {
        return <SellerDetailsPage seller={viewingSeller} onBack={() => setViewingSeller(null)} />
    }

    return (
        <div className="bg-gray-800 rounded-lg shadow-lg">
            <div className="p-6 border-b border-gray-700 flex justify-between items-center">
                <h2 className="text-2xl font-bold">Seller & Shop Management</h2>
                <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} placeholder="Search by seller name or ID..." />
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-left">
                    <thead><tr className="bg-gray-700/50"><th className="p-4">Seller Name</th><th className="p-4">Seller ID</th><th className="p-4">Shops</th><th className="p-4">Member Since</th><th className="p-4 text-center">Actions</th></tr></thead>
                    <tbody>
                        {filteredSellers.map(seller => (
                            <tr key={seller.id} className="border-b border-gray-700 hover:bg-gray-700/50">
                                <td className="p-4">{seller.name}</td>
                                <td className="p-4 font-mono">{seller.id}</td>
                                <td className="p-4">{seller.shops.length}</td>
                                <td className="p-4">{seller.memberSince}</td>
                                <td className="p-4 text-center">
                                    <button onClick={() => setViewingSeller(seller)} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">View Details</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};


// --- Layout Components ---

const Sidebar = ({ navigateTo, activePage }) => {
    const navItems = [
        { id: 'dashboard', icon: <DashboardIcon />, label: 'Dashboard' },
        { id: 'seller-approval', icon: <SellerApprovalIcon />, label: 'Seller Approval' },
        { id: 'shop-approval', icon: <ShopApprovalIcon />, label: 'Shop Approval' },
        { id: 'product-approval', icon: <ProductApprovalIcon />, label: 'Product Approval' },
        { id: 'analytics', icon: <AnalyticsIcon />, label: 'Analytics' },
        { id: 'payment-management', icon: <PaymentManagementIcon />, label: 'Payments' },
        { id: 'seller-management', icon: <SellerManagementIcon />, label: 'Seller Management' },
        { id: 'user-reports', icon: <UserReportsIcon />, label: 'User Reports' },
    ];

    return (
        <aside className="w-64 bg-gray-800 text-gray-300 flex-col hidden md:flex">
            <div className="h-20 flex items-center justify-center text-2xl font-bold text-white border-b border-gray-700">Admin Panel</div>
            <nav className="flex-1 px-4 py-6">
                {navItems.map(item => (
                    <a key={item.id} href="#" onClick={(e) => { e.preventDefault(); navigateTo(item.id); }} className={`flex items-center px-4 py-3 mb-2 rounded-lg transition-colors duration-200 ${activePage === item.id ? 'bg-blue-600 text-white' : 'hover:bg-gray-700 hover:text-white'}`}>
                        <span className="w-6 h-6 mr-4">{item.icon}</span><span>{item.label}</span>
                    </a>
                ))}
            </nav>
            <div className="px-4 py-6 border-t border-gray-700">
                <a href="#" onClick={(e) => { e.preventDefault(); navigateTo('logout'); }} className="flex items-center px-4 py-3 rounded-lg hover:bg-gray-700 hover:text-white">
                    <span className="w-6 h-6 mr-4"><LogoutIcon /></span><span>Logout</span>
                </a>
            </div>
        </aside>
    );
};

const Header = ({ title, userInfo }) => (
    <header className="h-20 bg-gray-900 flex items-center justify-between px-8 border-b border-gray-700">
        <h1 className="text-2xl font-bold">{title}</h1>
        <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full hover:bg-gray-700"><BellIcon /></button>
            <button className="p-2 rounded-full hover:bg-gray-700"><UserIcon /></button>
            <div className="text-right hidden sm:block">
                <p className="font-semibold">{userInfo.preferred_username || 'Admin'}</p>
                <p className="text-xs text-gray-400">Administrator</p>
            </div>
        </div>
    </header>
);

const AdminLayout = ({ userInfo, onLogout }) => {
    const [activePage, setActivePage] = useState('dashboard');
    const [pageState, setPageState] = useState({});

    const pages = {
        'dashboard': { component: <Dashboard navigateTo={navigateTo} />, title: 'Dashboard' },
        'seller-approval': { component: <SellerApproval />, title: 'Seller Approval' },
        'shop-approval': { component: <ShopApproval />, title: 'Shop Approval' },
        'product-approval': { component: <ProductApproval />, title: 'Product Approval' },
        'analytics': { component: <AnalyticsAndReporting />, title: 'Analytics & Reporting' },
        'payment-management': { component: <PaymentManagement />, title: 'Payment Management' },
        'seller-management': { component: <SellerManagement />, title: 'Seller Management' },
        'user-reports': { component: <UserReports />, title: 'User Reports' },
    };

    function navigateTo(page, state = {}) {
        if (page === 'logout') {
            onLogout();
            return;
        }
        setActivePage(page);
        setPageState(state);
    }

    const ActiveComponent = React.cloneElement(pages[activePage].component, pageState);

    return (
        <div className="flex h-screen bg-gray-900 text-white">
            <Sidebar navigateTo={navigateTo} activePage={activePage} />
            <div className="flex-1 flex flex-col overflow-hidden">
                <Header title={pages[activePage].title} userInfo={userInfo} />
                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-900 p-8">
                    {ActiveComponent}
                </main>
            </div>
        </div>
    );
};


// --- Placeholder Login Page ---
const LoginPage = ({ onLogin }) => {
    const [username, setUsername] = useState("");
    const handleSubmit = (e) => { e.preventDefault(); username.trim() ? onLogin(username) : alert('Please enter a username.'); };

    return (
        <div className="bg-gray-900 text-white min-h-screen flex items-center justify-center">
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-sm">
                <h1 className="text-3xl font-bold mb-6 text-center">Admin Login</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username (any will work)" className="w-full bg-gray-700 border-gray-600 rounded-lg px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    <input type="password" placeholder="Password" className="w-full bg-gray-700 border-gray-600 rounded-lg px-3 py-2 mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">Login</button>
                </form>
            </div>
        </div>
    );
};

// --- Main App Component ---

function App() {
    const [authenticated, setAuthenticated] = useState(false);
    const [userInfo, setUserInfo] = useState(null);

    const handleLogin = (username) => {
        setUserInfo({ preferred_username: username });
        setAuthenticated(true);
    };

    const handleLogout = () => {
        setUserInfo(null);
        setAuthenticated(false);
    };

    return authenticated ? <AdminLayout userInfo={userInfo} onLogout={handleLogout} /> : <LoginPage onLogin={handleLogin} />;
}

export default App;

