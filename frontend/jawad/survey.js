document.addEventListener("DOMContentLoaded", () => {
    const headers = document.querySelectorAll(".fadeIn");
    const observerOptions = {
        threshold: 0.5, // Trigger when 50% of the slide is visible
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target); // Ensure it only triggers once
            }
        });
    }, observerOptions);

    headers.forEach((header) => observer.observe(header));

    // List to store all input variables
    const inputVariables = {
        purpose: "",
        shape: "",
        primaryColor: "",
        secondaryColor: "",
        logoText: "",
        mascotText: "",
        artstyle: ""
    };

    // Handle button selection
    const buttons = document.querySelectorAll(".buttonOptions");
    let selectedButton = null;

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            if (selectedButton) {
                selectedButton.classList.remove("selected");
                selectedButton.parentElement.classList.remove("selected");
            }
            button.classList.add("selected");
            button.parentElement.classList.add("selected");
            selectedButton = button;
            const selectedValue = button.getAttribute("data-value");
            console.log("Selected value:", selectedValue); // Store or use the selected value as needed
            inputVariables.artstyle = selectedValue;
        });
    });

    // Save text input values
    const logoTextInput = document.getElementById("logoText");
    const mascotTextInput = document.getElementById("mascotText");

    logoTextInput.addEventListener("input", () => {
        const logoText = logoTextInput.value;
        console.log("Logo text:", logoText); // Store or use the logo text as needed
        inputVariables.logoText = logoText;
    });

    mascotTextInput.addEventListener("input", () => {
        const mascotText = mascotTextInput.value;
        console.log("Mascot text:", mascotText); // Store or use the mascot text as needed
        inputVariables.mascotText = mascotText;
    });

    // Save selected shape value
    const shapeButtons = document.querySelectorAll(".shapeOptions");
    let selectedShapeButton = null;

    shapeButtons.forEach(button => {
        button.addEventListener("click", () => {
            if (selectedShapeButton) {
                selectedShapeButton.classList.remove("selected");
                selectedShapeButton.parentElement.classList.remove("selected");
            }
            button.classList.add("selected");
            button.parentElement.classList.add("selected");
            selectedShapeButton = button;
            const selectedShapeValue = button.getAttribute("data-value");
            console.log("Selected shape value:", selectedShapeValue); // Store or use the selected shape value as needed
            inputVariables.shape = selectedShapeValue;
        });
    });

    // Handle color selection
    const colorButtons = document.querySelectorAll(".colorOptions");
    let primaryColorButton = null;
    let secondaryColorButton = null;

    colorButtons.forEach(button => {
        button.addEventListener("click", () => {
            const colorValue = window.getComputedStyle(button).backgroundColor;
            if (!primaryColorButton) {
                primaryColorButton = button;
                button.classList.add("primary");
                document.getElementById("primaryColor").textContent = colorValue;
                inputVariables.primaryColor = colorValue;
            } else if (!secondaryColorButton && button !== primaryColorButton) {
                secondaryColorButton = button;
                button.classList.add("secondary");
                document.getElementById("secondaryColor").textContent = colorValue;
                inputVariables.secondaryColor = colorValue;
            } else if (button === primaryColorButton) {
                primaryColorButton.classList.remove("primary");
                primaryColorButton = null;
                document.getElementById("primaryColor").textContent = "";
                inputVariables.primaryColor = "";
            } else if (button === secondaryColorButton) {
                secondaryColorButton.classList.remove("secondary");
                secondaryColorButton = null;
                document.getElementById("secondaryColor").textContent = "";
                inputVariables.secondaryColor = "";
            }
        });
    });

    // Handle dropdown selection
    const logoPurposeDropdown = document.getElementById("logoPurpose");
    logoPurposeDropdown.addEventListener("change", () => {
        const selectedPurpose = logoPurposeDropdown.value;
        console.log("Selected purpose:", selectedPurpose); // Store or use the selected purpose as needed
        inputVariables.purpose = selectedPurpose;
    });

    // Log all input variables when the Create button is clicked
    const createButton = document.querySelector(".buttons.b1");
    createButton.addEventListener("click", () => {
        console.log("All input variables:", inputVariables);
    });
});