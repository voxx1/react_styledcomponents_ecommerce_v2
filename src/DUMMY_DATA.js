const dummyItems = [
  {
    id: "t1",
    img: "https://media.istockphoto.com/photos/shopping-time-young-women-shopping-together-consumerism-fashion-picture-id1194744301?k=20&m=1194744301&s=170667a&w=0&h=M-vLEm33tChlo7OtfzqmRqlFqgnu_QxO9ChA5k43zhI=",
    title: "Get your new clothes today!",
    desc: "We are launching our ner collection of best clothes and shoes!",
  },
  {
    id: 2,
    img: "https://media.istockphoto.com/photos/shopping-time-young-women-shopping-together-consumerism-fashion-picture-id1194744301?k=20&m=1194744301&s=170667a&w=0&h=M-vLEm33tChlo7OtfzqmRqlFqgnu_QxO9ChA5k43zhI=",
    title: "Check our bestsellers!",
    desc: "We have tons of items to offer, everyone will find something!",
  },
  {
    id: 3,
    img: "https://media.istockphoto.com/photos/shopping-time-young-women-shopping-together-consumerism-fashion-picture-id1194744301?k=20&m=1194744301&s=170667a&w=0&h=M-vLEm33tChlo7OtfzqmRqlFqgnu_QxO9ChA5k43zhI=",
    title: "Promo will be finishing very soon!",
    desc: "Don't wait longer - our promo is coming to end!",
  },
];

export const categories = [
  {
    id: "c1",
    img: "https://images.pexels.com/photos/5886041/pexels-photo-5886041.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    title: "MEN",
    type: 'men'
  },
  {
    id: "c2",
    img: "https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    title: "WOMEN",
    type: "women"
  },
  {
    id: "c3",
    img: "https://images.pexels.com/photos/5480696/pexels-photo-5480696.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    title: "UNISEX",
    type: 'unisex'
  },
];


export const allProducts = [
  {
    id: "p1",
    img: "https://i.pinimg.com/originals/62/98/b0/6298b026a65cf80bcf9dce061e9b79c9.png",
    color: ["blue", "pink"],
    size: ["L", "XL"],
    tag: ["men", "women"],
    price: 129,
    title: "Summer Bag",
  },
  {
    id: "p2",
    img: "https://www.prada.com/content/dam/pradanux_products/U/UCS/UCS319/1YOTF010O/UCS319_1YOT_F010O_S_182_SLF.png",
    color: ["black"],
    size: ["XS", "S"],
    tag: ["women"],
    price: 25,
    title: "Autumn Bag",
  },
  {
    id: "p3",
    img: "https://i.pinimg.com/originals/62/98/b0/6298b026a65cf80bcf9dce061e9b79c9.png",
    color: ["red", "blue"],
    size: ["L"],
    tag: ["men", "women"],
    price: 17,
    title: "Summer Bag",
  },
  {
    id: "p4",
    img: "https://images.ctfassets.net/5gvckmvm9289/3BlDoZxSSjqAvv1jBJP7TH/65f9a95484117730ace42abf64e89572/Noissue-x-Creatsy-Tote-Bag-Mockup-Bundle-_4_-2.png",
    color: ["orange", "red"],
    size: ["XS", "S"],
    tag: ["men"],
    price: 135,
    title: "Winter Bag",
  },
  {
    id: "p5",
    img: "https://d3o2e4jr3mxnm3.cloudfront.net/Rocket-Vintage-Chill-Cap_66374_1_lg.png",
    color: ["red", "pink"],
    size: ["M", "L"],
    tag: ["men"],
    price: 235,
    title: "Summer Bag",
  },
  {
    id: "p6",
    img: "https://images.ctfassets.net/5gvckmvm9289/3BlDoZxSSjqAvv1jBJP7TH/65f9a95484117730ace42abf64e89572/Noissue-x-Creatsy-Tote-Bag-Mockup-Bundle-_4_-2.png",
    color: ["orange", "red"],
    size: ["XS", "M"],
    tag: ["men"],
    title: "Summer Bag",
    price: 19
  },
  {
    id: "p7",
    img: "https://www.pngall.com/wp-content/uploads/4/Skirt-PNG.png",
    color: ["blue", "pink"],
    size: ["M", "L"],
    tag: ["men"],
    title: "Catty Cap",
    price: 51

  },
  {
    id: "p8",
    img: "https://www.pngall.com/wp-content/uploads/4/Skirt.png",
    color: ["orange"],
    size: ["XS", "S"],
    tag: ["men"],
    title: "Shiny T-shirt",
    price: 83
  },
  {
    id: "p9",
    img: "https://d3o2e4jr3mxnm3.cloudfront.net/Rocket-Vintage-Chill-Cap_66374_1_lg.png",
    color: ["red"],
    size: ["XS", "L"],
    tag: ["men"],
    title: "Doggy Cap",
    price: 35
  }, {
    id: "p10",
    img: "https://www.pngall.com/wp-content/uploads/4/Skirt-PNG.png",
    color: ["black", "pink"],
    size: ["S", "XL"],
    tag: ["women"],
    price: 119,
    title: "Energetic Dress",
  },
  {
    id: "p11",
    img: "https://www.prada.com/content/dam/pradanux_products/U/UCS/UCS319/1YOTF010O/UCS319_1YOT_F010O_S_182_SLF.png",
    color: ["orange", "red"],
    size: ["L", "XL"],
    tag: ["women"],
    price: 51,
    title: "Loose T-shirt",
  },
  {
    id: "p12",
    img: "https://www.burdastyle.com/pub/media/catalog/product/cache/7bd3727382ce0a860b68816435d76e26/107/BUS-PAT-BURTE-1320516/1170x1470_BS_2016_05_132_front.png",
    color: ["blue", "pink"],
    size: ["XS", "S"],
    tag: ["women"],
    price: 11,
    title: "Loose T-shirt",
  },
  {
    id: "p13",
    img: "https://d3o2e4jr3mxnm3.cloudfront.net/Mens-Jake-Guitar-Vintage-Crusher-Tee_68382_1_lg.png",
    color: ["orange", "red"],
    size: ["L", "XL"],
    tag: ["men", "women"],
    price: 85,
    title: "Kid Cap",
  },
  {
    id: "p14",
    img: "https://www.burdastyle.com/pub/media/catalog/product/cache/7bd3727382ce0a860b68816435d76e26/107/BUS-PAT-BURTE-1320516/1170x1470_BS_2016_05_132_front.png",
    color: ["blue"],
    size: ["M", "L"],
    tag: ["men", "women"],
    price: 21,
    title: "Warm Dress",
  },
  {
    id: "p15",
    img: "https://www.pngall.com/wp-content/uploads/4/Skirt.png",
    color: ["pink"],
    size: ["L", "XL"],
    tag: ["men", "women"],
    price: 119,
    title: "Young T-shirt",
  },
]

