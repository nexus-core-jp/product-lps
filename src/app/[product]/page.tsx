import { notFound } from "next/navigation";
import Link from "next/link";
import { products, getProduct } from "@/lib/products";
import { TrackedCTALink } from "@/components/TrackedCTALink";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ product: string }>;
};

export async function generateStaticParams() {
  return products.map((p) => ({ product: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { product: slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return {
    title: `${product.name} - ${product.tagline} | Nexus Core`,
    description: product.description,
    openGraph: {
      title: `${product.name} - ${product.tagline}`,
      description: product.description,
    },
  };
}

export default async function ProductLP({ params }: Props) {
  const { product: slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            ← プロダクト一覧
          </Link>
          <a
            href={product.ctaLink}
            className="px-5 py-2 rounded-full bg-gradient-to-r text-white text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95"
            style={{
              backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))`,
            }}
          >
            <span
              className={`inline-flex bg-gradient-to-r ${product.heroColor} bg-clip-text text-transparent`}
              style={{ WebkitTextFillColor: "white" }}
            >
              {product.cta}
            </span>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className={`relative pt-32 pb-20 sm:pt-40 sm:pb-32 overflow-hidden`}
      >
        <div
          className={`absolute inset-0 bg-gradient-to-br ${product.heroColor} opacity-10 dark:opacity-20`}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/0 via-white/0 to-white dark:to-gray-950" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div
            className={`inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-gradient-to-r ${product.heroColor} text-white mb-8 shadow-lg`}
          >
            {product.tagline}
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
            <span
              className={`bg-gradient-to-r ${product.heroColor} bg-clip-text text-transparent`}
            >
              {product.name}
            </span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
            {product.description}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <TrackedCTALink
              href={product.ctaLink}
              product={slug}
              location="hero"
              className={`group px-8 py-4 rounded-full bg-gradient-to-r ${product.heroColor} text-white text-lg font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 active:scale-95`}
            >
              {product.cta}
              <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">
                →
              </span>
            </TrackedCTALink>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {product.pricing}
            </span>
          </div>
        </div>
      </section>

      {/* Pain / Solution Section */}
      <section className="py-20 sm:py-28 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              こんな課題はありませんか？
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-gray-300 to-gray-400 dark:from-gray-600 dark:to-gray-500 mx-auto rounded-full" />
          </div>
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Pain */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl opacity-20 group-hover:opacity-30 blur-lg transition-opacity duration-300" />
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-red-100 dark:border-red-900/30">
                <div className="w-12 h-12 rounded-xl bg-red-100 dark:bg-red-900/30 flex items-center justify-center mb-6">
                  <span className="text-2xl">😣</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-red-600 dark:text-red-400">
                  課題
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                  {product.painPoint}
                </p>
              </div>
            </div>
            {/* Solution */}
            <div className="relative group">
              <div
                className={`absolute -inset-1 bg-gradient-to-r ${product.heroColor} rounded-2xl opacity-20 group-hover:opacity-30 blur-lg transition-opacity duration-300`}
              />
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-green-100 dark:border-green-900/30">
                <div className="w-12 h-12 rounded-xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-6">
                  <span className="text-2xl">💡</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-green-600 dark:text-green-400">
                  解決策
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                  {product.solution}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">主な機能</h2>
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              {product.targetUser}のための機能
            </p>
            <div
              className={`w-16 h-1 bg-gradient-to-r ${product.heroColor} mx-auto rounded-full mt-4`}
            />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {product.features.map((feature, i) => (
              <div
                key={i}
                className="group relative bg-white dark:bg-gray-800/50 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-800 hover:border-transparent hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${product.heroColor} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}
                />
                <div className="relative">
                  <div className="text-3xl mb-4">{feature.icon}</div>
                  <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 sm:py-28 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">料金プラン</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-gray-300 to-gray-400 dark:from-gray-600 dark:to-gray-500 mx-auto rounded-full mb-12" />
          <div className="relative group max-w-lg mx-auto">
            <div
              className={`absolute -inset-1 bg-gradient-to-r ${product.heroColor} rounded-3xl opacity-30 group-hover:opacity-50 blur-xl transition-opacity duration-500`}
            />
            <div className="relative bg-white dark:bg-gray-800 rounded-3xl p-10 shadow-2xl border border-gray-200 dark:border-gray-700">
              <p className="text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-4 font-medium">
                料金
              </p>
              <p
                className={`text-3xl sm:text-4xl font-extrabold bg-gradient-to-r ${product.heroColor} bg-clip-text text-transparent mb-6`}
              >
                {product.pricing}
              </p>
              <ul className="text-left text-gray-600 dark:text-gray-300 space-y-3 mb-8">
                {product.features.slice(0, 3).map((f, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span
                      className={`mt-1 w-5 h-5 rounded-full bg-gradient-to-r ${product.heroColor} flex items-center justify-center shrink-0`}
                    >
                      <svg
                        className="w-3 h-3 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={3}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </span>
                    {f.title}
                  </li>
                ))}
                <li className="flex items-start gap-3">
                  <span
                    className={`mt-1 w-5 h-5 rounded-full bg-gradient-to-r ${product.heroColor} flex items-center justify-center shrink-0`}
                  >
                    <svg
                      className="w-3 h-3 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>
                  その他すべての機能
                </li>
              </ul>
              <a
                href={product.ctaLink}
                className={`block w-full py-4 rounded-xl bg-gradient-to-r ${product.heroColor} text-white font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]`}
              >
                {product.cta}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className={`relative py-24 sm:py-32 overflow-hidden`}>
        <div
          className={`absolute inset-0 bg-gradient-to-br ${product.heroColor}`}
        />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6">
            今すぐ{product.name}を体験しませんか？
          </h2>
          <p className="text-lg sm:text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            {product.solution}
          </p>
          <TrackedCTALink
            href={product.ctaLink}
            product={slug}
            location="bottom"
            className="inline-flex items-center px-10 py-5 rounded-full bg-white text-gray-900 font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 active:scale-95"
          >
            {product.cta}
            <span className="ml-2">→</span>
          </TrackedCTALink>
          <p className="mt-6 text-sm text-white/60">{product.pricing}</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-gray-500 dark:text-gray-400">
          <p>&copy; {new Date().getFullYear()} Nexus Core. All rights reserved.</p>
          <Link
            href="/"
            className="mt-2 inline-block hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            プロダクト一覧に戻る
          </Link>
        </div>
      </footer>
    </div>
  );
}
