function submit(){

    let diemLy=document.getElementById('diemLy').value *1;

    let diemHoa=document.getElementById('diemHoa').value *1;

    let diemSinh=document.getElementById('diemSinh').value *1;

    let diemTong=diemLy+diemHoa+diemSinh;

    let diemTb= diemTong/3;

    document.getElementById('diemTong').innerHTML=diemTong;

    document.getElementById('diemTb').innerHTML=diemTb;


}