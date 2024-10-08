import { DB_NAME } from "../constants";

export const routeNames = {
	home: `/2024/${DB_NAME}/`,
	overview: `/2024/${DB_NAME}/overview`,
	dashboard: `/2024/${DB_NAME}/dashboard`,
	workflow: `/2024/${DB_NAME}/workflow`,
	users: `/2024/${DB_NAME}/users`,
	company: `/2024/${DB_NAME}/company`,
	terms: `/2024/${DB_NAME}/terms`,
	account: `/2024/${DB_NAME}/account`,
	settings: `/2024/${DB_NAME}/settings`,
	nearest: `/2024/${DB_NAME}/nearest-the-pin`,
	longest: `/2024/${DB_NAME}/longest-drive`,
	register: `/2024/${DB_NAME}/register`,
	userLogin: `/2024/${DB_NAME}/user-login`,
	nearestScore: `/2024/${DB_NAME}/nearest-score`,
	longestScore: `/2024/${DB_NAME}/longest-score`,
};
export const qrEndpoint = `https://provisiondesign.co.uk/2024/${DB_NAME}/`;
export const qrUploadEndpoint = `https://provisiondesign.co.uk/2024/${DB_NAME}/php/qr_upload.php`;
export const editEndpoint = (id) => `/2024/${DB_NAME}/edit/id:${id}`;
export default routeNames;
 