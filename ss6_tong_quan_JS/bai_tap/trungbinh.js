let diemToan = prompt("Vui lòng nhập điểm Toán");
let diemVan = prompt("Vui lòng nhập điểm Văn");
let diemAnh = prompt("Vui lòng nhập điểm Anh");
let diemTrungbinh = (Number(diemToan) + Number(diemVan) + Number(diemAnh)) / 3;


alert (diemTrungbinh);

if (diemTrungbinh>=9) {
    alert('Học lực Giỏi')
}else if ((diemTrungbinh>=7)&&(diemTrungbinh<9)){
    alert('Học lực Khá')
}else if ((diemTrungbinh>=5)&&(diemTrungbinh<7)){
    alert('Học lực Trung Bình')
}else if ((diemTrungbinh>=3)&&(diemTrungbinh<5)){
    alert('Học lực yếu')
}else if (diemTrungbinh<3){
    alert('Học lực kém')
}
