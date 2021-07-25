import express from 'express'
import { graphqlHTTP } from 'express-graphql'
import schema from './graphql/schema'
import { connect } from './database'
import dotenv from 'dotenv'

dotenv.config();

connect();

const app = express();

app.set('port', process.env.PORT || 3000);

app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema: schema
}));

app.listen(app.get('port'), () => console.log(`Server on port ${app.get('port')}`));