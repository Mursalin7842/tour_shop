import React, { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import ProductModal from '../components/ProductModal';

// This is a comment to explain the purpose of this component.
// The ProductApproval page displays a list of product applications that are pending, approved, rejected, flagged, or require modification.
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

export default ProductApproval;
