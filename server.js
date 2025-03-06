const express = require('express');
const db = require('./configdb'); // เรียกใช้ configdb.js
const app = express();
const port = 3000;

// Middleware สำหรับจัดการ JSON requests
app.use(express.json());

// กำหนดเส้นทางหลัก
app.get('/', (req, res) => {
    res.send('Hello, Express Server!');
});

// API ดึงข้อมูลจากตาราง users
app.get('/api/users', (req, res) => {
    const sql = 'SELECT * FROM users';
    db.query(sql, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ users: results });
    });
});

// เริ่มเซิร์ฟเวอร์
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
