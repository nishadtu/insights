
import UserDataService from "services/services";

class UserEmailService {
	sendEmail = (id) => {
		const user = UserDataService.getUser(id);
		console.log("test");
        // console.log(user.data());
		console.log(user.data().unique_id);
	};

}
// eslint-disable-next-line
export default new UserEmailService();
