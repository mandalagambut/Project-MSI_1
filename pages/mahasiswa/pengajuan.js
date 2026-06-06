const consultationType =
document.getElementById(
"consultationType"
);

const category =
document.getElementById(
"category"
);

consultationType.addEventListener(
"change",
function(){

category.innerHTML = "";

let options = [];

if(this.value === "akademik"){

options = [

"Media Pembelajaran",
"Teknologi Pembelajaran",
"E-Learning",
"Desain Pembelajaran",
"Evaluasi Pembelajaran",
"Skripsi",
"MBKM",
"Magang",
"Penelitian"

];

}

if(this.value === "nonakademik"){

options = [

"Organisasi Mahasiswa",
"Karier dan Profesi",
"Kompetisi/Lomba",
"Kewirausahaan",
"Soft Skill",
"Konseling",
"Administrasi",
"Layanan Kemahasiswaan"

];

}

options.forEach(item => {

const option =
document.createElement("option");

option.textContent = item;

category.appendChild(option);

});

});

document
.getElementById(
"consultationForm"
)
.addEventListener(
"submit",
function(e){

e.preventDefault();

alert(
"Pengajuan konsultasi berhasil dikirim."
);

this.reset();

category.innerHTML =
"<option>Pilih Jenis Konsultasi Terlebih Dahulu</option>";

});

function toggleTheme(){

document.body.classList.toggle(
"dark-mode"
);

}

function logout(){

localStorage.clear();

window.location.href =
"../../index.html";

}