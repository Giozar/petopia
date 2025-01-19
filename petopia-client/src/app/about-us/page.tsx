import { ContactAboutUs } from "./components/contactAboutUs";
import { HeaderAboutUs } from "./components/headerAboutUs";
import { LayoutAboutUs } from "./components/layoutAboutUs";
import { CreationAboutUs } from "./components/creationAboutUs";
import { TeamAboutUs } from "./components/TeamAboutUs";
import { GalleryAboutUs } from "./components/GalleryAboutUs";
import { PartnersAboutUs } from "./components/PartnersAboutUs";

export default function Page() {
    return (
        <main style={{ width: '100%', height: '100vh' }}>    
        <HeaderAboutUs />
        <LayoutAboutUs />
        <ContactAboutUs />
        <CreationAboutUs />
        <TeamAboutUs />
        <GalleryAboutUs />
        <PartnersAboutUs /> 
        </main>
    );
}
