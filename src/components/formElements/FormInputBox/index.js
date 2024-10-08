



const FormInputBox = ({ type, id, value, onChange, placeholder, disabled }) => {
	return (
		<input
			type={type}
			onChange={onChange}
			className="scoreInputBox form-control"
			id={id}
			value={value}
			name={id}
			placeholder={placeholder}
			disabled={disabled}
			required
		/>

	);
};

export default FormInputBox;
