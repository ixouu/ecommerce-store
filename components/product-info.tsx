'use client';

import { Product } from "@/types";
import Currency from "@/components/ui/currency";
import Button from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

interface ProductInfoProps {
	data: Product;
}

const ProductInfo: React.FC<ProductInfoProps> = ({ data }) => {
	return (
		<div>
			<h1 className='text-3xl font-bold text-gray-900'>{data.name}</h1>
			<div className='mt-3 flex items-end justify-between'>
				<p className='text-2xl text-gray-900'>
					<Currency value={data.price} />
				</p>
			</div>
			<hr className='my-4' />
			<div className="flex flex-col  gap-y-6">
				<div className='flex items-center gap-x-4'>
					<h3 className='font-semibold text-black'>Tailles:</h3>
					<div>{data?.size?.name}</div>
				</div>
				<div className='flex items-center gap-x-4'>
					<h3 className='font-semibold text-black'>Couleurs:</h3>
					<div
						className='h-6 w-6 rounded-full border border-gray-600'
						style={{
							backgroundColor: data?.color?.value,
						}}></div>
				</div>
			</div>
            <div className="mt-10 flex items-center gap-x-3">
                <Button>
                    Ajouter au panier
                    <ShoppingCart size={20} className="ml-2 gap-x-2 inline-block" />
                </Button>
            </div>
		</div>
	);
};

export default ProductInfo;
