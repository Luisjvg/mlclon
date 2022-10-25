import React, { useLayoutEffect, useState } from 'react';

export function hidden(event){
    console.log("evento");
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