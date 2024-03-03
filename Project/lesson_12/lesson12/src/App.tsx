import Heading from "./components/Heading"
import { Section } from "./components/Section"
import Counter from "./components/Counter"
import List from "./components/List"

function App() {

  return (
    <>
      <Heading title={"Hello"}/>
      <Section title={"dif title"}>This is my Section.</Section>
      <Counter />
      <List items={["coffe", "tacos", "code"]} render={(item: string) => <span className="gold">{item}</span>} />
    </>
  )
}

export default App
