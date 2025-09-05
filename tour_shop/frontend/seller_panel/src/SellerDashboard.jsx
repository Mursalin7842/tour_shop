import React, { useState, useEffect, useRef } from 'react';

// --- Icon Components (using inline SVG) ---
const DashboardIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>;
const PackageIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>;
const ShoppingCartIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>;
const DollarSignIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>;
const SettingsIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 0 2l-.15.08a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.38a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1 0-2l.15-.08a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg>;
const LogoutIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>;
const BellIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>;
const PlusCircleIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>;
const EyeIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>;
const EditIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>;
const TrashIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>;
const AlertCircleIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>;
const CheckCircleIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>;
const XCircleIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>;
const ClockIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>;
const CloseIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>;
const MessageSquareIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>;
const StarIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-yellow-400"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>;
const StoreIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21V11H4v10M4 7V4h16v3M20 21V11h-8M12 21a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2z" /></svg>;
const ThumbsUpIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 10v12" /><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a2 2 0 0 1 3 1.88z" /></svg>;
const ThumbsDownIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 14V2" /><path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22h0a2 2 0 0 1-3-1.88z" /></svg>;
const UploadCloudIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" /><path d="M12 12v9" /><path d="m16 16-4-4-4 4" /></svg>;
const LifeBuoyIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="4" /><line x1="4.93" y1="4.93" x2="9.17" y2="9.17" /><line x1="14.83" y1="14.83" x2="19.07" y2="19.07" /><line x1="14.83" y1="9.17" x2="19.07" y2="4.93" /><line x1="14.83" y1="9.17" x2="18.36" y2="5.64" /><line x1="4.93" y1="19.07" x2="9.17" y2="14.83" /></svg>;
const StarHalfIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L9.18002 8.26002L2 9.27002L7 14.14L5.82002 21.02L12 17.77V2Z" /></svg>;

// --- Mock Data ---
const MOCK_PRODUCTS_DATA = [
    { id: 1, name: 'Quantum Headset', category: 'Electronics', price: 199.99, stock: 150, status: 'modification', imageUrl: 'https://placehold.co/600x400/1E293B/FFFFFF?text=Quantum+Headset', description: 'High-fidelity gaming headset with immersive 7.1 surround sound.', reviews: [{ id: 1, user: 'GamerGuy92', rating: 5, comment: 'Amazing sound quality!' }, { id: 2, user: 'AudioPhile', rating: 4, comment: 'Great for music, not just gaming.' }], reports: [] },
    { id: 2, name: 'Cyber-Knit Jacket', category: 'Apparel', price: 350.00, stock: 80, status: 'approved', imageUrl: 'https://placehold.co/600x400/1E293B/FFFFFF?text=Cyber-Knit+Jacket', description: 'A stylish jacket with integrated smart fabric.', reviews: [{ id: 3, user: 'Fashionista', rating: 5, comment: 'So futuristic and comfortable!' }], reports: [{ id: 1, user: 'ConcernedUser', subject: 'Incorrect Sizing Chart' }] },
    { id: 3, name: 'Aether-Light Sneakers', category: 'Apparel', price: 120.00, stock: 0, status: 'approved', imageUrl: 'https://placehold.co/600x400/1E293B/FFFFFF?text=Aether-Light', description: 'Lightweight and durable sneakers for everyday use.', reviews: [], reports: [] },
    { id: 4, name: 'Chrono-Watch', category: 'Accessories', price: 425.00, stock: 120, status: 'pending', imageUrl: 'https://placehold.co/600x400/1E293B/FFFFFF?text=Chrono-Watch', description: 'A sleek, modern watch.', reviews: [], reports: [] },
    { id: 5, name: 'Hover-Drone X1', category: 'Gadgets', price: 899.00, stock: 30, status: 'rejected', imageUrl: 'https://placehold.co/600x400/1E293B/FFFFFF?text=Hover-Drone', description: 'A professional-grade camera drone.', reviews: [], reports: [] },
];

