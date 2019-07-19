module.exports = {
    getExampleResponse: async (req, res) => {
        const exampleObject = {
            hello: "world"
        }
        return res.status(200).json(exampleObject)
    }
}