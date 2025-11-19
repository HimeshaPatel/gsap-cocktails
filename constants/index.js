const navLinks = [
    {
        id: "cocktails",
        title: "Perfumes",
    },
    {
        id: "about",
        title: "About Us",
    },
    {
        id: "work",
        title: "The Art",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const cocktailLists = [
    {
        name: "Midnight Rose",
        country: "FR",
        detail: "50 ml",
        price: "$89",
    },
    {
        name: "Ocean Breeze",
        country: "IT",
        detail: "100 ml",
        price: "$129",
    },
    {
        name: "Vanilla Dreams",
        country: "US",
        detail: "75 ml",
        price: "$79",
    },
    {
        name: "Sandalwood Essence",
        country: "IN",
        detail: "50 ml",
        price: "$99",
    },
];

const mockTailLists = [
    {
        name: "Jasmine Garden",
        country: "FR",
        detail: "50 ml",
        price: "$95",
    },
    {
        name: "Bergamot Sunrise",
        country: "IT",
        detail: "100 ml",
        price: "$115",
    },
    {
        name: "Lily of the Valley",
        country: "UK",
        detail: "75 ml",
        price: "$85",
    },
    {
        name: "Amber Mystique",
        country: "FR",
        detail: "50 ml",
        price: "$105",
    },
];

const profileLists = [
    {
        imgPath: "/images/profile1.png",
    },
    {
        imgPath: "/images/profile2.png",
    },
    {
        imgPath: "/images/profile3.png",
    },
    {
        imgPath: "/images/profile4.png",
    },
];

const featureLists = [
    "Perfectly balanced notes",
    "Bottled to perfection",
    "Long-lasting fragrance",
    "Expertly crafted & blended",
];

const goodLists = [
    "Handpicked essences",
    "Signature formulations",
    "Perfumery artistry in action",
    "Freshly extracted notes",
];

const storeInfo = {
    heading: "Where to Find Us",
    address: "456, Raq Blvd. #404, Los Angeles, CA 90210",
    contact: {
        phone: "(555) 987-6543",
        email: "hello@velvetpour.com",
    },
};

const openingHours = [
    { day: "Mon–Thu", time: "11:00am – 12am" },
    { day: "Fri", time: "11:00am – 2am" },
    { day: "Sat", time: "9:00am – 2am" },
    { day: "Sun", time: "9:00am – 1am" },
];

const socials = [
    {
        name: "Instagram",
        icon: "/images/insta.png",
        url: "#",
    },
    {
        name: "X (Twitter)",
        icon: "/images/x.png",
        url: "#",
    },
    {
        name: "Facebook",
        icon: "/images/fb.png",
        url: "#",
    },
];

const allCocktails = [
    {
        id: 1,
        name: "Midnight Rose",
        image: "/images/drink1.png",
        title: "Elegant Notes, Bold Character",
        description:
            "A sophisticated blend of dark rose, oud, and vanilla creates an intoxicating evening fragrance. Perfect for those who want to make a lasting impression with every spritz.",
    },
    {
        id: 2,
        name: "Ocean Breeze",
        image: "/images/drink2.png",
        title: "A Fresh Classic That Never Fails",
        description:
            "This timeless fragrance balances crisp aquatic notes, citrus zest, and a hint of sea salt. Light, airy, and refreshing—it's always perfect for daytime elegance.",
    },
    {
        id: 3,
        name: "Vanilla Dreams",
        image: "/images/drink3.png",
        title: "Warm Essence, Luxurious Feel",
        description:
            "Crafted with Madagascar vanilla, creamy sandalwood, and amber, this fragrance is cozy and inviting. A comforting scent that wraps you in warmth and sophistication.",
    },
    {
        id: 4,
        name: "Sandalwood Essence",
        image: "/images/drink4.png",
        title: "Crafted With Care, Bottled With Love",
        description:
            "Each perfume is made with premium essences and a passion for perfecting every blend, whether you're dressing up for a special occasion or simply enjoying everyday luxury.",
    },
];

export {
    navLinks,
    cocktailLists,
    mockTailLists,
    profileLists,
    featureLists,
    goodLists,
    openingHours,
    storeInfo,
    socials,
    allCocktails,
};