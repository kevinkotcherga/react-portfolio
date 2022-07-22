import { useLocation } from 'react-router-dom';
import CustomCursor from '../components/CustomCursor';

const Project = () => {
	const location = useLocation();
	const id = location.pathname.split('/')[2];
	console.log(id);
	return (
		<div>
			<CustomCursor />
			<h1>Project</h1>
		</div>
	);
};

export default Project;
