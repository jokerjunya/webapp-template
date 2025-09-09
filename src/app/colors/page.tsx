'use client';

import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { ThemeSelector, useColorTheme } from '@/components/ui/theme-selector';
import { ColorPaletteShowcase } from '@/components/ui/color-palette-showcase';
import { BrandIcons } from '@/components/icons/brand-icons';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function ColorsPage() {
  const { theme, setTheme } = useColorTheme();

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Bar */}
      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" asChild>
                <Link href="/">
                  <ArrowLeft className="h-4 w-4" />
                </Link>
              </Button>
              <div className="flex items-center gap-2">
                <BrandIcons.MusicNote className="h-8 w-8 text-primary" />
                <span className="font-bold text-xl">ModernUI</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <ThemeSelector currentTheme={theme} onThemeChange={setTheme} />
              <ThemeToggle />
              <Button variant="outline" size="sm" asChild>
                <Link href="https://github.com/jokerjunya/webapp-template" target="_blank" rel="noopener noreferrer">
                  GitHub
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <ColorPaletteShowcase />
      </main>
    </div>
  );
}
