'use client'

import Image from 'next/image'

interface Feature {
  title: string
  description: string
  image: string | string[]
  customComponent?: string
}

interface ModalHeaderProps {
  title: string
  company: string
  companyLogo?: string
  overview: string
  github?: string
  mainImage?: string
  hideHeroImage?: boolean
  isExperience?: boolean
}

interface FeatureListProps {
  features: Feature[]
  customComponents: Record<string, React.ComponentType>
  isExperience?: boolean
}

export function ModalHeader({
  title,
  company,
  companyLogo,
  overview,
  github,
  mainImage,
  hideHeroImage,
}: ModalHeaderProps) {
  return (
    <>
      <div className="space-y-6">
        <div className="space-y-2">
          {companyLogo ? (
            <div className="flex items-center gap-4 mb-2">
              <Image
                src={companyLogo}
                alt={company}
                width={160}
                height={40}
                className="object-contain invert"
              />
            </div>
          ) : (
            <p className="text-sm text-gray-400">
              {company}
            </p>
          )}
          <div className="flex items-center justify-between gap-4">
            <h1 className="
              text-2xl sm:text-3xl md:text-4xl 
              font-bold 
              tracking-tight
              bg-clip-text text-transparent
              bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500
              dark:from-cyan-400 dark:via-blue-400 dark:to-cyan-400
              animate-gradient
            ">
              {title}
            </h1>
            <div className="flex gap-4 mt-8">
              {github && (
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex items-center gap-2
                    px-4 py-2
                    text-sm font-medium
                    rounded-full
                    border border-gray-700
                    hover:bg-gray-800
                    text-gray-300
                    transition-all duration-300
                    hover:scale-105
                    group
                  "
                >
                  <svg
                    className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  <span className="hidden sm:inline">View Code</span>
                </a>
              )}
            </div>
          </div>
        </div>
        <p className="
          text-base sm:text-lg 
          leading-relaxed 
          text-gray-200
          border-l-4 border-cyan-500/30
          pl-4
        ">
          {overview}
        </p>
      </div>

      {!hideHeroImage && mainImage && (
        <div
          className="
            relative
            w-full h-[200px] sm:h-[300px] md:h-[400px]
          "
        >
          <Image
            src={mainImage}
            alt={title}
            fill
            className="object-cover"
            priority
          />
        </div>
      )}
    </>
  )
}

export function FeatureList({ features, customComponents, isExperience }: FeatureListProps) {
  return (
    <div className="space-y-8">
      <h2 className="
        text-xl sm:text-2xl
        font-bold
        tracking-tight
        flex items-center gap-2
        before:content-[''] before:block before:w-8 before:h-[2px]
        before:bg-cyan-500/50
      ">
        {isExperience ? 'Key Contributions' : 'Core Features'}
      </h2>
      <div className="space-y-6">
        {features.map((feature, index) => {
          const hasImage = Array.isArray(feature.image)
            ? feature.image.length > 0 && feature.image[0].trim() !== ''
            : typeof feature.image === 'string' && feature.image.trim() !== '';

          const CustomComponent = feature.customComponent
            ? customComponents[feature.customComponent]
            : null;

          // Custom component layout
          if (CustomComponent) {
            return (
              <div key={index} className="space-y-4 p-4 rounded-xl">
                <h3 className="
                  text-lg sm:text-xl font-semibold tracking-tight
                  text-cyan-400
                ">
                  {feature.title}
                </h3>
                <p className="text-gray-200 leading-relaxed">
                  {feature.description}
                </p>
                <CustomComponent />
              </div>
            );
          }

          // Text-only features
          if (!hasImage) {
            return (
              <div key={index} className="space-y-2 p-4">
                <h3 className="
                  text-lg sm:text-xl font-semibold tracking-tight
                  text-cyan-400
                ">
                  {feature.title}
                </h3>
                <p className="text-gray-200 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          }

          // Image features
          return (
            <div
              key={index}
              className="
                flex flex-col
                gap-4
                p-4 rounded-xl
              "
            >
              <div className="space-y-2">
                <h3 className="
                  text-lg sm:text-xl
                  font-semibold
                  tracking-tight
                  text-cyan-400
                ">
                  {feature.title}
                </h3>
                <p className="
                  text-gray-200
                  leading-relaxed
                ">
                  {feature.description}
                </p>
              </div>
              <div className="relative w-full">
                {Array.isArray(feature.image) ? (
                  <div className={`grid gap-4 ${feature.image.length > 1 ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1'}`}>
                    {feature.image.map((img, imgIndex) => (
                      <div key={imgIndex} className="
                        relative w-full h-[200px] sm:h-[250px]
                      ">
                        <Image
                          src={img}
                          alt={`${feature.title} - ${imgIndex + 1}`}
                          fill
                          className="object-contain"
                        />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="
                    relative w-full h-[250px] sm:h-[300px]
                  ">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  )
}
