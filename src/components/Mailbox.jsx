//рендеринг повідомлень лише в разу якщо масив повідомлень не є порожнім


// const Mailbox = ({ username, message }) => {
//   return (
//     <>
//       <p>Hello {username}</p>
//       {message.lenght > 0 && (
//         <p>You have {message.lenght} unread messages</p>
//       )}
//     </>
//   );
// };




//тернарний оператор використовується, якщо в результаті перевірки умови потрібно
//відобразити різну розмітку. у JSX вираз обгортається у
//{умова ? вміст_якщо_умова_true : вміст_якщо_умова_false}

// export default function Mailbox({ username, messages }) {
//   return (
//     <div>
//       <p>Hello {username}</p>
//       <p>
//         {messages.length > 0
//           ? `You have ${messages.length} unread messages`
//           : "No unread messages"}
//       </p>
//     </div>
//   );
// };

