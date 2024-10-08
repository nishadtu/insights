export const FormGroup = ({ type, id, value, handleChange, label }) => {
	return (
		<div className="form-group ">
			<label htmlFor="useremail" style={{ color: "#000" }}>
				{label}
			</label>
			<input
				type={type}
				onChange={(event) => handleChange(event.target.value)}
				className="form-control"
				id={id}
				value={value}
				name={id}
				placeholder=" "
				required
			/>
		</div>
	);
};

export default FormGroup;
