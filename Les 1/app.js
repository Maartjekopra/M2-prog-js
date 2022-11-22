class App {
    runapplication() {
        console.log("hello world");
        let appname = "Crunchtime";
        let version = 0.9;
        let releasedate = new Date("10-5-2020");
        let author = "Maartje Kopra";
        let copyright = "";
        let distributor = "MA college";
        let darkmode = true;

        console.log(appname);
        console.log(version);
        console.log(releasedate);
        console.log(author);
        console.log(copyright);
        console.log(distributor);
        console.log(darkmode);

    }
}

let app = new App();
app.runapplication();
