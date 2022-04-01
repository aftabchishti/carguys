import { ourYachtsData } from "../data";

export const getVisibleProduct = (selectCategory) => {
    const filteredProducts = ourYachtsData.filter(filtering => {
        let categoryMatch = true;
        if (selectCategory.length && filtering.category) 
            categoryMatch = selectCategory.includes(filtering.category)
        return categoryMatch;
    })
    return filteredProducts;
}