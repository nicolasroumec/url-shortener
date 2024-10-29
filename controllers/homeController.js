import Url from '../models/Url.js';
import { nanoid } from 'nanoid';

export const leerUrls = async (req, res) => {
  try {
    const urls = await Url.find().lean();
    res.render("home", { urls: urls });
  } catch (error) {
    console.log(error);
    res.send("Something went wrong");
  }
};

export const agregarUrl = async (req, res) => {
  try {
    const { origin } = req.body;
    const url = new Url({ origin: origin, shortURL: nanoid(8) });
    await url.save();
    res.redirect("/");
  } catch (error) {
    console.log(error);
    res.send("Something went wrong");
  }
};
