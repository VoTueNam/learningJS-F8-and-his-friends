
const nvt = require('node-virustotal');
const defaultTimedInstance = nvt.makeAPI();

class virusTotal {
    app(url) {
        const hashed = nvt.sha256(url);
        const theSameKey = defaultTimedInstance.setKey('3603b9eebdd57284643ace954577ff8d2d6415c027d20c867a22d8c7597e5431');
        defaultTimedInstance.urlLookup(hashed, function (err, resp) {
            if (err) {
                console.log('Well, crap.');
                return err
            }

            var temp = JSON.parse(resp)
            temp = temp.data.attributes.last_analysis_results;


            //Get all engine name
            var engine = [];
            for (var k in temp) engine.push(k);
            //console.log(engine)

            //Get all type
            const type = new Map();
            for (var k in engine) {
                type.set(temp[engine[k]].result, 1);

            }
            //console.log(type)

            //Convert Map to Array
            let array = Array.from(type, ([name, value]) => ({
                name,
                value
            }));


            //Get result for each engine
            const value = new Map();
            //var clean = malware = unrated = malicious = 1;
            for (var index in engine) {
                //Get number of type
                for (let count = 0; count < array.length; count++) {
                    //push type name and quantity of that type
                    if (temp[engine[index]].result == array[count].name) {
                        value.set(array[count].name, array[count].value++)
                    }
                }
            }

            var ketqua = []
            for (let count = 0; count < array.length; count++) {

                //console.log(array[count].name + " = " + (Number(value.get(array[count].name)) / engine.length * 100).toFixed(2) + "%")
                var arr = [array[count].name, (Number(value.get(array[count].name)) / engine.length * 100).toFixed(2)]
                //ketqua += array[count].name + " = " + (Number(value.get(array[count].name)) / engine.length * 100).toFixed(2) + "%"
                ketqua.push(arr)
            }

            /**
             * ketqua = [
             *  [name1: percent],
             *  [name2: percent],
             *  [name3: percent]
             * ]
             */
            console.log(ketqua);
            return ketqua
        })
    }
}


virusTotal.app('http://meet.google.com/')
