import React from "react";
import {FaSearch} from "react-icons/fa";
interface search {
    className?: string;
}

export const SearchBar = ({className}: search) => {
    return (
            <div className={'search ' + (className != undefined ? className : '')}>
                <div className='searchIconSpace'>
                    <FaSearch />
                </div>
            </div>
    )
}