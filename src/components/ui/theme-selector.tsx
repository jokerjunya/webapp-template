'use client';

import * as React from 'react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Badge } from '@/components/ui/badge';
import { Palette, Check } from 'lucide-react';

export type ColorTheme = 
  | 'default'
  | 'professional'
  | 'creative' 
  | 'minimal'
  | 'vibrant'
  | 'nature';

interface ThemeOption {
  id: ColorTheme;
  name: string;
  description: string;
  colors: string[];
  category: 'business' | 'creative' | 'lifestyle';
}

const themes: ThemeOption[] = [
  {
    id: 'default',
    name: 'Modern Default',
    description: 'Spotify, Netflix, Apple & ChatGPT inspired',
    colors: ['#1DB954', '#E50914', '#007AFF', '#10a37f'],
    category: 'business',
  },
  {
    id: 'professional',
    name: 'Professional',
    description: 'Corporate & Business focused',
    colors: ['#0F172A', '#3B82F6', '#EAB308', '#0D9488'],
    category: 'business',
  },
  {
    id: 'creative',
    name: 'Creative',
    description: 'Vibrant & Artistic design',
    colors: ['#8B5CF6', '#E879F9', '#FF6B35', '#06B6D4'],
    category: 'creative',
  },
  {
    id: 'minimal',
    name: 'Minimal',
    description: 'Clean & Sophisticated',
    colors: ['#333333', '#737373', '#999999', '#22C55E'],
    category: 'lifestyle',
  },
  {
    id: 'vibrant',
    name: 'Vibrant',
    description: 'Energetic & Dynamic',
    colors: ['#FF0844', '#9333EA', '#00D4FF', '#80FF00'],
    category: 'creative',
  },
  {
    id: 'nature',
    name: 'Nature',
    description: 'Organic & Sustainable',
    colors: ['#166534', '#B45309', '#0EA5E9', '#D97706'],
    category: 'lifestyle',
  },
];

interface ThemeSelectorProps {
  currentTheme: ColorTheme;
  onThemeChange: (theme: ColorTheme) => void;
}

export function ThemeSelector({ currentTheme, onThemeChange }: ThemeSelectorProps) {
  const currentThemeInfo = themes.find(theme => theme.id === currentTheme) || themes[0];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'business': return '💼';
      case 'creative': return '🎨';
      case 'lifestyle': return '🌿';
      default: return '🎯';
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2">
          <Palette className="h-4 w-4" />
          <span className="hidden sm:inline">カラーテーマ</span>
          <div className="flex gap-1">
            {currentThemeInfo.colors.slice(0, 3).map((color, index) => (
              <div 
                key={index}
                className="w-3 h-3 rounded-full border border-border/50"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-80">
        <DropdownMenuLabel className="flex items-center gap-2">
          <Palette className="h-4 w-4" />
          カラーテーマを選択
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        
        {['business', 'creative', 'lifestyle'].map((category) => (
          <React.Fragment key={category}>
            <DropdownMenuLabel className="text-xs text-muted-foreground uppercase tracking-wider px-2 py-1">
              {getCategoryIcon(category)} {
                category === 'business' ? 'ビジネス' :
                category === 'creative' ? 'クリエイティブ' : 'ライフスタイル'
              }
            </DropdownMenuLabel>
            
            {themes.filter(theme => theme.category === category).map((theme) => (
              <DropdownMenuItem
                key={theme.id}
                onClick={() => onThemeChange(theme.id)}
                className="flex items-center justify-between p-3 cursor-pointer hover:bg-accent/50"
              >
                <div className="flex items-center gap-3">
                  <div className="flex gap-1">
                    {theme.colors.map((color, index) => (
                      <div 
                        key={index}
                        className="w-4 h-4 rounded-full border border-border/50"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                  <div>
                    <div className="font-medium text-sm">{theme.name}</div>
                    <div className="text-xs text-muted-foreground">{theme.description}</div>
                  </div>
                </div>
                
                {currentTheme === theme.id && (
                  <Check className="h-4 w-4 text-primary" />
                )}
              </DropdownMenuItem>
            ))}
            
            {category !== 'lifestyle' && <DropdownMenuSeparator />}
          </React.Fragment>
        ))}
        
        <DropdownMenuSeparator />
        <div className="p-2">
          <div className="text-xs text-muted-foreground text-center">
            全てのテーマは WCAG 2.1 AA 準拠
          </div>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

// Hook for managing theme state
export function useColorTheme() {
  const [theme, setTheme] = React.useState<ColorTheme>('default');

  React.useEffect(() => {
    // Load theme from localStorage
    const savedTheme = localStorage.getItem('color-theme') as ColorTheme;
    if (savedTheme && themes.find(t => t.id === savedTheme)) {
      setTheme(savedTheme);
    }
  }, []);

  React.useEffect(() => {
    // Apply theme to document
    const root = document.documentElement;
    
    // Remove all theme classes
    themes.forEach(t => {
      root.classList.remove(`theme-${t.id}`);
    });
    
    // Add current theme class
    if (theme !== 'default') {
      root.classList.add(`theme-${theme}`);
    }
    
    // Save to localStorage
    localStorage.setItem('color-theme', theme);
  }, [theme]);

  return { theme, setTheme };
}
