

function getUserNumbers() {
    const numbersStr = document.getElementById("inputNumbers").value;
    return numbersStr.split(",").map(num => parseFloat(num));
}

function calculateMean(numbersList) {
    const sum = numbersList.reduce((acc, num) => acc + num, 0);
    return sum / numbersList.length;
}


function calculateMedian(numbersList) {
    const sortedNumbers = numbersList.slice().sort((a, b) => a - b);
    const n = sortedNumbers.length;
    let median = null;
    if (n % 2 === 0) {
        median = (sortedNumbers[n / 2 - 1] + sortedNumbers[n / 2]) / 2;
    }
    else {
        median = sortedNumbers[Math.floor(n / 2)];
    }
    return median;
}


function calculateStandardDeviation(numbersList) {
    const mean = calculateMean(numbersList);
    const sumSquares = numbersList.reduce((acc, num) => acc + Math.pow(num - mean, 2), 0);
    return Math.sqrt(sumSquares / numbersList.length);
}


function storeStatisticsInJSON(mean, median, standardDeviation) {
    const statistics = {
        mean: mean,
        median: median,
        standardDeviation: standardDeviation,
    };

    const statisticsJSON = JSON.stringify(statistics);
    localStorage.setItem("statisticsData", statisticsJSON);
}


function calculateStatistics() {
    const numbers = getUserNumbers();
    const mean = calculateMean(numbers);
    const median = calculateMedian(numbers);
    const standardDeviation = calculateStandardDeviation(numbers);

    storeStatisticsInJSON(mean, median, standardDeviation);

    const meanResult = document.getElementById("meanResult");
    const medianResult = document.getElementById("medianResult");
    const standardDeviationResult = document.getElementById("standardDeviationResult");

    meanResult.textContent = "Mean: " + mean.toFixed(2);
    medianResult.textContent = "Median: " + median.toFixed(2);
    standardDeviationResult.textContent = "Standard Deviation: " + standardDeviation.toFixed(2);
    console.log(localStorage.getItem("statisticsData"))
}


function displayStoredStatistics() {
    const statisticsJSON = localStorage.getItem("statisticsData");
    if (statisticsJSON) {
        const statistics = JSON.parse(statisticsJSON);
        const meanResult = document.getElementById("meanResult");
        const medianResult = document.getElementById("medianResult");
        const standardDeviationResult = document.getElementById("standardDeviationResult");
        meanResult.textContent = "Mean: " + statistics.mean.toFixed(2);
        medianResult.textContent = "Median: " + statistics.median.toFixed(2);
        standardDeviationResult.textContent = "Standard Deviation: " + statistics.standardDeviation.toFixed(2);
    }
}


const btn = document.querySelector("#myBtn");
btn.addEventListener("click", () => {
    Swal.fire({
        title: "Statistics calculated!",
        text: "Thanks for using our app.",
        icon: "success",
        confirmButtonText: "See results"
    })
})


window.onload = function () {
    displayStoredStatistics();
};
