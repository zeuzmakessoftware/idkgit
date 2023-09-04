import Title from "../../components/Title"
import Subtitle from "../../components/Subtitle"
import Example from "../../components/Example"
import Examples from "../../examples.json"; // Update the path based on your folder structure

export default function Home() {
  return (
    <main>
      {/* text */}
      <Title title={"idk git"}/>
      <Subtitle title={"idk git, so i'm using this project to practice I guess. and to create a lil next styled cheat sheet for myself and maybe others."}/>
      {
        Examples.examples.map((example, index) => {
          return (
            <Example 
              key={index}
              title={example.title}
              explanation={example.explanation}
              example={example.example}
            />
          );
        })
      }
      {/* this jus space lmao */}
      <div className="h-[200px]"></div>
    </main>
  )
}
