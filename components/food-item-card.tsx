"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useCartStore, type MenuItem } from "@/lib/store"
import { Plus } from "lucide-react"

interface FoodItemCardProps {
  item: MenuItem
}

export default function FoodItemCard({ item }: FoodItemCardProps) {
  const addToCart = useCartStore((state) => state.addToCart)

  return (
    <Card className="w-full max-w-sm overflow-hidden rounded-lg shadow-lg transition-all hover:scale-[1.02] hover:shadow-xl">
      <CardHeader className="p-0">
        <Image
          src={item.image || "/placeholder.svg"}
          alt={item.name}
          width={400}
          height={250}
          className="aspect-[4/3] w-full object-cover"
        />
      </CardHeader>
      <CardContent className="p-4">
        <CardTitle className="text-xl font-bold">{item.name}</CardTitle>
        <p className="text-muted-foreground text-sm mt-1 line-clamp-2">{item.description}</p>
        <div className="flex items-center justify-between mt-3">
          <span className="text-2xl font-semibold text-primary">${item.price.toFixed(2)}</span>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button className="w-full" onClick={() => addToCart(item)}>
          <Plus className="mr-2 h-4 w-4" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  )
}
