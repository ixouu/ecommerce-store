"use client";

import { Product } from "@/types";
import Image from "next/image";
import { MouseEventHandler } from "react";
import IconButton from "@/components/ui/icon-button";
import { Expand, ShoppingCart } from "lucide-react";
import Currency from "./currency";
import { useRouter } from "next/navigation";
import usePreviewModal from "@/hooks/use-preview-modal";
import useCart from "@/hooks/use-cart";

interface ProductCardProps {
	data: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
	const previewModal = usePreviewModal();
    const cart = useCart();
	const router = useRouter();

	const handleClick = () => {
		router.push(`/product/${data?.id}`);
	};

	const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
		event.stopPropagation();

		previewModal.onOpen(data);
	};

    const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
		event.stopPropagation();
		cart.addItem(data);
	};

	return (
		<div
			onClick={handleClick}
			className='group cursor-pointer space-y-4 rounded-xl border bg-white p-3'>
			{/* Images and action */}
			<div className='relative aspect-square bg-gray-100'>
				<Image
					src={data?.images[0]?.url}
					alt=''
					fill
					className='aspect-square rounded-md object-cover'
				/>
				<div className='absolute bottom-5 w-full px-6 opacity-0 transition group-hover:opacity-100'>
					<div className='flex justify-center gap-x-6'>
						<IconButton
							icon={
								<Expand
									size={20}
									className='text-gray-600'
								/>
							}
							onClick={onPreview}
						/>
						<IconButton
							icon={
								<ShoppingCart
									size={20}
									className='text-gray-600'
								/>
							}
							onClick={onAddToCart}
						/>
					</div>
				</div>
			</div>
			{/* Description */}
			<div>
				<p className='text-lg font-semibold'>{data.name}</p>
				<p className='text-sm text-gray-500'>{data.category?.name}</p>
			</div>
			{/* Price */}
			<div className='flex items-center justify-between'>
				<Currency value={data?.price} />
			</div>
		</div>
	);
};

export default ProductCard;
