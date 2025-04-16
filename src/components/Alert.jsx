import './Alert.css';

//вбудовані стилі

//Для цього використовується атрибут style, який у React приймає не рядок, а об'єкт стилів.

// export default function Alert({children}) {
//     const alertStyles = {
//         margin: 8,
//         padding: "12px 16px",
//         borderRadius: 4,
//         backgroundColor: "gray",
//         color: "white",
//     };

//     return <p style={alertStyles}>{children}</p>;
// }

//Динамічні стилі

//залежно від типу сповіщення змінювати колір фону

// export default function Alert({ variant, children }) {
//   const alertStyles = {
//     margin: 8,
//     padding: '12px 16px',
//     borderRadius: 4,
//     color: 'white',
//   };
//   const getBgColor = (variant) => {
//     switch (variant) {
//       case 'info':
//         return 'blue';
//       case 'success':
//         return 'green';
//       case 'error':
//         return 'red';
//       case 'warning':
//         return 'yellow';
//       default:
//         throw new Error(`Unsupported variant prop value - ${variant}`);
//     }
//   };

//   return (
//     <p
//       style={{
//         ...alertStyles,
//         backgroundColor: getBgColor(variant),
//       }}
//     >
//       {children}
//     </p>
//   );
// }

//ЗА допомогою окремого файлу css, class = className

// export default function Alert({ children }) {
//   return <p className="alert">{children}</p>;
// }

// export default function Alert({ variant, children }) {
//   const classNames = ['alert', variant];

//   return <p className={classNames.join(' ')}>{children}</p>;
// }

// Функції clsx можна передати список виразів як набір аргументів. Вирази що приводяться до true, результат яких це рядок або число, буде додано у фінальний рядок класів.
// import clsx from 'clsx';
// import './Alert.css';

// const Alert = ({ variant, outlined, elevated, children }) => {
//   return (
//     <p
//       className={clsx(
//         'alert',
//         variant,
//         outlined && 'is-outlined',
//         elevated && 'is-elevated',
//       )}
//     >
//       {children}
//     </p>
//   );
// };

// export default function Alert({ variant, outlined, elevated, children }) {
//   return (
//     <p
//       className={clsx('alert', variant, {
//         'is-outlined': outlined,
//         'is-elevated': elevated,
//       })}
//     >
//       {children}
//     </p>
//   );
// }

//Модульний CSS

// Синтаксис імпорту CSS-модуля
// import css from './Alert.module.css';
// import clsx from 'clsx';

// // Отримуємо об'єкт відповідності імен класів
// console.log(css); // { alert: "Alert_alert_ax7yz" }

// export default function Alert({ variant, children }) {
//   // Звертаємось до властивості об'єкта на ім'я класу з файлу CSS-модуля
//   return <p className={clsx(css.alert, css[variant])}>{children}</p>;
// }

import clsx from 'clsx';
import css from './Alert.module.css';

export default function Alert({ variant, outlined, elevated, children }) {
  return (
    <p
      className={clsx(
        css[variant],
        outlined && css.isOutlined,
        elevated && css.isElevated,
      )}
    >
      {children}
    </p>
  );
}
