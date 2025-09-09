'use client';

import * as React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Copy, Check, Eye, Palette } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ColorPaletteProps {
  className?: string;
}

interface ColorSwatch {
  name: string;
  value: string;
  description: string;
  textColor?: 'light' | 'dark';
}

const colorCategories = [
  {
    title: 'ブランドカラー',
    description: 'メインブランドとアクセントカラー',
    colors: [
      { name: 'Spotify Green', value: '#1DB954', description: 'Primary brand color' },
      { name: 'Netflix Red', value: '#E50914', description: 'Attention-grabbing accent' },
      { name: 'Apple Blue', value: '#007AFF', description: 'Professional accent' },
      { name: 'ChatGPT Green', value: '#10a37f', description: 'AI-friendly accent' },
    ]
  },
  {
    title: 'プロフェッショナル',
    description: 'ビジネス向けの洗練されたカラーパレット',
    colors: [
      { name: 'Rich Black', value: '#0F172A', description: 'Deep professional base', textColor: 'light' },
      { name: 'Professional Blue', value: '#3B82F6', description: 'Trust and reliability', textColor: 'light' },
      { name: 'Corporate Gold', value: '#EAB308', description: 'Premium accent' },
      { name: 'Sophisticated Teal', value: '#0D9488', description: 'Modern professional', textColor: 'light' },
    ]
  },
  {
    title: 'クリエイティブ',
    description: 'アーティスティックで表現力豊かなカラー',
    colors: [
      { name: 'Creative Purple', value: '#8B5CF6', description: 'Artistic inspiration', textColor: 'light' },
      { name: 'Creative Pink', value: '#E879F9', description: 'Bold expression' },
      { name: 'Creative Orange', value: '#FF6B35', description: 'Energetic creativity' },
      { name: 'Creative Cyan', value: '#06B6D4', description: 'Fresh innovation' },
    ]
  },
  {
    title: 'ミニマル',
    description: 'クリーンで洗練されたシンプルカラー',
    colors: [
      { name: 'Minimal Gray', value: '#333333', description: 'Sophisticated neutral', textColor: 'light' },
      { name: 'Medium Gray', value: '#737373', description: 'Balanced middle tone', textColor: 'light' },
      { name: 'Silver Gray', value: '#999999', description: 'Light sophisticated' },
      { name: 'Soft Success', value: '#22C55E', description: 'Gentle positive feedback' },
    ]
  },
  {
    title: 'セマンティックカラー',
    description: 'UI状態とフィードバック用カラー',
    colors: [
      { name: 'Success Green', value: '#10A37F', description: 'Positive actions & success states', textColor: 'light' },
      { name: 'Warning Orange', value: '#FB923C', description: 'Caution & attention needed' },
      { name: 'Error Red', value: '#EF4444', description: 'Errors & destructive actions' },
      { name: 'Info Blue', value: '#0EA5E9', description: 'Information & neutral feedback' },
    ]
  }
];

const gradients = [
  { name: 'Spotify Gradient', value: 'linear-gradient(135deg, #1DB954 0%, #191414 100%)', description: 'Music app style' },
  { name: 'Netflix Gradient', value: 'linear-gradient(135deg, #E50914 0%, #000000 100%)', description: 'Cinematic drama' },
  { name: 'Apple Gradient', value: 'linear-gradient(135deg, #007AFF 0%, #ffffff 100%)', description: 'Clean tech aesthetic' },
  { name: 'Creative Rainbow', value: 'linear-gradient(135deg, #FF6B35 0%, #F7931E 25%, #FFD23F 50%, #65A30D 75%, #06B6D4 100%)', description: 'Vibrant creativity' },
  { name: 'Professional Gradient', value: 'linear-gradient(135deg, #0F172A 0%, #3C4B64 100%)', description: 'Business sophistication' },
  { name: 'Nature Gradient', value: 'linear-gradient(135deg, #166534 0%, #059669 25%, #0EA5E9 50%, #D97706 75%, #B45309 100%)', description: 'Organic harmony' },
];

