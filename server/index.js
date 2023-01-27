import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';
import mongoose from 'mongoose';
import clientRoutes from './routes/clientRoutes.js';
import generalRoutes from './routes/generalRoutes.js';
import managementRoutes from './routes/managementRoutes.js';
import salesRoutes from './routes/salesRoutes.js';

/* DATA IMPORTS */
import User from './models/userModel.js';
import Product from './models/productModel.js';
import ProductStat from './models/productStatModel.js';
import Transaction from './models/transactionModel.js';
import OverallStat from './models/overAllStatModel.js';
import AffiliateStat from './models/affiliateStatModel.js';
import {
  dataUser,
  dataProduct,
  dataProductStat,
  dataTransaction,
  dataOverallStat,
  dataAffiliateStat,
} from './data/index.js';

/* CONFIGURATION */
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }));
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

/* ROUTES */
app.use('/client', clientRoutes);
app.use('/general', generalRoutes);
app.use('/management', managementRoutes);
app.use('/sales', salesRoutes);

/* MONGOOSE SETUP */
const PORT = process.env.PORT || 9000;
mongoose.set('strictQuery', false);
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server listening on Port: ${PORT}`);
      /* ONLY ADD DATA ONE TIME */
      //Product.insertMany(dataProduct);
      //ProductStat.insertMany(dataProductStat);
      //Transaction.insertMany(dataTransaction);
      ///OverallStat.insertMany(dataOverallStat);
      //AffiliateStat.insertMany(dataAffiliateStat);
      //User.insertMany(dataUser);
    });
  })
  .catch((error) => console.log(`${error.message} did not connect`));
