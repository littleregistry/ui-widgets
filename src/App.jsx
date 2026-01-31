import React, { useState } from 'react';

const API_URL = process.env.NODE_ENV === "production" ? "https://widget.littleregistry.com" : "http://localhost:5173"

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setIsModalOpen(false);
    setSearchQuery('');
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Search query:', searchQuery);
    // Add your search logic here
  };

  return (
    <div className="app">
      <button className="open-modal-btn" onClick={openModal}>
        Find a registry
      </button>

      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <iframe src={`${API_URL}/search/?shopdomain=${encodeURIComponent(document.location.host)}&language=en`}
            style={{
                width: '100%',
                height: '100%',
                borderRadius: '0.5rem', // 8px
                overflow: 'hidden',
            }}
            id="_little_registry-search-registry-container"
            allow="clipboard-read *; clipboard-write *"
            frameborder="0" border="0" cellspacing="0"
            className="w-full h-full rounded-lg overflow-hidden"></iframe>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
