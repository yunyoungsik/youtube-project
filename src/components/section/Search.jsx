import React, { useState } from 'react'
// import { AiOutlineSearch } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom';


const Search = () => {
    const [searchKeyword, setSearchKeyword] = useState('');
    const navigate = useNavigate();

    const handleSearch = () => {
        // console.log(searchKeyword)
        if (searchKeyword) {
            navigate(`/search/${searchKeyword}`)
            setSearchKeyword('')
        }
    }
    handleSearch();

    return (
        <div id='search'>

            <div className="search__inner">
                <div className='mobile__menu'>
                    <span></span>
                </div>
                <label htmlFor="searchInput">검색</label>
                <div className="search__inner__input">
                    <input
                        type="search"
                        id='searchInput'
                        placeholder='검색어를 입력해주세요.'
                        autoComplete='odff'
                        className='search__Input'
                        onChange={e => setSearchKeyword(e.target.value)}
                        onKeyDown={e => {
                            if (e.key === "Enter") {
                                handleSearch();
                            }
                        }}
                    />
                    {/* <div className="search__btn">
                        <AiOutlineSearch />
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Search