export function ColorPaletteShowcase({ className }: ColorPaletteProps) {
  const [copiedColor, setCopiedColor] = React.useState<string | null>(null);

  const copyToClipboard = async (value: string, name: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedColor(name);
      setTimeout(() => setCopiedColor(null), 2000);
    } catch (err) {
      console.error('Failed to copy color:', err);
    }
  };

  return (
    <div className={cn("space-y-8", className)}>
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold flex items-center justify-center gap-2">
          <Palette className="h-8 w-8 text-primary" />
          カラーパレット
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          最新のデザイントレンドとアクセシビリティ基準（WCAG 2.1 AA）に準拠した、
          プロフェッショナルなカラーシステム
        </p>
      </div>

      {/* Color Categories */}
      {colorCategories.map((category, categoryIndex) => (
        <Card key={categoryIndex} className="card-hover">
          <CardHeader>
            <CardTitle className="text-xl">{category.title}</CardTitle>
            <CardDescription className="text-base">{category.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {category.colors.map((color, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-xl border border-border/50 hover:border-border transition-all duration-300"
                >
                  <div
                    className="h-32 w-full flex items-center justify-center cursor-pointer transition-transform group-hover:scale-105"
                    style={{ backgroundColor: color.value }}
                    onClick={() => copyToClipboard(color.value, color.name)}
                  >
                    <div className={cn(
                      "text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                      color.textColor === 'light' ? "text-white" : "text-black"
                    )}>
                      {copiedColor === color.name ? (
                        <Check className="h-6 w-6 mx-auto" />
                      ) : (
                        <Copy className="h-6 w-6 mx-auto" />
                      )}
                    </div>
                  </div>
                  <div className="p-3 bg-card">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium text-sm">{color.name}</h4>
                        <p className="text-xs text-muted-foreground">{color.description}</p>
                      </div>
                      <Badge variant="outline" className="text-xs font-mono">
                        {color.value}
                      </Badge>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}

      {/* Gradients */}
      <Card className="card-hover">
        <CardHeader>
          <CardTitle className="text-xl">グラデーション</CardTitle>
          <CardDescription className="text-base">
            モダンなデザインに適用可能な美しいグラデーション
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {gradients.map((gradient, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl border border-border/50 hover:border-border transition-all duration-300"
              >
                <div
                  className="h-24 w-full flex items-center justify-center cursor-pointer transition-transform group-hover:scale-105"
                  style={{ background: gradient.value }}
                  onClick={() => copyToClipboard(gradient.value, gradient.name)}
                >
                  <div className="text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white drop-shadow-lg">
                    {copiedColor === gradient.name ? (
                      <Check className="h-6 w-6 mx-auto" />
                    ) : (
                      <Copy className="h-6 w-6 mx-auto" />
                    )}
                  </div>
                </div>
                <div className="p-3 bg-card">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-sm">{gradient.name}</h4>
                      <p className="text-xs text-muted-foreground">{gradient.description}</p>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => copyToClipboard(gradient.value, gradient.name)}
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Usage Guidelines */}
      <Card className="card-hover">
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <Eye className="h-5 w-5" />
            使用ガイドライン
          </CardTitle>
          <CardDescription className="text-base">
            効果的なカラー活用のためのベストプラクティス
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="font-semibold text-primary">✅ 推奨事項</h4>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• 60-30-10 ルール: 主要色60%, 補助色30%, アクセント色10%</li>
                <li>• セマンティックカラーは一貫して使用</li>
                <li>• コントラスト比 4.5:1 以上を維持</li>
                <li>• ブランドカラーでアイデンティティを確立</li>
                <li>• グラデーションは控えめに使用</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-destructive">❌ 避けるべき事項</h4>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• 一度に5色以上の使用</li>
                <li>• 低コントラストの文字色</li>
                <li>• セマンティックカラーの誤用</li>
                <li>• 過度に彩度の高い背景色</li>
                <li>• 複雑すぎるグラデーション</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
