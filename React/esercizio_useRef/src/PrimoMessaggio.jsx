import {useEffect, useRef} from 'react';

function PrimoMessaggio () {
    const hasMounted = useRef(false);

    useEffect(() => {
    if (!hasMounted.current) {
      console.log('Il componente è stato montato per la prima volta!');
      hasMounted.current = true;
    }
    return () => {
      console.log('Componente smontato');
    };
    }, []);

    return <p>Guarda i messaggi in console</p>;

}

export default PrimoMessaggio;