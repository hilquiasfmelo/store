'use client'

import { Badge } from '@/components/ui/badge'
import { CATEGORIES_ICONS } from '@/constants/category-icon'
import { Category } from '@prisma/client'
import Link from 'next/link'

interface CaterogyItemProps {
  category: Category
}

export function CategoryItem({ category }: CaterogyItemProps) {
  return (
    <Link href={`/category/${category.slug}`}>
      <Badge
        className="flex items-center justify-center gap-2 rounded-lg py-3"
        variant="outline"
      >
        {CATEGORIES_ICONS[category.slug as keyof typeof CATEGORIES_ICONS]}
        <span className="text-xs font-bold">{category.name}</span>
      </Badge>
    </Link>
  )
}
