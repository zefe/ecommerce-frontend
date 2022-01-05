import React from 'react';
import { Header } from '../components/Layout/Header';
import { Product } from '../components/Product/Product';



export const HomeView = () => {

    const products = [
        {
            '_id': '1',
            'name': 'Apple iPhone 13 Pro (256 GB) - Color Grafito',
            'image': 'https://m.media-amazon.com/images/I/61eDXs9QFNL._AC_SL1500_.jpg',
            'description': 'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
            'brand': 'Apple',
            'category': 'Electronics',
            'price': 89.99,
            'countInStock': 10,
            'rating': 4.5,
            'numReviews': 12,
          },
          {
            '_id': '1',
            'name': 'Apple iPhone 13 Pro (256 GB) - Color Grafito',
            'image': 'https://m.media-amazon.com/images/I/61eDXs9QFNL._AC_SL1500_.jpg',
            'description': 'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
            'brand': 'Apple',
            'category': 'Electronics',
            'price': 89.99,
            'countInStock': 10,
            'rating': 4.5,
            'numReviews': 12,
          },
          {
            '_id': '1',
            'name': 'Apple iPhone 13 Pro (256 GB) - Color Grafito',
            'image': 'https://m.media-amazon.com/images/I/61eDXs9QFNL._AC_SL1500_.jpg',
            'description': 'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
            'brand': 'Apple',
            'category': 'Electronics',
            'price': 89.99,
            'countInStock': 10,
            'rating': 4.5,
            'numReviews': 12,
          },
          {
            '_id': '1',
            'name': 'Apple iPhone 13 Pro (256 GB) - Color Grafito',
            'image': 'https://m.media-amazon.com/images/I/61eDXs9QFNL._AC_SL1500_.jpg',
            'description': 'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
            'brand': 'Apple',
            'category': 'Electronics',
            'price': 89.99,
            'countInStock': 10,
            'rating': 4.5,
            'numReviews': 12,
          },
          {
            '_id': '1',
            'name': 'Apple iPhone 13 Pro (256 GB) - Color Grafito',
            'image': 'https://m.media-amazon.com/images/I/61eDXs9QFNL._AC_SL1500_.jpg',
            'description': 'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
            'brand': 'Apple',
            'category': 'Electronics',
            'price': 89.99,
            'countInStock': 10,
            'rating': 4.5,
            'numReviews': 12,
          },
          {
            '_id': '1',
            'name': 'Apple iPhone 13 Pro (256 GB) - Color Grafito',
            'image': 'https://m.media-amazon.com/images/I/61eDXs9QFNL._AC_SL1500_.jpg',
            'description': 'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
            'brand': 'Apple',
            'category': 'Electronics',
            'price': 89.99,
            'countInStock': 10,
            'rating': 4.5,
            'numReviews': 12,
          },
          {
            '_id': '1',
            'name': 'Apple iPhone 13 Pro (256 GB) - Color Grafito',
            'image': 'https://m.media-amazon.com/images/I/61eDXs9QFNL._AC_SL1500_.jpg',
            'description': 'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
            'brand': 'Apple',
            'category': 'Electronics',
            'price': 89.99,
            'countInStock': 10,
            'rating': 4.5,
            'numReviews': 12,
          },
    ]

    return (
        <div className="home">
            <Header/>
            <h1>Products</h1>
            <div className="products__items">
                {
                    products.map( product => (
                        <Product 
                            key={ product.id }
                            product={ product }
                        />
                    ))
                }
            </div>     
        </div>
    )
}