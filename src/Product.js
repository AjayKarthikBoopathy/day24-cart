import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

//Just Marked this whole Func. Component & clicked the yellow bulb symbol & given Move to a new file
export function Product({ prod, count, setCount }) {

  const [show, setShow] = useState(true);

  function addtoCart() {
    setCount(count + 1);
    setShow(!show);
  }

  function removeItem() {
    setCount(count - 1);
    setShow(!show);
  }

  return (
    <Card style={{ width: '18rem' }}>
      <div className='img'>
      <img className='image' src={prod.productImage} />
      </div>
      <Card.Body>
        <Card.Title>{prod.productName}</Card.Title>
        <Card.Text>⭐⭐⭐</Card.Text>
        <Card.Text><s>$1500</s> ${prod.price}</Card.Text>
        <Card.Text>{prod.rating}❤</Card.Text>

        {show ?                   
          <Button variant="primary"
            onClick={addtoCart}
          >Add to Cart</Button>
          :
          <Button variant="danger"
            onClick={removeItem}
          >Remove Item</Button>}

      </Card.Body>
    </Card>
  );
}

{/* <Card.Img variant="top" src={prod.productImage} /> */}
