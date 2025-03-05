// Data anggota untuk lightbox
const members = [
    { id: 1, name: "Nagato (Pain)", desc: "Pemimpin Akatsuki dengan kemampuan Rinnegan yang sangat kuat.", img: "images/1.jpeg" },
    { id: 2, name: "Konan", desc: "Anggota inti yang loyal, ahli manipulasi kertas.", img: "images/konan.jpeg" },
    { id: 3, name: "Itachi Uchiha", desc: "Ninja legendaris dengan Mangekyo Sharingan.", img: "images/itachi.jpeg" },
    { id: 4, name: "Kisame Hoshigaki", desc: "Pakar pedang dengan kekuatan fisik luar biasa.", img: "images/kisame.jpeg" },
    { id: 5, name: "Deidara", desc: "Ahli ledakan yang percaya seni adalah ledakan.", img: "images/deidara.jpeg" },
    { id: 6, name: "Sasori", desc: "Master boneka dengan teknik racun mematikan.", img: "images/sasori.jpeg" },
    { id: 7, name: "Hidan", desc: "Anggota abadi dengan ritual darah yang unik.", img: "images/hidan.jpeg" },
    { id: 8, name: "Kakuzu", desc: "Pengumpul harta yang menguasai lima elemen.", img: "images/kakuzu.jpeg" },
    { id: 9, name: "sasuke", desc: "misi menghancurkan konoha", img: "images/sasuke.jpeg" },
    { id: 10, name: "Tobi (Obito Uchiha)", desc: "Manipulator tersembunyi dengan Sharingan dan Rinnegan.", img: "images/obito uchiha.jpeg" }
];

// Fungsi membuka lightbox
function openLightbox(memberId) {
    const member = members.find(m => m.id === memberId);
    if (member) {
        document.getElementById("lightbox-img").src = member.img;
        document.getElementById("lightbox-name").textContent = member.name;
        document.getElementById("lightbox-desc").textContent = member.desc;
        document.getElementById("lightbox").style.display = "flex";
    }
}

// Fungsi menutup lightbox
function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}