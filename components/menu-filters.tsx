"use client"

import { Button } from "@/components/ui/button"
import { foodCategories } from "@/lib/data"

interface MenuFiltersProps {
  onSelectCategory: (category: string) => void
  selectedCategory: string
}

export default function MenuFilters({ onSelectCategory, selectedCategory }: MenuFiltersProps) {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-8">
      {foodCategories.map((category) => (
        <Button
          key={category.id}
          variant={selectedCategory === category.id ? "default" : "outline"}
          onClick={() => onSelectCategory(category.id)}
          className="px-6 py-2 rounded-full transition-all duration-200"
        >
          {category.name}
        </Button>
      ))}
    </div>
  )
}
