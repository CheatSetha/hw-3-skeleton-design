import React, { useEffect, useState } from "react"
import ProductCard from "./ProductCard"
import SkeletonCard from "./SkeletonCard"

export default function Products() {
	const [product, setProduct] = useState([{}])
	const [loader, setLoader] = useState(false)
	useEffect(() => {
		setLoader(true)
		setTimeout(async () => {
			const response = await fetch("https://api.escuelajs.co/api/v1/products")
			const data = await response.json()
			setLoader(false)
			setProduct(data)
		}, 4000)
	}, [])

	return (
		<div className='w-10/12 mx-auto mt-10'>
			<div className='flex flex-wrap gap-3 justify-center'>
				{!loader
					? product.map((p, index) => (
							<ProductCard
								product={p}
								key={index}
							/>
					  ))
					: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((loading) => <SkeletonCard />)}
			</div>
		</div>
	)
}
