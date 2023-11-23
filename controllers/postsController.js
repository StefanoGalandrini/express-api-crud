const express = require('express');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const generateSlug = require('../utilities/generateSlug');

// index - read all posts

/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */
async function index(req, res)
{
	try
	{
		const posts = await prisma.post.findMany();
		res.json(posts);
	} catch (error)
	{
		res.status(500).json({ error: error.message });
	}
}





module.exports = {
	index,
};
