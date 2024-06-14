document.getElementById('workoutForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  var date = document.getElementById('date').value;
  var weight = document.getElementById('weight').value;
  var reps = document.getElementById('reps').value;
  var type = document.querySelector('input[name="type"]:checked').value;
  
  var formData = new FormData();
  formData.append('date', date);
  formData.append('weight', weight);
  formData.append('reps', reps);
  formData.append('type', type);
  
  fetch('https://script.google.com/macros/s/AKfycbzk090FT4t9PRbGWJAke_2xc1Iv2bfXdb1lAdpVs9uHUvO2aK3tOZ4KIZB8dgecuYU/exec', {
    method: 'POST',
    body: formData
  })
  .then(response => response.json())
  .then(data => {
    if (data.result === "success") {
      document.getElementById('response').innerText = "データが正常に送信されました。";
    } else {
      document.getElementById('response').innerText = "エラーが発生しました: " + data.message;
    }
  })
  .catch(error => {
    document.getElementById('response').innerText = 'エラーが発生しました: ' + error.message;
  });
});
