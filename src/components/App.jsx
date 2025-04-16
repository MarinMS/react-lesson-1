import Product from './Product';
import BookList from './BookList';
import Card from './Card';
import Alert from './Alert';
import UserMenu from './UserMenu';
import Button from './Button';

export default function App() {
  const favBooks = [
    { id: 'id-1', name: 'JS for beginners' },
    { id: 'id-2', name: 'React basics' },
    { id: 'id-3', name: 'React Router overview' },
  ];
  return (
    <div>
      <h1>Products</h1>

      <Product name="Tacos With Lime" price={10.99} />
      <Product
        name="Fries and Burger"
        imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
        price={14.29}
      />

      <h1>Books of the week</h1>
      <BookList books={favBooks} />

      <Card>
        <h1>Card title</h1>
        <p>Text between opening and closing tag</p>
      </Card>

      {/* СТИЛІ */}

      <h1>LESSON 2 : STYLES</h1>
      <h3>Ванільний CSS</h3>
      {/* Вбудовані стилі */}
      {/* <>
        <Alert>Please update your email!</Alert>
        <Alert>There was an error during transaction!</Alert>
        <Alert>Payment received, thank you for your purchase!</Alert>
      </> */}

      {/* Динамічні стилі */}
      {/* <>
        <Alert variant="info">
          Would you like to browse our recommended products?
        </Alert>
        <Alert variant="error">
          There was an error during your last transaction
        </Alert>
        <Alert variant="success">
          Payment received, thank you for your purchase
        </Alert>
        <Alert variant="warning">
          Please update your profile contact information
        </Alert>
      </> */}
      <>
        <Alert variant="info">
          Would you like to browse our recommended products?
        </Alert>
        <Alert variant="error" outlined>
          There was an error during your last transaction
        </Alert>
        <Alert variant="success" elevated>
          Payment received, thank you for your purchase
        </Alert>
        <Alert variant="warning" outlined elevated>
          Please update your profile contact information
        </Alert>
      </>

      {/* <h3>Модульний CSS</h3>
      <Alert variant="info">
          Would you like to browse our recommended products?
        </Alert>
        <Alert variant="error" outlined>
          There was an error during your last transaction
        </Alert>
        <Alert variant="success" elevated>
          Payment received, thank you for your purchase
        </Alert>
        <Alert variant="warning" outlined elevated>
          Please update your profile contact information
        </Alert>
      </> */}

      <h2>Icons</h2>
      <UserMenu name="Marin" />

      <h2>Button повторне використання стилів</h2>
      <Button>Button</Button>
      <Button variant="LoginButton">Login</Button>
      <Button variant="FollowButton">Follow</Button>
    </div>
  );
}
