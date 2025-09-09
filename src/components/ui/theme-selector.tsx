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
  | 'ocean'
  | 'nature'
  | 'warm';

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
    description: 'Sophisticated business elegance',
    colors: ['#2563EB', '#1E293B', '#6366F1', '#059669'],
    category: 'business',
  },
  {
    id: 'creative',
    name: 'Creative',
    description: 'Artistic expression & innovation',
    colors: ['#9333EA', '#E11D48', '#8B5CF6', '#F472B6'],
    category: 'creative',
  },
  {
    id: 'minimal',
    name: 'Minimal',
    description: 'Pure & timeless simplicity',
    colors: ['#171717', '#404040', '#525252', '#22C55E'],
    category: 'lifestyle',
  },
  {
    id: 'ocean',
    name: 'Ocean',
    description: 'Fresh & contemporary blues',
    colors: ['#0EA5E9', '#22D3EE', '#06B6D4', '#059669'],
    category: 'lifestyle',
  },
  {
    id: 'nature',
    name: 'Nature',
    description: 'Organic earth tones & sustainability',
    colors: ['#059669', '#D97706', '#65A30D', '#F97316'],
    category: 'lifestyle',
  },
  {
    id: 'warm',
    name: 'Warm',
    description: 'Cozy & inviting comfort',
    colors: ['#D97706', '#F59E0B', '#FB923C', '#22C55E'],
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
    const body = document.body;
    
    // Remove all theme classes from both root and body
    themes.forEach(t => {
      root.classList.remove(`theme-${t.id}`);
      body.classList.remove(`theme-${t.id}`);
    });
    
    // Add current theme class to both root and body
    if (theme !== 'default') {
      root.classList.add(`theme-${theme}`);
      body.classList.add(`theme-${theme}`);
    }
    
    // Force re-render of CSS variables
    root.style.setProperty('--theme-applied', theme);
    
    // Save to localStorage
    localStorage.setItem('color-theme', theme);
  }, [theme]);

  return { theme, setTheme };
}
