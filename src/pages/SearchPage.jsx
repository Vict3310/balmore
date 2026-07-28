import React, { useState, useEffect } from 'react'
import { Link, useSearchParams, useNavigate } from 'react-router-dom'
import { globalProducts } from '../data/products'
import LazyImage from '../components/LazyImage'
import './SearchPage.css'

const slugify = (text) => text.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')

const ProductCard = ({ img, title, price }) => {
    const passedState = { img, title, price, options: null }
    return (
        <div className="sp-card">
            <Link to={`/products/${slugify(title)}`} state={passedState} style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="sp-card-img">
                    <LazyImage src={img} alt={title} />
                </div>
                <div className="sp-card-info">
                    <h3>{title}</h3>
                    <p>{price}</p>
                </div>
            </Link>
        </div>
    )
}

const SearchPage = () => {
    const [searchParams] = useSearchParams()
    const navigate = useNavigate()
    const initialQuery = searchParams.get('q') || ''
    const [inputValue, setInputValue] = useState(initialQuery)

    // Re-sync input when URL changes (e.g. user hits back)
    useEffect(() => {
        setInputValue(searchParams.get('q') || '')
    }, [searchParams])

    useEffect(() => { window.scrollTo(0, 0) }, [initialQuery])

    const results = initialQuery.trim().length > 0
        ? globalProducts.filter(p =>
            p.title.toLowerCase().includes(initialQuery.toLowerCase()) ||
            p.category.toLowerCase().includes(initialQuery.toLowerCase())
        )
        : []

    const handleSubmit = (e) => {
        e.preventDefault()
        if (inputValue.trim()) {
            navigate(`/search?q=${encodeURIComponent(inputValue.trim())}`)
        }
    }

    return (
        <div className="search-page">
            {/* ── Persistent Search Bar ── */}
            <div className="sp-bar-wrapper">
                <form className="sp-bar" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder="Search"
                        autoFocus
                    />
                    <div className="sp-bar-actions">
                        <button type="submit" className="sp-submit">SEARCH</button>
                        {inputValue && (
                            <button
                                type="button"
                                className="sp-clear"
                                onClick={() => {
                                    setInputValue('')
                                    navigate('/search')
                                }}
                            >
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor">
                                    <path d="M13 1L1 13M1 1l12 12"></path>
                                </svg>
                            </button>
                        )}
                    </div>
                </form>
            </div>

            {/* ── Results ── */}
            <div className="sp-content">
                {initialQuery && (
                    <p className="sp-count">
                        {results.length} result{results.length !== 1 ? 's' : ''} for &laquo;{initialQuery}&raquo;
                    </p>
                )}

                {!initialQuery && (
                    <p className="sp-empty">Start typing to search for products.</p>
                )}

                {initialQuery && results.length === 0 && (
                    <p className="sp-empty">No results found for &laquo;{initialQuery}&raquo;.</p>
                )}

                {results.length > 0 && (
                    <div className="sp-grid">
                        {results.map((p, i) => (
                            <ProductCard key={`${slugify(p.title)}-${i}`} img={p.img} title={p.title} price={p.price} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default SearchPage
