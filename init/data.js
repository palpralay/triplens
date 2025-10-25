// const sampleListings = [
//     {
//       title: "Cozy Beachfront Cottage",
//       description:
//         "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
//       image: {
//         filename: "listingimage",
//         url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
//       },
//       price: 15000,
//       location: "Malibu",
//       country: "United States",
//     },
//     {
//       title: "Modern Loft in Downtown",
//       description:
//         "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
//       image: {
//         filename: "listingimage",
//         url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
//       },
//       price: 12000,
//       location: "New York City",
//       country: "United States",
//     },
//     {
//       title: "Mountain Retreat",
//       description:
//         "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
//       image: {
//         filename: "listingimage",
//         url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//       },
//       price: 10000,
//       location: "Aspen",
//       country: "United States",
//     },
//     {
//       title: "Historic Villa in Tuscany",
//       description:
//         "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
//       image: {
//         filename: "listingimage",
//         url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//       },
//       price: 25000,
//       location: "Florence",
//       country: "Italy",
//     },
//     {
//       title: "Secluded Treehouse Getaway",
//       description:
//         "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
//       image: {
//         filename: "listingimage",
//         url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
//       },
//       price: 8000,
//       location: "Portland",
//       country: "United States",
//     },
//     {
//       title: "Beachfront Paradise",
//       description:
//         "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
//       image: {
//         filename: "listingimage",
//         url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
//       },
//       price: 20000,
//       location: "Cancun",
//       country: "Mexico",
//     },
//     {
//       title: "Rustic Cabin by the Lake",
//       description:
//         "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
//       image: {
//         filename: "listingimage",
//         url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//       },
//       price: 9000,
//       location: "Lake Tahoe",
//       country: "United States",
//     },
//     {
//       title: "Luxury Penthouse with City Views",
//       description:
//         "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
//       image: {
//         filename: "listingimage",
//         url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
//       },
//       price: 3500,
//       location: "Los Angeles",
//       country: "United States",
//     },
//     {
//       title: "Ski-In/Ski-Out Chalet",
//       description:
//         "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
//       image: {
//         filename: "listingimage",
//         url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//       },
//       price: 3000,
//       location: "Verbier",
//       country: "Switzerland",
//     },
//     {
//       title: "Safari Lodge in the Serengeti",
//       description:
//         "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
//       image: {
//         filename: "listingimage",
//         url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//       },
//       price: 4000,
//       location: "Serengeti National Park",
//       country: "Tanzania",
//     },
//     {
//       title: "Historic Canal House",
//       description:
//         "Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
//       image: {
//         filename: "listingimage",
//         url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtcGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
//       },
//       price: 18000,
//       location: "Amsterdam",
//       country: "Netherlands",
//     },
//     {
//       title: "Private Island Retreat",
//       description:
//         "Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.",
//       image: {
//         filename: "listingimage",
//         url: "https://images.unsplash.com/photo-1618140052121-39fc6db33972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9kZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
//       },
//       price: 10000,
//       location: "Fiji",
//       country: "Fiji",
//     },
//     {
//       title: "Charming Cottage in the Cotswolds",
//       description:
//         "Escape to the picturesque Cotswolds in this quaint and charming cottage with a thatched roof.",
//       image: {
//         filename: "listingimage",
//         url: "https://images.unsplash.com/photo-1602088113235-229c19758e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVhY2glMjB2YWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
//       },
//       price: 12000,
//       location: "Cotswolds",
//       country: "United Kingdom",
//     },
//     {
//       title: "Historic Brownstone in Boston",
//       description:
//         "Step back in time in this elegant historic brownstone located in the heart of Boston.",
//       image: {
//         filename: "listingimage",
//         url: "https://images.unsplash.com/photo-1533619239233-6280475a633a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//       },
//       price: 22000,
//       location: "Boston",
//       country: "United States",
//     },
//     {
//       title: "Beachfront Bungalow in Bali",
//       description:
//         "Relax on the sandy shores of Bali in this beautiful beachfront bungalow with a private pool.",
//       image: {
//         filename: "listingimage",
//         url: "https://images.unsplash.com/photo-1602391833977-358a52198938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
//       },
//       price: 18000,
//       location: "Bali",
//       country: "Indonesia",
//     },
//     {
//       title: "Mountain View Cabin in Banff",
//       description:
//         "Enjoy breathtaking mountain views from this cozy cabin in the Canadian Rockies.",
//       image: {
//         filename: "listingimage",
//         url: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//       },
//       price: 15000,
//       location: "Banff",
//       country: "Canada",
//     },
//     {
//       title: "Art Deco Apartment in Miami",
//       description:
//         "Step into the glamour of the 1920s in this stylish Art Deco apartment in South Beach.",
//       image: {
//         filename: "listingimage",
//         url: "https://plus.unsplash.com/premium_photo-1670963964797-942df1804579?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//       },
//       price: 16000,
//       location: "Miami",
//       country: "United States",
//     },
//     {
//       title: "Tropical Villa in Phuket",
//       description:
//         "Escape to a tropical paradise in this luxurious villa with a private infinity pool in Phuket.",
//       image: {
//         filename: "listingimage",
//         url: "https://images.unsplash.com/photo-1470165301023-58dab8118cc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//       },
//       price: 9900,
//       location: "Phuket",
//       country: "Thailand",
//     },
//     {
//       title: "Historic Castle in Scotland",
//       description:
//         "Live like royalty in this historic castle in the Scottish Highlands. Explore the rugged beauty of the area.",
//       image: {
//         filename: "listingimage",
//         url: "https://images.unsplash.com/photo-1585543805890-6051f7829f98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJlYWNoJTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
//       },
//       price: 4000,
//       location: "Scottish Highlands",
//       country: "United Kingdom",
//     },
//     {
//       title: "Desert Oasis in Dubai",
//       description:
//         "Experience luxury in the middle of the desert in this opulent oasis in Dubai with a private pool.",
//       image: {
//         filename: "listingimage",
//         url: "https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHViYWl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
//       },
//       price: 5000,
//       location: "Dubai",
//       country: "United Arab Emirates",
//     },
//     {
//       title: "Rustic Log Cabin in Montana",
//       description:
//         "Unplug and unwind in this cozy log cabin surrounded by the natural beauty of Montana.",
//       image: {
//         filename: "listingimage",
//         url: "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//       },
//       price: 11000,
//       location: "Montana",
//       country: "United States",
//     },
//     {
//       title: "Beachfront Villa in Greece",
//       description:
//         "Enjoy the crystal-clear waters of the Mediterranean in this beautiful beachfront villa on a Greek island.",
//       image: {
//         filename: "listingimage",
//         url: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmlsbGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
//       },
//       price: 9500,
//       location: "Mykonos",
//       country: "Greece",
//     },
//     {
//       title: "Eco-Friendly Treehouse Retreat",
//       description:
//         "Stay in an eco-friendly treehouse nestled in the forest. It's the perfect escape for nature lovers.",
//       image: {
//         filename: "listingimage",
//         url: "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
//       },
//       price: 7050,
//       location: "Costa Rica",
//       country: "Costa Rica",
//     },
//     {
//       title: "Historic Cottage in Charleston",
//       description:
//         "Experience the charm of historic Charleston in this beautifully restored cottage with a private garden.",
//       image: {
//         filename: "listingimage",
//         url: "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//       },
//       price: 6600,
//       location: "Charleston",
//       country: "United States",
//     },
//     {
//       title: "Modern Apartment in Tokyo",
//       description:
//         "Explore the vibrant city of Tokyo from this modern and centrally located apartment.",
//       image: {
//         filename: "listingimage",
//         url: "https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRva3lvfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//       },
//       price: 9000,
//       location: "Tokyo",
//       country: "Japan",
//     },
//     {
//       title: "Lakefront Cabin in New Hampshire",
//       description:
//         "Spend your days by the lake in this cozy cabin in the scenic White Mountains of New Hampshire.",
//       image: {
//         filename: "listingimage",
//         url: "https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
//       },
//       price: 12000,
//       location: "New Hampshire",
//       country: "United States",
//     },
//     {
//       title: "Luxury Villa in the Maldives",
//       description:
//         "Indulge in luxury in this overwater villa in the Maldives with stunning views of the Indian Ocean.",
//       image: {
//         filename: "listingimage",
//         url: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
//       },
//       price: 9600,
//       location: "Maldives",
//       country: "Maldives",
//     },
//     {
//       title: "Ski Chalet in Aspen",
//       description:
//         "Hit the slopes in style with this luxurious ski chalet in the world-famous Aspen ski resort.",
//       image: {
//         filename: "listingimage",
//         url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
//       },
//       price: 8500,
//       location: "Aspen",
//       country: "United States",
//     },
//     {
//       title: "Secluded Beach House in Costa Rica",
//       description:
//         "Escape to a secluded beach house on the Pacific coast of Costa Rica. Surf, relax, and unwind.",
//       image: {
//         filename: "listingimage",
//         url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
//       },
//       price: 7900,
//       location: "Costa Rica",
//       country: "Costa Rica",
//     },
//   ];
  
