const  GameSource={   // JS object creation literal
    apiCallFree(params) {
        return fetch(BASE_URL_FREE+params, {
            "method": "GET",              // HTTP method
        })

            // check HTTP response
            .then(response => {if (response.status != 200) throw "egenError status: " + response.status + " statusText: " + response.statusText;
                return response})

            // from HTTP response headers to HTTP response data
            .then(response => response.json())   ;
    }
    ,   // comma between object entries

    apiCall(params) {
        return fetch(BASE_URL+params+API_KEY, {
            "method": "GET",              // HTTP method
        })

            // check HTTP response
            .then(response => {if (response.status != 200) throw "egenError status: " + response.status + " statusText: " + response.statusText;
                return response})

            // from HTTP response headers to HTTP response data
            .then(response => response.json())   ;
    }
    ,

    testMetod() {
        return GameSource.apiCallFree("word?number=1")
            .then(data => console.log(data));
    }

    ,
    searchWordFree() {
        return GameSource.apiCallFree("word?number=1")
            .then(data => data);
    }
    ,
    searchWordsFree() {
        return GameSource.apiCallFree("word?number=20")
            .then(data => data);
    }
    ,
    searchWord() {
        return GameSource.apiCall("words.json/randomWord?hasDictionaryDef=true&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=-1&api_key=")
            .then(data => data);
    },

    searchWords() {
        return GameSource.apiCall("words.json/randomWords?hasDictionaryDef=true&maxCorpusCount=-1&minDictionaryCount=19&maxDictionaryCount=-1&minLength=5&maxLength=-1&limit=20&api_key=")
            .then(data => data);
    },

    getDefinitionsFromAPI(params) {
        return GameSource.apiCall("word.json/"+params+"/definitions?limit=10&includeRelated=false&useCanonical=false&includeTags=false&api_key=")
            .then(data => data);
    },

    getExampleFromAPI(params) {
        return GameSource.apiCall("word.json/"+params+"/examples?includeDuplicates=false&useCanonical=false&limit=10&api_key=")
            .then(data => data);
    }

};