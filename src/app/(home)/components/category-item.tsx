'use client'

import { Badge } from '@/components/ui/badge'
import { Category } from '@prisma/client'
import {
  HeadphonesIcon,
  KeyboardIcon,
  MonitorIcon,
  MouseIcon,
  SpeakerIcon,
  SquareIcon,
} from 'lucide-react'

interface CaterogyItemProps {
  category: Category
}

export function CategoryItem({ category }: CaterogyItemProps) {
  const categoriesIcons = {
    keyboards: <KeyboardIcon size={16} />,
    monitors: <MonitorIcon size={16} />,
    headphones: <HeadphonesIcon size={16} />,
    mousepads: <SquareIcon size={16} />,
    speakers: <SpeakerIcon size={16} />,
    mouses: <MouseIcon size={16} />,
  }

  return (
    <Badge
      className="flex items-center justify-center gap-2 rounded-lg py-3"
      variant="outline"
    >
      {categoriesIcons[category.slug as keyof typeof categoriesIcons]}
      <span className="text-xs font-bold">{category.name}</span>
    </Badge>
  )
}
