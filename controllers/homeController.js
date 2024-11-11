import Url from "../models/Url.js";
import { nanoid } from "nanoid";

// Read URLs
export const readUrls = async (req, res) => {
  try {
    const urls = await Url.find().lean();
    res.render("home", { urls: urls });
  } catch (error) {
    console.log(error);
    res.send("something went wrong");
  }
};

// Add
export const addUrl = async (req, res) => {
  try {
    const { origin } = req.body;
    if (!origin || origin.trim() === '') {
      return res.status(400).send("Origin URL cannot be empty.");
    }
    const url = new Url({ origin: origin, shortURL: nanoid(8) });
    await url.save();
    res.redirect("/");
  } catch (error) {
    console.log(error);
    res.send("Something went wrong.");
  }
};

// Delete
export const deleteUrl = async (req, res) => {
  try {
    const { id } = req.params;
    await Url.findByIdAndDelete(id);
    res.redirect("/");
  } catch (error) {
    console.log(error);
    res.send("something went wrong");
  }
};

// Edit URL form
export const editUrlForm = async (req, res) => {
  const { id } = req.params;
  try {
    const urlDB = await Url.findById(id).lean();
    res.render("home", { urlDB });
  } catch (error) {
    console.log(error);
    res.send("something went wrong");
  }
};

// Update
export const editUrl = async (req, res) => {
  const { id } = req.params;
  const { origin } = req.body;
  try {
    await Url.findByIdAndUpdate(id, { origin: origin });
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
};

// Redirect
export const redirect = async (req, res) => {
  const { shortURL } = req.params;
  try {
    const urlDB = await Url.findOne({ shortURL: shortURL });
    if (!urlDB) {
      return res.status(404).send("URL not found");
    }
    res.redirect(urlDB.origin);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
};
