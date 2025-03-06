const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', // ชื่อผู้ใช้ MySQL (ค่าเริ่มต้นของ XAMPP คือ root)
    password: '', // รหัสผ่าน (ค่าเริ่มต้นของ XAMPP ไม่มีรหัสผ่าน)
    database: 'secondhandsports', // แก้เป็นชื่อฐานข้อมูลของคุณ
});

// เชื่อมต่อฐานข้อมูล
db.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err);
        return;
    }
    console.log('Connected to MySQL Database');
});

module.exports = db;
