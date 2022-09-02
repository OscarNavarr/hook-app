import React, { useLayoutEffect, useRef, useState } from 'react'

export const Quote = (props) => {

  const pRef = useRef();
  const [ boxSize, setBoxSize ] = useState({ width:0, height: 0}) 

  useLayoutEffect(() => {
    
    const {height, width} = pRef.current.getBoundingClientRect();
    setBoxSize({height, width});
    
  }, [props.quote])

  return (
    <>
      <blockquote 
        className='blockquote text-end'
        style={{display: 'flex'}}
      >
          <p ref={ pRef } className='mb-1'>{props.quote}</p>
          <footer className='blockquote-footer mt-2'>{props.author}</footer>
      </blockquote>
      <code>{ JSON.stringify(boxSize) }</code>
    </>
  )
}
