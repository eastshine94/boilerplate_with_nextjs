import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import styles from 'scss/components/blocks/Modal.module.scss';

interface Props {
  children: React.ReactNode;
  onClose: () => void;
}

export default function Modal({ children, onClose }: Props) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
    return () => {
      setMounted(false);
    };
  }, []);

  useEffect(() => {
    document.body.style.cssText = `
        position: fixed;
        top: -${window.scrollY}px;
        overflow-y: scroll;
        width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = '';
      window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
    };
  }, []);

  const handleBackgroundClick = () => {
    onClose();
  };

  const handleContentClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
  };

  return mounted
    ? createPortal(
        <div className={styles.container} onClick={handleBackgroundClick}>
          <div className={styles.content} onClick={handleContentClick}>
            {children}
          </div>
        </div>,
        document.querySelector('#modal') as HTMLDivElement
      )
    : null;
}
