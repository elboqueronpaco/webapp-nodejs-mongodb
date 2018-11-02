import express from 'express'
import engine from 'ejs-mate'
import path from 'path'
import config from './config'
import router from './routes/index'

const app = express(),
    c = console.log

app
    //settings
    .set('views', path.join(__dirname, 'views'))
    .engine('ejs', engine)
    .set('view engine', 'ejs')
    .set('port', process.env.PORT)
    //Router
    .use('/',router)
    //starting the server
    .listen(app.get('port'), () =>{
        c(`WebApp iniciado en el servidor: ${app.get('port')}`)
    })
c(
    '*************** VARIABLE DE ENTRONO ********** \n',
    process.env.NODE_ENV,
    '\n',
    process.env.URLDB,
    '\n',
    process.env.PORT,
    ' \n*************** VARIABLE DE ENTRONO **********'
)

export default app