import { Helmet } from "react-helmet";
import Welcome from "components/boxes/WelcomeBox";

const Nearest = () => {
	return (
		<div>
			<Helmet >
					<title>Insights Admin Dashboard | Nearest the Pin</title>
			</Helmet>
			<Welcome eventname='nearest' eventnamefull="Nearest the Pin"/>
		</div>
	);
};

export default Nearest;
