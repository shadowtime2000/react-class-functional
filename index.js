const template = require("@babel/template");

module.exports = (babel) => {
  const t = babel.types;
  return {
    visitor: {
      VariableDeclaration: function (path) {
        /*const render = path.node.declarations[0].init.arguments[0].properties.filter(
          (e) => e.key.loc.identifierName == "render"
        )[0];*/
        /*const componentDidMount =
          path.node.declarations[0].init.arguments[0].properties.filter(
            (e) => e.key.loc.identifierName == "componentDidMount"
          )[0] || null;*/
                  /*const componentDidUpdate =
            path.node.declarations[0].init.arguments[0].properties.filter(
              (e) => e.key.loc.identifierName == "componentDidUpdate"
            )[0] || null;*/

        let render;
        let componentDidMount;

        for (var i in path.node.declarations[0].init.arguments[0].properties) {
          if (path.node.declarations[0].init.arguments[0].properties[i].key.name === "render") {
            render = path.node.declarations[0].init.arguments[0].properties[i];
          } else if (path.node.declarations[0].init.arguments[0].properties[i].key.name === "componentDidMount") {
            componentDidMount = path.node.declarations[0].init.arguments[0].properties[i];
          }
        }

        const blockStatement = [];

        if (componentDidMount !== undefined) {
          blockStatement.push(
            t.functionDeclaration(
              t.identifier("componentDidMount"),
              [],
              componentDidMount.body
            )
          );
          blockStatement.push(
            template.statement(`useEffect(componentDidMount)`)()
          );
        }

        blockStatement.push(
          t.returnStatement(
            render.body.body[render.body.body.length - 1].argument
          )
        );

        path.replaceWith(
          t.functionDeclaration(
            path.node.declarations[0].id,
            [t.identifier("props")],
            t.blockStatement(blockStatement)
          )
        );
      },
    },
  };
};
