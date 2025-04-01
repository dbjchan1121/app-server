const express = require('express');

const app = express();
const port = 8080;

// ✅ 设置静态资源目录
app.use('/assets', express.static('assets'));

// 头像文件列表
const avatars = [
  'http://192.168.1.33:8080/assets/user_avatar1.png',
  'http://192.168.1.33:8080/assets/user_avatar2.png',
  'http://192.168.1.33:8080/assets/user_avatar3.png',
  'http://192.168.1.33:8080/assets/user_avatar4.png',
];

// 接口：获取用户列表
app.get('/api/getUserList', (req, res) => {
  const userList = [];

  // 生成 10000 条用户数据
  for (let i = 0; i < 10000; i++) {
    const user = {
      avatar: avatars[Math.floor(Math.random() * avatars.length)], // 随机选择一个头像
      name: `username${i + 1}`, // 用户名
      id: String(i + 1).padStart(6, '0'), // 唯一 ID，6位数字
      status: Math.floor(Math.random() * 2), // 随机 0 或 1
    };

    userList.push(user);
  }

  // 返回数据
  res.json({
    code: 0,
    data: userList,
    msg: 'ok',
  });
});

// 启动服务，监听所有 IP 地址（0.0.0.0）
app.listen(port, '0.0.0.0', () => {
  console.log(`Server is running on http://localhost:${port} or http://192.168.1.59:${port}`);
});