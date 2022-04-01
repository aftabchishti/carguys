import React, { useState, createContext } from 'react'
export const FilterContext = createContext();

function FilterProvider(props) {
  const [selectCategory, setSelectCategory] = useState([])

  const categoryHandler = (label, checked) => {
    if (checked) {
      setSelectCategory([...selectCategory, label])
    }
    else {
      setSelectCategory(selectCategory.filter(deleteItem => deleteItem !== label))
    }
  }

  const clearAllChips = () => {
    setSelectCategory([])
  }

  return (
    <FilterContext.Provider
      value={{
        selectCategory,
        setSelectCategory,
        categoryHandler,
        clearAllChips
      }}
    >
      {props.children}
    </FilterContext.Provider>
  )
}

export default FilterProvider;
