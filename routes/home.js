import express from "express";
import {
  readUrls,
  addUrl,
  deleteUrl,
  editUrl,
  editUrlForm,
  redirect,
} from "../controllers/homeController.js";
import { validateUrl } from "../middlewares/validateUrl.js";

const router = express.Router();

router.get("/", readUrls);
router.post("/", validateUrl, addUrl);
router.get("/delete/:id", deleteUrl);
router.post("/edit/:id", validateUrl, editUrl);
router.get("/edit/:id", editUrlForm);
router.get("/:shortURL", redirect);

export default router;