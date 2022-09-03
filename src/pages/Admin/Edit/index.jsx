import { Container } from "./styles";
import { CardPreview } from "../../../components/CardPreview"
import { Header } from "../../../components/Header"
import { Footer } from "../../../components/Footer"

export function Edit() {

  return (
    <Container>
      <Header/>
      <CardPreview />
      <Footer />
    </Container>
  )
}