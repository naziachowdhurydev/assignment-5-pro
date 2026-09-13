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
      <Suspense fallback={<div>Loading...</div>}>
        <Technologies technologiesPromise={technologiesPromise} />
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
