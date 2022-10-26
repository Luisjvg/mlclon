import React, { useLayoutEffect, useState } from 'react';
import {Products} from '../components/Products/index';
import {Galeria} from '../components/Products/style';

const galeria = Galeria;

export function hidden(event){
    
}

// function useWindowSize() {
//     const [size, setSize] = useState([0, 0]);
//     useLayoutEffect(() => {
//     function updateSize(){
//         setSize([window.innerWidth, window.innerHeight])
//     }
//     window.addEventListener('resize', updateSize());
//     return () => window.removeEventListener('rhesize', updateSize)
//     }, []);
//     return size;
// }
// export function ShowWindowDimensions(props){
//     const [width, height] = useWindowSize();
//     return <span>Window size: {width} x {height}</span>
// }