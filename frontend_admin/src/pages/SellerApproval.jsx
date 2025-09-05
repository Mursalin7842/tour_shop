import React, { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import ApplicationModal from '../components/ApplicationModal';

// This is a comment to explain the purpose of this component.
// The SellerApproval page displays a list of seller applications that are pending, approved, rejected, or require modification.
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

export default SellerApproval;
