import * as React from 'react';
import { cn } from '@/lib/utils';

interface IconProps extends React.SVGAttributes<SVGElement> {
  className?: string;
  size?: number;
  filled?: boolean;
}

// Spotify Icon (recreated for fair use)
export const SpotifyIcon: React.FC<IconProps> = ({ className, size = 24, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="currentColor"
    className={cn("text-primary", className)}
    {...props}
  >
    <path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2zm4.586 14.424c-.18.295-.563.387-.857.207-2.348-1.435-5.304-1.76-8.785-.964-.335.077-.67-.133-.746-.469-.077-.335.132-.67.469-.746 3.809-.871 7.077-.496 9.713 1.115.294.18.386.563.206.857zm1.223-2.723c-.226.367-.706.482-1.073.257-2.687-1.652-6.785-2.131-9.965-1.166-.413.125-.849-.106-.973-.520-.125-.413.106-.849.52-.973 3.632-1.102 8.147-.568 11.234 1.329.366.226.481.707.256 1.073zm.105-2.835C14.692 8.95 9.375 8.775 6.297 9.71c-.493.15-1.013-.129-1.163-.622-.149-.493.13-1.013.622-1.162 3.575-1.087 9.392-.897 12.851 1.395.438.291.577.912.285 1.35-.291.438-.912.577-1.35.285z"/>
  </svg>
);

// Netflix Icon (recreated for fair use)
export const NetflixIcon: React.FC<IconProps> = ({ className, size = 24, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="currentColor"
    className={cn("text-netflix", className)}
    {...props}
  >
    <path d="M5.398 0v24L8.2 24V12.6L16.6 24h3.8V0h-2.8v11.4L9.198 0H5.398zM12 2.4l2.8 4.8V2.4H12zm2.8 19.2l-2.8-4.8v4.8h2.8z"/>
  </svg>
);

// Apple Icon (recreated for fair use)
export const AppleIcon: React.FC<IconProps> = ({ className, size = 24, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="currentColor"
    className={cn("text-apple", className)}
    {...props}
  >
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
  </svg>
);

// OpenAI/ChatGPT Icon (recreated for fair use)
export const ChatGPTIcon: React.FC<IconProps> = ({ className, size = 24, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="currentColor"
    className={cn("text-chatgpt", className)}
    {...props}
  >
    <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z"/>
  </svg>
);

// Music Note Icon (Generic)
export const MusicNoteIcon: React.FC<IconProps> = ({ className, size = 24, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="currentColor"
    className={cn("text-primary", className)}
    {...props}
  >
    <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
  </svg>
);

// Play Button Icon (Universal media icon)
export const PlayIcon: React.FC<IconProps> = ({ className, size = 24, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="currentColor"
    className={cn("text-primary", className)}
    {...props}
  >
    <path d="M8 5v14l11-7z"/>
  </svg>
);

// Pause Icon
export const PauseIcon: React.FC<IconProps> = ({ className, size = 24, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="currentColor"
    className={cn("text-primary", className)}
    {...props}
  >
    <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
  </svg>
);

// Heart Icon (Liked/Favorite)
export const HeartIcon: React.FC<IconProps> = ({ className, size = 24, filled = false, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill={filled ? "currentColor" : "none"}
    stroke="currentColor"
    strokeWidth={filled ? 0 : 2}
    className={cn("text-primary", className)}
    {...props}
  >
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
  </svg>
);

// Download Icon
export const DownloadIcon: React.FC<IconProps> = ({ className, size = 24, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    className={cn("text-primary", className)}
    {...props}
  >
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
    <polyline points="7,10 12,15 17,10"/>
    <line x1="12" y1="15" x2="12" y2="3"/>
  </svg>
);

// Search Icon (Enhanced)
export const SearchIcon: React.FC<IconProps> = ({ className, size = 24, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    className={cn("text-muted-foreground", className)}
    {...props}
  >
    <circle cx="11" cy="11" r="8"/>
    <path d="21 21l-4.35-4.35"/>
  </svg>
);

// Menu Icon (Hamburger)
export const MenuIcon: React.FC<IconProps> = ({ className, size = 24, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    className={cn("text-foreground", className)}
    {...props}
  >
    <line x1="3" y1="6" x2="21" y2="6"/>
    <line x1="3" y1="12" x2="21" y2="12"/>
    <line x1="3" y1="18" x2="21" y2="18"/>
  </svg>
);

// Close Icon (X)
export const CloseIcon: React.FC<IconProps> = ({ className, size = 24, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    className={cn("text-foreground", className)}
    {...props}
  >
    <line x1="18" y1="6" x2="6" y2="18"/>
    <line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
);

// Export all icons
export const BrandIcons = {
  Spotify: SpotifyIcon,
  Netflix: NetflixIcon,
  Apple: AppleIcon,
  ChatGPT: ChatGPTIcon,
  MusicNote: MusicNoteIcon,
  Play: PlayIcon,
  Pause: PauseIcon,
  Heart: HeartIcon,
  Download: DownloadIcon,
  Search: SearchIcon,
  Menu: MenuIcon,
  Close: CloseIcon,
};
