const NAV = [
  {
    id: 1, menu: "한돈 추천", link: "/recommand/cake", submenu: [
      {
        id: 1, menu: "한돈 케이크", link: "/recommand/cake"
      },
      {
        id: 2, menu: "한돈 선물세트", link: "/recommand/gift"
      }]
  },
  {
    id: 2, menu: "부위 / 용도별", link: "/part/belly", submenu: [
      {
        id: 1, menu: "삼겹살", link: "/part/belly"
      },
      {
        id: 2, menu: "목살", link: "/part/neck"
      },
      {
        id: 3, menu: "갈비", link: "/part/rib"
      }]
  },
  {
    id: 3, menu: "이벤트", link: "/event", submenu: [
      {
        id: 1, menu: "진행중 이벤트", link: "/event/on"
      },
      {
        id: 2, menu: "종료된 이벤트", link: "/event/off"
      }]
  },
  { id: 4, menu: "게시판", link: "/board" }
]

const REC = [
  {
    id: 7, name: "인삼포크 감사한돈 선물세트 1.5kg", o_price: "40000", d_price: "38000", buyer: "회원 전용 상품", content: "오겹살(구이용) 500g , 목살(구이용) 500g ,앞다리살(구이용) 500g", number: "이력(묶음)번호 표시 제품임 ※이력(묶음)번호는 배송된 상품에 표기됨", img: "/assets/img/gift01.jpg", store: "-2~10˚C 이하 냉장보관", delivery: "무료", sale: "12%", link: "/recommand/gift/7"
  },
  { id: 14, name: "아이엠포크 삼겹살 바비큐용 500g", o_price: "17000", d_price: "13000", buyer: "회원 전용 상품", content: "삼겹살 바비큐용 500g", number: "이력(묶음)번호 표시 제품임 ※이력(묶음)번호는 배송된 상품에 표기됨", img: "/assets/img/belly02.jpg", store: "-2~10˚C 이하 냉장보관", delivery: "무료", sale: "24%", link: "/part/belly/14" },
  {
    id: 25, name: "도뜰한돈 목살 500g", o_price: "13000", buyer: "회원 전용 상품", content: "목살 구이용 500g", number: "이력(묶음)번호 표시 제품임 ※이력(묶음)번호는 배송된 상품에 표기됨", img: "/assets/img/neck04.jpg", store: "-2~10˚C 이하 냉장보관", delivery: "무료", link: "/part/neck/25"
  }
]

const BRANDS = [
  { id: 1, img: "/assets/img/brand01.png" },
  { id: 2, img: "/assets/img/brand02.png" },
  { id: 3, img: "/assets/img/brand03.png" },
  { id: 4, img: "/assets/img/brand04.png" },
  { id: 5, img: "/assets/img/brand05.png" },
  { id: 6, img: "/assets/img/brand06.png" },
  { id: 7, img: "/assets/img/brand07.png" },
  { id: 8, img: "/assets/img/brand08.png" },
  { id: 9, img: "/assets/img/brand09.png" },
  { id: 10, img: "/assets/img/brand10.png" },
  { id: 11, img: "/assets/img/brand11.png" },
  { id: 12, img: "/assets/img/brand12.png" },
]



