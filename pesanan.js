function kirimPesanan() {
    const form = document.getElementById("pesananForm");
    const pesanan = [];
    
    // Mengambil semua checkbox yang dicentang
    const checkboxes = form.querySelectorAll('input[type="checkbox"]:checked');
    
    checkboxes.forEach((checkbox) => {
        pesanan.push(checkbox.value);
    });

    // Tampilkan pesanan di console
    if (pesanan.length > 0) {
        console.log("Pesanan Anda: " + pesanan.join(", "));
    } else {
        console.log("Anda belum memilih menu.");
    }
}