export interface Product {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  features: { title: string; description: string; icon: string }[];
  pricing: string;
  targetUser: string;
  painPoint: string;
  solution: string;
  cta: string;
  ctaLink: string;
  heroColor: string;
}

export const products: Product[] = [
  {
    slug: "nexus-sphere",
    name: "Nexus Sphere",
    tagline: "マルチLLM合議型AIアシスタント",
    description:
      "複数の大規模言語モデルが合議し、より正確で信頼性の高い回答を生成。単一AIの限界を超え、集合知によるインテリジェントな意思決定をサポートします。",
    features: [
      {
        title: "マルチLLM合議エンジン",
        description:
          "GPT-4、Claude、Geminiなど複数のLLMが同時に回答を生成し、最適な結果を合議で導き出します。",
        icon: "🧠",
      },
      {
        title: "信頼性スコアリング",
        description:
          "各回答に信頼性スコアを付与。根拠の透明性を確保し、ハルシネーションを大幅に削減します。",
        icon: "✅",
      },
      {
        title: "コンテキスト記憶",
        description:
          "長期的な対話コンテキストを保持。プロジェクト単位での知識蓄積が可能です。",
        icon: "💾",
      },
      {
        title: "カスタムワークフロー",
        description:
          "業務に合わせた合議ワークフローを自由に構築。承認フローやレビュー工程を自動化します。",
        icon: "⚙️",
      },
      {
        title: "APIファースト設計",
        description:
          "REST / GraphQL APIで既存システムとシームレスに統合。開発者フレンドリーなドキュメント完備。",
        icon: "🔌",
      },
      {
        title: "エンタープライズセキュリティ",
        description:
          "SOC2準拠のセキュリティ基盤。データは暗号化され、お客様の環境内で処理可能です。",
        icon: "🔒",
      },
    ],
    pricing: "月額 ¥9,800〜（チームプラン）",
    targetUser: "正確なAI回答を必要とするビジネスチーム・研究者",
    painPoint:
      "単一のAIでは回答の正確性に不安がある。ハルシネーションのリスクが業務利用の障壁になっている。",
    solution:
      "複数AIの合議により回答精度を飛躍的に向上。信頼性スコアで根拠を可視化し、安心して業務に活用できます。",
    cta: "無料トライアルを始める",
    ctaLink: "#",
    heroColor: "from-violet-600 via-purple-600 to-indigo-700",
  },
  {
    slug: "intent-marketing",
    name: "Intent Marketing Tool",
    tagline: "AIインテント分析マーケティングツール",
    description:
      "ユーザーの検索意図をAIがリアルタイム分析。購買意欲の高いユーザーを自動で特定し、最適なタイミングで最適なメッセージを届けます。",
    features: [
      {
        title: "インテント自動分析",
        description:
          "検索クエリ・行動データからユーザーの購買意図をリアルタイムで分析・スコアリングします。",
        icon: "🎯",
      },
      {
        title: "パーソナライズ配信",
        description:
          "意図に基づいた最適なコンテンツを自動生成し、適切なチャネルで配信します。",
        icon: "📨",
      },
      {
        title: "コンバージョン予測",
        description:
          "機械学習によるCV予測モデルで、高確度リードを自動抽出。営業効率を最大化します。",
        icon: "📈",
      },
      {
        title: "競合インテント分析",
        description:
          "競合製品への関心を示すユーザーを検知し、効果的なカウンターメッセージを提案します。",
        icon: "🔍",
      },
      {
        title: "マルチチャネル統合",
        description:
          "Web、メール、SNS、広告を横断した統合インテント分析で全体像を把握します。",
        icon: "🌐",
      },
      {
        title: "ROIダッシュボード",
        description:
          "施策ごとのROIをリアルタイム可視化。データドリブンな意思決定を加速します。",
        icon: "💰",
      },
    ],
    pricing: "月額 ¥29,800〜（スタータープラン）",
    targetUser: "デジタルマーケター・グロースチーム・EC事業者",
    painPoint:
      "広告費をかけても成果が出ない。ユーザーの本当のニーズが分からず、的外れなアプローチをしてしまう。",
    solution:
      "AIがユーザーの真の意図を解読。適切なタイミングで最適なメッセージを届け、広告費対効果を劇的に改善します。",
    cta: "デモを予約する",
    ctaLink: "#",
    heroColor: "from-emerald-500 via-teal-500 to-cyan-600",
  },
  {
    slug: "bento-order",
    name: "たのめし / Bento Order",
    tagline: "弁当注文・配達管理システム",
    description:
      "企業・団体向け弁当注文を完全デジタル化。注文集約から配達管理まで、煩雑な弁当手配業務をワンストップで効率化します。",
    features: [
      {
        title: "かんたん注文",
        description:
          "スマホから3タップで注文完了。メニュー選択からアレルギー申告まで直感的に操作できます。",
        icon: "📱",
      },
      {
        title: "自動集計・発注",
        description:
          "注文を自動集計し、弁当業者への発注書を自動生成。手作業によるミスを完全排除します。",
        icon: "📊",
      },
      {
        title: "配達トラッキング",
        description:
          "リアルタイム配達状況を可視化。到着予定時刻の通知で、受け取り待ちのストレスを解消します。",
        icon: "🚚",
      },
      {
        title: "精算自動化",
        description:
          "個人精算・部署精算・会社負担の柔軟な精算パターンに対応。経理業務を大幅に削減します。",
        icon: "💳",
      },
      {
        title: "メニュー管理",
        description:
          "複数の弁当業者のメニューを一元管理。日替わり・週替わりメニューの自動ローテーションにも対応。",
        icon: "🍱",
      },
      {
        title: "データ分析",
        description:
          "注文傾向・人気メニュー・食品ロスを可視化。より良いメニュー構成の意思決定をサポートします。",
        icon: "📉",
      },
    ],
    pricing: "月額 ¥500/人〜（50名以上で割引あり）",
    targetUser: "企業の総務・管理部門、学校・病院の給食管理者",
    painPoint:
      "毎日の弁当注文の集計が大変。電話・FAXでの発注ミスが多く、精算処理にも時間がかかる。",
    solution:
      "注文から精算まで完全自動化。管理者の業務時間を1日30分以上削減し、注文ミスをゼロにします。",
    cta: "無料で始める",
    ctaLink: "#",
    heroColor: "from-orange-500 via-amber-500 to-yellow-500",
  },
  {
    slug: "workforce",
    name: "Workforce App",
    tagline: "勤怠・ワークフォース管理システム",
    description:
      "勤怠管理・シフト作成・工数管理を一つのプラットフォームに統合。リモートワーク時代の多様な働き方を柔軟にサポートします。",
    features: [
      {
        title: "スマート打刻",
        description:
          "GPS・Wi-Fi・ビーコンによる自動打刻。リモートワーク・直行直帰にも完全対応します。",
        icon: "⏰",
      },
      {
        title: "AIシフト最適化",
        description:
          "従業員のスキル・希望・労働法規を考慮し、AIが最適なシフトを自動生成します。",
        icon: "🤖",
      },
      {
        title: "リアルタイム工数管理",
        description:
          "プロジェクト別・タスク別の工数をリアルタイムに記録。収益性の可視化を実現します。",
        icon: "📋",
      },
      {
        title: "コンプライアンス監視",
        description:
          "36協定・有給取得義務など、労働法規への準拠状況を自動モニタリング・アラート通知します。",
        icon: "⚖️",
      },
      {
        title: "給与連携",
        description:
          "主要給与計算ソフトとAPI連携。勤怠データから給与計算への転記作業を完全自動化します。",
        icon: "💴",
      },
      {
        title: "分析ダッシュボード",
        description:
          "残業傾向・離職リスク・生産性指標をリアルタイム可視化。データに基づく人事施策を支援します。",
        icon: "📊",
      },
    ],
    pricing: "月額 ¥300/人〜（フリープランあり）",
    targetUser: "人事・総務担当者、中小企業経営者",
    painPoint:
      "勤怠管理がExcelベースで非効率。リモートワークの勤怠把握が困難。労務コンプライアンスに不安がある。",
    solution:
      "場所を問わない柔軟な勤怠管理と法令準拠の自動チェックで、管理業務を80%削減。安心して働き方改革を推進できます。",
    cta: "フリープランで試す",
    ctaLink: "#",
    heroColor: "from-blue-600 via-blue-500 to-sky-500",
  },
  {
    slug: "openclaw",
    name: "OpenClaw",
    tagline: "パーソナルAIアシスタント",
    description:
      "あなた専用のAIアシスタントが日常のタスクを自動化。スケジュール管理からメール返信まで、パーソナライズされたサポートで生産性を最大化します。",
    features: [
      {
        title: "パーソナル学習",
        description:
          "あなたの行動パターン・好み・仕事のスタイルを学習し、日々よりパーソナルなサポートを提供します。",
        icon: "🎓",
      },
      {
        title: "タスク自動化",
        description:
          "メール返信の下書き、会議の要約、リマインダー設定など、日常タスクを自動処理します。",
        icon: "⚡",
      },
      {
        title: "スマートスケジューリング",
        description:
          "カレンダーを分析し、最適な会議時間の提案やダブルブッキングの防止を行います。",
        icon: "📅",
      },
      {
        title: "ナレッジ統合",
        description:
          "Notion、Slack、Google Driveなど、散在する情報を横断検索。必要な情報に即座にアクセスできます。",
        icon: "🔗",
      },
      {
        title: "プライバシーファースト",
        description:
          "データはローカル処理優先。クラウド送信時も完全暗号化で、あなたのプライバシーを徹底保護します。",
        icon: "🛡️",
      },
      {
        title: "マルチデバイス対応",
        description:
          "PC、スマートフォン、スマートウォッチから統一されたアシスタント体験を提供します。",
        icon: "📲",
      },
    ],
    pricing: "月額 ¥1,980〜（パーソナルプラン）",
    targetUser: "多忙なビジネスパーソン・フリーランス・クリエイター",
    painPoint:
      "日々のタスク管理に追われ、本来注力すべきクリエイティブな仕事に時間を使えない。情報が分散して探すのに時間がかかる。",
    solution:
      "AIがルーティンワークを引き受け、あなたの時間を創造的な仕事に解放。散在する情報も一元的にアクセスできます。",
    cta: "今すぐ始める",
    ctaLink: "#",
    heroColor: "from-rose-500 via-pink-500 to-fuchsia-600",
  },
  {
    slug: "personal-newspaper",
    name: "Personal Newspaper",
    tagline: "AI個人新聞ジェネレーター",
    description:
      "あなたの興味・関心に基づき、AIが毎朝パーソナルな新聞を自動生成。情報過多の時代に、本当に必要なニュースだけを届けます。",
    features: [
      {
        title: "パーソナルキュレーション",
        description:
          "あなたの興味・業界・関心事に基づいて、数千のソースから最適な記事をAIが厳選します。",
        icon: "📰",
      },
      {
        title: "AI要約・解説",
        description:
          "長文記事をAIが簡潔に要約。専門用語の解説や背景情報も自動付与し、理解を深めます。",
        icon: "✍️",
      },
      {
        title: "毎朝自動配信",
        description:
          "指定した時刻にメール・アプリ通知で配信。朝のルーティンに自然に組み込めます。",
        icon: "🌅",
      },
      {
        title: "多角的視点",
        description:
          "同じニュースでも複数の視点からの報道を提示。偏りのない情報収集をサポートします。",
        icon: "🔄",
      },
      {
        title: "トレンド予測",
        description:
          "業界トレンドをAIが分析し、今後注目すべきテーマを先読み。ビジネスチャンスを逃しません。",
        icon: "🔮",
      },
      {
        title: "チーム共有",
        description:
          "チーム内で記事を共有・ディスカッション。組織のナレッジ共有を促進します。",
        icon: "👥",
      },
    ],
    pricing: "月額 ¥980〜（個人プラン）/ 無料プランあり",
    targetUser: "ビジネスパーソン・投資家・リサーチャー",
    painPoint:
      "情報が多すぎて本当に重要なニュースを見逃す。情報収集に毎日何時間もかかり、非効率。",
    solution:
      "AIがあなた専用の新聞を毎朝生成。5分の閲読で業界の最新動向を完全把握。情報収集時間を90%削減します。",
    cta: "無料で購読する",
    ctaLink: "#",
    heroColor: "from-slate-700 via-gray-800 to-zinc-900",
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
