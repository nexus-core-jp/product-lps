import Link from "next/link";
import { products } from "@/lib/products";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      {/* Hero */}
      <section className="relative pt-20 pb-16 sm:pt-32 sm:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-100 via-white to-white dark:from-indigo-950/30 dark:via-gray-950 dark:to-gray-950" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
              Nexus Core
            </span>
            <br />
            <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-600 dark:text-gray-300">
              Products
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            ビジネスを加速する革新的なプロダクト群。
            <br className="hidden sm:block" />
            AIとテクノロジーの力で、あなたの課題を解決します。
          </p>
        </div>
      </section>

      {/* Product Grid */}
      <section className="pb-24 sm:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {products.map((product) => (
              <Link
                key={product.slug}
                href={`/${product.slug}`}
                className="group relative bg-white dark:bg-gray-800/50 rounded-2xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-800 hover:shadow-2xl hover:border-transparent transition-all duration-300 hover:-translate-y-2"
              >
                {/* Gradient accent bar */}
                <div
                  className={`h-2 bg-gradient-to-r ${product.heroColor}`}
                />

                {/* Hover glow */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${product.heroColor} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                />

                <div className="relative p-6 sm:p-8">
                  <h2 className="text-xl font-bold mb-2">
                    {product.name}
                  </h2>
                  <p
                    className={`text-sm font-medium bg-gradient-to-r ${product.heroColor} bg-clip-text text-transparent mb-3`}
                  >
                    {product.tagline}
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
                    {product.description}
                  </p>
                  <div className="flex items-center text-sm font-semibold text-gray-900 dark:text-white">
                    <span>詳しく見る</span>
                    <span className="ml-1 group-hover:translate-x-1 transition-transform duration-300">
                      →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-gray-500 dark:text-gray-400">
          <p>&copy; {new Date().getFullYear()} Nexus Core. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
