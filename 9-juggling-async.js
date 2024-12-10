let http = require("http");
let answers = [null, null, null];
let urls = process.argv.slice(2);

for (let i = 0; i < urls.length; i++) {
  ((i) => {
    http.get(urls[i], (request) => {
      let result = "";
      request.setEncoding("utf8");
      request.on("data", (data) => {
        result += data;
      });
      request.on("end", () => {
        answers[i] = result;
        let n = 0;
        for (let j = 0; j < answers.length; j++) {
          if (answers[j] != null) n++;
        }
        if (n == answers.length) {
          for (let k = 0; k < answers.length; k++) {
            console.log(answers[k]);
          }
        }
      });
    });
  })(i);
}
