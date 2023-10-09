import DialogWindow from "@/components/DialogWindow";
import { HireMeButton } from "@/components/HireMeButton";
import MyKnowledge from "@/components/MyKnowledge";
import { LeftSidebar } from "@/components/LeftSidebar";
import { RightSidebar } from "@/components/RightSidebar";
import Subtitle from "@/components/Subtitle";
import React from "react";
import Portafolio from "@/components/Portafolio";
import EducationCard from "@/components/EducatioCard";


const Index = () => {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value: string) => {
    setOpen(false);
  };


  return (
    <div className="flex h-full max-h-max w-auto  bg-stone-200">
      <DialogWindow open={open} selectedValue="" onClose={handleClose} />
      <LeftSidebar />
      <div className="ml-[22%]"></div>
      <main className="max-w-7xl">
        <section className=" flex justify-center flex-wrap ">
          <div className="m-10 mt-0 w-full flex justify-between text-justify gap-6 bg-[#FFFFFF] min-w-max rounded-b-2xl">
            <div className="flex flex-col p-16 ">
              <h2 className="mt-10 mb-1 font-bold text-5xl">I am Juan José Higuita</h2>
              <div className="mb-5 mt-1 font-bold text-5xl flex">
                <h2 className="mr-2 text-rose-700">Back-end</h2>
                <h2>Developer</h2>
              </div>

              <h4 className="mb-2 font-medium text-[#767676] whitespace-normal max-w-xl">Passionate about technologies and application development, Junior Back-End Developer: Proficient in MongoDB, Express, Node, React collaborating with design and create APIs
              </h4>
              <div>
                <button className="bg-rose-700 text-center px-6 py-3 hover:scale-105 hover:bg-rose-700  font-bold rounded-md mt-7" onClick={handleClickOpen}>
                  <span className="text-md font-semibold">HIRE ME ➜</span>
                </button>
              </div>
            </div>
            <div className="flex justify-center">
              <img className="m-auto mb-0 mx-12 w-72" src="images/FotoJuanJose.png" alt="foto personal" />
            </div>
          </div>
        </section>
        <section >
          <div className="flex justify-center flex-wrap">
            <Subtitle title="My Knowledge" text="I have acquired expertise in programming languages, frameworks, database management, and system architecture. My proficiency extends to web and mobile app development , among other areas." />
          </div>
          <div className="flex justify-center flex-wrap my-10">
            <MyKnowledge image="images/MobileDev.png" title="Mobile Development" text="Development for android" alt="Mobile Development Image" />
            <MyKnowledge image="images/API.png" title="Rest API" text="API Creation and API Consumption" alt="Rest API Image" />
            <MyKnowledge image="images/MERN.png" title="MERN" text="MongoDB, Express, React and Node" alt="MERN Image" />
            <MyKnowledge image="images/VideoEdition.png" title="Video Editing" text="Video creation and editing" alt="Video Editing Image" />
            <MyKnowledge image="images/WebDev.png" title="Web Development" text="Blog, E-Commerce" alt="Web Development Image" />

          </div>


        </section>
        <section >
          <div className="flex justify-center flex-wrap">
            <Subtitle title="Education" text="In the Education section, you'll get insights into my academic journey and how it has shaped my path as a developer. I'll share key milestones from my educational background and how these experiences have enriched my professional profile." />
          </div>
          <div className="rounded-md">
            <EducationCard
              place="I.E José Maria Bernal"
              role="Student"
              date="Jan 2013 - Nov 2018"
              title="High School Degree"
              description="I completed my high school education, acquiring a strong academic foundation and essential knowledge in various subjects. This educational milestone laid the groundwork for my future endeavors."
            />
            <EducationCard
              place="Universidad de Antioquia"
              role="Student"
              date="Jul 2019 - Nov 2024"
              title="Systems Engineering"
              description="Currently pursuing a degree in software engineering at the University of Antioquia."
            />
          </div>

        </section>
        <section>
          <div className="flex-wrap flex justify-center">
            <Subtitle title="Portafolio" text="Welcome to my developer portfolio. I'm a versatile developer with experience in various projects, from web applications to mobile apps. My aim is to create efficient and innovative solutions through technology. Explore my featured projects to see my work and skills." />
          </div>
          <div className="w-full flex overflow-x-auto">
            <Portafolio
              title="RapRumble"
              text="Web-mobile application for voting and management of freestyle battle tournaments, from leagues to cups and all user management."
              image="images/RapRumble.png"
              link="https://github.com/a-zambrano1/app_WebTorneos"
              alt="Logo de la app"

            />
            <Portafolio
              title="RapRumble API"
              text="RapRumble freestyle battle management and voting application API."
              image="images/RapRumble.png"
              link="https://github.com/juanjohiguita/backend_WebTorneos"
              alt="Logo de la app"
            />
            <Portafolio
              title="Nashecar"
              text="3D racing game developed in Unity that has the option of playing multiplayer with your friends."
              image="images/Nashecar.png"
              link="https://udeaeduco-my.sharepoint.com/:u:/g/personal/gustavo_marin_udea_edu_co/EVXNpGLq-cdAr7onKW6EZEYBgg-ACWaG0TMMIUtIMFt8MQ?e=ZRePaM"
              alt="Logo de la app"
            />
            <Portafolio
              title="Free Rating"
              text="Mobile application for Android that allows voting in freestyle battles in an unmanaged, fast competition environment."
              image="images/FreeRating.png"
              link="https://docs.google.com/document/d/1H6YxCxDxUjvdMthxQgxFQihOpJtIGZTra3dz4CcoO0w/edit"
              alt="Logo de la app"
            />
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