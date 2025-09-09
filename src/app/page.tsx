import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { BrandIcons } from '@/components/icons/brand-icons';
import { Github, Star, Zap, Shield, Smartphone, Play, Sparkles, Globe, Code2 } from 'lucide-react';
import Link from 'next/link';

export default function HomePage() {
  const features = [
    {
      icon: <BrandIcons.Spotify className="h-8 w-8" />,
      title: 'Spotify風UI',
      description: 'ダークテーマとグリーンアクセントの美しいデザイン',
      gradient: 'spotify-gradient',
    },
    {
      icon: <BrandIcons.Netflix className="h-8 w-8" />,
      title: 'Netflix風レイアウト',
      description: 'インパクトのあるカード型コンテンツ配置',
      gradient: 'netflix-gradient',
    },
    {
      icon: <BrandIcons.Apple className="h-8 w-8" />,
      title: 'Apple風デザイン',
      description: 'ミニマルで洗練されたガラスモーフィズム',
      gradient: 'apple-gradient',
    },
    {
      icon: <BrandIcons.ChatGPT className="h-8 w-8" />,
      title: 'ChatGPT風UX',
      description: 'クリーンで集中しやすいユーザーエクスペリエンス',
      gradient: 'chatgpt-gradient',
    },
  ];

  const techStack = [
    { name: 'Next.js 15', icon: <Code2 className="h-4 w-4" /> },
    { name: 'TypeScript', icon: <Shield className="h-4 w-4" /> },
    { name: 'Tailwind CSS', icon: <Sparkles className="h-4 w-4" /> },
    { name: 'shadcn/ui', icon: <Zap className="h-4 w-4" /> },
    { name: 'NextAuth.js', icon: <Shield className="h-4 w-4" /> },
    { name: 'Prisma ORM', icon: <Globe className="h-4 w-4" /> },
    { name: 'PostgreSQL', icon: <Globe className="h-4 w-4" /> },
    { name: 'Vercel', icon: <Zap className="h-4 w-4" /> },
  ];

  const inspirations = [
    {
      name: 'Spotify',
      color: 'text-primary',
      bgColor: 'bg-primary/10',
      icon: <BrandIcons.Spotify className="h-5 w-5" />,
    },
    {
      name: 'Netflix',
      color: 'text-netflix',
      bgColor: 'bg-netflix/10',
      icon: <BrandIcons.Netflix className="h-5 w-5" />,
    },
    {
      name: 'Apple Music',
      color: 'text-apple',
      bgColor: 'bg-apple/10',
      icon: <BrandIcons.Apple className="h-5 w-5" />,
    },
    {
      name: 'ChatGPT',
      color: 'text-chatgpt',
      bgColor: 'bg-chatgpt/10',
      icon: <BrandIcons.ChatGPT className="h-5 w-5" />,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Bar */}
      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <BrandIcons.MusicNote className="h-8 w-8 text-primary" />
              <span className="font-bold text-xl">ModernUI</span>
            </div>
            <div className="flex items-center gap-4">
              <ThemeToggle />
              <Button variant="outline" size="sm" asChild>
                <Link href="https://github.com/jokerjunya/webapp-template" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4 mr-2" />
                  GitHub
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center space-y-8">
          {/* Inspiration Badges */}
          <div className="flex flex-wrap gap-2 justify-center mb-6">
            {inspirations.map((brand, index) => (
              <Badge key={index} variant="outline" className={`px-3 py-1 ${brand.bgColor} ${brand.color} border-0`}>
                <span className="mr-2">{brand.icon}</span>
                {brand.name} inspired
              </Badge>
            ))}
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-apple to-netflix">
              Modern Design
            </span>
            <br />
            <span className="text-foreground">Web Template</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-[700px] mx-auto leading-relaxed">
            Spotify、Netflix、Apple Music、ChatGPTのデザイン要素を統合した
            <br />
            プロ仕様のWebアプリケーションテンプレート
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="btn-spotify text-white" asChild>
              <Link href="/dashboard">
                <Play className="mr-2 h-5 w-5" />
                デモを見る
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="https://github.com/jokerjunya/webapp-template" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                ソースコード
              </Link>
            </Button>
          </div>
        </div>

        {/* Features */}
        <div className="mt-32 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="card-hover group relative overflow-hidden border-0 shadow-xl">
              <div className={`absolute inset-0 ${feature.gradient} opacity-10 group-hover:opacity-20 transition-opacity`} />
              <CardHeader className="relative z-10">
                <div className="flex items-center space-x-3">
                  <div className="p-3 rounded-2xl bg-background/50 backdrop-blur-sm">
                    {feature.icon}
                  </div>
                </div>
                <CardTitle className="text-lg font-semibold">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <CardDescription className="text-sm leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tech Stack */}
        <div className="mt-24">
          <Card className="card-hover glass-effect border-white/20 dark:border-white/10">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl flex items-center justify-center gap-2">
                <Star className="h-7 w-7 text-primary animate-pulse" />
                技術スタック
              </CardTitle>
              <CardDescription className="text-lg">
                最新のベストプラクティスを取り入れたモダンな技術構成
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {techStack.map((tech, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-2 p-3 rounded-xl bg-background/50 backdrop-blur-sm border border-border/50 hover:bg-primary/5 transition-all duration-300 group"
                  >
                    <span className="text-primary group-hover:scale-110 transition-transform duration-300">
                      {tech.icon}
                    </span>
                    <span className="text-sm font-medium">{tech.name}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="mt-24 text-center">
          <Card className="relative overflow-hidden border-0 shadow-2xl">
            <div className="absolute inset-0 dynamic-gradient" />
            <div className="relative z-10 p-12 text-white">
              <div className="space-y-6">
                <h2 className="text-4xl font-bold">
                  今すぐ始めましょう
                </h2>
                <p className="text-xl opacity-90 max-w-[600px] mx-auto leading-relaxed">
                  世界最高のサービスからインスピレーションを得たデザインシステムで、
                  <br />
                  次世代のWebアプリケーション開発を体験してください。
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" variant="secondary" className="bg-white text-black hover:bg-gray-100" asChild>
                    <Link href="/dashboard">
                      <Sparkles className="mr-2 h-5 w-5" />
                      デモを体験する
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10" asChild>
                    <Link href="https://github.com/jokerjunya/webapp-template" target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      コードを見る
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Footer */}
        <footer className="mt-24 pt-12 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <BrandIcons.MusicNote className="h-6 w-6 text-primary" />
              <span className="font-medium">ModernUI Template</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-sm text-muted-foreground">
                Inspired by the world's best design systems
              </span>
              <div className="flex items-center gap-2">
                <BrandIcons.Spotify className="h-4 w-4 text-primary opacity-60" />
                <BrandIcons.Netflix className="h-4 w-4 text-netflix opacity-60" />
                <BrandIcons.Apple className="h-4 w-4 text-apple opacity-60" />
                <BrandIcons.ChatGPT className="h-4 w-4 text-chatgpt opacity-60" />
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
