const code = window.location.pathname.replace('/', '').trim().toUpperCase();
if (!code) {
  document.body.innerHTML = "<h2>Thiếu mã vận đơn</h2>";
} else {
  const redirectURL = "https://script.google.com/macros/s/AKfycbwIXv5gZ26pzHmKaAHMBOjgAvCPASvVk9_S64EBXmcetnUlTYrES68HhbGvtxuzlyTiQg/exec?code=" + encodeURIComponent(code);
  window.location.replace(redirectURL);
}
