import { Shield, Target, TrendingUp, Users, Workflow, Zap } from "lucide-react"
import { Badge } from "../ui/badge"
import { getTranslations } from "next-intl/server"

type FeatureTranslation = {
  title: string
  description: string
}

const featureIcons = [Target, TrendingUp, Zap, Shield, Users, Workflow] as const

const FeatureSection = async () => {
  const t = await getTranslations("FeatureSection")
  const features = t.raw("features") as FeatureTranslation[]

  return (
    <section id="features" className="w-full bg-gradient-to-b from-slate-50 to-white py-16 sm:py-20 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mx-auto mb-12 max-w-4xl text-center sm:mb-16 lg:mb-20">
          <Badge
            variant="outline"
            className="mb-6 inline-flex items-center rounded-full border-2 border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50 px-6 py-3 text-sm font-semibold text-blue-700 shadow-sm transition-all duration-300 hover:shadow-md"
          >
            <Zap className="mr-2 h-4 w-4 text-blue-600" />
            {t("badge")}
          </Badge>
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            {t("title")}
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg lg:text-xl">
            {t("description")}
          </p>
        </div>

        {/* Features Grid */}
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => {
              const Icon = featureIcons[index] ?? Target
              return (
                <div
                  key={feature.title}
                  className="group relative overflow-hidden rounded-3xl border border-slate-200/60 bg-white/80 p-8 shadow-lg backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10 sm:p-10"
                >
                  {/* Background gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-indigo-50/30 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  {/* Icon container with enhanced styling */}
                  <div className="relative mb-6">
                    <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg shadow-blue-500/25 transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-blue-500/30">
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    {/* Decorative element */}
                    <div className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-110" />
                  </div>

                  {/* Content */}
                  <div className="relative space-y-4">
                    <h3 className="text-xl font-bold text-slate-900 transition-colors duration-300 group-hover:text-blue-700 sm:text-2xl">
                      {feature.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-slate-600 transition-colors duration-300 group-hover:text-slate-700 sm:text-base">
                      {feature.description}
                    </p>
                  </div>

                  {/* Hover effect border */}
                  <div className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-purple-500/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </div>
              )
            })}
          </div>
        </div>

        {/* Bottom decorative element */}
        <div className="mt-16 flex justify-center">
          <div className="h-1 w-24 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600" />
        </div>
      </div>
    </section>
  )
}

export default FeatureSection
