const strokeSlider = document.getElementById('strokeSize');

const strokeSliderValue = () => {
    const strokeValue = strokeSlider.value;

    console.log(`Stroke set to ${strokeValue}`);
}
exports.strokeSliderValue = strokeSliderValue;