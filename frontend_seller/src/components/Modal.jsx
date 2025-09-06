import React from 'react';
import { CloseIcon } from './icons';

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

export default Modal;
