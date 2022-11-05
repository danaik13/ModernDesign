import { useEffect } from 'react';

export const useOutsideClick = (ref: any, handler: () => void, attached: boolean) => {
    useEffect(() => {
        if (!attached) return;
    
        const handleClick = (e: any) => {
          if (!ref.current) return;
          if (!ref.current.contains(e.target)) {
            handler()
          }
        }
    
        document.addEventListener('click', handleClick)
        return () => document.removeEventListener('click', handleClick)
      }, [attached])
}