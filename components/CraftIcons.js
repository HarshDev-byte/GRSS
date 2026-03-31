export const DroneIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
    {/* Body */}
    <rect x="10" y="10" width="4" height="4" rx="0.5" fill="currentColor" />
    <path d="M12 10l-2 -3 M12 10l2 -3" strokeWidth="1.5" />
    <line x1="6" y1="6" x2="18" y2="18" />
    <line x1="6" y1="18" x2="18" y2="6" />
    {/* Rotors */}
    <circle cx="5" cy="5" r="3" strokeDasharray="1.5 1.5" />
    <circle cx="19" cy="5" r="3" strokeDasharray="1.5 1.5" />
    <circle cx="5" cy="19" r="3" strokeDasharray="1.5 1.5" />
    <circle cx="19" cy="19" r="3" strokeDasharray="1.5 1.5" />
    <circle cx="5" cy="5" r="0.75" fill="currentColor" />
    <circle cx="19" cy="5" r="0.75" fill="currentColor" />
    <circle cx="5" cy="19" r="0.75" fill="currentColor" />
    <circle cx="19" cy="19" r="0.75" fill="currentColor" />
  </svg>
)

export const UavIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
    <polygon points="12,2 10,7 2,8 2,10 10,12 11,20 8,22 16,22 13,20 12,12 22,10 22,8 14,7" fill="currentColor" fillOpacity="0.15"/>
    <line x1="12" y1="2" x2="12" y2="20" stroke="currentColor" strokeDasharray="1.5 1.5"/>
  </svg>
)

export const SatelliteIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
    <rect x="10" y="8" width="4" height="8" rx="0.5" fill="currentColor" fillOpacity="0.15" />
    <rect x="2" y="7" width="5" height="10" strokeDasharray="6 2" />
    <line x1="7" y1="12" x2="10" y2="12" />
    <rect x="17" y="7" width="5" height="10" strokeDasharray="6 2" />
    <line x1="14" y1="12" x2="17" y2="12" />
    <line x1="12" y1="8" x2="12" y2="3" />
    <circle cx="12" cy="2" r="1.5" fill="currentColor" />
  </svg>
)
