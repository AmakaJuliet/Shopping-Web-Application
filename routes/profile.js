const express = require("express");
const { getProfileDataByParams, getProfileDataByQuery } = require("../controllers/profile");
const profile_router = express.Router();

// profile routers
profile_router.get("/", getProfileDataByQuery);

profile_router.get("/:item", getProfileDataByParams);

module.exports = profile_router;