//   module.exports = { data: sampleListings };
  

const sampleListings = [
  {
    title: "Cozy Beachside Cottage",
    description:
      "Relax in this peaceful beachside cottage with stunning ocean views and a private patio.",
    price: 3200,
    location: "Goa",
    country: "India",
    image: {
      url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
      filename: "beach_cottage",
    },
    geometry: {
      type: "Point",
      coordinates: [73.8567, 15.2993],
    },
  },
  {
    title: "Luxury Mountain Retreat",
    description:
      "A luxury stay nestled in the hills of Manali with breathtaking valley views and a cozy fireplace.",
    price: 4500,
    location: "Manali",
    country: "India",
    image: {
      url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      filename: "mountain_retreat",
    },
    geometry: {
      type: "Point",
      coordinates: [77.1887, 32.2396],
    },
  },
  {
    title: "Modern Apartment in Mumbai",
    description:
      "Experience the heart of Mumbai from this stylish and modern city apartment near Marine Drive.",
    price: 5200,
    location: "Mumbai",
    country: "India",
    image: {
      url: "https://images.unsplash.com/photo-1501183638710-841dd1904471",
      filename: "mumbai_apartment",
    },
    geometry: {
      type: "Point",
      coordinates: [72.8777, 19.076],
    },
  },
  {
    title: "Desert Camp Stay",
    description:
      "A traditional Rajasthani experience with camel rides, bonfires, and starry night skies.",
    price: 2100,
    location: "Jaisalmer",
    country: "India",
    image: {
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
      filename: "desert_camp",
    },
    geometry: {
      type: "Point",
      coordinates: [70.9167, 26.9167],
    },
  },
  {
    title: "Backwater Villa",
    description:
      "Enjoy tranquility at this villa on the backwaters of Kerala with canoe rides and coconut groves.",
    price: 3700,
    location: "Alleppey",
    country: "India",
    image: {
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      filename: "kerala_villa",
    },
    geometry: {
      type: "Point",
      coordinates: [76.3388, 9.4981],
    },
  },
  {
    title: "Tea Estate Bungalow",
    description:
      "Stay amidst the lush tea gardens of Darjeeling, with a scenic view of Kanchenjunga.",
    price: 2800,
    location: "Darjeeling",
    country: "India",
    image: {
      url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      filename: "tea_estate",
    },
    geometry: {
      type: "Point",
      coordinates: [88.2627, 27.036],
    },
  },
    {
    title: "Heritage Haveli in Jaipur",
    description: "Experience royal living in this beautifully restored heritage haveli with traditional architecture and modern amenities.",
    price: 3800,
    location: "Jaipur",
    country: "India",
    image: {
      url: "https://images.unsplash.com/photo-1558642084-fd07fae5282e",
      filename: "jaipur_haveli",
    },
    geometry: {
      type: "Point",
      coordinates: [75.7873, 26.9124],
    },
  },
  {
    title: "Houseboat on Dal Lake",
    description: "Float peacefully on Dal Lake in a traditional houseboat with stunning views of the Himalayas and Mughal gardens.",
    price: 2900,
    location: "Srinagar",
    country: "India",
    image: {
      url: "https://images.unsplash.com/photo-1596436889106-be35e8435c76",
      filename: "dal_houseboat",
    },
    geometry: {
      type: "Point",
      coordinates: [74.7973, 34.0837],
    },
  },
  {
    title: "Beachfront Villa in Pondicherry",
    description: "French colonial-style villa with direct beach access, cycling trails, and proximity to the French Quarter.",
    price: 4100,
    location: "Pondicherry",
    country: "India",
    image: {
      url: "https://images.unsplash.com/photo-1519046904884-53103b34b206",
      filename: "pondicherry_villa",
    },
    geometry: {
      type: "Point",
      coordinates: [79.8083, 11.9416],
    },
  },
  {
    title: "Wildlife Resort near Ranthambore",
    description: "Jungle resort offering safari experiences, wildlife spotting, and luxurious accommodation near Ranthambore National Park.",
    price: 3500,
    location: "Sawai Madhopur",
    country: "India",
    image: {
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
      filename: "wildlife_resort",
    },
    geometry: {
      type: "Point",
      coordinates: [76.3743, 26.0273],
    },
  },
  {
    title: "Hill Station Cottage in Ooty",
    description: "Charming cottage in the Nilgiri hills with tea garden views, fireplace, and walking trails through eucalyptus forests.",
    price: 2700,
    location: "Ooty",
    country: "India",
    image: {
      url: "https://images.unsplash.com/photo-1589553416269-f37ef8b1555c",
      filename: "ooty_cottage",
    },
    geometry: {
      type: "Point",
      coordinates: [76.6936, 11.4102],
    },
  },
  {
    title: "Luxury Tent in Rishikesh",
    description: "Glamping experience by the Ganges with yoga sessions, river rafting, and spiritual retreat activities.",
    price: 3200,
    location: "Rishikesh",
    country: "India",
    image: {
      url: "https://images.unsplash.com/photo-1578662996442-48f60103fc96",
      filename: "rishikesh_tent",
    },
    geometry: {
      type: "Point",
      coordinates: [78.2676, 30.0869],
    },
  },
  {
    title: "City Loft in Bangalore",
    description: "Modern industrial-style loft in the heart of Bangalore with rooftop access and urban city views.",
    price: 4800,
    location: "Bangalore",
    country: "India",
    image: {
      url: "https://images.unsplash.com/photo-1513584684374-8bab748fbf90",
      filename: "bangalore_loft",
    },
    geometry: {
      type: "Point",
      coordinates: [77.5946, 12.9716],
    },
  },
  {
    title: "Traditional Kerala Homestay",
    description: "Authentic Kerala experience in a traditional nalukettu house with home-cooked meals and cultural activities.",
    price: 2300,
    location: "Kochi",
    country: "India",
    image: {
      url: "https://images.unsplash.com/photo-1596394516093-9ba77a048bd5",
      filename: "kerala_homestay",
    },
    geometry: {
      type: "Point",
      coordinates: [76.2673, 9.9312],
    },
  },
  {
    title: "Ski Resort in Gulmarg",
    description: "Premium ski-in/ski-out accommodation with panoramic views of snow-capped peaks and winter sports facilities.",
    price: 5500,
    location: "Gulmarg",
    country: "India",
    image: {
      url: "https://images.unsplash.com/photo-1549451371-64aa98a6f660",
      filename: "gulmarg_resort",
    },
    geometry: {
      type: "Point",
      coordinates: [74.3802, 34.0484],
    },
  },
  {
    title: "Beach Hut in Andaman",
    description: "Secluded beach hut on pristine white sand beaches with coral reef snorkeling and water sports.",
    price: 3900,
    location: "Havelock Island",
    country: "India",
    image: {
      url: "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a",
      filename: "andaman_hut",
    },
    geometry: {
      type: "Point",
      coordinates: [92.9644, 12.0266],
    },
  },
  {
    title: "Palace Hotel in Udaipur",
    description: "Stay in a converted royal palace with lake views, traditional entertainment, and luxurious amenities.",
    price: 6200,
    location: "Udaipur",
    country: "India",
    image: {
      url: "https://images.unsplash.com/photo-1578662996442-48f60103fc96",
      filename: "udaipur_palace",
    },
    geometry: {
      type: "Point",
      coordinates: [73.7125, 24.5854],
    },
  },
  {
    title: "Treehouse in Wayanad",
    description: "Eco-friendly treehouse nestled in coffee plantations with wildlife spotting and nature trails.",
    price: 3100,
    location: "Wayanad",
    country: "India",
    image: {
      url: "https://images.unsplash.com/photo-1448375240586-882707db888b",
      filename: "wayanad_treehouse",
    },
    geometry: {
      type: "Point",
      coordinates: [76.0810, 11.6850],
    },
  }
];


module.exports = { data: sampleListings };
