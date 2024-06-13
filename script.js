// Google Apps ScriptのウェブアプリケーションのURL
var scriptUrl = "https://script.google.com/macros/s/AKfycbxjhfFgRlg-fZUjU8_z17uyrC2fJCkk4A3lVroqOUp3AmNWXnUEvdPjbXgkA4gP_S0/exec";

// フォームの送信処理
function submitForm() {
  var date = document.getElementById('date').value;
  var content = document.getElementById('content').value;
  var person = document.getElementById('person').value;
  
  var formData = {
    "date": date,
    "content": content,
    "person": person
  };
  
  fetch(scriptUrl, {
    method: 'POST',
    mode: 'no-cors',
    body: JSON.stringify(formData)
  }).then(response => {
    console.log('Success:', response);
    // 成功したら、適切な処理を記述
  }).catch(error => {
    console.error('Error:', error);
    // エラー処理
  });
}
