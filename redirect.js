const code = window.location.pathname.replace('/', '').trim().toUpperCase();

// Giao diện cảnh báo hiển thị trên toàn trang
document.body.innerHTML = `
  <style>
    body {
      background: #000;
      color: #fff;
      font-family: sans-serif;
      text-align: center;
      padding: 100px 20px;
    }
    h1 {
      font-size: 42px;
      margin-bottom: 20px;
    }
    p {
      font-size: 24px;
      color: #ccc;
    }
  </style>
  <h1>🚫 Vui lòng mua bản quyền ShoppyCam</h1>
  <p>Hệ thống này chỉ hoạt động khi bạn đã kích hoạt bản quyền.</p>
`;

