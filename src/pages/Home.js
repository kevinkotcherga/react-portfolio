import React from 'react';
import About from '../components/about/About';
import Contact from '../components/contact/Contact';
import CustomCursor from '../components/CustomCursor';
import Footer from '../components/footer/Footer';
import Intro from '../components/intro/Intro';
import { ProductList } from '../components/productList/ProductList';
import WorkInProgress from '../components/workInProgress/WorkInProgress';

const Home = () => {
	return (
		<div>
			<CustomCursor />
			<Intro />
			<ProductList />
			{/* <ProductListRails /> */}
			<WorkInProgress />
			<About />
			<Contact />
			<Footer />
		</div>
	);
};

export default Home;
