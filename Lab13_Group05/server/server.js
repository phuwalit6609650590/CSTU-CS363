
const express = require('express')
const app = express()
const cors = require('cors')
const fs = require('fs').promises

app.use(express.json())
app.use(cors())

app.get('/api/products/all', async(req, res)=>{
    const data = await fs.readFile('./it-gadgets.json', 'utf-8')
    const parseData = JSON.parse(data)

    return res.status(200).send(parseData.items)
})
app.get('/api/product/:id', async(req, res) => {
    
        const targetId = req.params.id;
        const data = await fs.readFile('./it-gadgets.json', 'utf-8');
        const parseData = JSON.parse(data);

        const foundItem = parseData.items.find(item => String(item.id) === targetId);
        if (!foundItem) {
            return res.status(404);
        }
        return res.status(200).send(foundItem);

});

// Post
app.post('/api/products/add', async (req, res) => {
    try {
        const newProduct = req.body;

        if (!newProduct || Object.keys(newProduct).length === 0) {
            return res.status(400).json({ message: "Invalid product data" });
        }

        const data = await fs.readFile('./it-gadgets.json', 'utf-8');
        const parseData = JSON.parse(data);

        parseData.items.push(newProduct);
        parseData.totalItems = parseData.items.length;

        await fs.writeFile('./it-gadgets.json', JSON.stringify(parseData, null, 2));

        return res.status(201).json({
            message: "Product added successfully",
            product: newProduct
        });
    } catch (error) {
        return res.status(500).json({ message: "Internal Server Error" });
    }
});

app.listen(3001, ()=>{
    console.log('Server on port 3001')
})
