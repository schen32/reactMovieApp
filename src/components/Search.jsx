import React from 'react'

const Search = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="search">
        <div>
            <img src="search.svg" alt="search"></img>

            <input
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search for movies"
                type="text"
            />
        </div>
    </div>
  )
}

export default Search