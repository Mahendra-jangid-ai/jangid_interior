interface LogoMarkProps {
  size?: number
  color?: string
}

export function LogoMark({ size = 36, color = 'currentColor' }: LogoMarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Chandelier/Lamp shape - Interior design inspired */}
      {/* Top hook */}
      <path
        d="M20 2 C20 2 20 6 20 6"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      {/* Top decorative circle */}
      <circle cx="20" cy="8" r="2" stroke={color} strokeWidth="1.2" fill="none" />
      {/* Main chandelier body - elegant curves */}
      <path
        d="M12 14 Q12 10 20 10 Q28 10 28 14"
        stroke={color}
        strokeWidth="1.4"
        fill="none"
        strokeLinecap="round"
      />
      {/* Hanging chains */}
      <path
        d="M14 14 L14 20"
        stroke={color}
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M20 12 L20 20"
        stroke={color}
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M26 14 L26 20"
        stroke={color}
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      {/* Light holders - elegant bowls */}
      <path
        d="M10 20 Q10 24 14 24 Q18 24 18 20"
        stroke={color}
        strokeWidth="1.3"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M16 20 Q16 25 20 25 Q24 25 24 20"
        stroke={color}
        strokeWidth="1.3"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M22 20 Q22 24 26 24 Q30 24 30 20"
        stroke={color}
        strokeWidth="1.3"
        fill="none"
        strokeLinecap="round"
      />
      {/* Bottom decorative element */}
      <path
        d="M17 28 Q20 32 23 28"
        stroke={color}
        strokeWidth="1.2"
        fill="none"
        strokeLinecap="round"
      />
      <circle cx="20" cy="34" r="1.5" fill={color} />
    </svg>
  )
}

// Alternative simpler logo mark - modern furniture/sofa shape
export function LogoMarkAlt({ size = 36, color = 'currentColor' }: LogoMarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Elegant arch - representing doorway/interior space */}
      <path
        d="M8 34 L8 16 C8 8 20 4 20 4 C20 4 32 8 32 16 L32 34"
        stroke={color}
        strokeWidth="1.8"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Base line */}
      <line x1="4" y1="34" x2="36" y2="34" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      {/* Inner decorative element */}
      <path
        d="M14 34 L14 22 C14 18 20 16 20 16 C20 16 26 18 26 22 L26 34"
        stroke={color}
        strokeWidth="1.2"
        fill="none"
        strokeLinecap="round"
        opacity="0.6"
      />
      {/* Small diamond accent */}
      <path
        d="M20 10 L22 13 L20 16 L18 13 Z"
        fill={color}
        opacity="0.8"
      />
    </svg>
  )
}

interface LogoProps {
  light?: boolean
  className?: string
  variant?: 'chandelier' | 'arch'
}

export function Logo({ light = false, className = '', variant = 'arch' }: LogoProps) {
  const markColor = 'hsl(43, 56%, 55%)'
  const textColor = light ? '#ffffff' : 'hsl(30, 8%, 12%)'
  
  const Mark = variant === 'chandelier' ? LogoMark : LogoMarkAlt

  return (
    <div className={`flex items-center gap-2.5 ${className}`} aria-label="Jangid Interior — Home">
      <Mark size={34} color={markColor} />
      <span
        className="font-serif font-medium tracking-wide leading-none text-[1.15rem] md:text-[1.2rem]"
        style={{
          color: textColor,
          letterSpacing: '0.03em',
        }}
      >
        Jangid Interior
      </span>
    </div>
  )
}

export default Logo
