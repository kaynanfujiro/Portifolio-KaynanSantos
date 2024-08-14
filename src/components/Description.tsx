import React, { useEffect } from "react";

interface TypingEffectProps {
    phrases: string[];
    typingSpeed?: number;
    erasingSpeed?: number;
    delayBetweenPhrases?: number;
}
const TypingEffect: React.FC<TypingEffectProps> = ({
    phrases,
    typingSpeed = 50,
    erasingSpeed = 50,
    delayBetweenPhrases = 5000
}) => {
    useEffect(() => {
        const outputElement = document.getElementById('typed-output');

        if (outputElement) {
            let index = 0;
            let charIndex = 0;

            const type = () => {
                if (outputElement) {
                    outputElement.textContent += phrases[index][charIndex];
                    charIndex++;

                    if (charIndex < phrases[index].length) {
                        setTimeout(type, typingSpeed);
                    } else {
                        setTimeout(erase, delayBetweenPhrases);
                    }
                }
            }

            const erase = () => {
                if (charIndex > 0 && outputElement) {
                    outputElement.textContent = phrases[index].substring(0, charIndex - 1);
                    charIndex--;

                    setTimeout(erase, erasingSpeed);
                } else {
                    index = (index + 1) % phrases.length;
                    setTimeout(type, 500);
                }
            }

            type();
        }
    }, [phrases, typingSpeed, erasingSpeed, delayBetweenPhrases]);



    return null;
};

export default TypingEffect;
