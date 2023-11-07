import { Container } from "../../utils/components/Utils"
import "./Contact.css"

export const Contact = () => {
    return (
        <Container margin={20}>
            <section>
                <form>
                    <input type="text" />
                    <input type="text" />
                    <input type="email" name="" id="" />
                    <input type="text" name="" id="" />
                    <textarea cols={50} rows={10}></textarea>
                </form>
            </section>
        </Container>
    )
}
