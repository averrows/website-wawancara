const data = [
    {
        nama: "Kak Ivan",
        gambar : './img/ivan.jpg',
        deskripsi: "Kak Ivan adalah mahasiswa Teknik Telekomunikasi angkatan 2019. Ia mengikuti ARC karena ingin mempelajari programming lebih lanjut. Kak Ivan menjelaskan kepada kami berbagai hal mengenai kehidupan ARC paskalantik serta kehidupan ITB."

    },
    {
        nama: "Afta",
        gambar : './img/afta.jpg',
        deskripsi: "Afta berasal dari Semarang. Ikut ARC karena ia mengira ARC akan sepi sehingga dirinya bisa dapat engage lebih banyak. Afta ingin masuk IF tetapi takut akan IP miliknya. Kewibuan Afta 0. Tetapi sebentar lagi pasti bertambah"

    },
    {
        nama: "Rofif",
        gambar : './img/rofif.jpg',
        deskripsi: "Rofif berasal dari Bandung. Ia pindahan dari IF Unpad. Sudah punya circle. Ingin masuk ke IF, tetapi IP takut kalah. Sudah melakukan survey mandiri dan belum pernah menemukan mahasiswa STEI ber-IP < 3"

    },
    {
        nama: "Dhimas",
        gambar : './img/dhimas.jpg',
        deskripsi: "Dhimas berasal dari Semarang juga tapi beda SMA dengan Afta. Ia kami sangka buta warna karena menyebut warna biru sebagai warna hijau, tetapi ternyata itu hanya efek filter bluelight laptopnya. Ia ingin masuk IF/STI. Masuk ARC karena ingin belajar"

    },
    {
        nama: "Patrick",
        gambar : './img/patrick.jpg',
        deskripsi: "Berasal dari Jakarta. Patrick menyukai belajar dan Dota. Ia masuk ARC karena diajak oleh temannya. Ia ingin masuk IF. Kewibuan dari Patrick adalah 0, tetapi tunggu saja, beberapa bulan lagi akan meningkat."

    }
];


function bukaProfile(id){
    console.log("mulai");
    for(i=0;i<5;i++){
        if (data[i].nama == id){
            document.querySelector("#gambar").src = data[i].gambar;

            document.querySelector("#awal").style.display = "none";

            document.querySelector("#nama").innerHTML = data[i].nama;
            document.querySelector("#deskripsi").innerHTML = data[i].deskripsi;
            console.log("selesai");
        } 
    }
};