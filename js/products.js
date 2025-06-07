const products = [
  {
    "id": "prod_001",
    "title": "Emerald Solitaire Bracelets",
    "price": 8518,
    "image": "images/35b73cc0cac11739c95262cb1920dd89.jpg",
    "metal": "18K White Gold",
    "carat": "2 ct",
    "category": "Rings",
    "description": "A timeless piece with lab-grown diamonds and elegant design."
  },
  {
    "id": "prod_002",
    "title": "Ruby Solitaire Necklaces",
    "price": 2090,
    "image": "images/0b1d30f33130c0b2ad46340a1671161a.jpg",
    "metal": "Rose Gold",
    "carat": "0.5 ct",
    "category": "Earrings",
    "description": "Crafted to perfection, this jewelry adds sparkle to every moment."
  },
  {
    "id": "prod_003",
    "title": "Diamond Infinity Earrings",
    "price": 7245,
    "image": "images/6eff3b5414470077d6e8c8d398f5d5e5.jpg",
    "metal": "Platinum",
    "carat": "0.5 ct",
    "category": "Rings",
    "description": "Designed with love and sophistication in every detail."
  },
  {
    "id": "prod_004",
    "title": "Diamond Solitaire Earrings",
    "price": 3555,
    "image": "images/0d7861da2eed2ab82ce49bba4dff5ba1.jpg",
    "metal": "Platinum",
    "carat": "2 ct",
    "category": "Earrings",
    "description": "A timeless piece with lab-grown diamonds and elegant design."
  },
  {
    "id": "prod_005",
    "title": "Emerald Solitaire Necklaces",
    "price": 5036,
    "image": "images/30fad9a9d7d7a8a691e9c950e7827d96.jpg",
    "metal": "Rose Gold",
    "carat": "1.5 ct",
    "category": "Rings",
    "description": "Gracefully handcrafted for everyday elegance or special events."
  },
  {
    "id": "prod_006",
    "title": "Sapphire Tennis Earrings",
    "price": 9514,
    "image": "images/fd229f8e70c4293aaec5811cdef33a15.jpg",
    "metal": "18K White Gold",
    "carat": "2 ct",
    "category": "Rings",
    "description": "A unique blend of modern luxury and classic beauty."
  },
  {
    "id": "prod_007",
    "title": "Ruby Cluster Necklaces",
    "price": 6214,
    "image": "images/e847c46c5ff7c81e4a1cb2ba050c3fe0.jpg",
    "metal": "Rose Gold",
    "carat": "2.5 ct",
    "category": "Necklaces",
    "description": "A unique blend of modern luxury and classic beauty."
  },
  {
    "id": "prod_008",
    "title": "Diamond Tennis Bracelets",
    "price": 1619,
    "image": "images/3099577dff4164610b879666ba8b3c24.jpg",
    "metal": "Rose Gold",
    "carat": "2.5 ct",
    "category": "Necklaces",
    "description": "Crafted to perfection, this jewelry adds sparkle to every moment."
  },
  {
    "id": "prod_009",
    "title": "Sapphire Solitaire Earrings",
    "price": 9185,
    "image": "images/e6978d3b4f71f900a1f8bfd03cafa098.jpg",
    "metal": "Rose Gold",
    "carat": "3 ct",
    "category": "Bracelets",
    "description": "Crafted to perfection, this jewelry adds sparkle to every moment."
  },
  {
    "id": "prod_010",
    "title": "Diamond Infinity Rings",
    "price": 3295,
    "image": "images/93b484118f2623b012b27a39e37237de.jpg",
    "metal": "Rose Gold",
    "carat": "3 ct",
    "category": "Earrings",
    "description": "Designed with love and sophistication in every detail."
  },
  {
    "id": "prod_011",
    "title": "Ruby Halo Bracelets",
    "price": 4460,
    "image": "images/64621d6865479f49fdc716e349aa1e75.jpg",
    "metal": "Rose Gold",
    "carat": "2.5 ct",
    "category": "Bracelets",
    "description": "Crafted to perfection, this jewelry adds sparkle to every moment."
  },
  {
    "id": "prod_012",
    "title": "Sapphire Cluster Rings",
    "price": 3632,
    "image": "images/0287f9225448859059443b094012a2ff.jpg",
    "metal": "18K White Gold",
    "carat": "2.5 ct",
    "category": "Rings",
    "description": "Gracefully handcrafted for everyday elegance or special events."
  },
  {
    "id": "prod_013",
    "title": "Diamond Halo Earrings",
    "price": 2302,
    "image": "images/d39fc1a8700c841b7e3dc4480da92a2c.jpg",
    "metal": "Platinum",
    "carat": "3 ct",
    "category": "Rings",
    "description": "Crafted to perfection, this jewelry adds sparkle to every moment."
  },
  {
    "id": "prod_014",
    "title": "Ruby Tennis Bracelets",
    "price": 1833,
    "image": "images/fe903d5c495441680e430d927889dd90.jpg",
    "metal": "Rose Gold",
    "carat": "2.5 ct",
    "category": "Necklaces",
    "description": "Crafted to perfection, this jewelry adds sparkle to every moment."
  },
  {
    "id": "prod_015",
    "title": "Diamond Infinity Necklaces",
    "price": 2706,
    "image": "__MACOSX/images/._35b73cc0cac11739c95262cb1920dd89.jpg",
    "metal": "18K White Gold",
    "carat": "1 ct",
    "category": "Earrings",
    "description": "Designed with love and sophistication in every detail."
  },
  {
    "id": "prod_016",
    "title": "Sapphire Tennis Bracelets",
    "price": 5952,
    "image": "__MACOSX/images/._0b1d30f33130c0b2ad46340a1671161a.jpg",
    "metal": "18K White Gold",
    "carat": "0.5 ct",
    "category": "Rings",
    "description": "Gracefully handcrafted for everyday elegance or special events."
  },
  {
    "id": "prod_017",
    "title": "Sapphire Tennis Necklaces",
    "price": 9459,
    "image": "__MACOSX/images/._6eff3b5414470077d6e8c8d398f5d5e5.jpg",
    "metal": "18K Yellow Gold",
    "carat": "2.5 ct",
    "category": "Bracelets",
    "description": "A timeless piece with lab-grown diamonds and elegant design."
  },
  {
    "id": "prod_018",
    "title": "Ruby Cluster Earrings",
    "price": 9691,
    "image": "__MACOSX/images/._0d7861da2eed2ab82ce49bba4dff5ba1.jpg",
    "metal": "18K Yellow Gold",
    "carat": "2.5 ct",
    "category": "Necklaces",
    "description": "A timeless piece with lab-grown diamonds and elegant design."
  },
  {
    "id": "prod_019",
    "title": "Diamond Halo Rings",
    "price": 7979,
    "image": "__MACOSX/images/._30fad9a9d7d7a8a691e9c950e7827d96.jpg",
    "metal": "Rose Gold",
    "carat": "2.5 ct",
    "category": "Bracelets",
    "description": "Crafted to perfection, this jewelry adds sparkle to every moment."
  },
  {
    "id": "prod_020",
    "title": "Sapphire Infinity Bracelets",
    "price": 2632,
    "image": "__MACOSX/images/._fd229f8e70c4293aaec5811cdef33a15.jpg",
    "metal": "18K Yellow Gold",
    "carat": "0.5 ct",
    "category": "Bracelets",
    "description": "A unique blend of modern luxury and classic beauty."
  },
  {
    "id": "prod_021",
    "title": "Diamond Solitaire Necklaces",
    "price": 6547,
    "image": "__MACOSX/images/._e847c46c5ff7c81e4a1cb2ba050c3fe0.jpg",
    "metal": "Rose Gold",
    "carat": "2 ct",
    "category": "Bracelets",
    "description": "A unique blend of modern luxury and classic beauty."
  },
  {
    "id": "prod_022",
    "title": "Ruby Solitaire Earrings",
    "price": 4433,
    "image": "__MACOSX/images/._3099577dff4164610b879666ba8b3c24.jpg",
    "metal": "18K Yellow Gold",
    "carat": "1 ct",
    "category": "Necklaces",
    "description": "Gracefully handcrafted for everyday elegance or special events."
  },
  {
    "id": "prod_023",
    "title": "Ruby Solitaire Necklaces",
    "price": 8039,
    "image": "__MACOSX/images/._e6978d3b4f71f900a1f8bfd03cafa098.jpg",
    "metal": "18K Yellow Gold",
    "carat": "0.5 ct",
    "category": "Necklaces",
    "description": "A timeless piece with lab-grown diamonds and elegant design."
  },
  {
    "id": "prod_024",
    "title": "Emerald Halo Necklaces",
    "price": 3650,
    "image": "__MACOSX/images/._93b484118f2623b012b27a39e37237de.jpg",
    "metal": "18K Yellow Gold",
    "carat": "0.5 ct",
    "category": "Rings",
    "description": "Gracefully handcrafted for everyday elegance or special events."
  },
  {
    "id": "prod_025",
    "title": "Sapphire Solitaire Necklaces",
    "price": 1923,
    "image": "__MACOSX/images/._64621d6865479f49fdc716e349aa1e75.jpg",
    "metal": "Platinum",
    "carat": "1 ct",
    "category": "Rings",
    "description": "Crafted to perfection, this jewelry adds sparkle to every moment."
  },
  {
    "id": "prod_026",
    "title": "Diamond Tennis Rings",
    "price": 3882,
    "image": "__MACOSX/images/._0287f9225448859059443b094012a2ff.jpg",
    "metal": "Platinum",
    "carat": "2.5 ct",
    "category": "Rings",
    "description": "Crafted to perfection, this jewelry adds sparkle to every moment."
  },
  {
    "id": "prod_027",
    "title": "Sapphire Solitaire Necklaces",
    "price": 1765,
    "image": "__MACOSX/images/._d39fc1a8700c841b7e3dc4480da92a2c.jpg",
    "metal": "18K Yellow Gold",
    "carat": "1 ct",
    "category": "Earrings",
    "description": "Crafted to perfection, this jewelry adds sparkle to every moment."
  },
  {
    "id": "prod_028",
    "title": "Sapphire Cluster Necklaces",
    "price": 4905,
    "image": "__MACOSX/images/._fe903d5c495441680e430d927889dd90.jpg",
    "metal": "18K Yellow Gold",
    "carat": "1.5 ct",
    "category": "Rings",
    "description": "A timeless piece with lab-grown diamonds and elegant design."
  }
];