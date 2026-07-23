import { useEffect } from 'react'
import type { SeoMeta } from '../content/types'

export const usePageMeta = (meta: SeoMeta) => {
  useEffect(() => {
    document.title = meta.title

    const description = document.querySelector<HTMLMetaElement>('meta[name="description"]')
    if (description) {
      description.content = meta.description
      return
    }

    const nextDescription = document.createElement('meta')
    nextDescription.name = 'description'
    nextDescription.content = meta.description
    document.head.append(nextDescription)
  }, [meta.description, meta.title])
}
