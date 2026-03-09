# Analytics Setup Guide

## Product LPs (このリポジトリ)
Vercel Analytics + Speed Insights 導入済み

## 他プロダクトへの導入手順

### Next.js プロジェクト (Nexus Sphere, Personal Newspaper, Workforce App, Bento Order)
```bash
npm install @vercel/analytics @vercel/speed-insights
```

layout.tsx に追加:
```tsx
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
// <body> 内に <Analytics /> <SpeedInsights /> を追加
```

### カスタムイベント
```tsx
import { track } from '@vercel/analytics';
track('signup', { product: 'nexus-sphere', plan: 'free' });
track('cta_click', { location: 'hero' });
```

### PostHog (詳細行動分析が必要な場合)
```bash
npm install posthog-js
```
PostHogは無料枠で月100万イベントまで。
ファネル分析、ヒートマップ、セッション録画が可能。

## ダッシュボード連携
repo-dashboard の lpMetrics フィールドに計測データを反映。
将来的にはVercel API経由で自動取得する仕組みを構築予定。
