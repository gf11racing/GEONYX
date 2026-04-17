import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'text';
  children: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 text-sm font-bold uppercase tracking-wider transition-all duration-300 transform active:scale-95";
  
  const variants = {
    primary: "bg-geo-yellow text-nyx-dark hover:bg-yellow-400 border border-transparent",
    outline: "bg-transparent border-2 border-white text-white hover:bg-white hover:text-nyx-dark",
    text: "bg-transparent text-geo-yellow hover:text-white p-0"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};