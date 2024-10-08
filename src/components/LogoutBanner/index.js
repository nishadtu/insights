import LogoutButton from "../LogoutButton";

const LogoutBanner = () => {
	return (
		<div style={{ marginLeft: 60, marginRight: 60 }}>
			<div className="row">
				<div className="col-md-12 text-right">
					<LogoutButton />
				</div>
			</div>
		</div>
	);
};

export default LogoutBanner;
