"use client"

import { useState, useMemo } from "react"
import FoodItemCard from "@/components/food-item-card"
import MenuFilters from "@/components/menu-filters"
import { menuItems } from "@/lib/data"

export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const filteredItems = useMemo(() => {
    if (selectedCategory === "all") {
      return menuItems
    }
    return menuItems.filter((item) => item.category === selectedCategory)
  }, [selectedCategory])

  return (
    <div className="container py-12 md:py-16 px-4 md:px-6">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-10">Our Delicious Menu</h1>
      <MenuFilters selectedCategory={selectedCategory} onSelectCategory={setSelectedCategory} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {filteredItems.map((item) => (
          <FoodItemCard key={item.id} item={item} />
        ))}
      </div>
      {filteredItems.length === 0 && (
        <div className="text-center text-muted-foreground py-10">No items found for this category.</div>
      )}
    </div>
  )
}
