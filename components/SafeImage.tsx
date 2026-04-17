
import React, { useState, useEffect, useRef } from 'react';
import { Activity } from 'lucide-react';

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc?: string;
}

export const SafeImage: React.FC<SafeImageProps> = ({ 
  src, 
  alt, 
  className, 
  fallbackSrc, 
  loading = "eager", // Changed to eager for immediate loading
  onError,
  ...props 
}) => {
  // Use currentSrc to manage the actual image source being displayed.
  const [currentSrc, setCurrentSrc] = useState<string | undefined>(typeof src === 'string' ? src : undefined);
  const [hasError, setHasError] = useState(false);
  const prevSrcRef = useRef<string | undefined>(typeof src === 'string' ? src : undefined);

  // When the prop `src` changes, verify if we need to reset the state.
  useEffect(() => {
    // Only reset if src genuinely changed to a new string
    if (src && typeof src === 'string' && src !== prevSrcRef.current) {
        setCurrentSrc(src);
        setHasError(false);
        prevSrcRef.current = src;
    }
  }, [src]);

  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    // If an external onError is provided, call it.
    if (onError) {
        onError(e);
    }

    // Prevent infinite loops if fallback also fails or same src
    if (!hasError && fallbackSrc && currentSrc !== fallbackSrc) {
        setCurrentSrc(fallbackSrc);
    } else {
        setHasError(true);
    }
  };

  if (hasError) {
    return (
      <div className={`flex flex-col items-center justify-center bg-[#1a1a1a] border border-[#333] ${className}`}>
        <Activity className="w-8 h-8 text-[#333] mb-2 opacity-50" />
        <span className="text-[#333] text-[9px] font-bold uppercase tracking-widest opacity-50">N/A</span>
      </div>
    );
  }

  return (
    <img
      src={currentSrc}
      alt={alt}
      className={`bg-[#111] ${className}`}
      loading={loading}
      decoding="async"
      onError={handleError}
      {...props}
    />
  );
};
