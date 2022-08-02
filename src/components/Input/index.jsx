import { Container } from "./styles";

export function Input({ name, placeholder ,...rest }) {

  return (
    <Container>
      <label htmlFor={name}>{name}</label>
      <input {...rest }
        placeholder={placeholder}
        id={name} />
    </Container>
  )

}