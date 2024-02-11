document.addEventListener('DOMContentLoaded', function () {
  // Menghitung total secara otomatis saat halaman dimuat
  calculateTotal();

  // Menambahkan event listener untuk input changes
  const inputElements = document.querySelectorAll('.uangKasInput');
  inputElements.forEach(function (input) {
    input.addEventListener('input', function () {
      calculateTotal();
    });
  });
});

function calculateTotal() {
  const table = document.getElementById('uangKasTable');
  const rows = table.getElementsByTagName('tr');
  const totalColumns = rows[rows.length - 1].cells.length;
  const totalRows = rows.length - 1;

  // Menghitung total pada tabel paling bawah (horizontal)
  for (let i = 1; i < totalColumns - 1; i++) {
    let columnTotal = 0;
    for (let j = 1; j < totalRows; j++) {
      const cellValue = +rows[j].cells[i].querySelector('.uangKasInput').value || 0;
      columnTotal += cellValue;
    }
    rows[totalRows].cells[i].textContent = formatCurrency(columnTotal);
  }

  // Menghitung total pada tabel paling kanan (vertikal)
  for (let k = 1; k < totalRows; k++) {
    let rowTotal = 0;
    for (let l = 1; l < totalColumns - 1; l++) {
      const cellValue = +rows[k].cells[l].querySelector('.uangKasInput').value || 0;
      rowTotal += cellValue;
    }
    rows[k].cells[totalColumns - 1].textContent = formatCurrency(rowTotal);
  }

  // Menghitung total keseluruhan
  let totalOverall = 0;
  for (let m = 1; m < totalColumns - 1; m++) {
    totalOverall += +rows[totalRows].cells[m].textContent.replace(/[^\d]/g, '') || 0;
  }

  rows[totalRows].cells[totalColumns - 1].textContent = formatCurrency(totalOverall);
}

function formatCurrency(amount) {
  return 'Rp ' + amount.toLocaleString();
}