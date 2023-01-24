//framework ile ilgili ayarlamari yaptigimiz bolum
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl :"https://www.google.com",
    projectId: "zdhnou",
    "video": false,
    //false yazdigimizda videolari kaydetmeden testleri calistirir
    //"video": true, testleri calistirdigimizda videolari kaydeder
    //default olarak "video": true dur.

    //"retries": 2
    //"retries": 2 bu kod test fail oldugunda onu kac kez calistiracagimizi belirliyoruz
    // "retries": 2 bir kere calistirdiktan sonra hata alirsa 2 defa daha dene


  },
});
