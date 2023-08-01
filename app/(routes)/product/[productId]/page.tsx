import getProduct from "@/actions/get-product";
import getProducts from "@/actions/get-products";
import Gallery from "@/components/gallery";
import ProductInfo from "@/components/product-info";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";

interface ProductPageProps {
    params: {
        productId: string;
    }
}

const ProductPage: React.FC<ProductPageProps> = async({
    params,
}) => {

    const product = await getProduct(params.productId);

    const suggestedProduct = await getProducts({
        categoryId: product?.category?.id,
    });

  return (
    <div className="bg-white">
        <Container>
            <div className=" px-4 py-10 sm:px-6 lg:items-start">
                <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
                    {/* Gallery */}
                    <Gallery images={product.images}/>
                    {/* Infos */}
                    <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
                        <ProductInfo data={product}/>
                    </div>
                </div>
                <hr className="my-10 border-gray" />
                <ProductList title="Produits similaires" items={suggestedProduct} />
            </div>
        </Container>
    </div>
  )
}

export default ProductPage