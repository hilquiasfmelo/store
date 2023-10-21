import { Layers3Icon } from 'lucide-react'

import { prismaClient } from '@/lib/prisma'

import { Badge } from '@/components/ui/badge'
import { CategoryItem } from './components/category-item'

export default async function CatalogPage() {
  const categories = await prismaClient.category.findMany({})

  return (
    <div className="flex flex-col gap-8 p-5">
      <Badge
        className="w-fit gap-[0.375rem] border-2 border-primary px-3 py-[0.313rem] text-base uppercase"
        variant="outline"
      >
        <Layers3Icon size={16} />
        Catálogo
      </Badge>

      <div className="grid grid-cols-2 gap-8">
        {categories.map((category) => (
          <CategoryItem key={category.id} category={category} />
        ))}
      </div>
    </div>
  )
}
