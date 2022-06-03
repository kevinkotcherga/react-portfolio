import React from 'react';
import ratp from '../../img/ratp.jpg';

const ProductReactNode = () => {
	return (
		<div className="wip">
			<div className="wip__top"></div>
			<div
				data-aos="fade-up"
				data-aos-duration="1000"
				data-aos-offset="-600"
				data-aos-anchorPlacement="top"
				className="wip__bottom-left"
			>
				<a
					href="https://github.com/kevinkotcherga/mysa-ecommerce"
					target="_blank"
					rel="noreferrer"
					className="wip__link"
				>
					<img src={ratp} alt="" className="wip__img" />
				</a>
			</div>
		</div>
	);
};

export default ProductReactNode;
