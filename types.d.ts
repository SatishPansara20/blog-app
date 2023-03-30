import { type } from "os"

type Post = {
    "userId": number,
    "id": number,
    "title": string,
    "body": string,
}

type User = {
    "id": number,
    "name": string,
    "username": string,
    "email": string,
    "address": {
        "street": string,
        "suite": string,
        "city": string,
        "zipcode": string,
        "geo": {
            "lat": string,
            "lng": string
        }
    },
    "phone": string,
    "website": string,
    "company": {
        "name": string,
        "catchPhrase": string,
        "bs": string
    }
}


type Product = {
    "id": string,
    "productName": string,
    "productPrice": number,
    "productQuantity": number,
    "productImage": string,
    "productStatus": string,
    "productDescription":string,
}


 type ResponseError = {
    message: string
  }