import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { NavbarComp } from "../components/NavbarComp";

 export function Competicoes() {
    
    return (
      <>
        <Navbar />
        <NavbarComp />

        <main>

          <section id="regras">
            <h2>Regras</h2> 

            <br />

            <a href="">Documento de regras</a>

            <br />
            <br />

            <h3>Resumo</h3>

            <br />

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint delectus nemo, adipisci odit quae iste quas corrupti aspernatur, ea, est incidunt deserunt? Molestiae tenetur veritatis est corrupti atque et necessitatibus!</p>
            
            <br />

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint delectus nemo, adipisci odit quae iste quas corrupti aspernatur, ea, est incidunt deserunt? Molestiae tenetur veritatis est corrupti atque et necessitatibus!</p>
            
            <br />

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint delectus nemo, adipisci odit quae iste quas corrupti aspernatur, ea, est incidunt deserunt? Molestiae tenetur veritatis est corrupti atque et necessitatibus!</p>

            <br />
          </section>

          <section id="premiacao">

            <h2>Premiação</h2> 

            <br />

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat numquam dolorem laboriosam sint odio, tempore officiis libero repellat corrupti dolorum vitae harum voluptas assumenda magni, similique incidunt hic nesciunt alias.</p>
          </section>

        </main>

        <Footer />
      </>
    );
  } 

