const dummyItems = [
  {
    id: 1,
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
    id: 1,
    img: "https://images.pexels.com/photos/5886041/pexels-photo-5886041.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    title: "MEN",
    type: 'men'
  },
  {
    id: 2,
    img: "https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    title: "WOMEN",
    type: "women"
  },
  {
    id: 3,
    img: "https://images.pexels.com/photos/5480696/pexels-photo-5480696.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    title: "UNISEX",
    type: 'unisex'
  },
];

export const popularProducts = [
  {
    id: 1,
    img: "https://d3o2e4jr3mxnm3.cloudfront.net/Mens-Jake-Guitar-Vintage-Crusher-Tee_68382_1_lg.png",
  },
  {
    id: 2,
    img: "https://www.prada.com/content/dam/pradanux_products/U/UCS/UCS319/1YOTF010O/UCS319_1YOT_F010O_S_182_SLF.png",
  },
  {
    id: 3,
    img: "https://www.burdastyle.com/pub/media/catalog/product/cache/7bd3727382ce0a860b68816435d76e26/107/BUS-PAT-BURTE-1320516/1170x1470_BS_2016_05_132_front.png",
  },
  {
    id: 4,
    img: "https://images.ctfassets.net/5gvckmvm9289/3BlDoZxSSjqAvv1jBJP7TH/65f9a95484117730ace42abf64e89572/Noissue-x-Creatsy-Tote-Bag-Mockup-Bundle-_4_-2.png",
  },
  {
    id: 5,
    img: "https://d3o2e4jr3mxnm3.cloudfront.net/Rocket-Vintage-Chill-Cap_66374_1_lg.png",
  },
]

export const allProducts = [
  {
    id: 1,
    img: "https://d3o2e4jr3mxnm3.cloudfront.net/Mens-Jake-Guitar-Vintage-Crusher-Tee_68382_1_lg.png",
    color: ["black", "white", "red", "blue", "pink"],
    size: ["XS", "S", "M", "L", "XL"],
    tag: ["men", "women"]
  },
  {
    id: 2,
    img: "https://www.prada.com/content/dam/pradanux_products/U/UCS/UCS319/1YOTF010O/UCS319_1YOT_F010O_S_182_SLF.png",
    color: ["black", "blue", "pink"],
    size: ["XS", "S", "XL"],
    tag: ["women"]
  },
  {
    id: 3,
    img: "https://www.burdastyle.com/pub/media/catalog/product/cache/7bd3727382ce0a860b68816435d76e26/107/BUS-PAT-BURTE-1320516/1170x1470_BS_2016_05_132_front.png",
    color: ["black", "red", "blue"],
    size: ["M", "L", "XL"],
    tag: ["men", "women"]
  },
  {
    id: 4,
    img: "https://images.ctfassets.net/5gvckmvm9289/3BlDoZxSSjqAvv1jBJP7TH/65f9a95484117730ace42abf64e89572/Noissue-x-Creatsy-Tote-Bag-Mockup-Bundle-_4_-2.png",
    color: ["white", "red"],
    size: ["XS", "S", "M"],
    tag: ["men"]
  },
  {
    id: 5,
    img: "https://d3o2e4jr3mxnm3.cloudfront.net/Rocket-Vintage-Chill-Cap_66374_1_lg.png",
    color: ["red", "blue", "pink"],
    size: ["XS", "S", "M", "L"],
    tag: ["men"]
  },
  {
    id: 6,
    img: "https://d3o2e4jr3mxnm3.cloudfront.net/Mens-Jake-Guitar-Vintage-Crusher-Tee_68382_1_lg.png",
    color: ["white", "blue", "pink"],
    size: ["XS", "S", "M", "XL"],
    tag: ["men"]
  },
  {
    id: 7,
    img: "https://www.prada.com/content/dam/pradanux_products/U/UCS/UCS319/1YOTF010O/UCS319_1YOT_F010O_S_182_SLF.png",
    color: ["black", "white", "red"],
    size: ["M", "L", "XL"],
    tag: ["women"]
  },
  {
    id: 8,
    img: "https://www.burdastyle.com/pub/media/catalog/product/cache/7bd3727382ce0a860b68816435d76e26/107/BUS-PAT-BURTE-1320516/1170x1470_BS_2016_05_132_front.png",
    color: ["black", "red", "blue", "pink"],
    size: ["XS", "S"],
    tag: ["women"]
  },
  {
    id: 9,
    img: "https://images.ctfassets.net/5gvckmvm9289/3BlDoZxSSjqAvv1jBJP7TH/65f9a95484117730ace42abf64e89572/Noissue-x-Creatsy-Tote-Bag-Mockup-Bundle-_4_-2.png",
    color: ["white", "red", "blue", "pink"],
    size: ["L", "XL"],
    tag: ["men", "women"]
  },
  {
    id: 10,
    img: "https://d3o2e4jr3mxnm3.cloudfront.net/Rocket-Vintage-Chill-Cap_66374_1_lg.png",
    color: ["black", "white", "red", "blue", "pink"],
    size: ["XS", "S", "M", "L", "XL"],
    tag: ["men", "women"]
  },
]

