import { mkConfig, generateCsv, download } from "export-to-csv";

const csvConfig = mkConfig({ fieldSeparator: ",", decimalSeparator: ".", useKeysAsHeaders: true });

export const downloadCSV = (rows) => {
	const rowData = rows.map((row) => row.original);
	const csv = generateCsv(csvConfig)(rowData);
	download(csvConfig)(csv);
};
