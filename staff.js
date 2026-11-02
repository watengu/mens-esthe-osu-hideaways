const STAFF=[
 {n:"佐伯ゆき",img:"img/staff-saeki.jpg",tm:"10:00～22:00",base:"10:00～22:00",ok:true,badges:["おすすめ"],prof:"店長 ／ 歴8年。ドライヘッド全般と眼精疲労ケア。"},
 {n:"三浦あかり",img:"img/staff-miura.jpg",tm:"13:00～23:00",base:"13:00～23:00",ok:true,badges:["人気"],prof:"歴5年。アロマヘッドと香りの相談。"},
 {n:"小野ことり",img:"img/staff-ono.jpg",tm:"17:00～23:00",base:"17:00～23:00",ok:true,badges:["新人","おすすめ"],prof:"歴3年。フットと快眠セット。"},
 {n:"高田まな",img:"img/staff-takada.jpg",tm:"-----",base:"11:00～21:00",ok:false,badges:["おすすめ"],prof:"歴6年。首・肩の集中ケア。"},
 {n:"林さくら",img:"img/staff-hayashi.jpg",tm:"-----",base:"12:00～20:00",ok:false,badges:["新人"],prof:"歴2年。初めての方の案内担当。"},
 {n:"中村れい",img:"img/staff-nakamura.jpg",tm:"-----",base:"15:00～23:00",ok:false,badges:["人気"],prof:"歴7年。ロングコースの眠りの深さ。"}
];
function badgesHTML(s){return s.badges.length?`<span class="bdg">${s.badges.map(b=>`<i>${b}</i>`).join("")}</span>`:""}
function cardHTML(s,withProf){
 return `<div class="card"><div class="ph"><img src="${s.img}" alt="">${badgesHTML(s)}</div><div class="nm">${s.n}</div><div class="tm">🕐 ${s.tm}</div><div class="rm">${s.ok?"大須":""}</div>${s.ok?'<div class="st">ご予約可能</div>':""}${withProf?`<div class="pf">${s.prof}</div>`:""}</div>`;
}
function splashDone(){const sp=document.getElementById("splash");if(sp){setTimeout(()=>{sp.style.opacity="0";setTimeout(()=>sp.remove(),650)},500)}}
window.addEventListener("load",splashDone);
