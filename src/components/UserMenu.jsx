import { HiUser } from 'react-icons/hi';

export default function UserMenu({ name }) {
  return (
    <div>
      <p>
        <HiUser className="my-icon" size="24" /> {name}
      </p>
    </div>
  );
}

// Колір іконки вказується в додатковому класі CSS-властивістю color.
// Розмір іконки визначається числом в атрибуті size, це кількість пікселів.
// За замовчуванням розмір іконок - 16px.
