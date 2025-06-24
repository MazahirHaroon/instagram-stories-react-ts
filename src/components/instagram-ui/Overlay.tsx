import type { ReactNode } from 'react';

interface OverlayProps {
  children: ReactNode;
  className?: string;
}

const Overlay = ({ children, className = '' }: OverlayProps) => (
  <div className={`inset-0 flex bg-overlay-gradient ${className}`}>
    {children}
  </div>
);

export default Overlay;
