import Social from "./Social"

const RightSidebar = () => {
    return (
        <aside className="bg-[#FFFFFF] w-20 fixed right-0 h-screen">
            <section className="mt-16">
                <section className="flex flex-col items-center">
                    <span className="font-bold">Links</span>
                    <div>
                        <Social name="Facebook" link="https://www.facebook.com/juanjo.higuita.3" />
                        <Social name="Instagram" link="https://www.instagram.com/juanjohiguita/" />
                        <Social name="Github" link="https://github.com/juanjohiguita" />
                        <Social name="Youtube" link="https://www.youtube.com/@elpirocho6821" />
                        <Social name="Twitter" link="https://twitter.com/ElPirocho" />
                        <Social name="Twitch" link="https://www.twitch.tv/elpiroch0" />
                    </div>
                </section>
            </section>
        </aside>
    )
}


export { RightSidebar }