export interface Category {
    id: number;
    category: string;
    subcategory: string;
}

export interface SuggestedProducts {
    benarimage: string;
    category: Category;
}
export interface NavigationItem {
    category: string;
    subcategories: string[];
}
export interface Category {
    id: number;
    category: string;
    subcategory: string;
}
export interface Offer {
    id: number;
    title: string;
    discount: number;
}
export interface Product {
    id: number;
    title: string;
    description: string;
    productCategory: Category;
    offer: Offer;
    price: number;
    quantity: number;
    imageName: string;
}

export interface User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    address: string;
    mobile: string;
    password: string;
    createdAt: string;
    modifiedAt: string;
}
export default interface Review{
    id :number;
    user:User
    product:Product
    value: string;
    createdAt:string
}

export interface CartItem{
    id:number;
    product:Product
}
export interface Cart{
    id:number;
    user:User;
    cartItem:CartItem[];
    ordered:boolean
    orderedOn:string
}