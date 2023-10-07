import { Button } from "@/components/Button";
import { Sidebar } from "@/components/Sidebar";


const Index = () => {
  return (
    <div className="flex h-screen w-screen justify-between bg-[#F0F0F6]">
      <Sidebar />
      <main>
        <section></section>
        <section></section>
        <section><Button text="HIRE ME" /></section>
        <section></section>
        <footer></footer>
      </main>
      <aside>
      </aside>
    </div>
  )
}

export default Index;