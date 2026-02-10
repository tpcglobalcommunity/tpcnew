interface BrandLogoProps {
  size?: number;
  className?: string;
  alt?: string;
  priority?: boolean;
}

export function BrandLogo({ 
  size = 40, 
  className = '',
  alt = 'TPC Global'
}: BrandLogoProps) {
  // Use WebP for better performance (file exists)
  const src = '/tpc.webp';
  
  return (
    <img
      src={src}
      alt={alt}
      width={size}
      height={size}
      className={className}
      loading="lazy"
      decoding="async"
    />
  );
}
