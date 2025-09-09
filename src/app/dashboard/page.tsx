import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  BarChart3, 
  Users, 
  ShoppingCart, 
  TrendingUp, 
  Activity,
  CreditCard,
  DollarSign,
  Package
} from 'lucide-react';
import Link from 'next/link';

export default function DashboardPage() {
  const stats = [
    {
      title: 'Total Revenue',
      value: '¥45,231',
      change: '+20.1%',
      icon: <DollarSign className="h-4 w-4 text-muted-foreground" />,
    },
    {
      title: 'Subscriptions',
      value: '+2350',
      change: '+180.1%',
      icon: <Users className="h-4 w-4 text-muted-foreground" />,
    },
    {
      title: 'Sales',
      value: '+12,234',
      change: '+19%',
      icon: <CreditCard className="h-4 w-4 text-muted-foreground" />,
    },
    {
      title: 'Active Now',
      value: '+573',
      change: '+201',
      icon: <Activity className="h-4 w-4 text-muted-foreground" />,
    },
  ];

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
    <div className="min-h-screen bg-background">
      <div className="flex-1 space-y-4 p-8 pt-6">
        {/* Header */}
        <div className="flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">ダッシュボード</h2>
            <p className="text-muted-foreground">
              アプリケーションの概要とメトリクスを確認できます。
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="outline">
              <Package className="mr-2 h-4 w-4" />
              Export
            </Button>
            <Button>
              <TrendingUp className="mr-2 h-4 w-4" />
              View Report
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <Card key={index} className="card-hover">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {stat.title}
                </CardTitle>
                {stat.icon}
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-600">{stat.change}</span> from last month
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          {/* Chart Card */}
          <Card className="col-span-4 card-hover">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5" />
                概要
              </CardTitle>
            </CardHeader>
            <CardContent className="pl-2">
              <div className="h-[300px] flex items-center justify-center text-muted-foreground">
                <div className="text-center">
                  <BarChart3 className="h-16 w-16 mx-auto mb-4 opacity-50" />
                  <p>チャートコンポーネントがここに表示されます</p>
                  <p className="text-sm">Chart.js や Recharts を統合可能</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Recent Sales Card */}
          <Card className="col-span-3 card-hover">
            <CardHeader>
              <CardTitle>Recent Sales</CardTitle>
              <CardDescription>
                You made 265 sales this month.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                {recentSales.map((sale, index) => (
                  <div key={index} className="flex items-center">
                    <div className="ml-4 space-y-1">
                      <p className="text-sm font-medium leading-none">
                        {sale.name}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {sale.email}
                      </p>
                    </div>
                    <div className="ml-auto font-medium">{sale.amount}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Feature Cards */}
        <div className="grid gap-4 md:grid-cols-3">
          <Card className="card-hover">
            <CardHeader>
              <CardTitle className="text-lg">認証システム</CardTitle>
              <CardDescription>
                NextAuth.js v5を使用したモダンな認証
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Badge variant="outline">Google OAuth</Badge>
                <Badge variant="outline">GitHub OAuth</Badge>
                <Badge variant="outline">Email/Password</Badge>
              </div>
              <Button className="mt-4 w-full" variant="outline" asChild>
                <Link href="/" as="/auth/signin">認証を試す</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="card-hover">
            <CardHeader>
              <CardTitle className="text-lg">データベース</CardTitle>
              <CardDescription>
                Prisma ORM + PostgreSQLによる型安全なDB操作
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Badge variant="outline">Prisma ORM</Badge>
                <Badge variant="outline">PostgreSQL</Badge>
                <Badge variant="outline">Type Safety</Badge>
              </div>
              <Button className="mt-4 w-full" variant="outline" asChild>
                <Link href="/api/health">API Health Check</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="card-hover">
            <CardHeader>
              <CardTitle className="text-lg">UI Components</CardTitle>
              <CardDescription>
                shadcn/ui + Tailwind CSSによるモダンなUI
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Badge variant="outline">shadcn/ui</Badge>
                <Badge variant="outline">Tailwind CSS</Badge>
                <Badge variant="outline">Dark Mode</Badge>
              </div>
              <Button className="mt-4 w-full" variant="outline" asChild>
                <Link href="/" as="/components">Components</Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Back to Home */}
        <div className="pt-6">
          <Button variant="ghost" asChild>
            <Link href="/">← ホームに戻る</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