const MEAT = [
  { id: 1, name: "육육축산 두근두근 한돈케이크 1호 1kg", o_price: "59000", d_price: "49000", buyer: "회원 전용 상품", content: "삼겹살 구이용 500g, 목살 구이용 400g, 항정살 100g", number: "이력(묶음)번호 표시 제품임 ※이력(묶음)번호는 배송된 상품에 표기됨", img: "/assets/img/cake01.jpg", store: "-2~10˚C 이하 냉장보관", delivery: "무료", sale: "17%", cate: "cake" },
  { id: 2, name: "육육축산 두근두근 한돈케이크 2호 1.3kg", o_price: "69000", d_price: "59000", buyer: "회원 전용 상품", content: "삼겹살 구이용 500g, 목살 구이용 500g, 항정살/가브리살 300g", number: "이력(묶음)번호 표시 제품임 ※이력(묶음)번호는 배송된 상품에 표기됨", img: "/assets/img/cake02.jpg", store: "-2~10˚C 이하 냉장보관", delivery: "무료", sale: "16%", cate: "cake" },
  { id: 3, name: "육육축산 두근두근 한돈케이크 3호 1.7kg", o_price: "79000", d_price: "69000", buyer: "회원 전용 상품", content: "삼겹살 구이용 800g, 목살 구이용 800g, 항정살/가브리살 400g", number: "이력(묶음)번호 표시 제품임 ※이력(묶음)번호는 배송된 상품에 표기됨", img: "/assets/img/cake03.jpg", store: "-2~10˚C 이하 냉장보관", delivery: "무료", sale: "15%", cate: "cake" },
  { id: 4, name: "육육축산 두근두근 한돈케이크 4호 2kg", o_price: "89000", d_price: "79000", buyer: "회원 전용 상품", content: "삼겹살 구이용 700g, 목살 구이용 700g, 항정살/가브리살 600g", number: "이력(묶음)번호 표시 제품임 ※이력(묶음)번호는 배송된 상품에 표기됨", img: "/assets/img/cake01.jpg", store: "-2~10˚C 이하 냉장보관", delivery: "무료", sale: "14%", cate: "cake" },
  { id: 5, name: "육육축산 두근두근 한돈케이크 5호 2.3kg", o_price: "99000", d_price: "89000", buyer: "회원 전용 상품", content: "삼겹살 구이용 900g, 목살 구이용 900g, 항정살/가브리살 500g", number: "이력(묶음)번호 표시 제품임 ※이력(묶음)번호는 배송된 상품에 표기됨", img: "/assets/img/cake02.jpg", store: "-2~10˚C 이하 냉장보관", delivery: "무료", sale: "13%", cate: "cake" },
  { id: 6, name: "육육축산 두근두근 한돈케이크 6호 2.7kg", o_price: "109000", d_price: "99000", buyer: "회원 전용 상품", content: "삼겹살 구이용 1000g, 목살 구이용 1000g, 항정살/가브리살 700g", number: "이력(묶음)번호 표시 제품임 ※이력(묶음)번호는 배송된 상품에 표기됨", img: "/assets/img/cake03.jpg", store: "-2~10˚C 이하 냉장보관", delivery: "무료", sale: "12%", cate: "cake" },
  {
    id: 7, name: "인삼포크 감사한돈 선물세트 1.5kg", o_price: "40000", d_price: "38000", buyer: "회원 전용 상품", content: "오겹살(구이용) 500g , 목살(구이용) 500g ,앞다리살(구이용) 500g", number: "이력(묶음)번호 표시 제품임 ※이력(묶음)번호는 배송된 상품에 표기됨", img: "/assets/img/gift01.jpg", store: "-2~10˚C 이하 냉장보관", delivery: "무료", sale: "12%", cate: "gift"
  },
  {
    id: 8, name: "도뜰한돈 갈비세트 2호 2kg", o_price: "40000", buyer: "회원 전용 상품", content: "갈비 (찜용)500g*4", number: "이력(묶음)번호 표시 제품임 ※이력(묶음)번호는 배송된 상품에 표기됨", img: "/assets/img/gift02.jpg", store: "-2~10˚C 이하 냉장보관", delivery: "무료", cate: "gift"
  },
  {
    id: 9, name: "도뜰한돈 한마음세트 1호 2kg", o_price: "40000", buyer: "회원 전용 상품", content: "	앞다리살(불고기용) 500g*2, 앞다리살(수육용) 500g, 앞다리살(찌개용) 500g", number: "이력(묶음)번호 표시 제품임 ※이력(묶음)번호는 배송된 상품에 표기됨", img: "/assets/img/gift03.jpg", store: "-2~10˚C 이하 냉장보관", delivery: "무료", cate: "gift"
  },
  { id: 10, name: "숨포크 실속세트A 2kg", o_price: "53000", d_price: "46000", buyer: "회원 전용 상품", content: "삼겹살(구이용) 500g, 목살(구이용) 500g, 앞다리(제육용)500g, 갈비(찜용) 500g", number: "이력(묶음)번호 표시 제품임 ※이력(묶음)번호는 배송된 상품에 표기됨", img: "/assets/img/gift04.jpg", store: "-2~10˚C 이하 냉장보관", delivery: "무료", sale: "15%", cate: "gift" },
  {
    id: 11, name: "강원산돈 선물세트 4호 1.8kg", o_price: "51500", d_price: "46500", buyer: "회원 전용 상품", content: "	삼겹살(구이용) 600g, 목살(구이용)600g, 등심(돈가스용)600g", number: "이력(묶음)번호 표시 제품임 ※이력(묶음)번호는 배송된 상품에 표기됨", img: "/assets/img/gift05.jpg", store: "-2~10˚C 이하 냉장보관", delivery: "무료", sale: "15%", cate: "gift"
  },
  { id: 12, name: "강원산돈 선물세트 1호 2kg", o_price: "53000", d_price: "47800", buyer: "회원 전용 상품", content: "삼겹살(구이용) 500g, 목살(구이용) 500g, 앞다리살(구이용) 500g, 등심(돈가스용)500g", number: "이력(묶음)번호 표시 제품임 ※이력(묶음)번호는 배송된 상품에 표기됨", img: "/assets/img/gift06.jpg", store: "-2~10˚C 이하 냉장보관", delivery: "무료", sale: "15%", cate: "gift" },
  {
    id: 13, name: "인삼포크 미삼겹살(오겹살) 구이용 500g", o_price: "12500", buyer: "회원 전용 상품", content: "오겹살 구이용 500g", number: "이력(묶음)번호 표시 제품임 ※이력(묶음)번호는 배송된 상품에 표기됨", img: "/assets/img/belly01.jpg", store: "-2~10˚C 이하 냉장보관", delivery: "무료", cate: "belly"
  },
  {
    id: 14, name: "아이엠포크 삼겹살 바비큐용 500g", o_price: "17000", d_price: "13000", buyer: "회원 전용 상품", content: "삼겹살 바비큐용 500g", number: "이력(묶음)번호 표시 제품임 ※이력(묶음)번호는 배송된 상품에 표기됨", img: "/assets/img/belly02.jpg", store: "-2~10˚C 이하 냉장보관", delivery: "무료", sale: "24%", cate: "belly"
  },
  {
    id: 15, name: "아이엠포크 통삼겹살 500g", o_price: "17000", d_price: "13000", buyer: "회원 전용 상품", content: "통삼겹살 500g", number: "이력(묶음)번호 표시 제품임 ※이력(묶음)번호는 배송된 상품에 표기됨", img: "/assets/img/belly03.jpg", store: "-2~10˚C 이하 냉장보관", delivery: "무료", sale: "24%", cate: "belly"
  },
  {
    id: 16, name: "아이엠포크 삼겹 구이용 500g", o_price: "17000", d_price: "13000", buyer: "회원 전용 상품", content: "삼겹살 구이용 500g", number: "이력(묶음)번호 표시 제품임 ※이력(묶음)번호는 배송된 상품에 표기됨", img: "/assets/img/belly04.jpg", store: "-2~10˚C 이하 냉장보관", delivery: "무료", sale: "24%", cate: "belly"
  },
  {
    id: 17, name: "12정품 삼겹살(수육용) 500g", o_price: "22500", d_price: "13850", buyer: "회원 전용 상품", content: "삼겹살 수육용 500g", number: "이력(묶음)번호 표시 제품임 ※이력(묶음)번호는 배송된 상품에 표기됨", img: "/assets/img/belly05.jpg", store: "-2~10˚C 이하 냉장보관", delivery: "무료", sale: "12%", cate: "belly"
  },
  {
    id: 18, name: "12정품 삼겹살(구이용) 500g", o_price: "22500", d_price: "13850", buyer: "회원 전용 상품", content: "삼겹살 구이용 500g", number: "이력(묶음)번호 표시 제품임 ※이력(묶음)번호는 배송된 상품에 표기됨", img: "/assets/img/belly06.jpg", store: "-2~10˚C 이하 냉장보관", delivery: "무료", sale: "12%", cate: "belly"
  },
  {
    id: 19, name: "도뜰한돈 오겹살 구이용 500g", o_price: "14000", buyer: "회원 전용 상품", content: "오겹살 구이용 500g", number: "이력(묶음)번호 표시 제품임 ※이력(묶음)번호는 배송된 상품에 표기됨", img: "/assets/img/belly07.jpg", store: "-2~10˚C 이하 냉장보관", delivery: "무료", cate: "belly"
  },
  {
    id: 20, name: "숨포크 삼겹살 보쌈용 500g", o_price: "15500", d_price: "14600", buyer: "회원 전용 상품", content: "삼겹살 보쌈용 500g", number: "이력(묶음)번호 표시 제품임 ※이력(묶음)번호는 배송된 상품에 표기됨", img: "/assets/img/belly08.jpg", store: "-2~10˚C 이하 냉장보관", delivery: "무료", sale: "10%", cate: "belly"
  },
  {
    id: 21, name: "산수골목장 통큰 삼겹살 1.5kg", o_price: "54000", d_price: "45100", buyer: "회원 전용 상품", content: "통큰 삼겹살 1.5kg", number: "이력(묶음)번호 표시 제품임 ※이력(묶음)번호는 배송된 상품에 표기됨", img: "/assets/img/belly09.jpg", store: "-2~10˚C 이하 냉장보관", delivery: "무료", sale: "12%", cate: "belly"
  },
  {
    id: 22, name: "아이엠포크 목살 구이용 500g", o_price: "16000", d_price: "11500", buyer: "회원 전용 상품", content: "목살 구이용 500g", number: "이력(묶음)번호 표시 제품임 ※이력(묶음)번호는 배송된 상품에 표기됨", img: "/assets/img/neck01.jpg", store: "-2~10˚C 이하 냉장보관", delivery: "무료", sale: "29%", cate: "neck"
  },
  {
    id: 23, name: "12정품 목살(구이용) 500g", o_price: "19050", d_price: "11800", buyer: "회원 전용 상품", content: "목살 구이용 500g", number: "이력(묶음)번호 표시 제품임 ※이력(묶음)번호는 배송된 상품에 표기됨", img: "/assets/img/neck02.jpg", store: "-2~10˚C 이하 냉장보관", delivery: "무료", sale: "12%", cate: "neck"
  },
  {
    id: 24, name: "인삼포크 목심(목살) 구이용 500g", o_price: "12000", buyer: "회원 전용 상품", content: "목살 구이용 500g", number: "이력(묶음)번호 표시 제품임 ※이력(묶음)번호는 배송된 상품에 표기됨", img: "/assets/img/neck03.jpg", store: "-2~10˚C 이하 냉장보관", delivery: "무료", cate: "neck"
  },
  {
    id: 25, name: "도뜰한돈 목살 500g", o_price: "13000", buyer: "회원 전용 상품", content: "목살 구이용 500g", number: "이력(묶음)번호 표시 제품임 ※이력(묶음)번호는 배송된 상품에 표기됨", img: "/assets/img/neck04.jpg", store: "-2~10˚C 이하 냉장보관", delivery: "무료", cate: "neck"
  },
  {
    id: 26, name: "태흥 목심(목살) 수육용 500g", o_price: "15500", d_price: "13000", buyer: "회원 전용 상품", content: "목살 수육용 500g", number: "이력(묶음)번호 표시 제품임 ※이력(묶음)번호는 배송된 상품에 표기됨", img: "/assets/img/neck05.jpg", store: "-2~10˚C 이하 냉장보관", delivery: "무료", sale: "12%", cate: "neck"
  },
  {
    id: 27, name: "미소찬한돈 목심(구이용) 500g", o_price: "14410", d_price: "13100", buyer: "회원 전용 상품", content: "목살 구이용 500g", number: "이력(묶음)번호 표시 제품임 ※이력(묶음)번호는 배송된 상품에 표기됨", img: "/assets/img/neck06.jpg", store: "-2~10˚C 이하 냉장보관", delivery: "무료", sale: "10%", cate: "neck"
  },
  {
    id: 28, name: "담아한포크 목살(에어프라이어/통도리 전용) 500g", o_price: "13900", buyer: "회원 전용 상품", content: "목살 구이용 500g", number: "이력(묶음)번호 표시 제품임 ※이력(묶음)번호는 배송된 상품에 표기됨", img: "/assets/img/neck07.jpg", store: "-2~10˚C 이하 냉장보관", delivery: "무료", cate: "neck"
  },
  {
    id: 29, name: "태흥 등뼈 500g", o_price: "3500", buyer: "회원 전용 상품", content: "등뼈 갈비용 500g", number: "이력(묶음)번호 표시 제품임 ※이력(묶음)번호는 배송된 상품에 표기됨", img: "/assets/img/rack01.jpg", store: "-2~10˚C 이하 냉장보관", delivery: "무료", cate: "rib"
  },
  {
    id: 30, name: "안동참마돼지 등뼈 500g", o_price: "4900", buyer: "회원 전용 상품", content: "등뼈 갈비용 500g", number: "이력(묶음)번호 표시 제품임 ※이력(묶음)번호는 배송된 상품에 표기됨", img: "/assets/img/rack02.jpg", store: "-2~10˚C 이하 냉장보관", delivery: "무료", cate: "rib"
  },
  {
    id: 31, name: "안동참마돼지 갈비 500g", o_price: "7000", buyer: "회원 전용 상품", content: "등뼈 갈비용 500g", number: "이력(묶음)번호 표시 제품임 ※이력(묶음)번호는 배송된 상품에 표기됨", img: "/assets/img/rack03.jpg", store: "-2~10˚C 이하 냉장보관", delivery: "무료", cate: "rib"
  },
  {
    id: 32, name: "아이엠포크 돈갈비 찜용 500g", o_price: "8700", d_price: "7500", buyer: "회원 전용 상품", content: "갈비 찜용 500g", number: "이력(묶음)번호 표시 제품임 ※이력(묶음)번호는 배송된 상품에 표기됨", img: "/assets/img/rack04.jpg", store: "-2~10˚C 이하 냉장보관", delivery: "무료", sale: "10%", cate: "rib"
  },
  {
    id: 33, name: "태흥 갈비 500g", o_price: "8000", buyer: "회원 전용 상품", content: "등뼈 찜용 500g", number: "이력(묶음)번호 표시 제품임 ※이력(묶음)번호는 배송된 상품에 표기됨", img: "/assets/img/rack05.jpg", store: "-2~10˚C 이하 냉장보관", delivery: "무료", cate: "rib"
  },
  {
    id: 34, name: "생생포크 LA식 갈비 500g", o_price: "8900", buyer: "회원 전용 상품", content: "갈비 구이용 500g", number: "이력(묶음)번호 표시 제품임 ※이력(묶음)번호는 배송된 상품에 표기됨", img: "/assets/img/rack06.jpg", store: "-2~10˚C 이하 냉장보관", delivery: "무료", cate: "rib"
  },
  {
    id: 35, name: "숨포크 냉동갈비 LA슬라이스 500g", o_price: "9900", d_price: "9000", buyer: "회원 전용 상품", content: "갈비 구이용 500", number: "이력(묶음)번호 표시 제품임 ※이력(묶음)번호는 배송된 상품에 표기됨", img: "/assets/img/rack07.jpg", store: "-2~10˚C 이하 냉장보관", delivery: "무료", sale: "10%", cate: "rib"
  },
  {
    id: 36, name: "얼룩도야지 우리한돈 갈비 500g (스킨포장)", o_price: "9800", buyer: "회원 전용 상품", content: "등뼈 찜용 500g", number: "이력(묶음)번호 표시 제품임 ※이력(묶음)번호는 배송된 상품에 표기됨", img: "/assets/img/rack08.jpg", store: "-2~10˚C 이하 냉장보관", delivery: "무료", cate: "rib"
  },
  {
    id: 37, name: "아이엠포크 등갈비 구이&찜용 500g", o_price: "16000", d_price: "13000", buyer: "회원 전용 상품", content: "등갈비 구이&찜용 500g", number: "이력(묶음)번호 표시 제품임 ※이력(묶음)번호는 배송된 상품에 표기됨", img: "/assets/img/rack09.jpg", store: "-2~10˚C 이하 냉장보관", delivery: "무료", sale: "15%", cate: "rib"
  }
]




const EVENT = [
  { id: 1, img: "/assets/img/event_01.jpg" },
  { id: 2, img: "/assets/img/event_02.jpg" },
  { id: 3, img: "/assets/img/event_03.jpg" },
  { id: 4, img: "/assets/img/event_04.jpg" },
  { id: 5, img: "/assets/img/event_05.jpg" },
  { id: 6, img: "/assets/img/event_06.jpg" },
  { id: 7, img: "/assets/img/event_07.jpg" },
]


export { NAV, REC, BRANDS, EVENT, MEAT }