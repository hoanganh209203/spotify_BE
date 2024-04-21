import express from "express";
import { searchByKeyword } from "../controllers/search.controller.js";

const routerSearch = express.Router();

routerSearch.get("/", searchByKeyword);

export default routerSearch;
