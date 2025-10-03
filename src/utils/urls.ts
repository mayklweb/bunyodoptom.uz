export const categoriesList = '/categories'
export const productsList = '/products'
export const productsRecommendedList = '/products?isRecommended=true'
export const productOffersList = '/products?isOffer=true'
export const categoryRecommendedList = '/categorys?isRecommended=true'
export const recommendedCategoryProductsList = (arr: number[]): string => `/products?${arr.map((id: number) => `category_id[]=${id}`).join('&')}`
export const productsFilter = (arr: number[]): string => `/products?${arr.map((id: number) => `brand_id[]=${id}`).join('&')}`
export const brandsList = '/brands'
export const productWithCategoryId = (id: number): string => `/products?category_id=${id}`
export const productWithSlug = (slug: string): string => `/products?_relations=brands,categorys&slug=${slug}`

export const registerUrl = '/register'

export const orderPost = '/orders'