const express = require('express');
const app = express();
const PORT = process.env.PORT || 3006;

app.get('/', (req, res) => {
    res.json({ message: 'Advertise service is running' });
});

app.listen(PORT, () => {
    console.log(`Advertise service running on port ${PORT}`);
});
