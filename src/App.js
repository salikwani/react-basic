import AboutMe from "./components/AboutMe";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import Footer from "./components/Foooter";

const App = () => {
    let sectionData = [
        {
            heading: "Skills",
            description: "Lorem ipsum odaor corl Lorem ipsum odaor corl Lorem ipsum odaor corlLorem ipsum odaor corlLorem ipsum odaor corlLorem Lorem ipsum odaor corl\
            Lorem ipsum odaor corl Lorem ipsum odaor corl Lorem ipsum odaor corl Lorem ipsum Lorem ipsum odaor corl Lorem ipsum odaor corl Lorem ipsum odaor corlLorem ipsum odaor corlLorem ipsum odaor corlLorem Lorem ipsum odaor corl\
            Lorem ipsum odaor corl Lorem ipsum odaor corl Lorem ipsum odaor corl Lorem Lorem ipsum odaor corl Lorem ipsum odaor corl Lorem ipsum odaor corlLorem ipsum odaor corlLorem ipsum odaor corlLorem Lorem ipsum odaor corl\
            Lorem ipsum odaor corl Lorem ipsum odaor corl Lorem ipsum odaor corl Lorem odaor corlLorem ipsum odaor corl v Lorem ipsum odaor corlLorem ipsum odaor corl"
        },
        {
            heading: "Qualifications",
            description: "Lorem ipsum odaor corl Lorem ipsum odaor corl Lorem ipsum odaor corlLorem ipsum odaor corlLorem ipsum odaor corlLorem Lorem ipsum odaor corl\
            Lorem ipsum odaor corl Lorem ipsum odaor corl Lorem ipsum odaor corl Lorem ipsum Lorem ipsum odaor corl Lorem ipsum odaor corl Lorem ipsum odaor corlLorem ipsum odaor corlLorem ipsum odaor corlLorem Lorem ipsum odaor corl\
            Lorem ipsum odaor corl Lorem ipsum odaor corl Lorem ipsum odaor corl Lorem Lorem ipsum odaor corl Lorem ipsum odaor corl Lorem ipsum odaor corlLorem ipsum odaor corlLorem ipsum odaor corlLorem Lorem ipsum odaor corl\
            Lorem ipsum odaor corl Lorem ipsum odaor corl Lorem ipsum odaor corl Lorem odaor corlLorem ipsum odaor corl v Lorem ipsum odaor corlLorem ipsum odaor corl"
        },
        {
            heading: "Projects",
            description: "Lorem ipsum odaor corl Lorem ipsum odaor corl Lorem ipsum odaor corlLorem ipsum odaor corlLorem ipsum odaor corlLorem Lorem ipsum odaor corl\
            Lorem ipsum odaor corl Lorem ipsum odaor corl Lorem ipsum odaor corl Lorem ipsum Lorem ipsum odaor corl Lorem ipsum odaor corl Lorem ipsum odaor corlLorem ipsum odaor corlLorem ipsum odaor corlLorem Lorem ipsum odaor corl\
            Lorem ipsum odaor corl Lorem ipsum odaor corl Lorem ipsum odaor corl Lorem Lorem ipsum odaor corl Lorem ipsum odaor corl Lorem ipsum odaor corlLorem ipsum odaor corlLorem ipsum odaor corlLorem Lorem ipsum odaor corl\
            Lorem ipsum odaor corl Lorem ipsum odaor corl Lorem ipsum odaor corl Lorem odaor corlLorem ipsum odaor corl v Lorem ipsum odaor corlLorem ipsum odaor corl"
        }
    ]

    return (
        <div>
            <Navbar />
            <AboutMe />
            {sectionData.map((value)=> (
                <Section heading={value.heading} description={value.description}/>
            ))}
            <Footer />
        </div>
    )
}

export default App;