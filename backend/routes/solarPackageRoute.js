import express from 'express'
import { listSolarPackages, addSolarPackage, removeSolarPackage, singleSolarPackage, updateSolarPackage } from '../controllers/solarPackageController.js'
import upload from '../middleware/multer.js';
import adminAuth from '../middleware/adminAuth.js';

const solarPackageRouter = express.Router();

solarPackageRouter.post('/add', adminAuth, upload.fields([{name:'image1',maxCount:1},{name:'image2',maxCount:1},{name:'image3',maxCount:1},{name:'image4',maxCount:1}]), addSolarPackage);
solarPackageRouter.post('/remove', adminAuth, removeSolarPackage);
solarPackageRouter.post('/single', singleSolarPackage);
solarPackageRouter.post('/update', adminAuth, upload.fields([{name:'image1',maxCount:1},{name:'image2',maxCount:1},{name:'image3',maxCount:1},{name:'image4',maxCount:1}]), updateSolarPackage);
solarPackageRouter.get('/list', listSolarPackages);

export default solarPackageRouter
