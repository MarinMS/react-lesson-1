// export default function Product(props) {
  
//   return (
//     <div>
//       <h2>{props.name}</h2>
// 	  <img src={props.imgUrl} alt="Tacos With Lime" width="640" />
// 	  <p>Price: {props.price} credits</p>
//     </div>
//   );
// }


// деструктиризація пропсів одразу

// export default function Product({ name, imgUrl, price }) {
//   return (
//     <div>
//       <h2>{name}</h2>
//       <img src={imgUrl} alt={name} width="480" />
//       <p>Price: {price} credits</p>
//     </div>
//   );
// };



// значення пропсів за замовчуваням,якщо його не вказано під час виклику


export default function Product({
  name,
  imgUrl = "https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder",
  price, }) {
  return (
    <div>
      <h2>{name}</h2>
      <img src={imgUrl} alt={name} width="480" />
      <p>Price: {price} credits</p>
    </div>
  );
}
  


