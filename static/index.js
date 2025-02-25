document.addEventListener("DOMContentLoaded", function () {
    let url = "https://randomuser.me/api/";
    let risorsa;

    risorsa = fetch(url).then(
        function (resp) {
            console.log(risorsa);
            console.log(resp);

            return resp.json();
        }
    ).then(
        function (data) {
            console.log(data.value);
        }
    ).catch(
        function (err) {
            console.log(err);
        }
    );

    console.log(risorsa);
    
    
});
