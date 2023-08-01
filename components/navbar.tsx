import Link from "next/link";

import Container from "@/components/ui/container";
import MainNav from "@/components/mainNav";
import getCategories from "@/actions/get-categories";
import NavbarActions from "./navbar-actions";

const Navbar = async() => {

	const categories = await getCategories();
;

	return (
		<div className='border-b'>
			<Container>
				<div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
					<Link
						href='/'
						className='ml-4 flex gap-x-2 lg:ml-0'>
						<p className='text-xl font-bold uppercase'>Magasin</p>
					</Link>
                    <MainNav data={categories}/>
					<NavbarActions />
				</div>
			</Container>
		</div>
	);
};

export default Navbar;
