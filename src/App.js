import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Product } from './Product';

function App() {

  const data = [
    {
      productImage:
        "https://www.apple.com/in/iphone/home/images/meta/iphone__ky2k6x5u6vue_og.png",
      productName: "Iphone 14promax",
      price: 1000,
      rating: 91,
    },
    {
      productImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3jAmZcKm3NQoK8tlikVJsPAfm3cAhr_IKelWibDsJj3vgZ5BCZuvssOPGjIbljbkWR68&usqp=CAU",
      productName: "Samsung Galaxy",
      price: 950,
      rating: 90,
    },
    {
      productImage:
        "https://images.officeworks.com.au/api/2/img/https://s3-ap-southeast-2.amazonaws.com/wc-prod-pim/JPEG_1000x1000/GPX7PR128H_A_google_pixel_7_pro_5g_unlocked_smartphone_128gb_hazel.jpg/resize?size=600&auth=MjA5OTcwODkwMg__",
      productName: "Google Pixel 7pro",
      price: 700,
      rating: 80,
    },
    {
      productImage:
        "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/617MPEZB5mL._SL1500_.jpg",
      productName: "Oneplus 11",
      price: 640,
      rating: 50,
    },
  ]

  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className='cart-value'>
        <div className='cart-btn'>
          🛒Cart <span className='val'>{count}</span>
          {/* Note: Symbol => Windows + . */}
        </div>
      </div>
      <div className='card-container'>
        {data.map((product, idx) => (
          <Product
          key={idx}
          prod={product}
          count={count}
          setCount={setCount}
          />
        ))}
      </div>      
    </div>
  );
}

export default App;
