import dog1 from "../assets/portrait/1.jpg";
import dog2 from "../assets/portrait/2.jpg";
import dog3 from "../assets/portrait/3.jpg";
import dog4 from "../assets/portrait/4.jpg";
import dog5 from "../assets/portrait/5.jpg";
import dog6 from "../assets/portrait/6.jpg";
import dog7 from "../assets/portrait/7.jpg";
import dog8 from "../assets/portrait/8.jpg";
import dog9 from "../assets/portrait/9.jpg";
import dog10 from "../assets/portrait/10.jpg";
import dog11 from "../assets/portrait/11.jpg";
import dog12 from "../assets/portrait/12.jpg";

import uniqid from 'uniqid';


const Images = () =>{
    const images = [
        {
            src: dog1,
            name: "yellow hat",
            alt: "a pug with yellow hat",
            price: "12.50",
            amount: 1,
            id: uniqid(),
        },
        {
            src: dog2,
            name: "gray overall",
            alt: "a pug a gray overall",
            price: "18.29",
            id: uniqid(),
            amount: 1
        },
        {
            src: dog3,
            name: "blue pajama",
            alt: "a pug with a blue costume",
            price: "10.99",
            id: uniqid(),
            amount: 0
        },
        {
            src: dog4,
            name: "red jacket",
            alt: "red jacket brown dog",
            price: "22.90",
            id: uniqid(),
            amount: 0
        },
        {
            src: dog5,
            name: `"woof" hoodie`, 
            alt: "small dog woof overall",
            price: "18.99",
            id: uniqid(),
            amount: 0
        },
        {
            src: dog6,
            name: "red and black long sleeve",
            alt: "small dog hip-hop style suite with a chain",
            price: "42.25",
            id: uniqid(),
            amount: 0
        },
        {
            src: dog7,
            name: "ghost costume",
            alt: "small dog ghost halloween costume",
            price: "10.99",
            id: uniqid(),
            amount: 0
        },
        {
            src: dog8,
            name: `"lil-man" chain and hoodie`,
            alt: "dog lil man costume",
            price: "12",
            id: uniqid(),
            amount: 0
        },
        {
            src: dog9,
            name: "super man costume",
            alt: "dog in a super man costume",
            price: "12",
            id: uniqid(),
            amount: 1
        },
        {
            src: dog10,
            name: "leather jacket",
            alt: "dog leather jacket",
            price: "29.90",
            id: uniqid(),
            amount: 1
        },
        {
            src: dog11,
            name: "red sweater",
            alt: "red sweater for a dog",
            price: "22.50",
            id: uniqid(),
            amount: 1
        },
        {
            src: dog12,
            name: "gray hat and glasses",
            alt: "gray hat and glasses on a dog",
            price: "12.50",
            id: uniqid(),
            amount: 1
        },
    ]
    
    return images;
}

export default Images;
