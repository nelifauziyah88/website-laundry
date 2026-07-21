type IconProps = {
  size?: number;
  color?: string;
  strokeWidth?: number;
};

const base = (size = 20, color = "currentColor", strokeWidth = 1.8) => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
});

export function HamburgerIcon({ size, color, strokeWidth }: IconProps) {
  return (
    <svg {...base(size, color, strokeWidth)}>
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

export function DashboardIcon({ size, color, strokeWidth }: IconProps) {
  return (
    <svg {...base(size, color, strokeWidth)}>
      <rect x="3" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="3" width="7" height="7" rx="1.5" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" />
      <rect x="14" y="14" width="7" height="7" rx="1.5" />
    </svg>
  );
}

export function WalletIcon({ size, color, strokeWidth }: IconProps) {
  return (
    <svg {...base(size, color, strokeWidth)}>
      <rect x="3" y="6" width="18" height="13" rx="2" />
      <path d="M3 10h18" />
      <path d="M15 14h3" />
    </svg>
  );
}

export function DocumentIcon({ size, color, strokeWidth }: IconProps) {
  return (
    <svg {...base(size, color, strokeWidth)}>
      <path d="M6 3h9l4 4v14H6z" />
      <path d="M14 3v5h5" />
      <path d="M9 12h6" />
      <path d="M9 16h6" />
    </svg>
  );
}

export function UsersIcon({ size, color, strokeWidth }: IconProps) {
  return (
    <svg {...base(size, color, strokeWidth)}>
      <circle cx="9" cy="8" r="3.2" />
      <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
      <path d="M16 4.5c1.8.4 3 2 3 3.8s-1.2 3.4-3 3.8" />
      <path d="M21 20c0-2.8-1.9-5.1-4.5-5.8" />
    </svg>
  );
}

export function SettingsIcon({ size, color, strokeWidth }: IconProps) {
  return (
    <svg {...base(size, color, strokeWidth)}>
      <circle cx="12" cy="12" r="3.2" />
      <path d="M19.4 13.5a1.7 1.7 0 0 0 .34 1.87l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.7 1.7 0 0 0-1.87-.34 1.7 1.7 0 0 0-1.04 1.56V19.6a2 2 0 1 1-4 0v-.09a1.7 1.7 0 0 0-1.04-1.56 1.7 1.7 0 0 0-1.87.34l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.7 1.7 0 0 0 .34-1.87 1.7 1.7 0 0 0-1.56-1.04H4.4a2 2 0 1 1 0-4h.09a1.7 1.7 0 0 0 1.56-1.04 1.7 1.7 0 0 0-.34-1.87l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.7 1.7 0 0 0 1.87.34H10.6a1.7 1.7 0 0 0 1.04-1.56V4.4a2 2 0 1 1 4 0v.09a1.7 1.7 0 0 0 1.04 1.56 1.7 1.7 0 0 0 1.87-.34l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.7 1.7 0 0 0-.34 1.87V10.6a1.7 1.7 0 0 0 1.56 1.04h.09a2 2 0 1 1 0 4h-.09a1.7 1.7 0 0 0-1.56 1.04Z" />
    </svg>
  );
}

export function LogoutIcon({ size, color, strokeWidth }: IconProps) {
  return (
    <svg {...base(size, color, strokeWidth)}>
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
      <path d="M16 17l5-5-5-5" />
      <path d="M21 12H9" />
    </svg>
  );
}

export function ChevronDownIcon({ size, color, strokeWidth }: IconProps) {
  return (
    <svg {...base(size, color, strokeWidth)}>
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

export function ChevronRightIcon({ size, color, strokeWidth }: IconProps) {
  return (
    <svg {...base(size, color, strokeWidth)}>
      <path d="M9 6l6 6-6 6" />
    </svg>
  );
}

export function LinkChainIcon({ size, color, strokeWidth }: IconProps) {
  return (
    <svg {...base(size, color, strokeWidth)}>
      <path d="M9 15l6-6" />
      <path d="M11 6.5l1-1a3.5 3.5 0 0 1 5 5l-1 1" />
      <path d="M13 17.5l-1 1a3.5 3.5 0 0 1-5-5l1-1" />
    </svg>
  );
}

export function ShoppingBagIcon({ size, color, strokeWidth }: IconProps) {
  return (
    <svg {...base(size, color, strokeWidth)}>
      <path d="M6 8h12l-1 12H7z" />
      <path d="M9 8V6a3 3 0 0 1 6 0v2" />
    </svg>
  );
}

export function PiggyBankIcon({ size, color, strokeWidth }: IconProps) {
  return (
    <svg {...base(size, color, strokeWidth)}>
      <path d="M4 12a6 6 0 0 1 6-6h4.5a4.5 4.5 0 0 1 4.5 4.5V13a1 1 0 0 1-1 1h-1l-1 3H10l-.6-1.6A6 6 0 0 1 4 12Z" />
      <circle
        cx="15"
        cy="10"
        r="0.6"
        fill={color ?? "currentColor"}
        stroke="none"
      />
      <path d="M7 12H5" />
      <path d="M9 6V4.5" />
    </svg>
  );
}

export function ReceiptIcon({ size, color, strokeWidth }: IconProps) {
  return (
    <svg {...base(size, color, strokeWidth)}>
      <path d="M6 3h12v18l-2.5-1.5L13 21l-2.5-1.5L8 21l-2-1.5z" />
      <path d="M9 8h6" />
      <path d="M9 12h6" />
    </svg>
  );
}

export function CardStackIcon({ size, color, strokeWidth }: IconProps) {
  return (
    <svg {...base(size, color, strokeWidth)}>
      <rect x="4" y="9" width="12" height="10" rx="2" />
      <path d="M8 9V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2" />
    </svg>
  );
}

export function BoxIcon({ size, color, strokeWidth }: IconProps) {
  return (
    <svg {...base(size, color, strokeWidth)}>
      <path d="M21 8l-9-5-9 5 9 5 9-5Z" />
      <path d="M3 8v8l9 5 9-5V8" />
      <path d="M12 13v8" />
    </svg>
  );
}

export function UserPlusIcon({ size, color, strokeWidth }: IconProps) {
  return (
    <svg {...base(size, color, strokeWidth)}>
      <circle cx="9" cy="8" r="3.2" />
      <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
      <path d="M18 8v6" />
      <path d="M15 11h6" />
    </svg>
  );
}

export function TrendUpIcon({ size, color, strokeWidth }: IconProps) {
  return (
    <svg {...base(size, color, strokeWidth)}>
      <path d="M3 17l6-6 4 4 8-8" />
      <path d="M15 7h6v6" />
    </svg>
  );
}

export function CalendarIcon({ size, color, strokeWidth }: IconProps) {
  return (
    <svg {...base(size, color, strokeWidth)}>
      <rect x="3" y="5" width="18" height="16" rx="2.5" />
      <path d="M3 10h18" />
      <path d="M8 3v4" />
      <path d="M16 3v4" />
    </svg>
  );
}

export function SparkleIcon({ size, color, strokeWidth }: IconProps) {
  return (
    <svg {...base(size, color, strokeWidth)}>
      <path d="M12 3l1.6 4.4L18 9l-4.4 1.6L12 15l-1.6-4.4L6 9l4.4-1.6z" />
      <path d="M19 15l.7 1.9L21.5 17.5l-1.8.7L19 20l-.7-1.8-1.8-.7 1.8-.7z" />
    </svg>
  );
}
