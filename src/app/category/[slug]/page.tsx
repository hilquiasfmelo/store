import { Badge } from '@/components/ui/badge'
import { ProductItem } from '@/components/ui/product-item'
import { CATEGORIES_ICONS } from '@/constants/category-icon'
import { computeProductTotalPrice } from '@/helpers/product'
import { prismaClient } from '@/lib/prisma'

interface CategoryProductsProps {
  params: {
    slug: string
  }
}

export default async function CategoryProducts({
  params,
}: CategoryProductsProps) {
  const category = await prismaClient.category.findFirst({
    where: {
      slug: params.slug,
    },
    include: {
      products: true,
    },
  })

  if (!category) {
    return null
  }

  return (
    <div className="flex flex-col gap-8 p-5">
      <Badge
        className="w-fit gap-1 border-2 border-primary px-3 py-[0.375rem] text-base uppercase"
        variant="outline"
      >
        {CATEGORIES_ICONS[params.slug as keyof typeof CATEGORIES_ICONS]}
        {category.name}
      </Badge>

      <div className="grid grid-cols-2 gap-8">
        {category.products.map((product) => (
          <ProductItem
            key={product.id}
            product={computeProductTotalPrice(product)}
          />
        ))}
      </div>
    </div>
  )
}
