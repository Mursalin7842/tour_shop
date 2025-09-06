// --- Mock Data ---
export const MOCK_PRODUCTS_DATA = [
  { id: 1, name: 'Quantum Headset', category: 'Electronics', price: 199.99, stock: 150, status: 'modification', imageUrl: 'https://placehold.co/600x400/1E293B/FFFFFF?text=Quantum+Headset', description: 'High-fidelity gaming headset with immersive 7.1 surround sound.', reviews: [{ id: 1, user: 'GamerGuy92', rating: 5, comment: 'Amazing sound quality!' }, { id: 2, user: 'AudioPhile', rating: 4, comment: 'Great for music, not just gaming.' }], reports: [] },
  { id: 2, name: 'Cyber-Knit Jacket', category: 'Apparel', price: 350.00, stock: 80, status: 'approved', imageUrl: 'https://placehold.co/600x400/1E293B/FFFFFF?text=Cyber-Knit+Jacket', description: 'A stylish jacket with integrated smart fabric.', reviews: [{ id: 3, user: 'Fashionista', rating: 5, comment: 'So futuristic and comfortable!' }], reports: [{ id: 1, user: 'ConcernedUser', subject: 'Incorrect Sizing Chart' }] },
  { id: 3, name: 'Aether-Light Sneakers', category: 'Apparel', price: 120.00, stock: 0, status: 'approved', imageUrl: 'https://placehold.co/600x400/1E293B/FFFFFF?text=Aether-Light', description: 'Lightweight and durable sneakers for everyday use.', reviews: [], reports: [] },
  { id: 4, name: 'Chrono-Watch', category: 'Accessories', price: 425.00, stock: 120, status: 'pending', imageUrl: 'https://placehold.co/600x400/1E293B/FFFFFF?text=Chrono-Watch', description: 'A sleek, modern watch.', reviews: [], reports: [] },
  { id: 5, name: 'Hover-Drone X1', category: 'Gadgets', price: 899.00, stock: 30, status: 'rejected', imageUrl: 'https://placehold.co/600x400/1E293B/FFFFFF?text=Hover-Drone', description: 'A professional-grade camera drone.', reviews: [], reports: [] },
];

export const MOCK_ORDERS_DATA = [
  { id: 'ORD-102', customer: 'Bob', date: '2025-09-05', status: 'Completed', total: 120.00, items: [{ productName: 'Aether-Light Sneakers', qty: 1 }] },
  { id: 'ORD-103', customer: 'Charlie', date: '2025-09-04', status: 'Shipped', total: 350.00, items: [{ productName: 'Cyber-Knit Jacket', qty: 1 }] },
  { id: 'ORD-104', customer: 'Diana', date: '2025-09-05', status: 'Processing', total: 199.99, items: [{ productName: 'Quantum Headset', qty: 1 }] },
];
