import { Helmet } from "react-helmet";
import Welcome from "components/boxes/WelcomeBox";

const Longest = () => {
	return (
		<div>
			<Helmet >
					<title>Insights Admin Dashboard | Longest Drive</title>
			</Helmet>
			<Welcome eventname='longest' eventnamefull='Longest Drive'/>
		</div>
	);
};

export default Longest;
