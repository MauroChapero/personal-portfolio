import React from 'react'
import '../../styles/PortfolioItem.css'

function PortfolioItem({ title, imgUrl, stack, deploy, repository }) {
  return (
    <a
      href={deploy}
      target="_blank"
      rel="noopener noreferrer"
      className="border-2 border-stone-900 dark:border-white rounded-md overflow-hidden"
    >
      <img
        src={imgUrl}
        alt="portfolio"
        className="w-full h-36 md:h-48 object-cover cursor-pointer"
      />
      <div className="w-full p-4">
        <h3 className="text-lg md:text-xl dark:text-white mb-2 md:mb-3 font-semibold">
          {title}
        </h3>
        <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm dark:text-white">
          {stack.map((item) => (
            <span className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 dark:border-white rounded-md">
              {item}
            </span>
          ))}
        </p>
        <div className="my-4 flex justify-start">
          {deploy && (
            <a
              href={deploy}
              className="text-white bg-slate-500 inline-block mr-2 px-2 py-1 font-semibold border-2 border-stone-900 dark:border-white rounded-md"
              target="_blank"
            >
              Deploy 🚀
            </a>
          )}

          {repository && (
            <a
              href={repository}
              className="text-white bg-slate-500 inline-block px-2 py-1 font-semibold border-2 border-stone-900 dark:border-white rounded-md"
              target="_blank"
            >
              Github 📚
            </a>
          )}
        </div>
      </div>
    </a>
  )
}

export default PortfolioItem
