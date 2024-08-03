# Unit Converter App

This Unit Converter App is a small web-based application that allows users to convert values between different units of measurement for weight, temperature, length, and speed. The app is built using JavaScript and utilizes event listeners to update conversion results dynamically as the user inputs values.

## Features

- **Weight Conversion**: Convert between kilograms (kg), pounds (lb), grams (g), ounces (oz), and stones (st).
- **Temperature Conversion**: Convert between Fahrenheit (°F), Celsius (°C), and Kelvin (K).
- **Length Conversion**: Convert between meters (m), feet (ft), inches (in), centimeters (cm), miles (mi), kilometers (km), and yards (yd).
- **Speed Conversion**: Convert between meters per second (mps), kilometers per hour (kph), miles per hour (mph), and feet per second (fps).

## Getting Started

To run the Unit Converter App locally, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/nvmwhoiam/unit-converter-app.git
   cd unit-converter-app
   ```

2. **Open the index.html file in your web browser**:
   ```bash
   open index.html
   ```
   or simply drag and drop the `index.html` file into your web browser.

## How to Use

1. **Input Fields**: Enter a value in any of the input fields for weight, temperature, length, or speed. The app will automatically calculate and display the converted values in the corresponding fields.

2. **Data Attributes**: Each input field is associated with a specific unit of measurement through the use of `data-*` attributes. These attributes are used by the JavaScript functions to determine the units for conversion.

## Code Overview

### Event Listeners

The app uses `querySelectorAll` to select all input fields for each category (weight, temperature, length, speed) and adds event listeners to handle input events.

```javascript
const weightInputs = document.querySelectorAll(".weight-input");
const temperatureInputs = document.querySelectorAll(".temperature-input");
const lengthInputs = document.querySelectorAll(".length-input");
const speedInputs = document.querySelectorAll(".speed-input");
```

## License

This Unit Converter App is open-source and available under the [MIT License](LICENSE).
