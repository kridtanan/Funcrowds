import React from 'react'

export default function Breadcrumb({title,i18n}) {
    return (
      <div className="mt-16 py-16 w-full bg-gradient-to-t from-neptune-500 to-neptune-300">
        <h1 className="px-sm 2xl:px-2xl font-bold text-4xl text-gray-900" data-i18n={i18n}>{title}</h1>
      </div>
    )
}
