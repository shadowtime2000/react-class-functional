const fs = require("fs");
const babel = require("babel-core");
const reactClassFunctional = require("./index");

fs.readFile(process.argv[2], (err, data) => {
  if (err) throw err;

  console.log(data.toString());

  console.log(
    babel.transform(data.toString(), {
      plugins: [
        require("babel-plugin-transform-react-jsx"),
        reactClassFunctional,
      ],
    }).code
  );
});
