import { useRef } from "react";

export const useScrollRefs = () => {
    const techRef = useRef<HTMLDivElement>(null);
    const projetosRef = useRef<HTMLDivElement>(null);

    
    const scrollToTech = () => {
        if (techRef.current) {
            console.log("Pressionado para o Tech");
            techRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };
    
    const scrollToProjetos = () => {
        if (projetosRef.current) {
            projetosRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    return { projetosRef, techRef, scrollToProjetos, scrollToTech };
};