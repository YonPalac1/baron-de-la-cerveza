import img1 from "../Assets/products/img1.jpg"
import img2 from "../Assets/products/img2.png"
import img3 from "../Assets/products/img3.png"
import img4 from "../Assets/products/img4.png"
import img5 from "../Assets/products/img5.png"
import img6 from "../Assets/products/img6.png"
import img7 from "../Assets/products/img7.png"
import img8 from "../Assets/products/img8.png"
import img9 from "../Assets/products/img9.png"
import img10 from "../Assets/products/img10.jpg"

export const GET_ALL = "GET_ALL"
export const GET_CATEGORIES = "GET_CATEGORIES"
export const LOADING = "LOADING"
export const CART = "CART"
export const SELECTED = "SELECTED"
export const DELETE = "DELETE"
export const TOTAL = "TOTAL"
export const SEARCH = "SEARCH"
export const ORDER_BY_MORE_EXPENSIVE = "ORDER_BY_MORE_EXPENSIVE"
export const ORDER_BY_LESS_EXPENSIVE = "ORDER_BY_LESS_EXPENSIVE"
export const FILTER_BY_CATEGORY = "FILTER_BY_CATEGORY"
export const API_URL = "https://node-back-baron-de-la-cerveza-production.up.railway.app/api/products"
export const API_CATEGORIES = "https://node-back-baron-de-la-cerveza-production.up.railway.app/api/categories"
export const ALL_PRODUCTS = [
    {
        name: "Lagger",
        discount: "0.00",
        price: 200,
        brand: "Patagonia",
        alcohol_content: 23,
        image: img1,
        category_id: 1
    },
    {
        name: "Dark",
        discount: 10,
        price: 250,
        brand: "dark vader",
        alcohol_content: 23,
        image: img2,
        category_id: 2
    },
    {
        name: "Notre",
        discount: "0.00",
        price: 300,
        brand: "Stella Artois",
        alcohol_content: 23,
        image: img3,
        category_id: 3
    },
    {
        name: "Lagger",
        discount: 10,
        price: 370,
        brand: "Brahma",
        alcohol_content: 23,
        image: img4,
        category_id: 4
    },
    {
        name: "Lagger",
        discount: 10,
        price: 410,
        brand: "Patagonia",
        alcohol_content: 23,
        image: img5,
        category_id: 1
    },
    {
        name: "Lagger",
        discount: "0.00",
        price: 490,
        brand: "Brahma",
        alcohol_content: 23,
        image: img6,
        category_id: 1
    },
    {
        name: "Lagger",
        discount: 10,
        price: 510,
        brand: "Andes",
        alcohol_content: 23,
        image: img7,
        category_id: 2
    },
    {
        name: "Black Mamba",
        discount: 10,
        price: 270,
        brand: "Grunge",
        alcohol_content: 23,
        image: img8,
        category_id: 3
    },
    {
        name: "Black Mamba",
        discount: 10,
        price: 180,
        brand: "Grunge",
        alcohol_content: 23,
        image: img9,
        category_id: 3
    },
    {
        name: "Lagger",
        discount: 10,
        price: 205,
        brand: "Quilmes",
        alcohol_content: 23,
        image: img10,
        category_id: 5
    },
]
export const CATEGORIES = [{
    id: 1,
    name: "lagger",
},{
    id: 2,
    name: "Andes",
},{
    id: 3,
    name: "Grunge",
},{
    id: 4,
    name: "Brahma",
},{
    id: 5,
    name: "Quilmes",
},

]