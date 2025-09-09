import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Github, Star, Zap, Shield, Smartphone } from 'lucide-react';
import Link from 'next/link';

export default function HomePage() {
  const features = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: 'Next.js 15',
      description: 'App Routerを使用した最新のNext.js環境',
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: 'TypeScript',
      description: '型安全な開発環境とstrict mode',
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: 'レスポンシブ',
      description: 'Tailwind CSSによるモダンなUI/UX',
    },
  ];

  const techStack = [
    'Next.js 15',
    'TypeScript',
    'Tailwind CSS',
    'shadcn/ui',
    'NextAuth.js',
    'Prisma',
    'PostgreSQL',
    'Vercel',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center space-y-6">
          <Badge variant="outline" className="px-4 py-2">
            🚀 Modern Web App Template
          </Badge>
          
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            基本に忠実で
            <span className="text-primary"> スタイリッシュ</span>
            <br />
            なWebアプリテンプレート
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-[600px] mx-auto leading-relaxed">
            Next.js、TypeScript、Tailwind CSSを使用したモダンなWebアプリケーション開発の基盤となるテンプレート
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/dashboard">
                Get Started
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="https://github.com/jokerjunya/webapp-template" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                View on GitHub
              </Link>
            </Button>
          </div>
        </div>

        {/* Features */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="card-hover">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tech Stack */}
        <div className="mt-20">
          <Card className="card-hover">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl flex items-center justify-center gap-2">
                <Star className="h-6 w-6 text-yellow-500" />
                技術スタック
              </CardTitle>
              <CardDescription>
                最新のベストプラクティスを取り入れたモダンな技術構成
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 justify-center">
                {techStack.map((tech, index) => (
                  <Badge key={index} variant="secondary" className="px-3 py-1">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <Card className="p-8 gradient-bg text-primary-foreground">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">
                今すぐ始めましょう
              </h2>
              <p className="text-lg opacity-90 max-w-[500px] mx-auto">
                このテンプレートを使って、効率的で高品質なWebアプリケーション開発を始めてください。
              </p>
              <Button size="lg" variant="secondary" asChild>
                <Link href="/dashboard">
                  ダッシュボードを見る
                </Link>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
