async function doChallenge() {

    fetch('https://http-challenge.multiverse-coaches.io/').then(function (response) {
        response.text().then(function (text) {
            const response1 = text;
            var mydiv = document.getElementById("responses");
            var newcontent = document.createElement("div");
            newcontent.className = 'div_item'
            newcontent.innerHTML = response1;
            mydiv.appendChild(newcontent)
        });
    });

    fetch('https://http-challenge.multiverse-coaches.io/apprentices',
        {
            method: "POST",
            body: JSON.stringify({
                name: "Sam Townsend"
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(function (response) {
            response.text()
                .then(function (text) {
                    const response1 = text;
                    var mydiv = document.getElementById("responses");
                    var newcontent = document.createElement("div");
                    newcontent.className = 'div_item'
                    newcontent.innerHTML = response1;
                    mydiv.appendChild(newcontent)
                    const [yourId] = text.match(/(?<=\/)[a-zA-Z0-9]+(?=')/);
                    console.log(yourId);
                    return fetch('https://http-challenge.multiverse-coaches.io/apprentices/' + yourId, {
                        headers: {
                            "Your-Id": yourId
                        }
                    })
                        .then(function (response) {
                            response.text().then(function (text) {
                                const response1 = text;
                                var mydiv = document.getElementById("responses");
                                var newcontent = document.createElement("div");
                                newcontent.className = 'div_item'
                                newcontent.innerHTML = response1;
                                mydiv.appendChild(newcontent)
                            })

                            var details = {
                                'guests': 'Buffet, Besos, Branson',
                            };

                            var formBody = [];
                            for (var property in details) {
                                var encodedKey = encodeURIComponent(property);
                                var encodedValue = encodeURIComponent(details[property]);
                                formBody.push(encodedKey + "=" + encodedValue);
                            }
                            formBody = formBody.join("&");
                            return fetch(
                                'https://http-challenge.multiverse-coaches.io/apprentices/' + yourId, {
                                    method: "PATCH",
                                    headers: {
                                        "Your-Id": yourId,
                                        "Content-Type": "application/x-www-form-urlencoded"
                                    },
                                    body: formBody
                                })

                                .then(function (response) {
                                    response.text().then(function (text) {
                                        const response1 = text;
                                        var mydiv = document.getElementById("responses");
                                        var newcontent = document.createElement("div");
                                        newcontent.className = 'div_item'
                                        newcontent.innerHTML = response1;
                                        mydiv.appendChild(newcontent)
                                    })

                                    var url = new URL('https://http-challenge.multiverse-coaches.io/apprentices/' + yourId + '/menus')
                                    var params = {starter: 'soup', main: 'steaks', dessert: 'sticky toffee pudding'} // or:
                                    url.search = new URLSearchParams(params).toString();
                                    console.log(url.href)
                                    return fetch(url)
                                        .then(function (response) {
                                            response.text().then(function (text) {
                                                const response1 = text;
                                                var mydiv = document.getElementById("responses");
                                                var newcontent = document.createElement("div");
                                                newcontent.className = 'div_item'
                                                newcontent.innerHTML = response1;
                                                mydiv.appendChild(newcontent)
                                            })

                                            return fetch(
                                                'https://http-challenge.multiverse-coaches.io/apprentices/' + yourId, {
                                                    method: "DELETE"
                                                }).then(function (response) {
                                                response.text().then(function (text) {
                                                    const response1 = text;
                                                    var mydiv = document.getElementById("responses");
                                                    var newcontent = document.createElement("div");
                                                    newcontent.className = 'div_item'
                                                    newcontent.innerHTML = response1;
                                                    mydiv.appendChild(newcontent)
                                                })
                                            })
                                        })

                                })
                        })

                })
        })
}

doChallenge()
