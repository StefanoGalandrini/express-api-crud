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
		const { published, string } = req.query;
		let queryOptions = {};
		if (published)
		{
			queryOptions.where = {
				...queryOptions.where,
				published: published === "true"
			};
		}

		if (string)
		{
			queryOptions.where = {
				...queryOptions.where,
				OR: [
					{
						title: {
							contains: string,
						}
					},
					{
						content: {
							contains: string,
						}
					},
				],
			};
		}

		const posts = await prisma.post.findMany(queryOptions);
		res.json(posts);
	} catch (error)
	{
		res.status(500).json({ error: error.message });
	}
}


// create - create a new post

/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */
async function create(req, res)
{
	try
	{
		const { title, image, content, published } = req.body;
		const slug = await generateSlug(title);

		const newPost = await prisma.post.create({
			data: {
				title,
				slug,
				image,
				content,
				published,
			}
		});

		res.json(newPost);
	} catch (error)
	{
		res.status(500).json({ error: error.message });
	}
}




module.exports = {
	index,
	create,
};
