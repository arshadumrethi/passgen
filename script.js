var randomPassword = function(length)
{
  chars = "!@abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
  var newp = "";
  for(x=0;x<length;x++)
  {
    i = Math.floor(Math.random() * 62);
    newp += chars.charAt(i);
  }
  document.getElementById('output').textContent = newp;
}

document.getElementById("btn").addEventListener("click", newpassword);
function newpassword() {
  var length = document.getElementById('lengthInput').value;
  if (length <= 0) {
      document.getElementById('output').style.display = 'block';
      document.getElementById('output').textContent = "Enter a number more than 0";
  } else if (length > 30) {
    document.getElementById('output').style.display = 'block';
    document.getElementById('output').textContent = "Enter a number lower or equal 30.";
  } else {
    document.getElementById('output').style.display = 'block';
    randomPassword(length);
  }
}