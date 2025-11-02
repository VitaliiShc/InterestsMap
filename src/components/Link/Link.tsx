import type { AnchorHTMLAttributes, ReactNode } from 'react';
import styles from './Link.module.css';

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: ReactNode;
};

export function Link({ href, children }: LinkProps) {
  return (
    <a
      href={href}
      className={styles.link}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}
