import clsx from 'clsx';

export default function Button({ variant, children }) {
  return <button className={clsx('button', variant)}>{children}</button>;
}
