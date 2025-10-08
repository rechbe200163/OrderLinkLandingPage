import { Package } from "lucide-react"
import { getTranslations } from "next-intl/server"
import Link from "next/link"

const columnConfig = [
  {
    key: "modules",
    links: [
      { key: "adminTool", href: "#modules" },
      { key: "webShop", href: "#modules" },
      { key: "deliveryNavigation", href: "#modules" },
      { key: "dataAnalysis", href: "#modules" },
    ],
  },
  {
    key: "company",
    links: [
      { key: "about", href: "#" },
      { key: "careers", href: "#" },
      { key: "contact", href: "#" },
      { key: "blog", href: "#" },
    ],
  },
  {
    key: "support",
    links: [
      { key: "docs", href: "#" },
      { key: "helpCenter", href: "#" },
      { key: "privacy", href: "#" },
      { key: "terms", href: "#" },
    ],
  },
] as const

const FooterComponent = async () => {
  const t = await getTranslations("FooterComponent")

  const columns = columnConfig.map((column) => ({
    title: t(`columns.${column.key}.title`),
    links: column.links.map((link) => ({
      href: link.href,
      label: t(`columns.${column.key}.links.${link.key}`),
    })),
  }))

  return (
    <footer className="relative w-full overflow-hidden border-t border-slate-200/60 bg-gradient-to-br from-slate-50 to-white">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-gradient-to-br from-blue-400/10 to-indigo-500/10 blur-2xl" />
        <div className="absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-gradient-to-tr from-purple-400/10 to-pink-500/10 blur-2xl" />
      </div>

      <div className="container relative z-10 mx-auto px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid gap-8 sm:gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/25">
                <Package className="h-6 w-6" />
              </span>
              <div className="flex flex-col leading-tight">
                <span className="text-lg font-bold text-slate-900 sm:text-xl">{t("brand.name")}</span>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  {t("brand.tagline")}
                </span>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-slate-600 sm:text-base">{t("brand.description")}</p>
          </div>
          {columns.map((column) => (
            <div key={column.title} className="space-y-4">
              <h3 className="text-sm font-bold text-slate-900 sm:text-base">{column.title}</h3>
              <ul className="space-y-3 text-sm">
                {column.links.map((link) => (
                  <li key={link.href + link.label}>
                    <Link
                      href={link.href}
                      className="text-slate-500 transition-all duration-300 hover:text-blue-600 hover:scale-105"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 border-t border-slate-200/60 pt-8 text-center sm:mt-16">
          <p className="text-xs text-slate-500 sm:text-sm">{t("bottomNote")}</p>
        </div>
      </div>
    </footer>
  )
}

export default FooterComponent
