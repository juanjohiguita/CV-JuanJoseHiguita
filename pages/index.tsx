import DialogWindow from "@/components/DialogWindow";
import { HireMeButton } from "@/components/HireMeButton";
import MyKnowledge from "@/components/MyKnowledge";
import { LeftSidebar } from "@/components/LeftSidebar";
import { RightSidebar } from "@/components/RightSidebar";
import Subtitle from "@/components/Subtitle";
import React from "react";
import Portafolio from "@/components/Portafolio";


const Index = () => {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value: string) => {
    setOpen(false);
  };


  return (
    <div className="flex h-full max-h-max w-screen bg-[#F0F0F6]">
      <DialogWindow open={open} selectedValue="" onClose={handleClose} />
      <LeftSidebar />
      <div className="ml-[22%]"></div>
      <main className="max-w-7xl">
        <section className=" flex justify-center flex-wrap ">
          <div className="m-10 mt-0 w-full flex justify-between text-justify gap-6 bg-[#FFFFFF] min-w-max ">
            <div className="flex flex-col p-16 ">
              <h2 className="mt-10 mb-1 font-bold text-5xl">I am Juan José Higuita</h2>
              <div className="mb-5 mt-1 font-bold text-5xl flex">
                <h2 className="mr-2 text-rose-700">Back-end</h2>
                <h2>Developer</h2>
              </div>

              <h4 className="mb-2 font-medium text-[#767676] whitespace-normal max-w-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ea maxime voluptatem enim obcaecati earum natus pariatur delectus modi quia, magnam veritatis maiores inventore consectetur nemo fuga tenetur necessitatibus autem.
              </h4>
              <div>
                <button className="bg-rose-700 text-center px-6 py-3 hover:scale-105 hover:bg-rose-700  font-bold rounded-md mt-7" onClick={handleClickOpen}>
                  <span className="text-md font-semibold">HIRE ME ➜</span>
                </button>
              </div>
            </div>
            <div className="flex justify-center">
              <img className="m-auto mb-0 mx-12 w-72" src="images/fotoJuanJose.png" alt="foto personal" />
            </div>
          </div>
        </section>
        <section >
          <div className="flex justify-center flex-wrap">
            <Subtitle title="My Knowledge" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ea maxime voluptatem enim obcaecati earum natus pariatur delectus modi quia, magnam veritatis maiores inventore consectetur nemo fuga tenetur necessitatibus autem." />
          </div>
          <div className="flex justify-center flex-wrap my-10">
            <MyKnowledge image="images/fotoJuanJse.png" title="primer knowledge" text="Primer texto" alt="Imagen aguapanea con limon" />
            <MyKnowledge image="images/fotoJuanJose.png" title="segundo knowledge" text="Segundo texto" alt="Imagen diferente" />
            <MyKnowledge image="images/fotoJuanJosx.png" title="tercer knowledge" text="Tercer texto" alt="Imagen 5" />
            <MyKnowledge image="images/fotoJuanJose.png" title="cuarto knowledge" text="Cuarto texto" alt="Imagen 6" />
            <MyKnowledge image="images/fotoJuanJose.png" title="quinto knowledge" text="Quinto texto" alt="Imagen 7" />

          </div>


        </section>
        <section >
          <div className="flex justify-center flex-wrap">
            <Subtitle title="Education" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ea maxime voluptatem enim obcaecati earum natus pariatur delectus modi quia, magnam veritatis maiores inventore consectetur nemo fuga tenetur necessitatibus autem." />
          </div>
          <div className="bg-[#FFFFFF]">
            /* Aqui van los componentes de Education */
          </div>

        </section>
        <section>
          <div className="flex-wrap flex justify-center">
            <Subtitle title="Portafolio" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ea maxime voluptatem enim obcaecati earum natus pariatur delectus modi quia, magnam veritatis maiores inventore consectetur nemo fuga tenetur necessitatibus autem." />
          </div>
          <div>
            <Portafolio image="images/fotoJuanJose.png" title="primer portafolio" text="Primer texto" alt="Imagen aguapanea con limon" />
          </div>
        </section>
        <footer className="mb-0 text-center w-full min-w-max m-2 p-10  bg-neutral-50">
          2023 All Rights Reversed. JuanjoHiguita
        </footer>
      </main>
      <RightSidebar />
    </div>
  )
}

export default Index;