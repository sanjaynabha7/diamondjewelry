import initDB from '../../helper/initDB'
import Blogs from '../../models/blogs'
initDB()


export default async function (req, res) {

    const { method } = req
    switch (method) {
        case "GET":
            try {
                const data = await Blogs.find().lean()
                return res.status(200).send(data)
            } catch (error) {
                return res.status(503).send(error)
            }
        case "POST":
            try {
                const blog = new Blogs(req.body)
                const result = await blog.save()
                return res.status(201).send(result)
            } catch (error) {
                return res.status(503).send(error)
            }

    }


}