export const menProducts = [

  {
    id: "m1",
    img: "https://images.ctfassets.net/5gvckmvm9289/3BlDoZxSSjqAvv1jBJP7TH/65f9a95484117730ace42abf64e89572/Noissue-x-Creatsy-Tote-Bag-Mockup-Bundle-_4_-2.png",
    color: ["orange", "red"],
    size: ["XS", "S", "M"],
    tag: ["men"],
    title: "Summer Bag",
    price: 19
  },
  {
    id: "m2",
    img: "https://d3o2e4jr3mxnm3.cloudfront.net/Rocket-Vintage-Chill-Cap_66374_1_lg.png",
    color: ["red", "blue", "pink"],
    size: ["XS", "S", "M", "L"],
    tag: ["men"],
    title: "Catty Cap",
    price: 51

  },
  {
    id: "m3",
    img: "https://d3o2e4jr3mxnm3.cloudfront.net/Mens-Jake-Guitar-Vintage-Crusher-Tee_68382_1_lg.png",
    color: ["orange", "blue", "pink"],
    size: ["XS", "S", "M", "XL"],
    tag: ["men"],
    title: "Shiny T-shirt",
    price: 83
  },
  {
    id: "m4",
    img: "https://www.prada.com/content/dam/pradanux_products/U/UCS/UCS319/1YOTF010O/UCS319_1YOT_F010O_S_182_SLF.png",
    color: ["red", "pink"],
    size: ["XS", "L"],
    tag: ["men"],
    title: "Doggy Cap",
    price: 325

  },
  {
    id: "m5",
    img: "https://i.pinimg.com/originals/62/98/b0/6298b026a65cf80bcf9dce061e9b79c9.png",
    color: ["orange", "red"],
    size: ["XS", "S", "M"],
    tag: ["men"],
    title: "Summer Bag",
    price: 119
  },
  {
    id: "m6",
    img: "https://www.pngall.com/wp-content/uploads/4/Skirt.png",
    color: ["red", "blue", "pink"],
    size: ["XS", "S", "M", "L"],
    tag: ["men"],
    title: "Catty Cap",
    price: 51

  },
  {
    id: "m7",
    img: "https://www.pngall.com/wp-content/uploads/4/Skirt-PNG.png",
    color: ["orange", "blue", "pink"],
    size: ["XS", "S", "M", "XL"],
    tag: ["men"],
    title: "Shiny T-shirt",
    price: 13
  },
  {
    id: "m8",
    img: "https://www.prada.com/content/dam/pradanux_products/U/UCS/UCS319/1YOTF010O/UCS319_1YOT_F010O_S_182_SLF.png",
    color: ["red", "pink"],
    size: ["XS", "L"],
    tag: ["men"],
    title: "Doggy Cap",
    price: 31

  },
]
export const womenProducts = [

  {
    id: "w1",
    img: "https://www.prada.com/content/dam/pradanux_products/U/UCS/UCS319/1YOTF010O/UCS319_1YOT_F010O_S_182_SLF.png",
    color: ["black", "blue", "pink"],
    size: ["XS", "S", "XL"],
    tag: ["women"],
    price: 119,
    title: "Energetic Dress",
  },
  {
    id: "w2",
    img: "https://i.pinimg.com/originals/62/98/b0/6298b026a65cf80bcf9dce061e9b79c9.png",
    color: ["black", "orange", "red"],
    size: ["M", "L", "XL"],
    tag: ["women"],
    price: 51,
    title: "Loose T-shirt",
  },
  {
    id: "w3",
    img: "https://www.burdastyle.com/pub/media/catalog/product/cache/7bd3727382ce0a860b68816435d76e26/107/BUS-PAT-BURTE-1320516/1170x1470_BS_2016_05_132_front.png",
    color: ["black", "red", "blue", "pink"],
    size: ["XS", "S"],
    tag: ["women"],
    price: 11,
    title: "Loose T-shirt",
  },
  {
    id: "w4",
    img: "https://d3o2e4jr3mxnm3.cloudfront.net/Rocket-Vintage-Chill-Cap_66374_1_lg.png",
    color: ["black", "blue", "pink"],
    size: ["XS", "S", "XL"],
    tag: ["women"],
    price: 32,
    title: "Energetic Dress",
  },
  {
    id: "w5",
    img: "https://i.pinimg.com/originals/62/98/b0/6298b026a65cf80bcf9dce061e9b79c9.png",
    color: ["black", "orange", "red"],
    size: ["M", "L", "XL"],
    tag: ["women"],
    price: 151,
    title: "Loose T-shirt",
  },
  {
    id: "w6",
    img: "https://www.pngall.com/wp-content/uploads/4/Skirt-PNG.png",
    color: ["black", "red", "blue", "pink"],
    size: ["XS", "S"],
    tag: ["women"],
    price: 112,
    title: "Loose T-shirt",
  }, {
    id: "w7",
    img: "https://www.prada.com/content/dam/pradanux_products/U/UCS/UCS319/1YOTF010O/UCS319_1YOT_F010O_S_182_SLF.png",
    color: ["black", "blue", "pink"],
    size: ["XS", "S", "XL"],
    tag: ["women"],
    price: 119,
    title: "Energetic Dress",
  },
]
export const unisexProducts = [
  {
    id: "u1",
    img: "https://www.pngall.com/wp-content/uploads/4/Skirt-PNG.png",
    color: ["black", "orange", "red"],
    size: ["L", "XL"],
    tag: ["men", "women"],
    price: 85,
    title: "Kid Cap",
  },
  {
    id: "u2",
    img: "https://www.burdastyle.com/pub/media/catalog/product/cache/7bd3727382ce0a860b68816435d76e26/107/BUS-PAT-BURTE-1320516/1170x1470_BS_2016_05_132_front.png",
    color: ["black", "red", "blue"],
    size: ["M", "L", "XL"],
    tag: ["men", "women"],
    price: 21,
    title: "Warm Dress",
  },
  {
    id: "u3",
    img: "https://d3o2e4jr3mxnm3.cloudfront.net/Rocket-Vintage-Chill-Cap_66374_1_lg.png",
    color: ["blue", "pink"],
    size: ["L", "XL"],
    tag: ["men", "women"],
    price: 119,
    title: "Young T-shirt",
  },
  {
    id: "u4",
    img: "https://d3o2e4jr3mxnm3.cloudfront.net/Rocket-Vintage-Chill-Cap_66374_1_lg.png",
    color: ["black", "orange", "red", "blue", "pink"],
    size: ["XS", "S", "M", "L", "XL"],
    tag: ["men", "women"],
    price: 15,
    title: "Eco-Bag",
  },
  {
    id: "u5",
    img: "https://i.pinimg.com/originals/62/98/b0/6298b026a65cf80bcf9dce061e9b79c9.png",
    color: ["black", "orange", "red"],
    size: ["L", "XL"],
    tag: ["men", "women"],
    price: 185,
    title: "Kid Cap",
  },
  {
    id: "u6",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReKxrl98bctpXiaLur94qZnJqdmWZYt25jeA&usqp=CAUhttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGXvJ1jOp-iNvH0fzNvmcIROVWiNC1ZH83ZA&usqp=CAU",
    color: ["black", "red", "blue"],
    size: ["M", "L", "XL"],
    tag: ["men", "women"],
    price: 421,
    title: "Warm Dress",
  },
  {
    id: "u7",
    img: "https://images.ctfassets.net/5gvckmvm9289/3BlDoZxSSjqAvv1jBJP7TH/65f9a95484117730ace42abf64e89572/Noissue-x-Creatsy-Tote-Bag-Mockup-Bundle-_4_-2.png",
    color: ["blue", "pink"],
    size: ["L", "XL"],
    tag: ["men", "women"],
    price: 39,
    title: "Young T-shirt",
  },
  {
    id: "u8",
    img: "https://www.pngall.com/wp-content/uploads/4/Skirt.png",
    color: ["black", "orange", "red", "blue", "pink"],
    size: ["XS", "S", "M", "L", "XL"],
    tag: ["men", "women"],
    price: 215,
    title: "Eco-Bag",
  },
]
export default dummyItems
