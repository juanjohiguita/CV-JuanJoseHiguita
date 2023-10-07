import ProgressBar from "./ProgressBar"
import ExtraSkills from "./ExtraSkills"

const Sidebar = () => {
    return (
        <aside className="bg-[#FFFFFF] w-96">
            <section>
                <div>
                    <img className="rounded-full w-40 mx-auto" src="/images/fotoJuanJose.png" alt="foto personal" />
                </div>
                <br></br>
                <hr></hr>
                <br></br>
                <table>
                    <tbody>
                        <tr>
                            <td>Edad:</td>
                            <td className="float-right">21</td>
                        </tr>
                        <tr>
                            <td>Residence:</td>
                            <td className="float-right">Colombia</td>
                        </tr>
                        <tr>
                            <td>Email:</td>
                            <td className="float-right text-sky-500">
                                juanjohiguita06@gmail.com
                            </td>
                        </tr>
                        <tr>
                            <td>Phone:</td>
                            <td className="float-right">+57 313 585 3082</td>
                        </tr>
                    </tbody>
                </table>
                <br></br>
            </section>
            <hr></hr>
            <section>
                <br></br>
                <h2>
                    <b>Languages</b>
                </h2>
                <ProgressBar percentage={50} name="English" />
                <ProgressBar percentage={100} name="Spanish" />
                <br></br>
            </section>
            <br></br>
            <section>
                <br></br>
                <h2>
                    <b>Programming Languages</b>
                </h2>
                <ProgressBar percentage={65} name="HTML" />
                <ProgressBar percentage={65} name="CSS" />
                <ProgressBar percentage={80} name="Java" />
                <ProgressBar percentage={60} name="Javascript" />
                <ProgressBar percentage={65} name="Python" />
                <ProgressBar percentage={30} name="C#" />
                <br></br>
            </section>
            <br></br>
            <section>
                <h2>
                    <b>Extra Skills</b>
                </h2>
                <ExtraSkills name = "MongoDB"/>
                <ExtraSkills name = "MERN"/>
                <ExtraSkills name = "Teamwork"/>
                <ExtraSkills name = "Git Knowledge"/>
            </section>
        </aside>
    )
}


export { Sidebar }