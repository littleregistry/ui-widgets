import React, { useState } from 'react';

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
        Open Search Modal
      </button>

      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Search</h2>
              <button className="close-btn" onClick={closeModal}>
                &times;
              </button>
            </div>
            <form onSubmit={handleSubmit} className="search-form">
              <input
                type="text"
                className="search-input"
                placeholder="Type to search..."
                value={searchQuery}
                onChange={handleSearchChange}
                autoFocus
              />
              <button type="submit" className="search-btn">
                Search
              </button>
            </form>
            {searchQuery && (
              <div className="search-results">
                <p>Searching for: {searchQuery}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
