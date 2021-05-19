import React from 'react'
import spinner from '../images/spinner.gif'

export const Spinner = () => {
    return (
        <>
          <img src={spinner} alt="Loading..." style={{ width: '100px',  margin: 'auto', padding: '100px', display: 'block', top: '300px' }} /> 
        </>
    )
}

export default Spinner