function InputInfo({ register, name, error, label }) {
  return (
    <div>
      <label>{label}</label>
      <input {...register(name)} />
      <p>{error}</p>
    </div>
  );
}

export default InputInfo;
