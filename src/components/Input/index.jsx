import { Container } from "./styles";

export function Input({ name, value,placeholder ,...rest }) {

  return (
    <Container>
      <label htmlFor={name}>{name}</label>
      <input {...rest }
      value={value}
        placeholder={placeholder}
        id={name}  />
    </Container>
  )

}