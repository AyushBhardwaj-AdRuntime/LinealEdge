import React from "react";
import { ChevronRight } from "lucide-react";

interface AnimatedButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
}

export function AnimatedButton({ children, onClick, className = "", type = "button" }: AnimatedButtonProps) {
  return (
    <button 
      type={type}
      onClick={onClick}
      className={`group flex items-center justify-center relative h-14 px-10 border border-[#18a84a] rounded-xl transition-all duration-300 cursor-pointer font-medium text-base text-white ${className}`} 
      style={{ backgroundColor: '#18a84a', borderColor: '#18a84a', color: 'white' }} 
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#158c3f')} 
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#18a84a')}
    >
      <span className="transition-opacity duration-300 group-hover:opacity-0">
        {children}
      </span>
      <ChevronRight className="absolute left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={20} strokeWidth={2} />
    </button>
  );
}
