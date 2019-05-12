const dinoql= require("dinoql")
const gql = require("graphql-tag");
const users = {
    users: [
        {
            name:"dalong",
            age:33,
            tag:"local"
        },
        {
            name:"system",
            age:32,
            tag:"system"
        }
    ]
}
const query = gql`
query Userinfo {
   users(mergeTag: "--dalongdemo--") {
      name
      age
   }
}
`
const mergeTag = (list, right) => {
    return list.map(item => ({ ...item, age: item.tag + right }));
  };
dinoql.addResolvers(({ mergeTag }));
const queryResult = dinoql(users)(query)
console.log(JSON.stringify(queryResult))
