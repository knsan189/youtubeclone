import React, { memo, useRef } from 'react';
import styles from './search_header.module.css'

const SearchHeader = memo(({onSearch}) => {
    const inputRef = useRef()
    const handleSearch = () =>{
        const value = inputRef.current.value
        onSearch(value)
    }
    const onClick = () => {
        handleSearch();
    }
    const onKeyPress = (event) => {
        event.key === 'Enter' && handleSearch()
    }
            return (
                <header className={styles.header}>
                    <div className={styles.logo}>
                        <img className={styles.img}src="/images/logo.png" alt="logo"/>
                        <h1 className={styles.title}>Youtube</h1>
                    </div>
                    <input ref={inputRef} className={styles.input} type="search" placeholder="Search..." onKeyPress={onKeyPress} />
                    <button className={styles.button} type="sumbit" onClick={onClick}>
                        <img src="/images/search.png" alt="search"/>
                    </button>
                </header>
            );
        })

export default SearchHeader;