import Products from "./product"
import Loading from "./loading"
import { Suspense } from "react"

export default function Page() {
  return (
    <main className="min-h-screen flex flex-col items-center py-10 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6 mt-20">🛍 Products </h1>
      <Suspense fallback={<Loading />}>
        <Products />
      </Suspense>
    </main>
  )
}
