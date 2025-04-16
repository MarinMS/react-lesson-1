import Product from './Product'
import BookList from './BookList';
import Card from './Card';

export default function App() {
  const favBooks = [
  { id: "id-1", name: "JS for beginners" },
  { id: "id-2", name: "React basics" },
  { id: "id-3", name: "React Router overview" }
];
  return (
    <div>
      <h1>Products</h1>

      <Product
        name="Tacos With Lime"
        price={10.99}
      />
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
    </div>
  );
}