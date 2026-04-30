
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

})

app.listen(3001, ()=>{
    console.log('Server on port 3001')
})