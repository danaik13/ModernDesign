import { useCallback, useState } from 'react';

export const useToggle = (initialState = false): [boolean, () => void, () => void] => {
    const [state, setState] = useState(initialState);

    const toggle = useCallback(() => setState(state => !state), [state])
    const close = () => setState(false)
    
    return [state, toggle, close]
}