import axios from 'axios';

const url = "https://corona.lmao.ninja/v3/covid-19";
const urlHisory = 'https://disease.sh/v3/covid-19/historical'
const urlVacine = 'https://disease.sh/v3/covid-19/vaccine/coverage';

export const fetchData = async (country) => {
    let changeableUrl = `${url}/all`;
    if (country) {
        changeableUrl = `${url}/countries/${country}`
    }

    try {
        const { data: {
            updated,
            cases,
            todayCases,
            deaths,
            todayDeaths,
            recovered,
            todayRecovered,
            active,
            critical,
            tests
        } } = await axios.get(changeableUrl);

        const modifieData = {
            updated,
            cases,
            todayCases,
            deaths,
            todayDeaths,
            recovered,
            todayRecovered,
            active,
            critical,
            tests
        };
        return modifieData;
    } catch (error) {
        console.log(error);

    }
}

export const fetchHistoricalData = async (country) => {
    let changeableUrl = `${urlHisory}/all?lastdays=all`;
    if (country) {
        changeableUrl = `${urlHisory}/${country}?lastdays=all`
    }

    try {

        let data = await axios.get(changeableUrl);
        if (country) {
            data = data.data.timeline;
        } else {
            data = data.data
        }

        let casesArray = [];
        let deathsArray = [];
        let recoveredArray = [];


        let newCasesArray = [];
        let newDeathsArray = [];
        let newRecoveredArray = [];


        for (const [key, value] of Object.entries(data.cases)) {
            casesArray.push(value);
        }

        for (const [key, value] of Object.entries(data.deaths)) {
            deathsArray.push(value);
        }

        for (const [key, value] of Object.entries(data.recovered)) {
            recoveredArray.push(value);
        }

        casesArray.map((value, index) => {
            if (index == 0) {
                newCasesArray.push(value);
            } else {
                let lastIndex = index - 1;
                let lastIndexValue = casesArray[lastIndex];
                let newIndexValue = value - lastIndexValue;
                newCasesArray.push(newIndexValue);
            }
        })

        deathsArray.map((value, index) => {
            if (index == 0) {
                newDeathsArray.push(value);
            } else {
                let lastIndex = index - 1;
                let lastIndexValue = deathsArray[lastIndex];
                let newIndexValue = value - lastIndexValue;
                newDeathsArray.push( newIndexValue);
            }
        })

        recoveredArray.map((value, index) => {
            if (index == 0) {
                newRecoveredArray.push(value);
            } else {
                let lastIndex = index - 1;
                let lastIndexValue = recoveredArray[lastIndex];
                let newIndexValue = value - lastIndexValue;
                newRecoveredArray.push(newIndexValue);
            }
        })

        newCasesArray = newCasesArray.slice(-30);
        newDeathsArray = newDeathsArray.slice(-30);
        newRecoveredArray = newRecoveredArray.slice(-30);

        return { newCasesArray, newDeathsArray, newRecoveredArray };
    } catch (error) {
        console.log(error);
    }
}


export const fetchVaccineData = async (country) => {
    let changeableUrl = `${urlVacine}?lastdays=30`;
    if (country) {
        changeableUrl = `${urlVacine}/countries/${country}?lastdays=all`;
    };

    try {
        const data = await axios.get(changeableUrl);

        let vaccineArray = [];
        let dateArray = [];
        let allDaysCases = [];

        let modifieData;

        if (country) {
            typeof data.data.timeline === "object" ? modifieData = data.data.timeline : modifieData = data.data.message;
        } else {
            modifieData = data.data;
        }

            for (const [key, value] of Object.entries(modifieData)) {
                vaccineArray.push(value);
                var splitted = key.split("/");
                var dateStr = "20" + splitted[2] + "-" + splitted[0] + "-" + splitted[1];
                dateArray.push(dateStr);
            }


        vaccineArray.map((value, i) => {
            if (i === 0) {
                allDaysCases.push( value );
            } else {
                let lastIndex = i - 1;
                let lastIndexValue = vaccineArray[lastIndex];
                let newIndexValue = value - lastIndexValue;
                allDaysCases.push( newIndexValue )
            }
        });

        let allCases = { cases: vaccineArray[vaccineArray.length - 1], updated: dateArray[dateArray.length - 1] };
        let todayCases = { cases: vaccineArray[vaccineArray.length - 1] - vaccineArray[vaccineArray.length - 2], updated: dateArray[dateArray.length - 1] };

        return { allCases, todayCases, "allDaysCases": [allDaysCases, dateArray] };
    
    } catch (error) {
        console.log(error);
        return { "allCases": {cases: 0, updated: new Date('0-0-0')}, "todayCases": {cases: 0, updated: new Date('0-0-0')}, "allDaysCases": [[],[]] };
    }
}


export const fetchCountries = async () => {
    try {
        const { data } = await axios.get(`${url}/countries`)
        return data.map((data) => data.country)
    } catch (error) {
        console.log(error);
    }
}