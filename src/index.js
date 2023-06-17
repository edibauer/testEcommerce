// import modules
import express from 'express'
import pool from './config/db.js'
import ejs from 'ejs'
import path from 'path'
import { fileURLToPath } from 'url'
import session from 'express-session'

// app
const app = express()
const __dirname = path.dirname(fileURLToPath(import.meta.url))
// console.log(__dirname)

// config
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

// middlewares
app.use(express.json())
app.use(express.text())
app.use(express.urlencoded({ extended: false })) //data from forms
app.use(express.static(path.join(__dirname, 'public')))
app.use(session({ 
    secret: 'secret',
    resave: false,
    saveUninitialized: false
 }))

// routes
app.get('/', async (req, res) => {
    const [rows] = await pool.query('select * from products')
    console.log(rows)

    res.render('index', { rows: rows })
})

app.get('/cartitems', (req, res) => {
    // data or fucntions
    // destructuring session to verifies that cart exists
    const { cart } = req.session

    // if cart doenst exost
    if (!cart) return res.send('you have no cart session')

    // if cart exists
    return res.send(cart)
})

app.post('/test', (req, res) => {
    // data or functions
    const { item, quantity } = req.body
    const cartItem = {
        item,
        quantity
    }
    
    // save item in session
    const { cart } = req.session
    
    // if cart exist, it is not the firs time that the user visit the page. Put the items in the cart
    if(cart) {
      req.session.cart.items.push(cartItem)  
    } else {
        req.session.cart = {
            items: [cartItem]
        }
    }

    return res.send('check cookie')
})

app.post('/cart', (req, res) => {
    // data or fucntions
    const { id, name, price, quantity } = req.body

    console.log(id)
    console.log(name)
    console.log(price)
    console.log(quantity)
})

// listen
app.listen(3600, () => {
    console.log('server running on port 3600')
})