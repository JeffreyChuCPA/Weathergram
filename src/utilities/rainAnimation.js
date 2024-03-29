export const rainAnimation = (isRainy) => {
    const removePrevRain = () => {
        const existingHrElements = document.querySelectorAll("hr");
        existingHrElements.forEach((hrElement) => {
            document.body.removeChild(hrElement);
        });
    };

    if (isRainy) {
        removePrevRain();

        const counter = 100;
        for (let i = 0; i < counter; i++) {
            const hrElement = document.createElement("hr");
            hrElement.style.left = Math.random() * 250 - 50 + "%";
            hrElement.style.animationDuration = 0.2 + Math.random() * 0.3 + "s";
            hrElement.style.animationDelay = Math.random() * 5 + "s";
            document.body.appendChild(hrElement);
        }
    } else {
        removePrevRain();
    }
};
