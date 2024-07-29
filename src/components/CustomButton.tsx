import React, { MouseEventHandler } from 'react'

interface ButtonProps {
    buttonClass: string;
    buttonTitle: string;
    handleClick?:  MouseEventHandler<HTMLButtonElement>;
}

const CustomButton = ({ buttonClass, buttonTitle, handleClick }: ButtonProps) => {
  return (
    <button
        className={`${buttonClass}`}
        onClick={handleClick}
    >
        {buttonTitle}
    </button>
  )
}

export default CustomButton