export const menProducts = [

  {
    id: 1,
    img: "https://images.ctfassets.net/5gvckmvm9289/3BlDoZxSSjqAvv1jBJP7TH/65f9a95484117730ace42abf64e89572/Noissue-x-Creatsy-Tote-Bag-Mockup-Bundle-_4_-2.png",
    color: ["white", "red"],
    size: ["XS", "S", "M"],
    tag: ["men"]
  },
  {
    id: 2,
    img: "https://d3o2e4jr3mxnm3.cloudfront.net/Rocket-Vintage-Chill-Cap_66374_1_lg.png",
    color: ["red", "blue", "pink"],
    size: ["XS", "S", "M", "L"],
    tag: ["men"]
  },
  {
    id: 3,
    img: "https://d3o2e4jr3mxnm3.cloudfront.net/Mens-Jake-Guitar-Vintage-Crusher-Tee_68382_1_lg.png",
    color: ["white", "blue", "pink"],
    size: ["XS", "S", "M", "XL"],
    tag: ["men"]
  }
]
export const womenProducts = [

  {
    id: 2,
    img: "https://www.prada.com/content/dam/pradanux_products/U/UCS/UCS319/1YOTF010O/UCS319_1YOT_F010O_S_182_SLF.png",
    color: ["black", "blue", "pink"],
    size: ["XS", "S", "XL"],
    tag: ["women"]
  },
  {
    id: 7,
    img: "https://www.prada.com/content/dam/pradanux_products/U/UCS/UCS319/1YOTF010O/UCS319_1YOT_F010O_S_182_SLF.png",
    color: ["black", "white", "red"],
    size: ["M", "L", "XL"],
    tag: ["women"]
  },
  {
    id: 8,
    img: "https://www.burdastyle.com/pub/media/catalog/product/cache/7bd3727382ce0a860b68816435d76e26/107/BUS-PAT-BURTE-1320516/1170x1470_BS_2016_05_132_front.png",
    color: ["black", "red", "blue", "pink"],
    size: ["XS", "S"],
    tag: ["women"]
  }
]
export const unisexProducts = [
  {
    id: 1,
    img: "https://d3o2e4jr3mxnm3.cloudfront.net/Mens-Jake-Guitar-Vintage-Crusher-Tee_68382_1_lg.png",
    color: ["black", "white", "red", "blue", "pink"],
    size: ["XS", "S", "M", "L", "XL"],
    tag: ["men", "women"]
  },
  {
    id: 3,
    img: "https://www.burdastyle.com/pub/media/catalog/product/cache/7bd3727382ce0a860b68816435d76e26/107/BUS-PAT-BURTE-1320516/1170x1470_BS_2016_05_132_front.png",
    color: ["black", "red", "blue"],
    size: ["M", "L", "XL"],
    tag: ["men", "women"]
  },
  {
    id: 9,
    img: "https://images.ctfassets.net/5gvckmvm9289/3BlDoZxSSjqAvv1jBJP7TH/65f9a95484117730ace42abf64e89572/Noissue-x-Creatsy-Tote-Bag-Mockup-Bundle-_4_-2.png",
    color: ["white", "red", "blue", "pink"],
    size: ["L", "XL"],
    tag: ["men", "women"]
  },
  {
    id: 10,
    img: "https://d3o2e4jr3mxnm3.cloudfront.net/Rocket-Vintage-Chill-Cap_66374_1_lg.png",
    color: ["black", "white", "red", "blue", "pink"],
    size: ["XS", "S", "M", "L", "XL"],
    tag: ["men", "women"]
  },
]
export default dummyItems
