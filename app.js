const fosters = [
    {
        id: 1,
        name: "athena",
        color: "siamese",
        img: "./images/Athena.png",
        text: "Long haired Siamese female. This sweet girl and her siblings were found with their feral mama. A neighbor took them in so they would be safe and eventually surrendered them to our rescue.",
    },
    {
        id: 2,
        name: "kitkat",
        color: "tabbico",
        img: "./images/KitKat.png",
        text: "Medium haired tabby/calico female. A woman that does TNRing was watching a mama cat and her kittens. She was able to trap the kittens when they were old enough to be away from mom. The kittens, including KitKat, went to foster and mama was fixed and released.",
    },
    {
        id: 3,
        name: "moe",
        color: "orange tabby",
        img: "./images/Moe.png",
        text: "Long haired orange tabby male. Moe was found with his 3 brothers alone in a wood pile when they were just days old. They were bottle fed and became the sweetest ginger babies.",
    },
    {
        id: 4,
        name: "piper",
        color: "calico",
        img: "./images/Piper.png",
        text: "Short haired calico female. Poor Piper was returned to the rescue twice. Neither return were her fault. She was a sweet, snuggly cat that just kept getting unlucky. Finally, she has a loving, forever home!",
    },
    {
        id: 5,
        name: "seasalt",
        color: "black & white",
        img: "./images/SeaSalt.png",
        text: "Short haired black & white female. SeaSalt is a very sweet, quirky girl. She was found outside alone, extremely malnourished and sick. Once she felt better, she became a very sassy girl.",
    },
    {
        id: 6,
        name: "starburst",
        color: "tabbico",
        img: "./images/Starburst.png",
        text: "Short haired tabby/calico female. Starburst is one of the most outgoing kittens I have ever fostered. She adored everyone, whether it be people or other cats. Her favorite things in the world are playing and cuddling.",
    },
    {
        id: 7,
        name: "wolfie",
        color: "grey tabby",
        img: "./images/Wolfie.png",
        text: "Long haired grey tabby male. This fluffy guy and his siblings were born to a mama whose family did not take care of her. They put her outside while she was still nursing and she disappeared. They then had to be bottle fed.",
    },
];

// select items
const img = document.getElementById("foster-img");
const fosterName = document.getElementById("foster-name");
const colorDescription = document.getElementById("color-description");
const info = document.getElementById("info");

// adding a comment