const MOCK_ORDERS_DATA = [
    { id: 'ORD-102', customer: 'Bob', date: '2025-09-05', status: 'Completed', total: 120.00, items: [{ productName: 'Aether-Light Sneakers', qty: 1 }] },
    { id: 'ORD-103', customer: 'Charlie', date: '2025-09-04', status: 'Shipped', total: 350.00, items: [{ productName: 'Cyber-Knit Jacket', qty: 1 }] },
    { id: 'ORD-104', customer: 'Diana', date: '2025-09-05', status: 'Processing', total: 199.99, items: [{ productName: 'Quantum Headset', qty: 1 }] },
];

// --- Reusable Components ---
const Modal = ({ children, onClose, title }) => (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4 animate-fade-in">
        <div className="bg-gray-800 rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] flex flex-col">
            <div className="p-4 border-b border-gray-700 flex justify-between items-center">
                <h3 className="text-xl font-bold">{title}</h3>
                <button onClick={onClose} className="p-1 rounded-full hover:bg-gray-700"><CloseIcon /></button>
            </div>
            <div className="p-6 overflow-y-auto">{children}</div>
        </div>
    </div>
);

const StatCard = ({ icon, title, value, growth, onClick }) => (
    <div onClick={onClick} className={`bg-gray-800 p-6 rounded-lg flex items-center transition-all transform hover:-translate-y-1 ${onClick ? 'cursor-pointer hover:bg-gray-700' : ''}`}>
        <div className="p-3 rounded-lg mr-4 bg-gray-700">{icon}</div>
        <div>
            <p className="text-gray-400 text-sm font-medium">{title}</p>
            <p className="text-2xl font-bold">{value}</p>
            {growth && <p className={`text-sm font-medium ${growth.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>{growth}</p>}
        </div>
    </div>
);

const NotificationItem = ({ icon, text, details, time }) => (
    <div className="flex items-start p-4 bg-gray-800/50 rounded-lg mb-4">
        <div className="mr-4 text-blue-400">{icon}</div>
        <div className="flex-1">
            <p className="font-semibold">{text}</p>
            {details && <p className="text-sm text-gray-400 mt-1">{details}</p>}
            <p className="text-xs text-gray-500 mt-1">{time}</p>
        </div>
    </div>
);

const Rating = ({ rating }) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    return (
        <div className="flex items-center">
            {[...Array(fullStars)].map((_, i) => <StarIcon key={`full-${i}`} />)}
            {halfStar && <StarHalfIcon key="half" />}
            {[...Array(emptyStars)].map((_, i) => <StarIcon key={`empty-${i}`} className="text-gray-600" />)}
        </div>
    );
};

const getStatusBadge = (status) => {
    switch (status) {
        case 'approved': return <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-900 text-green-300">Approved</span>;
        case 'pending': return <span className="px-2 py-1 text-xs font-medium rounded-full bg-gray-700 text-gray-300">Pending Admin</span>;
        case 'modification': return <span className="px-2 py-1 text-xs font-medium rounded-full bg-yellow-900 text-yellow-300">Mod Request</span>;
        case 'rejected': return <span className="px-2 py-1 text-xs font-medium rounded-full bg-red-900 text-red-300">Rejected</span>;
        default: return null;
    }
};

// --- Page Components ---

const SellerDashboardPage = ({ setActivePage, setProductFilter }) => {
    const chartRef = useRef(null);
    useEffect(() => {
        if (!chartRef.current || !window.Chart) return;
        const ctx = chartRef.current.getContext('2d');
        const chart = new window.Chart(ctx, { type: 'line', data: { labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'], datasets: [{ label: 'Sales', data: [1200, 1900, 1500, 2100, 1800, 2400, 2800], backgroundColor: 'rgba(59, 130, 246, 0.2)', borderColor: '#3B82F6', tension: 0.4, fill: true }] }, options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { x: { grid: { color: '#374151' }, ticks: { color: '#9CA3AF' } }, y: { grid: { color: '#374151' }, ticks: { color: '#9CA3AF', callback: (value) => `$${value / 1000}k` } } } } });
        return () => chart.destroy();
    }, []);

    const handleStatClick = (page, filter = 'all') => {
        setProductFilter(filter);
        setActivePage(page);
    };

    return (
        <div className="space-y-8 animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard icon={<DollarSignIcon />} title="Total Revenue" value="$27,600" growth="+8.2%" />
                <StatCard icon={<ShoppingCartIcon />} title="Total Orders" value="3" growth="+2.1%" onClick={() => setActivePage('orders')} />
                <StatCard icon={<PackageIcon />} title="Listed Products" value="2" onClick={() => handleStatClick('products', 'approved')} />
                <StatCard icon={<ClockIcon />} title="Pending Products" value="1" onClick={() => handleStatClick('products', 'pending')} />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 bg-gray-800 p-6 rounded-lg h-96"><h3 className="text-lg font-bold mb-4">Sales Overview</h3><canvas ref={chartRef}></canvas></div>
                <div className="bg-gray-800 p-6 rounded-lg"><h3 className="text-lg font-bold mb-4">Admin Notifications</h3><div className="space-y-4 max-h-80 overflow-y-auto pr-2"><NotificationItem icon={<CheckCircleIcon />} text="Product Approved" details="'Cyber-Knit Jacket' is now live." time="2 hours ago" /><NotificationItem icon={<AlertCircleIcon />} text="Modification Request" details="'Quantum Headset' images are too low quality." time="1 day ago" /><NotificationItem icon={<XCircleIcon />} text="Product Rejected" details="'Hover-Drone X1' violates our policies." time="3 days ago" /></div></div>
            </div>
        </div>
    );
};

const AddProductModal = ({ onClose, onAddProduct }) => {
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');
    const [stock, setStock] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddProduct({ name, category, price: parseFloat(price), stock: parseInt(stock), description, imageUrl: `https://placehold.co/600x400/1E293B/FFFFFF?text=${name.replace(' ', '+')}` });
    };

    return (
        <Modal onClose={onClose} title="Add New Product">
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div><label className="block text-gray-400 mb-1">Product Name</label><input type="text" value={name} onChange={e => setName(e.target.value)} className="w-full bg-gray-700 rounded p-2 focus:ring-2 focus:ring-blue-500 outline-none" required /></div>
                    <div><label className="block text-gray-400 mb-1">Category</label><input type="text" value={category} onChange={e => setCategory(e.target.value)} className="w-full bg-gray-700 rounded p-2 focus:ring-2 focus:ring-blue-500 outline-none" required /></div>
                    <div><label className="block text-gray-400 mb-1">Price</label><input type="number" value={price} onChange={e => setPrice(e.target.value)} className="w-full bg-gray-700 rounded p-2 focus:ring-2 focus:ring-blue-500 outline-none" required /></div>
                    <div><label className="block text-gray-400 mb-1">Stock</label><input type="number" value={stock} onChange={e => setStock(e.target.value)} className="w-full bg-gray-700 rounded p-2 focus:ring-2 focus:ring-blue-500 outline-none" required /></div>
                </div>
                <div><label className="block text-gray-400 mb-1">Description</label><textarea value={description} onChange={e => setDescription(e.target.value)} rows="4" className="w-full bg-gray-700 rounded p-2 focus:ring-2 focus:ring-blue-500 outline-none" required></textarea></div>
                <div className="pt-4 flex justify-end space-x-3"><button type="button" onClick={onClose} className="bg-gray-600 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded">Cancel</button><button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit for Approval</button></div>
            </form>
        </Modal>
    );
};

const ProductDetailsModal = ({ product, onClose }) => (
    <Modal onClose={onClose} title="Product Details">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div><img src={product.imageUrl} alt={product.name} className="rounded-lg w-full mb-4" /><p className="text-gray-400">{product.description}</p></div>
            <div className="space-y-4">
                <h3 className="text-2xl font-bold">{product.name}</h3>
                <p className="text-gray-400">{product.category}</p>
                <div className="flex items-center justify-between p-3 bg-gray-700/50 rounded-lg"><span>Status</span>{getStatusBadge(product.status)}</div>
                <div className="flex items-center justify-between p-3 bg-gray-700/50 rounded-lg"><span>Price</span><span className="font-mono text-lg">${product.price.toFixed(2)}</span></div>
                <div className="flex items-center justify-between p-3 bg-gray-700/50 rounded-lg"><span>Stock</span><span>{product.stock} units</span></div>
                <div><h4 className="font-bold mb-2">Reviews ({product.reviews.length})</h4>
                    <div className="space-y-3 max-h-40 overflow-y-auto pr-2">
                        {product.reviews.length > 0 ? product.reviews.map(r => (
                            <div key={r.id} className="bg-gray-900/50 p-3 rounded-lg"><div className="flex justify-between items-center mb-1"><span className="font-semibold">{r.user}</span><Rating rating={r.rating} /></div><p className="text-sm text-gray-400">{r.comment}</p></div>
                        )) : <p className="text-sm text-gray-500">No reviews yet.</p>}
                    </div>
                </div>
                <div><h4 className="font-bold mb-2">Admin Reports ({product.reports.length})</h4>
                    <div className="space-y-3">
                        {product.reports.length > 0 ? product.reports.map(rep => (
                            <div key={rep.id} className="bg-red-900/30 p-3 rounded-lg"><p className="text-sm text-red-300">{rep.subject}</p></div>
                        )) : <p className="text-sm text-gray-500">No reports on this product.</p>}
                    </div>
                </div>
            </div>
        </div>
    </Modal>
);

const ProductsPage = ({ products, setProducts, filter, viewingProduct, setViewingProduct }) => {
    const [showAddModal, setShowAddModal] = useState(false);
    const filteredProducts = products.filter(p => filter === 'all' || p.status === filter);

    const handleAddProduct = (newProduct) => {
        setProducts(prev => [...prev, { ...newProduct, id: prev.length + 1, status: 'pending', reviews: [], reports: [] }]);
        setShowAddModal(false);
    };

    return (
        <>
            <div className="bg-gray-800 rounded-lg shadow-lg animate-fade-in">
                <div className="p-6 border-b border-gray-700 flex justify-between items-center">
                    <h2 className="text-2xl font-bold">My Products</h2>
                    <button onClick={() => setShowAddModal(true)} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center gap-2"><PlusCircleIcon /> Add Product</button>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead><tr className="bg-gray-700/50"><th className="p-4">Product</th><th className="p-4">Price</th><th className="p-4">Stock</th><th className="p-4">Status</th><th className="p-4 text-center">Actions</th></tr></thead>
                        <tbody>
                            {filteredProducts.map(p => (
                                <tr key={p.id} className="border-b border-gray-700 hover:bg-gray-700/50">
                                    <td className="p-4 font-semibold">{p.name}</td>
                                    <td className="p-4 font-mono">${p.price.toFixed(2)}</td>
                                    <td className={`p-4 ${p.stock === 0 ? 'text-red-400 font-bold' : ''}`}>{p.stock} units</td>
                                    <td className="p-4">{getStatusBadge(p.status)}</td>
                                    <td className="p-4 text-center space-x-2">
                                        <button onClick={() => setViewingProduct(p)} className="p-2 text-gray-400 hover:text-white"><EyeIcon width={18} /></button>
                                        <button className="p-2 text-gray-400 hover:text-white"><EditIcon width={18} /></button>
                                        <button className="p-2 text-gray-400 hover:text-red-400"><TrashIcon width={18} /></button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            {showAddModal && <AddProductModal onClose={() => setShowAddModal(false)} onAddProduct={handleAddProduct} />}
            {viewingProduct && <ProductDetailsModal product={viewingProduct} onClose={() => setViewingProduct(null)} />}
        </>
    );
};

const OrdersPage = ({ orders }) => (
    <div className="bg-gray-800 rounded-lg shadow-lg animate-fade-in">
        <div className="p-6 border-b border-gray-700"><h2 className="text-2xl font-bold">Order History</h2></div>
        <div className="overflow-x-auto">
            <table className="w-full text-left">
                <thead><tr className="bg-gray-700/50"><th className="p-4">Order ID</th><th className="p-4">Customer</th><th className="p-4">Date</th><th className="p-4">Status</th><th className="p-4 text-right">Total</th></tr></thead>
                <tbody>
                    {orders.map(order => (
                        <tr key={order.id} className="border-b border-gray-700 hover:bg-gray-700/50">
                            <td className="p-4 font-mono">{order.id}</td><td className="p-4">{order.customer}</td><td className="p-4">{order.date}</td>
                            <td className="p-4"><span className={`px-2 py-1 text-xs font-medium rounded-full ${order.status === 'Completed' ? 'bg-green-900 text-green-300' : order.status === 'Shipped' ? 'bg-blue-900 text-blue-300' : 'bg-yellow-900 text-yellow-300'}`}>{order.status}</span></td>
                            <td className="p-4 text-right font-mono">${order.total.toFixed(2)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
);

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

const MyShopPage = () => (
    <div className="bg-gray-800 rounded-lg shadow-lg p-6 animate-fade-in space-y-6">
        <div><h2 className="text-2xl font-bold">My Shop</h2><p className="text-gray-400">Manage your public shop information.</p></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4"><label className="block text-gray-400">Shop Name</label><input type="text" defaultValue="JD Electronics" className="w-full bg-gray-700 rounded p-2" /></div>
            <div className="space-y-4"><label className="block text-gray-400">Shop Category</label><input type="text" defaultValue="Electronics" className="w-full bg-gray-700 rounded p-2" /></div>
        </div>
        <div><label className="block text-gray-400">Shop Description</label><textarea rows="4" defaultValue="High-quality, futuristic electronic gadgets and accessories. Focused on cutting-edge technology and design." className="w-full bg-gray-700 rounded p-2"></textarea></div>
        <div className="pt-4 flex justify-end"><button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Save Changes</button></div>
    </div>
);

const SupportPage = () => (
    <div className="bg-gray-800 rounded-lg shadow-lg p-6 animate-fade-in space-y-6">
        <div><h2 className="text-2xl font-bold">Contact Admin</h2><p className="text-gray-400">Have an issue? Send a message to the support team.</p></div>
        <form className="space-y-4">
            <div><label className="block text-gray-400">Subject</label><input type="text" className="w-full bg-gray-700 rounded p-2" placeholder="e.g., Payout Issue" /></div>
            <div><label className="block text-gray-400">Message</label><textarea rows="6" className="w-full bg-gray-700 rounded p-2" placeholder="Describe your issue in detail..."></textarea></div>
            <div className="pt-4 flex justify-end"><button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Send Message</button></div>
        </form>
    </div>
);

const SettingsPage = ({ userInfo }) => (
    <div className="space-y-8 animate-fade-in">
        <div className="bg-gray-800 rounded-lg shadow-lg p-6 space-y-6">
            <div><h2 className="text-2xl font-bold">Profile Settings</h2></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div><label className="block text-gray-400">Full Name</label><input type="text" defaultValue={userInfo.name} className="w-full bg-gray-700 rounded p-2" /></div>
                <div><label className="block text-gray-400">Email Address</label><input type="email" defaultValue={userInfo.email} className="w-full bg-gray-700 rounded p-2" /></div>
            </div>
            <div className="pt-4 flex justify-end"><button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Update Profile</button></div>
        </div>
        <div className="bg-gray-800 rounded-lg shadow-lg p-6 space-y-6">
            <div><h2 className="text-2xl font-bold">Payout Settings</h2></div>
            <p className="text-gray-400">Payouts are made to your connected bank account.</p>
            <p className="mt-4 font-semibold">Bank of America **** 4242</p>
            <div className="pt-4 flex justify-end"><button className="text-blue-400 hover:underline mt-2 text-sm">Update Bank Account</button></div>
        </div>
    </div>
);


// --- Layout Components ---

const SellerSidebar = ({ navigateTo, activePage }) => {
    const navItems = [
        { id: 'dashboard', icon: <DashboardIcon />, label: 'Dashboard' },
        { id: 'products', icon: <PackageIcon />, label: 'Products' },
        { id: 'orders', icon: <ShoppingCartIcon />, label: 'Orders' },
        { id: 'shop', icon: <StoreIcon />, label: 'My Shop' },
        { id: 'reviews', icon: <StarIcon width={24} height={24} />, label: 'Reviews & Reports' },
        { id: 'payouts', icon: <DollarSignIcon />, label: 'Payouts' },
        { id: 'support', icon: <LifeBuoyIcon />, label: 'Support' },
    ];
    return (
        <aside className="w-64 bg-gray-900 text-gray-300 flex-col hidden md:flex border-r border-gray-800">
            <div className="h-20 flex items-center justify-center text-2xl font-bold text-white border-b border-gray-800">Seller Panel</div>
            <nav className="flex-1 px-4 py-6">
                {navItems.map(item => (
                    <a key={item.id} href="#" onClick={(e) => { e.preventDefault(); navigateTo(item.id); }} className={`flex items-center px-4 py-3 mb-2 rounded-lg transition-colors duration-200 ${activePage === item.id ? 'bg-blue-600 text-white' : 'hover:bg-gray-700 hover:text-white'}`}>
                        <span className="w-6 h-6 mr-4">{item.icon}</span><span>{item.label}</span>
                    </a>
                ))}
            </nav>
            <div className="px-4 py-6 border-t border-gray-800">
                <a href="#" onClick={(e) => { e.preventDefault(); navigateTo('settings'); }} className="flex items-center px-4 py-3 mb-2 rounded-lg hover:bg-gray-700 hover:text-white"><SettingsIcon className="w-6 h-6 mr-4" /><span>Settings</span></a>
                <a href="#" onClick={(e) => { e.preventDefault(); navigateTo('logout'); }} className="flex items-center px-4 py-3 rounded-lg hover:bg-gray-700 hover:text-white"><LogoutIcon className="w-6 h-6 mr-4" /><span>Logout</span></a>
            </div>
        </aside>
    );
};

const SellerHeader = ({ title, userInfo }) => (
    <header className="h-20 bg-gray-900/80 backdrop-blur-sm sticky top-0 z-10 flex items-center justify-between px-8 border-b border-gray-800">
        <h1 className="text-2xl font-bold">{title}</h1>
        <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full hover:bg-gray-700 relative"><BellIcon /><span className="absolute top-1 right-1 block h-2 w-2 rounded-full bg-red-500 animate-pulse"></span></button>
            <div><p className="font-semibold text-right">{userInfo.name}</p><p className="text-xs text-gray-400 text-right">{userInfo.shopName}</p></div>
        </div>
    </header>
);

const SellerLayout = ({ userInfo, onLogout, products, setProducts, orders, productFilter, setProductFilter, viewingProduct, setViewingProduct }) => {
    const [activePage, setActivePage] = useState('dashboard');

    const pages = {
        'dashboard': { component: <SellerDashboardPage setActivePage={setActivePage} setProductFilter={setProductFilter} />, title: 'Dashboard' },
        'products': { component: <ProductsPage products={products} setProducts={setProducts} filter={productFilter} viewingProduct={viewingProduct} setViewingProduct={setViewingProduct} />, title: 'Products' },
        'orders': { component: <OrdersPage orders={orders} />, title: 'Orders' },
        'shop': { component: <MyShopPage />, title: 'My Shop' },
        'reviews': { component: <ReviewsPage products={products} />, title: 'Reviews & Reports' },
        'payouts': { component: <div>Payouts Page</div>, title: 'Payouts' },
        'support': { component: <SupportPage />, title: 'Support' },
        'settings': { component: <SettingsPage userInfo={userInfo} />, title: 'Settings' },
    };

    function navigateTo(page) {
        if (page === 'logout') { onLogout(); return; }
        setProductFilter('all');
        setActivePage(page);
    }

    return (
        <div className="flex h-screen bg-gray-900 text-white">
            <SellerSidebar navigateTo={navigateTo} activePage={activePage} />
            <div className="flex-1 flex flex-col overflow-hidden">
                <SellerHeader title={pages[activePage].title} userInfo={userInfo} />
                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-900 p-8">{pages[activePage].component}</main>
            </div>
        </div>
    );
};

// --- Auth & Onboarding Components ---
const SellerLoginPage = ({ onLogin, showRegister }) => (
    <div className="bg-gray-900 text-white min-h-screen flex items-center justify-center animate-fade-in">
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-sm">
            <h1 className="text-3xl font-bold mb-6 text-center">Seller Login</h1>
            <form onSubmit={(e) => { e.preventDefault(); onLogin({ name: 'John Doe', email: 'john.doe@example.com', shopName: 'JD Electronics' }); }}>
                <input type="text" placeholder="Username" required className="w-full bg-gray-700 border-gray-600 rounded-lg px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <input type="password" placeholder="Password" required className="w-full bg-gray-700 border-gray-600 rounded-lg px-3 py-2 mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">Login</button>
            </form>
            <p className="text-center text-sm text-gray-400 mt-6">Don't have an account? <button onClick={showRegister} className="text-blue-400 hover:underline">Register here</button></p>
        </div>
    </div>
);

const RegisterPage = ({ onRegister, showLogin }) => {
    const [fileName, setFileName] = useState('');
    const handleFileChange = (e) => setFileName(e.target.files.length > 0 ? e.target.files[0].name : '');

    return (
        <div className="bg-gray-900 text-white min-h-screen flex items-center justify-center py-12 animate-fade-in">
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-2xl">
                <h1 className="text-3xl font-bold mb-6 text-center">Become a Seller</h1>
                <form onSubmit={(e) => { e.preventDefault(); onRegister(); }} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div><label className="block text-gray-400 mb-1">Full Name</label><input type="text" className="w-full bg-gray-700 rounded p-2" required /></div>
                        <div><label className="block text-gray-400 mb-1">Email Address</label><input type="email" className="w-full bg-gray-700 rounded p-2" required /></div>
                        <div><label className="block text-gray-400 mb-1">Password</label><input type="password" className="w-full bg-gray-700 rounded p-2" required /></div>
                        <div><label className="block text-gray-400 mb-1">Shop Name</label><input type="text" className="w-full bg-gray-700 rounded p-2" required /></div>
                    </div>
                    <div><label className="block text-gray-400 mb-1">Business Description</label><textarea rows="3" className="w-full bg-gray-700 rounded p-2" required></textarea></div>
                    <div><label className="block text-gray-400 mb-1">Business License / ID</label>
                        <label htmlFor="file-upload" className="cursor-pointer bg-gray-700 p-4 rounded-lg flex flex-col items-center justify-center border-2 border-dashed border-gray-600 hover:border-blue-500">
                            <UploadCloudIcon className="w-10 h-10 text-gray-500" />
                            <p className="mt-2 text-sm text-gray-400">{fileName || "Click to upload a PDF"}</p>
                        </label>
                        <input id="file-upload" name="file-upload" type="file" className="sr-only" onChange={handleFileChange} accept=".pdf" required />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg mt-6">Submit Application</button>
                </form>
                <p className="text-center text-sm text-gray-400 mt-6">Already have an account? <button onClick={showLogin} className="text-blue-400 hover:underline">Login here</button></p>
            </div>
        </div>
    );
};

const PendingApprovalPage = ({ onLogout }) => (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center text-center p-4 animate-fade-in">
        <ClockIcon className="w-16 h-16 text-blue-500 mb-4" />
        <h1 className="text-3xl font-bold">Application Submitted</h1>
        <p className="text-gray-400 mt-2 max-w-md">Your application is currently under review by our admin team. This usually takes 24-48 hours. We'll notify you via email once it's approved.</p>
        <button onClick={onLogout} className="mt-8 bg-gray-600 hover:bg-gray-500 font-bold py-2 px-6 rounded-lg">Logout</button>
    </div>
);


// --- Main App Component ---
function SellerApp() {
    const [authState, setAuthState] = useState('unauthenticated'); // unauthenticated, registering, pending_approval, authenticated
    const [userInfo, setUserInfo] = useState(null);
    const [products, setProducts] = useState(MOCK_PRODUCTS_DATA);
    const [orders, setOrders] = useState(MOCK_ORDERS_DATA);
    const [productFilter, setProductFilter] = useState('all');
    const [viewingProduct, setViewingProduct] = useState(null);

    const handleLogin = (user) => { setUserInfo(user); setAuthState('authenticated'); };
    const handleLogout = () => { setUserInfo(null); setAuthState('unauthenticated'); };
    const handleRegister = () => setAuthState('pending_approval');

    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://cdn.jsdelivr.net/npm/chart.js";
        script.async = true;
        document.body.appendChild(script);
        return () => { document.body.removeChild(script); }
    }, []);

    if (authState === 'unauthenticated') return <SellerLoginPage onLogin={handleLogin} showRegister={() => setAuthState('registering')} />;
    if (authState === 'registering') return <RegisterPage onRegister={handleRegister} showLogin={() => setAuthState('unauthenticated')} />;
    if (authState === 'pending_approval') return <PendingApprovalPage onLogout={handleLogout} />;
    if (authState === 'authenticated') return <SellerLayout userInfo={userInfo} onLogout={handleLogout} products={products} setProducts={setProducts} orders={orders} productFilter={productFilter} setProductFilter={setProductFilter} viewingProduct={viewingProduct} setViewingProduct={setViewingProduct} />;

    return null;
}

export default SellerApp;

