const express = require('express');
const router = express.Router();
const mysql = require('mysql2');

// สร้าง connection pool สำหรับ MySQL
const pool = mysql.createPool({
    host: 'db', // service name ใน Docker
    user: 'admin',
    password: '1111',
    database: 'database_contracts',
    waitForConnections: true,
    connectionLimit: 10, // ตั้งค่าการเชื่อมต่อสูงสุด
    queueLimit: 0
});

// เชื่อมต่อ MySQL
pool.getConnection((err, connection) => {
    if (err) {
        console.error('การเชื่อมต่อฐานข้อมูลล้มเหลว:', err);
        return;
    }
    console.log('เชื่อมต่อฐานข้อมูลสำเร็จ');
    connection.release(); // ปล่อย connection หลังจากตรวจสอบการเชื่อมต่อ
});

router.get('/contracts', (req, res) => {
    pool.query('SELECT * FROM contracts ORDER BY id DESC', (err, results) => {
        if (err) {
            console.error('เกิดข้อผิดพลาดในการดึงข้อมูล: ', err);
            return res.status(500).json({ error: 'เกิดข้อผิดพลาดในการดึงข้อมูลจากฐานข้อมูล' });
        }
        res.json(results);
    });
});

router.post('/contracts', (req, res) => {
    const { id_contracts } = req.body;
    const abi = "abi";
    const bytecode = "bytecode";
    if (!id_contracts) {
        return res.status(400).json({ error: 'กรุณาระบุ id_contracts' });
    }

    pool.query('INSERT INTO contracts (id_contracts, abi, bytecode) VALUES (?, ?, ?)', [id_contracts, abi, bytecode], (err, results) => {
        if (err) {
            console.error('เกิดข้อผิดพลาดในการบันทึกข้อมูล: ', err);
            return res.status(500).json({ error: 'เกิดข้อผิดพลาดในการบันทึกข้อมูลลงในฐานข้อมูล' });
        }

        res.status(201).json({ message: 'บันทึก Smart Contract สำเร็จ' });
    });
});

module.exports = router;
