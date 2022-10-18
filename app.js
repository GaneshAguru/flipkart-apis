let express=require('express');
let fs=require('fs');
let app=express();
//for reading value from .env file
let dotenv=require('dotenv');
dotenv.config()
//for logging purpose
let morgan=require('morgan');
let port=process.env.PORT||9800;
let cors=require('cors');
let mongo=require('mongodb')
let MongoClient=mongo.MongoClient;
// let mongoUrl=process.env.MongoLocal;
// let mongoUrl=process.env.MongoLive;
let mongoUrl="mongodb+srv://admin:admin123@cluster0.6kcw1qx.mongodb.net/flipkart?retryWrites=true&w=majority"
let bodyParser=require('body-parser')
let db;


//middleware
app.use(morgan('short',{stream:fs.createWriteStream('./app.logs')}))
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())


app.get('/',(req,res)=>{
    res.send('This is from Express App code------>(Ganesh Aguru)')
})
//list of appliances
app.get('/appliances',(req,res)=>{
    // res.send('This is home page-->GaneshAguru')
    db.collection('appliances').find().toArray((err,result)=>{
        if(err) throw err
        res.send(result)
    })
})

//list of categories
app.get('/categories',(req,res)=>{
    // res.send('This is home page-->GaneshAguru')
    db.collection('categories').find().toArray((err,result)=>{
        if(err) throw err
        res.send(result)
    })
})

//list of electronics
app.get('/electronics',(req,res)=>{
    // res.send('This is home page-->GaneshAguru')
    db.collection('electronics').find().toArray((err,result)=>{
        if(err) throw err
        res.send(result)
    })
})


//list of fashions
app.get('/fashion',(req,res)=>{
    // res.send('This is home page-->GaneshAguru')
    db.collection('fashion').find().toArray((err,result)=>{
        if(err) throw err
        res.send(result)
    })
})

//list of groceries
app.get('/groceries',(req,res)=>{
    // res.send('This is home page-->GaneshAguru')
    db.collection('groceries').find().toArray((err,result)=>{
        if(err) throw err
        res.send(result)
    })
})

//list of home
app.get('/home',(req,res)=>{
    // res.send('This is home page-->GaneshAguru')
    db.collection('home').find().toArray((err,result)=>{
        if(err) throw err
        res.send(result)
    })
})

//list of mobiles
app.get('/mobiles',(req,res)=>{
    // res.send('This is home page-->GaneshAguru')
    db.collection('mobiles').find().toArray((err,result)=>{
        if(err) throw err
        res.send(result)
    })
})


//list of topOffers
app.get('/topOffers',(req,res)=>{
    // res.send('This is home page-->GaneshAguru')
    db.collection('topOffers').find().toArray((err,result)=>{
        if(err) throw err
        res.send(result)
    })
})




app.get('/main/address',(req,res)=>{
    res.send('1-119, lingalavalasa, Gajapathinagaram, Vizianagaram, Andhra Pradesh 535270-India')
})

//connection with mongoClient
MongoClient.connect(mongoUrl,(err,client)=>{
    if(err) console.log(`Error while connecting`);
    db=client.db('flipkart')

    app.listen(port,()=>{
        console.log(`listening to port ${port}`)
    })

})



// app.listen(port,()=>{
//     console.log(`listening to port ${port}`)
// })
