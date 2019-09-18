let searchBar = document.querySelector('.search-bar');
let resultIndex = 0;
let searchResults = [];
let pageUrlArray = ['/conseil-municipal', '/upcoming-events', '/archived-events', '/calendar', '/associations']
let pageAliasArray = ['Municipal council', 'Comming soon!', 'You missed it ...', 'calendar', 'Associations']


function loadResult(research) {

    const searched = research;
    const myHeaders = new Headers();

    const myInit = {
        method: 'GET',
        headers: myHeaders,
        mode: 'cors',
        cache: 'default'
    };

    for (let index = 0; index < pageUrlArray.length; index++) {

        const url = pageUrlArray[index];
        const alias = pageAliasArray[index];
        const myRequest = new Request(url, myInit);
        const searchListGroup = document.querySelector('.search-list-group');

        // Emptying previous value
        searchListGroup.innerHTML = '';
        searchResults = [];


        fetch(myRequest, myInit)
            .then(function (response) {
                response.text().then(function (text) {
                    
                    const parser = new DOMParser();
                    const htmlDoc = parser.parseFromString(text, 'text/html');
                    const pageReleventsElement = htmlDoc.querySelectorAll("h1");

                    for (let index = 0; index < pageReleventsElement.length; index++) {

                        const element = pageReleventsElement[index];
                        const researchedElement = element.innerHTML;

                        resultIndex += 1;

                        searchResults.push({
                            page: alias,
                            link: url,
                            content: researchedElement
                        });
                        
                        if (researchedElement.search(searched) != -1 && research != "") {

                            let displayResearch = researchedElement.replace(searched, "<span class='font-weight-bold text-danger'>" + searched + "</span>");

                            searchListGroup.innerHTML += '<li class="list-group-item h6"><a href="' + url + '" class="h6">' + displayResearch + ' (' + alias + ')</a></li>';
                        }

                    }

                })


            })

    }


}

searchBar.addEventListener("keyup", function () {
    let searchText = searchBar.value
    loadResult(searchText);
})
