import React from "react"
import Btn from "./Btn"
import moment from "moment/moment"

const ProductCard = ({ product }) => {
	return (
		<div className='card w-[15rem] shadow-md  rounded-lg'>
			<img
				className='w-[15rem] rounded-t-lg  hover:animate-pulse'
				src={product.images}
				alt='product_image'
			/>
			<h4 className='p-3 font-bold truncate'>{product.title}</h4>
			<div className='px-3  '>${product.price}</div>
			<p className='px-3 opacity-80 line-clamp-3'>{product.description}</p>
			{/* use moment js to formatte date */}
			<small className='p-3 opacity-60'>
				{moment(product.creationAt).format("DD/MM/YYYY HH:mm")}
			</small>

			<div className='btn-group space-x-3 m-3 relative bottom-0'>
				<Btn
					title={"Buy now"}
					btnStyle={"py-2 px-3 bg-green-400 rounded-lg "}
				/>
				<Btn
					title={"add to card"}
					btnStyle={"py-2 px-3 border rounded-lg border-green-400"}
				/>
			</div>
		</div>
	)
}

export default ProductCard
