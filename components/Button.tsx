import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  pulsing?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, className = '', pulsing = false }) => {
  return (
    <button
      onClick={onClick}
      className={`
        bg-primary text-white font-heading font-semibold 
        py-4 px-8 rounded-md shadow-lg
        transition-all duration-300 ease-in-out
        hover:bg-primaryHover hover:shadow-xl hover:-translate-y-0.5
        tracking-wider uppercase text-sm md:text-base
        ${pulsing ? 'animate-pulse' : ''}
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default Button;