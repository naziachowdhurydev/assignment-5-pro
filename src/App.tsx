import { Suspense, useState } from "react";
import Nav from "./component/nav.tsx";
import Banner from "./component/banner.tsx";
import Footer from "./component/footer.tsx";
import Technologies from "./component/technologies/Technologies.tsx";
import { Itechnology } from "./types/technologyType.ts";

const technologiesFetch = async (): Promise<Itechnology[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
};

function App() {
  // console.log("technologiesFetch", technologiesFetch);
  // const technologiesPromise = technologiesFetch();

  const [technologiesPromise] = useState(technologiesFetch());
  return (
    <div>
      <Nav />
      <Banner />
      <Suspense
        fallback={
          <div className="text-left font-bold text-amber-950 container mx-auto px-4 md:px-0">
            Data is Loading... please wait for a moment.........
          </div>
        }
      >
        <Technologies technologiesPromise={technologiesPromise} />
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
