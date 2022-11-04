import { useEffect, useState } from 'react'

const Pagination = ({ itemsPerPage, items, setItems }) => {
  const [actualPage, setActualPage] = useState(0)
  const [arraysSplitted, setArraysSplited] = useState([])

  useEffect(() => {
    const arr = []
    for (let i = 0; i < items.length; i += itemsPerPage) {
      const piece = items.slice(i, i + itemsPerPage)
      arr.push(piece)
    }
    setArraysSplited(arr)
  }, [items, itemsPerPage])

  useEffect(() => {
    setItems(arraysSplitted[actualPage])
  }, [actualPage, items, itemsPerPage, setItems, arraysSplitted])

  const nextPage = () => {
    setActualPage(actualPage + 1)
  }
  const prevPage = () => {
    setActualPage(actualPage - 1)
  }

  return (
    <div className='pagination'>
      <div className='pagination__results'>
        {items.length === 0
          ? <p>Nothing to show</p>
          : <p>Showing {itemsPerPage * (actualPage + 1)} of {items.length} results</p>}
      </div>
      <div className='pagination__buttons'>
        {actualPage > 0 && <button className='pagination__buttons__fixed' onClick={() => setActualPage(0)}>{'<<'}</button>}
        {actualPage > 0 && <button className='pagination__buttons__fixed' onClick={prevPage}>{'<'}</button>}
        {actualPage > 1 && <button className='pagination__buttons__page' onClick={() => setActualPage(actualPage - 2)}>{actualPage - 1}</button>}
        {actualPage > 0 && <button className='pagination__buttons__page' onClick={() => setActualPage(actualPage - 1)}>{actualPage}</button>}
        <button className='pagination__buttons__page__active'>{actualPage + 1}</button>
        {(actualPage > 0 && actualPage < arraysSplitted.length - 1) && <button className='pagination__buttons__page' onClick={() => setActualPage(actualPage + 1)}>{actualPage + 2}</button>}
        {(actualPage > 1 && actualPage < arraysSplitted.length - 2) && <button className='pagination__buttons__page' onClick={() => setActualPage(actualPage + 2)}>{actualPage + 3}</button>}
        {actualPage < arraysSplitted.length - 1 && <button className='pagination__buttons__fixed' onClick={nextPage}>{'>'}</button>}
        {actualPage < arraysSplitted.length - 1 && <button className='pagination__buttons__fixed' onClick={() => setActualPage(arraysSplitted.length - 1)}>{'>>'}</button>}
      </div>
    </div>
  )
}

export default Pagination
