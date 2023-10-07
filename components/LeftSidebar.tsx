import ProgressBar from "./ProgressBar"
import ExtraSkills from "./ExtraSkills"

const LeftSidebar = () => {
    return (
        <aside className="bg-[#FFFFFF] w-80 h-screen fixed">
            <section >
                <section className="flex flex-col items-center">
                    <div>
                        <img className="rounded-full w-40 mx-auto p-4" src="images/fotoJuanJose.png" alt="foto personal" />
                    </div>
                    <div>
                        <span className="font-bold">Juan José Higuita Sánchez</span>
                    </div>
                    <span className="p-3">Backend Developer</span>
                
                </section>
                <hr></hr>
                <br></br>
                <section>
                    <table className="flex flex-col items-center">
                        <tbody>
                            <tr>
                                <td>Age:</td>
                                <td className="float-right">21</td>
                            </tr>
                            <tr>
                                <td>Residence:</td>
                                <td className="float-right">Colombia</td>
                            </tr>
                            <tr>
                                <td>Phone:</td>
                                <td className="float-right">+57 313 585 3082</td>
                            </tr>
                            <tr>
                                <td>Email:</td>
                                <td className="float-right text-rose-700">
                                    juanjohiguita06@gmail.com
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            </section>
            <br></br>
            <hr></hr>
            <section className="p-4 ">
                <h2>
                    <b>Languages</b>
                </h2>
                <ProgressBar percentage={50} name="English" />
                <ProgressBar percentage={100} name="Spanish" />
            </section>
            <section className="p-4">
                <h2>
                    <b>Programming Languages</b>
                </h2>
                <ProgressBar percentage={65} name="HTML" />
                <ProgressBar percentage={65} name="CSS" />
                <ProgressBar percentage={80} name="Java" />
                <ProgressBar percentage={60} name="Javascript" />
                <ProgressBar percentage={65} name="Python" />
                <ProgressBar percentage={30} name="C#" />
            </section>
            <section className="p-4 ">
                <h2>
                    <b>Extra Skills</b>
                </h2>
                <ExtraSkills name="MongoDB" />
                <ExtraSkills name="MERN" />
                <ExtraSkills name="Teamwork" />
                <ExtraSkills name="Git Knowledge" />
            </section>
            <br></br>
        </aside>
    )
}


export { LeftSidebar }