import { FooterApp } from "../components/FooterApp";
import { CtaSchedulePetCare } from "./components/CtaSchedulePetCare";
import { FaqPetCare } from "./components/FaqPetCare";
import { HeaderPetCare } from "./components/HeaderPetCare";
import { LayoutAttentionPetCare } from "./components/LayoutAttentionPetCare";
import { LayoutEmergencyPetCare } from "./components/LayoutEmergencyPetCare";
import { LayoutRoutineCheckPetCare } from "./components/LayoutRoutineCheckPetCare";
import { LayoutTreatmentPetCare } from "./components/LayoutTreatmentPetCare";
import { LayoutWhyPetCare } from "./components/LayoutWhyPetCare";
import { TestimonialPetCare } from "./components/TestimonialPetCare";

export default function Page() {
    return (
        <main style={{ width: '100%', height: '100vh' }}>
            <HeaderPetCare />
            <HeaderPetCare />
            <LayoutAttentionPetCare  />
            <LayoutRoutineCheckPetCare />
            <LayoutEmergencyPetCare />
            <LayoutTreatmentPetCare />
            <LayoutWhyPetCare />
            <TestimonialPetCare />
            <CtaSchedulePetCare />
            <FaqPetCare />
            <FooterApp />
        </main>
    );
}