import { useState } from "react";


const Searchbar = ({onSubmit}) => {
    const [query, setQuery ] = useState('')
    
    const changeHandler = e => {
        setQuery(e.target.value);
    };
    
    const submitHandler = e => {
        e.preventDefault();
        if (query.trim() === '') {
            // toast.error('Please enter')
            return;
        }
        onSubmit(query);
        setQuery('');
    }

    return (
        <>
            <form onSubmit={submitHandler}>
                <button type="submit">
                    <span>Search</span>
                </button>
                <input
                    type="text"
                    // autocomplete="off"
                    // autofocus
                    value={query}
                    placeholder="Search images and photos"
                    onChange={changeHandler}
                />
            </form>
        </>
    )
}

export default Searchbar;