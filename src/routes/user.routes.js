const{ Router } = require ("express");

const multer = require('multer');
const uploadConfig = require('../configs/upload')

const UsersAvatarController = require('../controllers/UsersAvatarController')
const UsersController = require('../controllers/UsersController');
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const usersRoutes = Router();
const upload = multer(uploadConfig.MULTER);



const usersAvatarController = new UsersAvatarController();
const usersController = new UsersController();

usersRoutes.post("/", usersController.create);

usersRoutes.put("/",ensureAuthenticated, usersController.update);

usersRoutes.patch("/avatar", ensureAuthenticated, upload.single("avatar"),usersAvatarController.update);

module.exports = usersRoutes;