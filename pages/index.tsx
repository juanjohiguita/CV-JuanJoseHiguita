import DialogWindow from "@/components/DialogWindow";
import { HireMeButton } from "@/components/HireMeButton";
import { LeftSidebar } from "@/components/LeftSidebar";
import { RightSidebar } from "@/components/RightSidebar";
import Subtitle from "@/components/Subtitle";
import React from "react";


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
        <section className="flex justify-center">
          <div>
            <Subtitle title="My Knowledge" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ea maxime voluptatem enim obcaecati earum natus pariatur delectus modi quia, magnam veritatis maiores inventore consectetur nemo fuga tenetur necessitatibus autem." />
          </div>
          <div>
              
          </div>

        </section>
        <section className="flex justify-center">
          <Subtitle title="Education" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ea maxime voluptatem enim obcaecati earum natus pariatur delectus modi quia, magnam veritatis maiores inventore consectetur nemo fuga tenetur necessitatibus autem." />
        </section>
        <section className="flex justify-center">
          <Subtitle title="Portafolio" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ea maxime voluptatem enim obcaecati earum natus pariatur delectus modi quia, magnam veritatis maiores inventore consectetur nemo fuga tenetur necessitatibus autem." />
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