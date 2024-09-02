import { useEffect } from 'react';

function useOutsideClick(ref, closeAvatar) {

    function handleClick(e) {
        if (ref.current && ref.current.contains(e.target)) {
            return
        }

        closeAvatar();
    }

    useEffect(() => {
        window.addEventListener('click', handleClick);

        return () => window.removeEventListener('click', handleClick);

    }, []);
}

export default useOutsideClick;
