
import styled from 'styled-components';
import { Header } from './layout/header/Header';
import { Main } from './layout/sections/main/Main';
import { Skills } from './layout/sections/skills/Skills';
import { Projects } from './layout/sections/projects/Projects';
import { Contact } from './layout/sections/contact/Contact';
import { About } from './layout/sections/about/About';
import { Footer } from './layout/footer/Footer';

const icons = ["github", "twitter", "linkedin"];
const items = ["Home", "About", "Tech Stack", "Projects", "Contact"];

function App() {
    return (
        <div className="App">
           <Header menuIcons = {icons} menuItems = {items}/>
           <Main/>
           <About/>
           <Skills/>
           <Projects/>
           <Contact menuIcons = {icons}/>
           <Footer menuItems = {items} />
        </div>
    );
}

export default App;

