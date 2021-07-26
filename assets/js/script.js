function copyToClipboard() {
  const copyText = document.getElementById("myEmail");
  copyText.select();
  copyText.setSelectionRange(0, 99999)
  document.execCommand("copy");
  alert("Email Copied: " + copyText.value);
}