//reducers are function which will return array of JSON objects...

const allFeedbacks = () => {
    return [
        {
            "id": 1,
            "title": "Product RADO",
            "description": "best watch in market",
            "url": "https://google.com",
            "imageUrl": "../images/rado.jpg",
            "avatarUrl": "../images/1.jpg",
            "vote": 99
        },
        {
            "id": 2,
            "title": "Product Laptop",
            "description": "best laptop in market",
            "url": "https://google.com",
            "imageUrl": "../images/laptop.jpg",
            "avatarUrl": "../images/2.jpg",
            "vote": 33
        },
        {
            "id": 3,
            "title": "Product Sunglass",
            "description": "best sunglass in market",
            "url": "https://google.com",
            "imageUrl": "../images/sunglass.jpg",
            "avatarUrl": "../images/3.jpg",
            "vote": 67
        },
        {
            "id": 4,
            "title": "Product Watercan",
            "description": "best durable water can in market",
            "url": "https://google.com",
            "imageUrl": "../images/watercan.png",
            "avatarUrl": "../images/4.jpg",
            "vote": 76
        },
        {
            "title": "Product Dealth book",
            "description": "Best read of 2018",
            "url": "https://google.com",
            "imageUrl": "../images/2.jpg",
            "avatarUrl": "../images/2.jpg",
            "vote": 0,
            "id": 7
        },
        {
            "title": "Product Cosmetics",
            "description": "Cosmetic was good",
            "url": "https://google.com",
            "imageUrl": "../images/3.jpg",
            "avatarUrl": "../images/3.jpg",
            "vote": 0,
            "id": 8
        }
    ]
}

export default allFeedbacks;