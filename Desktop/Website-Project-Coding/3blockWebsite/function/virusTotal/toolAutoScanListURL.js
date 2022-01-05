require("./constants");
const fs = require("fs");
var calculatePercent = require("./analysisResVTAPI");
var hashURL = require("./hashURL.js");
const axios = require("axios").default;

async function checkURLFile(url, API_KEY) {
    const id = hashURL(url);

    const options = {
        method: "GET",
        url: "https://www.virustotal.com/api/v3/urls/" + id,
        headers: {
            Accept: "application/json",
            "x-apikey": API_KEY,
        },
    };

    return new Promise((resolve, reject) => {
        axios
            .request(options)
            .then(function (response) {
                return response.data.data.attributes;
            })
            .then((res) => {
                //console.log(calculatePercent(res));
                resolve(calculatePercent(res));
            })
            .catch(function (err) {
                //console.log(url, "err");
                //console.log(err);
                resolve("err");
            });
    });
}

async function test() {
    var listURL = [];
    var listError = [];
    var listResult = [];
    try {
        const data = fs.readFileSync("./maindomain.json", "utf8");

        // parse JSON string to JSON object
        const databases = JSON.parse(data);

        // print all databases
        var i = 0;
        databases.forEach((db) => {
            //console.log(`${db.URL} - ${db.Definition}`);
            listURL.push([db.URL, db.Definition]);
        });
    } catch (err) {
        console.log(`Error reading file from disk: ${err}`);
    }
    try {
        //console.log(listURL);
        console.log(listURL.length);
        var x = 0,
            k = 0;
        for (var i of listURL) {
            const a = await checkURLFile(i[0], API_KEY_VIRUSTOTAL[x]);
            console.log(typeof a);
            if (a == "err") {
                listError.push(i);
                console.log(i[0], " - 404");
                await new Promise((resolve) => setTimeout(resolve, 1000));
                continue;
            }
            a.Definition = i[1];
            //const a = await checkURLFile(i, API_KEY_VIRUSTOTAL[x]);
            k++;
            // //console.log(a);
            console.log(k, i, " - done! ", x, API_KEY_VIRUSTOTAL[x]);
            x++;
            listResult.push(a);
            if (x == 15) {
                x = 0;
            }
            await new Promise((resolve) => setTimeout(resolve, 1000));
        }
    } catch (error) {
        console.log(error);
    }
    //console.log(listResult);
    try {
        // convert JSON object to a string
        const data = JSON.stringify(listResult, null, 4);

        // write file to disk
        fs.writeFileSync("./user.json", data, "utf8");

        console.log(`File is written successfully!`);
    } catch (err) {
        console.log(`Error writing file: ${err}`);
    }
    //console.log(listError);
    try {
        // convert JSON object to a string
        const data = JSON.stringify(listError, null, 4);

        // write file to disk
        fs.writeFileSync("./error.json", data, "utf8");

        console.log(`File is written successfully!`);
    } catch (err) {
        console.log(`Error writing file: ${err}`);
    }
}

test();
