function init() {
   
    let button = document.getElementById("submit");
    let form = document.getElementById("searchForm");
    let query = document.getElementById("query");

    let actions = {
        "google": "https://www.google.com/search",
        "ddg": "https://duckduckgo.com/",
        "bing": "https://www.bing.com/search",
        "ask": "https://www.ask.com/web?o=0&l=dir&qo=serpSearchTopBox&"
     };

    button.onclick = function() {
        let searchSelected = document.querySelector("input[name=engine]:checked").value;
        form.setAttribute("action", actions[searchSelected]);


        // if (searchSelected === "google") {
        //     form.setAttribute("action", "https://www.google.com/search");
        // } else if (searchSelected === "ddg") {
        //     form.setAttribute("action", "https://duckduckgo.com/");
        // } else if (searchSelected === "bing") {
        //     form.setAttribute("action", "https://www.bing.com/search");
        // } else if (searchSelected === "ask") {
        //     form.setAttribute("action", "https://www.ask.com/web?o=0&l=dir&qo=serpSearchTopBox&");
        // }
    };
}

window.onload = init;