import type { ReactNode } from 'react';

interface OverlayProps {
  children: ReactNode;
  className?: string;
}

const Overlay = ({ children, className = '' }: OverlayProps) => (
  <div className={`absolute inset-x-0 top-0 bg-overlay-gradient ${className}`}>
    {children}
  </div>
);

export default Overlay;
