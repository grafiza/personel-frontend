import React from 'react'

const SearchBox = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="w-full">
      <input
        type="text"
        placeholder="Arama: Ad Soyad"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded text-sm"
      />
    </div>
  )
}

export default SearchBox
