const weightInputs = document.querySelectorAll(".weight-input");

const temperatureInputs = document.querySelectorAll(".temperature-input");

const lengthInputs = document.querySelectorAll(".length-input");

const speedInputs = document.querySelectorAll(".speed-input");

weightInputs.forEach(input => {
    input.addEventListener("input", function () {
        const inputValue = parseFloat(this.value);
        if (isNaN(inputValue)) {
            // If input value is not a valid number, set output values to empty strings
            weightInputs.forEach(output => {
                output.value = "";
            });
            return; // Exit the function early
        }

        const fromUnit = this.dataset.weightunit;

        weightInputs.forEach(output => {
            if (output !== this) {
                const toUnit = output.dataset.weightunit;
                output.value = convertWeight(inputValue, fromUnit, toUnit);
            }
        });
    });
});

function convertWeight(value, fromUnit, toUnit) {
    // Define conversion factors
    const units = {
        kg: { lb: 2.20462, g: 1000, oz: 35.274, st: 0.157473 },
        lb: { kg: 0.453592, g: 453.592, oz: 16, st: 0.0714286 },
        g: { lb: 0.00220462, kg: 0.001, oz: 0.035274, st: 0.000157473 },
        oz: { lb: 0.0625, kg: 0.0283495, g: 28.3495, st: 0.00446429 },
        st: { lb: 14, kg: 6.35029, g: 6350.29, oz: 224 }
    };

    // Check if the input units are valid
    if (!units.hasOwnProperty(fromUnit) || !units[fromUnit].hasOwnProperty(toUnit)) {
        return 0; // Return 0 for invalid conversion
    }

    // Perform the conversion
    return (value * units[fromUnit][toUnit]).toFixed(2);
}

temperatureInputs.forEach(input => {
    input.addEventListener("input", function () {
        const inputValue = parseFloat(this.value);
        if (isNaN(inputValue)) {
            // If input value is not a valid number, set output values to empty strings
            temperatureInputs.forEach(output => {
                output.value = "";
            });
            return; // Exit the function early
        }

        const fromUnit = this.dataset.temperatureunit;

        temperatureInputs.forEach(output => {
            if (output !== this) {
                const toUnit = output.dataset.temperatureunit;
                output.value = convertTemperature(inputValue, fromUnit, toUnit);
            }
        });
    });
});

function convertTemperature(value, fromUnit, toUnit) {
    // Define conversion formulas
    const conversions = {
        fahrenheit: {
            celsius: (value - 32) * (5 / 9),
            kelvin: (value - 32) * (5 / 9) + 273.15
        },
        celsius: {
            fahrenheit: (value * (9 / 5)) + 32,
            kelvin: value + 273.15
        },
        kelvin: {
            fahrenheit: (value - 273.15) * (9 / 5) + 32,
            celsius: value - 273.15
        }
    };

    // Check if the input units are valid
    if (!conversions.hasOwnProperty(fromUnit) || !conversions[fromUnit].hasOwnProperty(toUnit)) {
        return 0; // Return 0 for invalid conversion
    }

    // Perform the conversion
    return conversions[fromUnit][toUnit].toFixed(2)
}

lengthInputs.forEach(input => {
    input.addEventListener("input", function () {
        const inputValue = parseFloat(this.value);
        if (isNaN(inputValue)) {
            // If input value is not a valid number, set output values to empty strings
            lengthInputs.forEach(output => {
                output.value = "";
            });
            return; // Exit the function early
        }

        const fromUnit = this.dataset.lengthunit;

        lengthInputs.forEach(output => {
            if (output !== this) {
                const toUnit = output.dataset.lengthunit;
                output.value = convertLength(inputValue, fromUnit, toUnit);
            }
        });
    });
});

function convertLength(value, fromUnit, toUnit) {
    // Define conversion factors
    const units = {
        m: { ft: 3.28084, in: 39.3701, cm: 100, mi: 0.000621371, km: 0.001, yd: 1.09361 },
        ft: { m: 0.3048, in: 12, cm: 30.48, mi: 0.000189394, km: 0.0003048, yd: 0.333333 },
        in: { m: 0.0254, ft: 0.0833333, cm: 2.54, mi: 0.000015783, km: 0.0000254, yd: 0.0277778 },
        cm: { m: 0.01, ft: 0.0328084, in: 0.393701, mi: 0.0000062137, km: 0.00001, yd: 0.0109361 },
        mi: { m: 1609.34, ft: 5280, in: 63360, cm: 160934, km: 1.60934, yd: 1760 },
        km: { m: 1000, ft: 3280.84, in: 39370.1, cm: 100000, mi: 0.621371, yd: 1093.61 },
        yd: { m: 0.9144, ft: 3, in: 36, cm: 91.44, mi: 0.000568182, km: 0.0009144 }
    };

    // Check if the input units are valid
    if (!units.hasOwnProperty(fromUnit) || !units[fromUnit].hasOwnProperty(toUnit)) {
        return 0; // Return 0 for invalid conversion
    }

    // Perform the conversion
    return (value * units[fromUnit][toUnit]).toFixed(2);
}

speedInputs.forEach(input => {
    input.addEventListener("input", function () {
        const inputValue = parseFloat(this.value);
        if (isNaN(inputValue)) {
            // If input value is not a valid number, set output values to empty strings
            speedInputs.forEach(output => {
                output.value = "";
            });
            return; // Exit the function early
        }

        const fromUnit = this.dataset.speedunit;

        speedInputs.forEach(output => {
            if (output !== this) {
                const toUnit = output.dataset.speedunit;
                output.value = convertSpeed(inputValue, fromUnit, toUnit);
            }
        });
    });
});

function convertSpeed(value, fromUnit, toUnit) {
    // Define conversion factors
    const units = {
        mps: { kph: 3.6, mph: 2.23694, fps: 3.28084 },
        kph: { mps: 0.277778, mph: 0.621371, fps: 0.911344 },
        mph: { mps: 0.44704, kph: 1.60934, fps: 1.46667 },
        fps: { mps: 0.3048, kph: 1.09728, mph: 0.681818 }
    };

    // Check if the input units are valid
    if (!units.hasOwnProperty(fromUnit) || !units[fromUnit].hasOwnProperty(toUnit)) {
        return 0; // Return 0 for invalid conversion
    }

    // Perform the conversion
    return (value * units[fromUnit][toUnit]).toFixed(2);
}