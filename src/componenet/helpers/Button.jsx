import React from 'react'

const Button = (props) => {
  return (
    <button className={`bg-lightCyan m-2 text-white py-5 rounded-md px-10  font-bold text-2xl ${props.bg}`}>{props.text}</button>
  )
}

export default Button