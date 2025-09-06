import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../features/productSlice';
import Modal from '../components/Modal';
import OrderStatus from '../components/OrderStatus';
import Rating from '../components/Rating';
import { PlusCircleIcon, EyeIcon, EditIcon, TrashIcon } from '../components/icons';

const AddProductModal = ({ onClose }) => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [stock, setStock] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addProduct({ name, category, price: parseFloat(price), stock: parseInt(stock), description, imageUrl: `https://placehold.co/600x400/1E293B/FFFFFF?text=${name.replace(' ', '+')}`, id: Date.now(), status: 'pending', reviews: [], reports: [] }));
    onClose();
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
        <div className="flex items-center justify-between p-3 bg-gray-700/50 rounded-lg"><span>Status</span><OrderStatus status={product.status} /></div>
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

const ProductsPage = ({ products, filter, viewingProduct, setViewingProduct }) => {
  const [showAddModal, setShowAddModal] = useState(false);
  const filteredProducts = products.filter(p => filter === 'all' || p.status === filter);

  return (
    <>
      <div className="bg-gray-800 rounded-lg shadow-lg animate-fade-in">
        <div className="p-6 border-b border-gray-700 flex justify-between items-center">
          <h2 className="text-2xl font-bold">My Products</h2>
          <button onClick={() => setShowAddModal(true)} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center gap-2"><PlusCircleIcon /> Add Product</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead><tr className="bg-gray-700/50"><th className="p-4">Product</th><th className="p-4 hidden md:table-cell">Price</th><th className="p-4 hidden md:table-cell">Stock</th><th className="p-4">Status</th><th className="p-4 text-center">Actions</th></tr></thead>
            <tbody>
              {filteredProducts.map(p => (
                <tr key={p.id} className="border-b border-gray-700 hover:bg-gray-700/50">
                  <td className="p-4 font-semibold">{p.name}</td>
                  <td className="p-4 font-mono hidden md:table-cell">${p.price.toFixed(2)}</td>
                  <td className={`p-4 hidden md:table-cell ${p.stock === 0 ? 'text-red-400 font-bold' : ''}`}>{p.stock} units</td>
                  <td className="p-4"><OrderStatus status={p.status} /></td>
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
      {showAddModal && <AddProductModal onClose={() => setShowAddModal(false)} />}
      {viewingProduct && <ProductDetailsModal product={viewingProduct} onClose={() => setViewingProduct(null)} />}
    </>
  );
};

export default ProductsPage;
