import React from 'react';
import { ArrowRight, Loader2 } from 'lucide-react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  withArrow?: boolean;
  isLoading?: boolean;
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  withArrow = false,
  isLoading = false,
  icon,
  className = '',
  disabled,
  ...props
}) => {
  const baseStyles =
    'relative inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#0078FF]/50 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none select-none whitespace-nowrap cursor-pointer';

  const sizeStyles = {
    sm: 'text-xs px-3.5 py-1.5 rounded-lg gap-1.5',
    md: 'text-sm px-5 py-2.5 rounded-xl gap-2',
    lg: 'text-base px-6 py-3.5 rounded-xl gap-2.5 font-semibold'
  };

  const variantStyles = {
    primary:
      'brand-gradient text-white shadow-md shadow-[#007BFF]/25 hover:shadow-[#007BFF]/40 hover:brightness-105 border border-white/10',
    secondary:
      'bg-slate-100 text-[#0F172A] hover:bg-slate-200 border border-slate-200 shadow-xs',
    outline:
      'bg-transparent text-[#0F172A] border border-slate-300 hover:border-[#007BFF] hover:bg-blue-50/60 hover:text-[#007BFF]',
    ghost:
      'bg-transparent text-slate-700 hover:text-[#0F172A] hover:bg-slate-100',
    danger:
      'bg-[#EF4444] text-white hover:bg-red-600 shadow-sm'
  };

  return (
    <button
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <Loader2 className="w-4 h-4 animate-spin text-white" />
      ) : (
        icon && <span className="flex-shrink-0">{icon}</span>
      )}
      <span>{children}</span>
      {withArrow && !isLoading && (
        <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
      )}
    </button>
  );
};
