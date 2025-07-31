import Link from "next/link"
import { Button } from "@/components/ui/button"
import FoodItemCard from "@/components/food-item-card"
import { menuItems } from "@/lib/data"

export default function HomePage() {
  const featuredItems = menuItems.filter((item) => ["1", "4", "8"].includes(item.id)) // Example featured items

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section
        className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] bg-cover bg-center"
        style={{ backgroundImage: "url(/placeholder.svg?height=700&width=1400&query=fast food restaurant interior)" }}
      >
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-center px-4">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight animate-fade-in-up">
              Craving Something Delicious?
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto animate-fade-in-up delay-200">
              Order your favorite burgers, fries, and shakes for pickup or delivery!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-400">
              <Button asChild size="lg" className="px-8 py-3 text-lg">
                <Link href="/menu">Order Now</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="px-8 py-3 text-lg text-white border-white hover:bg-white hover:text-primary bg-transparent"
              >
                <Link href="/menu">View Menu</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Dishes Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Featured Dishes</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredItems.map((item) => (
              <FoodItemCard key={item.id} item={item} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline">
              <Link href="/menu">Explore Full Menu</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">Ready to Order?</h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Experience the convenience of online ordering and get your food delivered fresh and fast.
          </p>
          <Button
            asChild
            size="lg"
            className="px-8 py-3 text-lg bg-primary-foreground text-primary hover:bg-primary-foreground/90"
          >
            <Link href="/menu">Start Your Order</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
