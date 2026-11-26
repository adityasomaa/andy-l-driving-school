import { LOGO } from "./logo-paths";

// Andy L Driving School's logo, traced to vector from his own artwork: the L and P plates and the
// car keep the logo's colours; the lettering takes the current text colour.
const LIME = "#9ac631";
const RED = "#c0181b";
const CAR = "#a32746";

/** The full logo: L plate, "ANDY L" under the car, P plate, "DRIVING SCHOOL". */
export function Logo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox={`0 0 ${LOGO.w} ${LOGO.h}`} className={className} role="img" aria-label="Andy L Driving School">
      <path fillRule="evenodd" fill={LIME} d={LOGO.lime} />
      <path fillRule="evenodd" fill={RED} d={LOGO.red} />
      <path fillRule="evenodd" fill={CAR} d={LOGO.car} />
      <path fillRule="evenodd" fill="currentColor" d={LOGO.ink} />
    </svg>
  );
}

/** A red P plate: favicon, loader, chat avatar. */
export function Plate({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden>
      <rect x="6" y="6" width="88" height="88" rx="10" fill={RED} />
      <path fill="#fff" d="M33 24h22c13 0 21 8 21 19s-8 19-21 19H46v14H33V24Zm13 11v16h8c5 0 8-3 8-8s-3-8-8-8h-8Z" />
    </svg>
  );
}

/** Kept so components from the template keep working. */
export const Wordmark = Logo;
export const Emblem = Plate;
export const Paw = Plate;
