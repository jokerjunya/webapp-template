'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { ThemeSelector, useColorTheme } from '@/components/ui/theme-selector';
import { BrandIcons } from '@/components/icons/brand-icons';
import { 
  BarChart3, 
  Users, 
  ShoppingCart, 
  TrendingUp, 
  Activity,
  CreditCard,
  DollarSign,
  Package,
  Home,
  Settings,
  User,
  ArrowLeft,
  Mic,
  SkipBack,
  SkipForward,
  Volume2,
  Shuffle,
  Repeat,
  Search,
  Library,
  Plus,
  Download,
  Heart,
  Shield,
  Globe,
  Sparkles
} from 'lucide-react';
import Link from 'next/link';

export default function DashboardPage() {
  const { theme, setTheme } = useColorTheme();
  const stats = [
    {
      title: 'プレイリスト',
      value: '127',
      change: '+12 今週',
      icon: <BrandIcons.MusicNote className="h-5 w-5 text-primary" />,
      brand: 'spotify',
    },
    {
      title: '視聴時間',
      value: '340h',
      change: '+18.5%',
      icon: <BrandIcons.Netflix className="h-5 w-5 text-netflix" />,
      brand: 'netflix',
    },
    {
      title: 'ダウンロード済み',
      value: '2,841',
      change: '+247 新着',
      icon: <BrandIcons.Apple className="h-5 w-5 text-apple" />,
      brand: 'apple',
    },
    {
      title: 'AIチャット',
      value: '1,523',
      change: '+89 今日',
      icon: <BrandIcons.ChatGPT className="h-5 w-5 text-chatgpt" />,
      brand: 'chatgpt',
    },
  ];

  const sidebarItems = [
    { icon: <Home className="h-5 w-5" />, label: 'ホーム', active: true },
    { icon: <Search className="h-5 w-5" />, label: '検索' },
    { icon: <Library className="h-5 w-5" />, label: 'ライブラリ' },
    { icon: <Plus className="h-5 w-5" />, label: 'プレイリスト作成' },
    { icon: <Heart className="h-5 w-5" />, label: 'お気に入り' },
    { icon: <Download className="h-5 w-5" />, label: 'ダウンロード済み' },
  ];

  const currentTrack = {
    title: "Modern Design Inspiration",
    artist: "UI/UX Collective",
    album: "Design Systems 2024",
    duration: "3:42",
    isPlaying: false,
  };

  const recentSales = [
    {
      name: '田中 太郎',
      email: 'tanaka@example.com',
      amount: '+¥1,999',
    },
    {
      name: '佐藤 花子',
      email: 'sato@example.com',
      amount: '+¥39',
    },
    {
      name: '鈴木 一郎',
      email: 'suzuki@example.com',
      amount: '+¥299',
    },
    {
      name: '高橋 美咲',
      email: 'takahashi@example.com',
      amount: '+¥99',
    },
    {
      name: '渡辺 健太',
      email: 'watanabe@example.com',
      amount: '+¥39',
    },
  ];

  return (
    <div className="min-h-screen bg-background flex transition-colors duration-500">
      {/* Spotify-style Sidebar */}
      <div className="w-64 bg-card border-r border-border p-6 space-y-6 transition-colors duration-500">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <BrandIcons.MusicNote className="h-8 w-8 text-primary" />
          <span className="font-bold text-xl">ModernUI</span>
        </div>

        {/* Navigation */}
        <nav className="space-y-2">
          {sidebarItems.map((item, index) => (
            <button
              key={index}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-colors ${
                item.active 
                  ? 'bg-primary/20 text-primary font-medium' 
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted'
              }`}
            >
              {item.icon}
              {item.label}
            </button>
          ))}
        </nav>

        {/* Recently Played */}
        <div className="space-y-3">
          <h3 className="font-semibold text-sm text-muted-foreground">最近再生した項目</h3>
          <div className="space-y-2">
            {['お気に入りの曲', 'チルアウト', '作業用BGM'].map((item, index) => (
              <div key={index} className="flex items-center gap-2 p-2 rounded hover:bg-muted cursor-pointer">
                <div className="w-8 h-8 bg-primary/20 rounded flex items-center justify-center">
                  <BrandIcons.MusicNote className="h-4 w-4 text-primary" />
                </div>
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* User Profile */}
        <div className="mt-auto pt-6 border-t border-border">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
              <User className="h-4 w-4 text-primary" />
            </div>
            <span className="text-sm font-medium">ユーザー</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="border-b border-border p-6 bg-card transition-colors duration-500">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" asChild>
                <Link href="/">
                  <ArrowLeft className="h-4 w-4" />
                </Link>
              </Button>
              <div>
                <h1 className="text-3xl font-bold">ダッシュボード</h1>
                <p className="text-muted-foreground">
                  モダンデザインのメトリクスとインサイト
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <ThemeSelector currentTheme={theme} onThemeChange={setTheme} />
              <ThemeToggle />
              <Button variant="outline">
                <Settings className="mr-2 h-4 w-4" />
                設定
              </Button>
            </div>
          </div>
        </header>

        <div className="flex-1 p-6 space-y-6 custom-scrollbar overflow-y-auto">

          {/* Stats Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <Card key={index} className={`card-hover relative overflow-hidden border-0 shadow-lg ${stat.brand === 'netflix' ? 'netflix-card-hover' : stat.brand === 'apple' ? 'apple-card-hover' : ''}`}>
                <div className={`absolute inset-0 opacity-5 ${
                  stat.brand === 'spotify' ? 'spotify-gradient' :
                  stat.brand === 'netflix' ? 'netflix-gradient' :
                  stat.brand === 'apple' ? 'apple-gradient' :
                  stat.brand === 'chatgpt' ? 'chatgpt-gradient' : ''
                }`} />
                <CardHeader className="relative z-10 flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {stat.title}
                  </CardTitle>
                  <div className="p-2 rounded-lg bg-background/50 backdrop-blur-sm">
                    {stat.icon}
                  </div>
                </CardHeader>
                <CardContent className="relative z-10">
                  <div className="text-3xl font-bold">{stat.value}</div>
                  <p className="text-xs text-muted-foreground mt-1">
                    {stat.change}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Main Content Grid */}
          <div className="grid gap-6 md:grid-cols-3">
            {/* Now Playing Card (Spotify-inspired) */}
            <Card className="card-hover spotify-gradient text-white border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BrandIcons.Play className="h-5 w-5" />
                  今再生中
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center">
                    <BrandIcons.MusicNote className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{currentTrack.title}</h3>
                    <p className="text-sm opacity-80">{currentTrack.artist}</p>
                    <p className="text-xs opacity-60">{currentTrack.album}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Button size="sm" variant="ghost" className="text-white hover:bg-white/20">
                      <Shuffle className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="ghost" className="text-white hover:bg-white/20">
                      <SkipBack className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="ghost" className="text-white hover:bg-white/20">
                      {currentTrack.isPlaying ? <BrandIcons.Pause className="h-5 w-5" /> : <BrandIcons.Play className="h-5 w-5" />}
                    </Button>
                    <Button size="sm" variant="ghost" className="text-white hover:bg-white/20">
                      <SkipForward className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="ghost" className="text-white hover:bg-white/20">
                      <Repeat className="h-4 w-4" />
                    </Button>
                  </div>
                  <Button size="sm" variant="ghost" className="text-white hover:bg-white/20">
                    <Volume2 className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Netflix-style Content */}
            <Card className="card-hover glass-effect border-white/20 dark:border-white/10">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BrandIcons.Netflix className="h-5 w-5 text-netflix" />
                  おすすめコンテンツ
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {['Modern Design Trends', 'UI/UX Best Practices', 'Component Libraries'].map((title, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-background/50 hover:bg-background/80 transition-all cursor-pointer group">
                    <div className="w-12 h-8 bg-netflix/20 rounded flex items-center justify-center">
                      <BrandIcons.Play className="h-3 w-3 text-netflix" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">{title}</p>
                      <p className="text-xs text-muted-foreground">デザインシリーズ</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Apple-style Settings */}
            <Card className="card-hover glass-effect border-white/20 dark:border-white/10">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BrandIcons.Apple className="h-5 w-5 text-apple" />
                  システム設定
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  { label: 'ダークモード', value: 'オン' },
                  { label: '通知', value: '許可' },
                  { label: 'アップデート', value: '自動' },
                  { label: 'ストレージ', value: '67%使用' },
                ].map((setting, index) => (
                  <div key={index} className="flex items-center justify-between p-2 rounded-lg hover:bg-apple/5 transition-colors">
                    <span className="text-sm font-medium">{setting.label}</span>
                    <span className="text-xs text-apple bg-apple/10 px-2 py-1 rounded-full">{setting.value}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* ChatGPT-style Chat Interface */}
          <Card className="card-hover glass-effect border-white/20 dark:border-white/10">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BrandIcons.ChatGPT className="h-5 w-5 text-chatgpt" />
                AI アシスタント
              </CardTitle>
              <CardDescription>
                モダンUIについて質問してみましょう
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="chat-bubble chat-bubble-assistant">
                <p className="text-sm">こんにちは！ModernUIテンプレートについて何か質問はありますか？</p>
              </div>
              <div className="chat-bubble chat-bubble-user">
                <p className="text-sm">各サービスのデザインをどのように統合していますか？</p>
              </div>
              <div className="chat-bubble chat-bubble-assistant">
                <p className="text-sm">Spotify、Netflix、Apple、ChatGPTの優れたデザイン要素を分析し、統一されたデザインシステムに統合しています。カラーパレット、タイポグラフィ、インタラクションパターンを体系化しました。</p>
              </div>
              <div className="flex items-center gap-2 mt-4">
                <input 
                  type="text" 
                  placeholder="メッセージを入力..." 
                  className="flex-1 px-3 py-2 rounded-full bg-background border border-border focus:outline-none focus:ring-2 focus:ring-chatgpt"
                />
                <Button size="sm" className="btn-chatgpt rounded-full">
                  <Mic className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Feature Showcase */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "認証システム",
                description: "NextAuth.js v5によるセキュアな認証",
                icon: <Shield className="h-5 w-5" />,
                color: "primary",
                tags: ["OAuth", "JWT", "セッション管理"]
              },
              {
                title: "データベース",
                description: "Prisma + PostgreSQLによる型安全なDB",
                icon: <Globe className="h-5 w-5" />,
                color: "apple",
                tags: ["Prisma", "PostgreSQL", "型安全"]
              },
              {
                title: "UIコンポーネント",
                description: "shadcn/ui + Tailwind CSSのモダンUI",
                icon: <Sparkles className="h-5 w-5" />,
                color: "netflix",
                tags: ["shadcn/ui", "Tailwind", "レスポンシブ"]
              },
              {
                title: "デプロイ",
                description: "Vercelによる自動デプロイ",
                icon: <Package className="h-5 w-5" />,
                color: "chatgpt",
                tags: ["Vercel", "CI/CD", "高速配信"]
              }
            ].map((feature, index) => (
              <Card key={index} className="card-hover border-0 shadow-lg">
                <CardHeader className="pb-3">
                  <div className={`w-10 h-10 rounded-lg bg-${feature.color}/20 flex items-center justify-center text-${feature.color} mb-2`}>
                    {feature.icon}
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                  <CardDescription className="text-sm">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-1">
                    {feature.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Music Player Footer (Spotify-style) */}
        <div className="border-t border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                <BrandIcons.MusicNote className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="font-medium text-sm">{currentTrack.title}</p>
                <p className="text-xs text-muted-foreground">{currentTrack.artist}</p>
              </div>
              <Button size="sm" variant="ghost">
                <BrandIcons.Heart className="h-4 w-4" />
              </Button>
            </div>
            
            <div className="flex items-center gap-2">
              <Button size="sm" variant="ghost">
                <Shuffle className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="ghost">
                <SkipBack className="h-4 w-4" />
              </Button>
              <Button size="sm" className="btn-spotify text-white rounded-full">
                {currentTrack.isPlaying ? <BrandIcons.Pause className="h-4 w-4" /> : <BrandIcons.Play className="h-4 w-4" />}
              </Button>
              <Button size="sm" variant="ghost">
                <SkipForward className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="ghost">
                <Repeat className="h-4 w-4" />
              </Button>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs text-muted-foreground">2:31</span>
              <div className="w-24 h-1 bg-muted rounded-full">
                <div className="w-1/3 h-full bg-primary rounded-full"></div>
              </div>
              <span className="text-xs text-muted-foreground">{currentTrack.duration}</span>
              <Button size="sm" variant="ghost">
                <Volume2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
