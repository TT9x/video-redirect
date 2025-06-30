const code = window.location.pathname.replace('/', '').trim().toUpperCase();
if (!code) {
  document.body.innerHTML = "<h2>Thiếu mã vận đơn</h2>";
} else {
  const redirectURL = "https://script.google.com/macros/s/AKfycbwe_MTjl2YQ8WtGn5tB3bSgAbXvdbMJpNY5N2cz5ynIREM1LF22sO4sWnFDFpLpiGFJ/exec?code=" + encodeURIComponent(code);
  window.location.replace(redirectURL);
}
