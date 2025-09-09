# 🚀 WebApp Template

> 基本に忠実でスタイリッシュなモダンWebアプリケーションテンプレート

[![Next.js](https://img.shields.io/badge/Next.js-15.1.3-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7.2-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4.17-38B2AC)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

このテンプレートは、今後のWebアプリケーション開発における標準的な基盤として、最新のベストプラクティスを取り入れたモダンな技術スタックを提供します。

## ✨ 特徴

- 🎯 **最新技術スタック**: Next.js 15 + TypeScript + Tailwind CSS
- 🎨 **モダンUI**: shadcn/ui コンポーネントライブラリ
- 🌙 **ダークモード対応**: next-themes による自動テーマ切り替え
- 📱 **レスポンシブデザイン**: モバイルファーストアプローチ
- 🔒 **認証システム対応**: NextAuth.js v5 統合準備済み
- 🗃️ **データベース対応**: Prisma ORM + PostgreSQL 対応
- 🧪 **テスト環境**: Vitest + Testing Library + Playwright
- 📏 **コード品質**: ESLint + Prettier + TypeScript strict mode
- 🚀 **デプロイ対応**: Vercel 最適化設定
- 🔧 **開発体験**: Hot Reload + Fast Refresh + Type Safety

## 🛠️ 技術スタック

### コア技術
- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Language**: [TypeScript 5.7](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 3.4](https://tailwindcss.com/)
- **Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Icons**: [Lucide React](https://lucide.dev/) + カスタムブランドアイコン

### 認証・データベース
- **Authentication**: [NextAuth.js v5](https://authjs.dev/)
- **ORM**: [Prisma](https://www.prisma.io/)
- **Database**: [PostgreSQL](https://www.postgresql.org/)

### 開発・テストツール
- **Package Manager**: [pnpm](https://pnpm.io/)
- **Testing**: [Vitest](https://vitest.dev/) + [Testing Library](https://testing-library.com/) + [Playwright](https://playwright.dev/)
- **Linting**: [ESLint](https://eslint.org/) + [Prettier](https://prettier.io/)
- **Git Hooks**: [Husky](https://typicode.github.io/husky/) + [lint-staged](https://github.com/okonet/lint-staged)

## 🚀 クイックスタート

### 前提条件
- Node.js 18.0.0以上
- pnpm 8.0.0以上

### インストール

```bash
# リポジトリをクローン
git clone https://github.com/jokerjunya/webapp-template.git
cd webapp-template

# 依存関係をインストール
pnpm install

# 開発サーバーを起動
pnpm dev
```

開発サーバーが起動したら、[http://localhost:3000](http://localhost:3000) でアプリケーションを確認できます。

### 環境設定

`.env.local` ファイルを作成し、必要な環境変数を設定してください：

```bash
# データベース
DATABASE_URL="postgresql://user:password@localhost:5432/webapp_dev"

# NextAuth.js
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key"

# OAuth プロバイダー
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"
GITHUB_ID="your-github-id"
GITHUB_SECRET="your-github-secret"
```

## 📁 プロジェクト構造

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css        # グローバルスタイル
│   ├── layout.tsx         # ルートレイアウト
│   ├── page.tsx           # ホームページ
│   ├── dashboard/         # ダッシュボードページ
│   └── api/               # API Routes
├── components/            # 再利用可能コンポーネント
│   ├── ui/               # shadcn/ui コンポーネント
│   ├── forms/            # フォームコンポーネント
│   └── layouts/          # レイアウトコンポーネント
├── lib/                  # ユーティリティ関数
│   ├── utils.ts          # 汎用ヘルパー関数
│   ├── auth.ts           # 認証設定
│   ├── db.ts             # データベース接続
│   └── validations.ts    # Zod バリデーションスキーマ
├── hooks/                # カスタムReactフック
├── stores/               # 状態管理 (Zustand)
├── types/                # TypeScript型定義
└── styles/               # 追加スタイル
```

## 📜 利用可能なスクリプト

```bash
# 開発
pnpm dev              # 開発サーバー起動
pnpm build            # プロダクションビルド
pnpm start            # プロダクションサーバー起動

# コード品質
pnpm lint             # ESLint実行
pnpm lint:fix         # ESLint自動修正
pnpm format           # Prettier実行
pnpm type-check       # TypeScript型チェック

# テスト
pnpm test             # ユニットテスト実行
pnpm test:ui          # テストUI起動
pnpm test:e2e         # E2Eテスト実行

# データベース (Prisma設定後)
pnpm db:generate      # Prismaクライアント生成
pnpm db:push          # スキーマをDBにプッシュ
pnpm db:migrate       # マイグレーション実行
pnpm db:studio        # Prisma Studio起動
```

## 🎨 UI コンポーネント & カラーシステム

### shadcn/ui コンポーネント
- **Button**: 汎用ボタンコンポーネント + ブランド専用スタイル
- **Card**: カードレイアウト + ホバーエフェクト
- **Badge**: バッジ・タグ表示
- **ThemeToggle**: ライト/ダーク切り替え
- **ThemeSelector**: 6種類のカラーテーマ選択

### 🌈 プレミアムカラーテーマ（WCAG 2.1 AA準拠）

1. **Modern Default** - Spotify, Netflix, Apple, ChatGPT配色
2. **Professional** - ビジネス・企業向け洗練カラー
3. **Creative** - クリエイティブ・アート向け鮮やかカラー
4. **Minimal** - シンプル・ミニマル向けニュートラル
5. **Vibrant** - エネルギッシュ・ダイナミックカラー
6. **Nature** - オーガニック・サスティナブルカラー

### カスタムブランドアイコン
- Spotify, Netflix, Apple Music, ChatGPT風アイコン
- 音楽、動画、チャット用インターフェース要素
- 著作権に配慮した再実装デザイン

### コンポーネントの追加

新しいshadcn/uiコンポーネントは以下のコマンドで追加できます：

```bash
npx shadcn@latest add [component-name]
```

### カラーテーマのカスタマイズ

1. **新しいテーマの追加**: `src/styles/color-themes.css`で新テーマを定義
2. **テーマ切り替え**: `ThemeSelector`コンポーネントで実装済み
3. **カスタムカラー**: CSS変数で簡単に変更可能

```css
.theme-custom {
  --primary: 270 95% 75%;        /* カスタムメインカラー */
  --secondary: 30 100% 50%;      /* カスタムセカンダリー */
  /* ... その他のカラー定義 */
}
```

## 🔐 認証システム（実装予定）

NextAuth.js v5 を使用した認証機能の実装予定：

- **Email/Password認証**
- **OAuth認証** (Google, GitHub)
- **セッション管理**
- **保護されたルート**
- **ユーザープロフィール管理**

## 🗃️ データベース（実装予定）

Prisma ORM を使用したデータベース機能：

- **PostgreSQL接続**
- **型安全なクエリ**
- **マイグレーション管理**
- **スキーマ管理**

## 🚀 デプロイ

### Vercel (推奨)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/jokerjunya/webapp-template)

1. GitHubリポジトリをVercelに接続
2. 環境変数を設定
3. 自動デプロイ開始

### その他のプラットフォーム

- **Netlify**: 静的サイト生成対応
- **Railway**: データベース込みのフルスタック対応
- **Docker**: Containerized デプロイ

## 📊 パフォーマンス目標

このテンプレートは以下のパフォーマンス目標を達成することを目指しています：

- **Lighthouse Score**: 各項目90以上
- **First Contentful Paint**: 1.5秒以内
- **Time to Interactive**: 3.0秒以内
- **Cumulative Layout Shift**: 0.1以下

## 🔧 カスタマイズガイド

### テーマのカスタマイズ

`src/app/globals.css` でカラーテーマをカスタマイズできます：

```css
:root {
  --primary: 221.2 83.2% 53.3%;
  --secondary: 210 40% 96%;
  /* ... */
}
```

### コンポーネントの拡張

`src/components/ui/` 内のコンポーネントを自由に拡張・カスタマイズできます。

### ユーティリティ関数の追加

`src/lib/utils.ts` に汎用的なヘルパー関数を追加できます。

## 🧪 テスト

### ユニットテスト

```bash
# テスト実行
pnpm test

# ウォッチモード
pnpm test --watch

# カバレッジレポート
pnpm test --coverage
```

### E2Eテスト

```bash
# E2Eテスト実行
pnpm test:e2e

# 特定のブラウザで実行
pnpm test:e2e --project=chromium
```

## 🤝 コントリビューション

プルリクエストやイシューの投稿を歓迎します！

1. このリポジトリをフォーク
2. フィーチャーブランチを作成 (`git checkout -b feature/amazing-feature`)
3. 変更をコミット (`git commit -m 'Add amazing feature'`)
4. ブランチをプッシュ (`git push origin feature/amazing-feature`)
5. プルリクエストを作成

## 📄 ライセンス

このプロジェクトは [MIT License](LICENSE) の下で公開されています。

## 👥 作成者

- **jokerjunya** - *Initial work* - [GitHub](https://github.com/jokerjunya)

## 🙏 謝辞

このテンプレートは以下のオープンソースプロジェクトを参考にしています：

- [Next.js](https://nextjs.org/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)

---

💡 **ヒント**: このREADMEは、プロジェクトの進行に合わせて更新してください。

📚 **詳細ドキュメント**: [要件定義書](要件定義書.md) | [開発計画書](開発計画書.md) も合わせてご覧ください。
