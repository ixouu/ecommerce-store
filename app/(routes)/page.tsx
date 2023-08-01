import getBillboard from '@/actions/get-billboard';
import getProducts from '@/actions/get-products';
import Billboard from '@/components/billboard'
import ProductList from '@/components/product-list';
import Container from '@/components/ui/container'

export const revalidate = 0;

const HomePage = async() => {

  const billboard = await getBillboard("bbceebf8-ac0f-436b-96ff-2ed2b0ecc479");
	const products = await getProducts({
		isFeatured: true,
	})

  return (
    <Container>
      <div className='space-y-10 pb-10'>
        <Billboard data={billboard}/>
        <div className='flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8'>
          <ProductList title="Produits vedettes" items={products}/>
        </div>
      </div>
    </Container>
  )
}

export default HomePage