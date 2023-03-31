const photoData = [
  {
    id: 1,
    location: "Vancouver",
    category: "City",
    textContent:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in feugiat dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec ultricies accumsan rutrum. Aliquam ex lorem, euismod quis nunc non, varius bibendum metus. Mauris semper, metus nec faucibus vehicula, purus magna accumsan elit, nec tempus dolor massa ac erat. ",
    date: "2022-04-01T07:00:00.000Z",
    imageURL:
      '[{"fieldname":"galleryImage","originalname":"000616420006.jpg","encoding":"7bit","mimetype":"image/jpeg","destination":"./public/uploads/","filename":"galleryImage-1649121996487.jpg","path":"public/uploads/galleryImage-1649121996487.jpg","size":2080102},{"fieldname":"galleryImage","originalname":"000616420007.jpg","encoding":"7bit","mimetype":"image/jpeg","destination":"./public/uploads/","filename":"galleryImage-1649121996496.jpg","path":"public/uploads/galleryImage-1649121996496.jpg","size":1772520},{"fieldname":"galleryImage","originalname":"000616420008.jpg","encoding":"7bit","mimetype":"image/jpeg","destination":"./public/uploads/","filename":"galleryImage-1649121996500.jpg","path":"public/uploads/galleryImage-1649121996500.jpg","size":2010613}]',
    camera: "canon AE-1",
    film: "Portra 400",
  },
  {
    id: 2,
    location: "Whister",
    category: "Mountains",
    textContent:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in feugiat dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec ultricies accumsan rutrum. Aliquam ex lorem, euismod quis nunc non, varius bibendum metus. Mauris semper, metus nec faucibus vehicula, purus magna accumsan elit, nec tempus dolor massa ac erat. ",
    date: "2022-04-01T07:00:00.000Z",
    imageURL:
      '[{"fieldname":"galleryImage","originalname":"000616420026.jpg","encoding":"7bit","mimetype":"image/jpeg","destination":"./public/uploads/","filename":"galleryImage-1649122105574.jpg","path":"public/uploads/galleryImage-1649122105574.jpg","size":2712704},{"fieldname":"galleryImage","originalname":"000616420027.jpg","encoding":"7bit","mimetype":"image/jpeg","destination":"./public/uploads/","filename":"galleryImage-1649122105589.jpg","path":"public/uploads/galleryImage-1649122105589.jpg","size":2142431},{"fieldname":"galleryImage","originalname":"000616420028.jpg","encoding":"7bit","mimetype":"image/jpeg","destination":"./public/uploads/","filename":"galleryImage-1649122105597.jpg","path":"public/uploads/galleryImage-1649122105597.jpg","size":2446098},{"fieldname":"galleryImage","originalname":"000616420032.jpg","encoding":"7bit","mimetype":"image/jpeg","destination":"./public/uploads/","filename":"galleryImage-1649122105605.jpg","path":"public/uploads/galleryImage-1649122105605.jpg","size":2120060},{"fieldname":"galleryImage","originalname":"000616420034.jpg","encoding":"7bit","mimetype":"image/jpeg","destination":"./public/uploads/","filename":"galleryImage-1649122105609.jpg","path":"public/uploads/galleryImage-1649122105609.jpg","size":3548732},{"fieldname":"galleryImage","originalname":"000616420035.jpg","encoding":"7bit","mimetype":"image/jpeg","destination":"./public/uploads/","filename":"galleryImage-1649122105617.jpg","path":"public/uploads/galleryImage-1649122105617.jpg","size":2707163}]',
    camera: "canon AE-1",
    film: "Portra 400",
  },
  {
    id: 3,
    location: "Garibaldi",
    category: "Mountains",
    textContent:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in feugiat dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec ultricies accumsan rutrum. Aliquam ex lorem, euismod quis nunc non, varius bibendum metus. Mauris semper, metus nec faucibus vehicula, purus magna accumsan elit, nec tempus dolor massa ac erat. ",
    date: "2022-04-01T07:00:00.000Z",
    imageURL:
      '[{"fieldname":"galleryImage","originalname":"000526210031.jpg","encoding":"7bit","mimetype":"image/jpeg","destination":"./public/uploads/","filename":"galleryImage-1649122180784.jpg","path":"public/uploads/galleryImage-1649122180784.jpg","size":1281853},{"fieldname":"galleryImage","originalname":"000526210032.jpg","encoding":"7bit","mimetype":"image/jpeg","destination":"./public/uploads/","filename":"galleryImage-1649122180795.jpg","path":"public/uploads/galleryImage-1649122180795.jpg","size":2076668}]',
    camera: "canon AE-1",
    film: "Portra 400",
  },
  {
    id: 4,
    location: "Garibaldi",
    category: "Mountains",
    textContent:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in feugiat dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec ultricies accumsan rutrum. Aliquam ex lorem, euismod quis nunc non, varius bibendum metus. Mauris semper, metus nec faucibus vehicula, purus magna accumsan elit, nec tempus dolor massa ac erat. ",
    date: "2022-04-01T07:00:00.000Z",
    imageURL:
      '[{"fieldname":"galleryImage","originalname":"000526210036.jpg","encoding":"7bit","mimetype":"image/jpeg","destination":"./public/uploads/","filename":"galleryImage-1649122194199.jpg","path":"public/uploads/galleryImage-1649122194199.jpg","size":1625691}]',
    camera: "canon AE-1",
    film: "Portra 400",
  },
  {
    id: 5,
    location: "Lake Lovely Water",
    category: "Mountains",
    textContent:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in feugiat dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec ultricies accumsan rutrum. Aliquam ex lorem, euismod quis nunc non, varius bibendum metus. Mauris semper, metus nec faucibus vehicula, purus magna accumsan elit, nec tempus dolor massa ac erat. ",
    date: "2022-04-01T07:00:00.000Z",
    imageURL:
      '[{"fieldname":"galleryImage","originalname":"000526210016.jpg","encoding":"7bit","mimetype":"image/jpeg","destination":"./public/uploads/","filename":"galleryImage-1649122244675.jpg","path":"public/uploads/galleryImage-1649122244675.jpg","size":1563320},{"fieldname":"galleryImage","originalname":"000526210017.jpg","encoding":"7bit","mimetype":"image/jpeg","destination":"./public/uploads/","filename":"galleryImage-1649122244690.jpg","path":"public/uploads/galleryImage-1649122244690.jpg","size":1494514}]',
    camera: "canon AE-1",
    film: "Portra 400",
  },
  {
    id: 6,
    location: "Mt Seymour",
    category: "Mountains",
    textContent:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in feugiat dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec ultricies accumsan rutrum. Aliquam ex lorem, euismod quis nunc non, varius bibendum metus. Mauris semper, metus nec faucibus vehicula, purus magna accumsan elit, nec tempus dolor massa ac erat. ",
    date: "2022-04-01T07:00:00.000Z",
    imageURL:
      '[{"fieldname":"galleryImage","originalname":"000616420015.jpg","encoding":"7bit","mimetype":"image/jpeg","destination":"./public/uploads/","filename":"galleryImage-1649122327523.jpg","path":"public/uploads/galleryImage-1649122327523.jpg","size":2097537},{"fieldname":"galleryImage","originalname":"000616420016.jpg","encoding":"7bit","mimetype":"image/jpeg","destination":"./public/uploads/","filename":"galleryImage-1649122327532.jpg","path":"public/uploads/galleryImage-1649122327532.jpg","size":2646668},{"fieldname":"galleryImage","originalname":"000616420017.jpg","encoding":"7bit","mimetype":"image/jpeg","destination":"./public/uploads/","filename":"galleryImage-1649122327557.jpg","path":"public/uploads/galleryImage-1649122327557.jpg","size":2735431},{"fieldname":"galleryImage","originalname":"000616420018.jpg","encoding":"7bit","mimetype":"image/jpeg","destination":"./public/uploads/","filename":"galleryImage-1649122327567.jpg","path":"public/uploads/galleryImage-1649122327567.jpg","size":2331917}]',
    camera: "canon AE-1",
    film: "Portra 400",
  },
  {
    id: 7,
    location: "Vancouver",
    category: "City",
    textContent:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in feugiat dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec ultricies accumsan rutrum. Aliquam ex lorem, euismod quis nunc non, varius bibendum metus. Mauris semper, metus nec faucibus vehicula, purus magna accumsan elit, nec tempus dolor massa ac erat. ",
    date: "2022-04-01T07:00:00.000Z",
    imageURL:
      '[{"fieldname":"galleryImage","originalname":"000616420014.jpg","encoding":"7bit","mimetype":"image/jpeg","destination":"./public/uploads/","filename":"galleryImage-1649122407585.jpg","path":"public/uploads/galleryImage-1649122407585.jpg","size":2703622}]',
    camera: "canon AE-1",
    film: "Portra 400",
  },
  {
    id: 8,
    location: "Vancouver",
    category: "City",
    textContent:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in feugiat dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec ultricies accumsan rutrum. Aliquam ex lorem, euismod quis nunc non, varius bibendum metus. Mauris semper, metus nec faucibus vehicula, purus magna accumsan elit, nec tempus dolor massa ac erat. ",
    date: "2022-04-01T07:00:00.000Z",
    imageURL:
      '[{"fieldname":"galleryImage","originalname":"67470022.jpg","encoding":"7bit","mimetype":"image/jpeg","destination":"./public/uploads/","filename":"galleryImage-1649122428971.jpg","path":"public/uploads/galleryImage-1649122428971.jpg","size":1384175}]',
    camera: "canon AE-1",
    film: "Portra 400",
  },
  {
    id: 9,
    location: "Hornby Island",
    category: "Islands",
    textContent:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in feugiat dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec ultricies accumsan rutrum. Aliquam ex lorem, euismod quis nunc non, varius bibendum metus. Mauris semper, metus nec faucibus vehicula, purus magna accumsan elit, nec tempus dolor massa ac erat. ",
    date: "2022-04-01T07:00:00.000Z",
    imageURL:
      '[{"fieldname":"galleryImage","originalname":"67450027.jpg","encoding":"7bit","mimetype":"image/jpeg","destination":"./public/uploads/","filename":"galleryImage-1649122485074.jpg","path":"public/uploads/galleryImage-1649122485074.jpg","size":2081757},{"fieldname":"galleryImage","originalname":"67480021.jpg","encoding":"7bit","mimetype":"image/jpeg","destination":"./public/uploads/","filename":"galleryImage-1649122485084.jpg","path":"public/uploads/galleryImage-1649122485084.jpg","size":1964461},{"fieldname":"galleryImage","originalname":"67480022.jpg","encoding":"7bit","mimetype":"image/jpeg","destination":"./public/uploads/","filename":"galleryImage-1649122485090.jpg","path":"public/uploads/galleryImage-1649122485090.jpg","size":2240496}]',
    camera: "canon AE-1",
    film: "Portra 400",
  },
  {
    id: 10,
    location: "Vancouver",
    category: "Sea",
    textContent:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in feugiat dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec ultricies accumsan rutrum. Aliquam ex lorem, euismod quis nunc non, varius bibendum metus. Mauris semper, metus nec faucibus vehicula, purus magna accumsan elit, nec tempus dolor massa ac erat. ",
    date: "2022-04-01T07:00:00.000Z",
    imageURL:
      '[{"fieldname":"galleryImage","originalname":"27930029.jpg","encoding":"7bit","mimetype":"image/jpeg","destination":"./public/uploads/","filename":"galleryImage-1649122535901.jpg","path":"public/uploads/galleryImage-1649122535901.jpg","size":2225443}]',
    camera: "canon AE-1",
    film: "Portra 400",
  },
  {
    id: 11,
    location: "West Lion",
    category: "Mountains",
    textContent:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in feugiat dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec ultricies accumsan rutrum. Aliquam ex lorem, euismod quis nunc non, varius bibendum metus. Mauris semper, metus nec faucibus vehicula, purus magna accumsan elit, nec tempus dolor massa ac erat. ",
    date: "2022-04-01T07:00:00.000Z",
    imageURL:
      '[{"fieldname":"galleryImage","originalname":"000563740029.jpg","encoding":"7bit","mimetype":"image/jpeg","destination":"./public/uploads/","filename":"galleryImage-1649122687763.jpg","path":"public/uploads/galleryImage-1649122687763.jpg","size":1045415},{"fieldname":"galleryImage","originalname":"000563740030.jpg","encoding":"7bit","mimetype":"image/jpeg","destination":"./public/uploads/","filename":"galleryImage-1649122687772.jpg","path":"public/uploads/galleryImage-1649122687772.jpg","size":1116025},{"fieldname":"galleryImage","originalname":"000563740031.jpg","encoding":"7bit","mimetype":"image/jpeg","destination":"./public/uploads/","filename":"galleryImage-1649122687777.jpg","path":"public/uploads/galleryImage-1649122687777.jpg","size":1149024},{"fieldname":"galleryImage","originalname":"000563740032.jpg","encoding":"7bit","mimetype":"image/jpeg","destination":"./public/uploads/","filename":"galleryImage-1649122687781.jpg","path":"public/uploads/galleryImage-1649122687781.jpg","size":1110080},{"fieldname":"galleryImage","originalname":"000563740033.jpg","encoding":"7bit","mimetype":"image/jpeg","destination":"./public/uploads/","filename":"galleryImage-1649122687784.jpg","path":"public/uploads/galleryImage-1649122687784.jpg","size":1102565},{"fieldname":"galleryImage","originalname":"000563740035.jpg","encoding":"7bit","mimetype":"image/jpeg","destination":"./public/uploads/","filename":"galleryImage-1649122687785.jpg","path":"public/uploads/galleryImage-1649122687785.jpg","size":1081075},{"fieldname":"galleryImage","originalname":"000563740037.jpg","encoding":"7bit","mimetype":"image/jpeg","destination":"./public/uploads/","filename":"galleryImage-1649122687787.jpg","path":"public/uploads/galleryImage-1649122687787.jpg","size":1192460}]',
    camera: "canon AE-1",
    film: "Portra 400",
  },
  {
    id: 12,
    location: "Seymour",
    category: "Mountains",
    textContent:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in feugiat dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec ultricies accumsan rutrum. Aliquam ex lorem, euismod quis nunc non, varius bibendum metus. Mauris semper, metus nec faucibus vehicula, purus magna accumsan elit, nec tempus dolor massa ac erat. ",
    date: "2022-04-01T07:00:00.000Z",
    imageURL:
      '[{"fieldname":"galleryImage","originalname":"27940001.jpg","encoding":"7bit","mimetype":"image/jpeg","destination":"./public/uploads/","filename":"galleryImage-1649122745016.jpg","path":"public/uploads/galleryImage-1649122745016.jpg","size":1762543},{"fieldname":"galleryImage","originalname":"27940003.jpg","encoding":"7bit","mimetype":"image/jpeg","destination":"./public/uploads/","filename":"galleryImage-1649122745027.jpg","path":"public/uploads/galleryImage-1649122745027.jpg","size":1649705}]',
    camera: "canon AE-1",
    film: "Portra 400",
  },
  {
    id: 65,
    location: "Mountains",
    category: "Hike",
    textContent:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in feugiat dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec ultricies accumsan rutrum. Aliquam ex lorem, euismod quis nunc non, varius bibendum metus. Mauris semper, metus nec faucibus vehicula, purus magna accumsan elit, nec tempus dolor massa ac erat.",
    date: "2022-04-01T07:00:00.000Z",
    imageURL:
      '[{"fieldname":"galleryImage","originalname":"27910015.jpg","encoding":"7bit","mimetype":"image/jpeg","destination":"./public/uploads/","filename":"galleryImage-1649448291373.jpg","path":"public/uploads/galleryImage-1649448291373.jpg","size":1831890},{"fieldname":"galleryImage","originalname":"27910018.jpg","encoding":"7bit","mimetype":"image/jpeg","destination":"./public/uploads/","filename":"galleryImage-1649448291388.jpg","path":"public/uploads/galleryImage-1649448291388.jpg","size":1863812},{"fieldname":"galleryImage","originalname":"27910021.jpg","encoding":"7bit","mimetype":"image/jpeg","destination":"./public/uploads/","filename":"galleryImage-1649448291397.jpg","path":"public/uploads/galleryImage-1649448291397.jpg","size":2033876},{"fieldname":"galleryImage","originalname":"27910023.jpg","encoding":"7bit","mimetype":"image/jpeg","destination":"./public/uploads/","filename":"galleryImage-1649448291405.jpg","path":"public/uploads/galleryImage-1649448291405.jpg","size":2282011},{"fieldname":"galleryImage","originalname":"27910025.jpg","encoding":"7bit","mimetype":"image/jpeg","destination":"./public/uploads/","filename":"galleryImage-1649448291412.jpg","path":"public/uploads/galleryImage-1649448291412.jpg","size":1514947}]',
    camera: "canon AE-1",
    film: "Portra 400",
  },
  {
    id: 71,
    location: "Jone's Lake",
    category: "Hike",
    textContent: "Camping trip to jones lake",
    date: "2024-10-22T07:00:00.000Z",
    imageURL:
      '[{"fieldname":"galleryImage","originalname":"27910018.jpg","encoding":"7bit","mimetype":"image/jpeg","destination":"./public/uploads/","filename":"galleryImage-1654795722204.jpg","path":"public/uploads/galleryImage-1654795722204.jpg","size":1863812}]',
    camera: "Canon AE-1",
    film: "Fuji 400",
  },
  {
    id: 77,
    location: "vancouver",
    category: "test",
    textContent: "notes",
    date: "2022-04-03T07:00:00.000Z",
    imageURL:
      '[{"fieldname":"galleryImage","originalname":"27910025.jpg","encoding":"7bit","mimetype":"image/jpeg","destination":"./public/uploads/","filename":"galleryImage-1655336982491.jpg","path":"public/uploads/galleryImage-1655336982491.jpg","size":1514947}]',
    camera: "test",
    film: "test",
  },
];

module.exports = {
  photoData,
};
