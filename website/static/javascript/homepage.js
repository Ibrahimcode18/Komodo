const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

// document.addEventListener("DOMContentLoaded", function () {
//     let popoverTrigger = new bootstrap.Popover(document.querySelector('[data-bs-toggle="popover"]'), {
//       trigger: 'click' // Options: click, hover, focus, manual
//     });
// });

document.addEventListener("DOMContentLoaded", function () {
    const funFacts=[
        "Komodo dragons can smell a dead body from 5 miles away—so basically, they’re the ultimate crime scene investigators. 🕵️‍♂️",
        "A Komodo dragon can eat up to 80% of its body weight in one meal—Thanksgiving dinner goals? 🍗",
        "These giant lizards can reproduce without a male—who needs Tinder when you’ve got parthenogenesis? 😂",
        "Komodo dragons run up to 12 mph, so if one chases you… well, start praying. 🙃",
        "They eat their own babies sometimes—talk about family problems! 😬",
        "With over 60 types of deadly bacteria in their saliva, Komodos are the worst kissers in the animal kingdom. 😘",
        "Sumatran tigers are so rare that you have a better chance of winning the lottery than spotting one in the wild. 🎟️",
        "They’re great swimmers—Michael Phelps, watch out! 🏊‍♂️",
        "Unlike house cats, these big cats actually love water—but try giving one a bath and see what happens. 😂",
        "They have unique stripe patterns, like a feline barcode—just don’t try to scan one at the supermarket. 🛒",
        "If a Sumatran tiger were your personal trainer, you’d never skip leg day. 🏋️‍♂️",
        "Orangutans are so smart that they use leaves as umbrellas—talk about eco-friendly fashion! ☔",
        "They spend 90% of their time chilling in trees—lazy or genius? 🤔",
        "Baby orangutans stay with their moms for up to 8 years—talk about a mama’s boy. 😂",
        "They can mimic human behavior, so if one starts scrolling through Instagram, don’t be surprised! 📱",
        "An orangutan once escaped a zoo by using a stick to pick a lock—real-life Primate Prison Break. 🚔",
        "Javan rhinos are so rare that they’re basically the unicorns of the rhino world. 🦄",
        "They have a single horn that’s so small it looks like a bad hairdo. 😂",
        "These rhinos love mud baths—the original spa enthusiasts. 💆‍♂️",
        "They communicate through honks and whistles—like a clown car at a comedy show. 🤡",
        "Their skin is so tough it’s like wearing a built-in suit of armor—ready for battle 24/7. ⚔️",
        "Bawean deer are shy and tiny, like the introverts of the animal world. 😳",
        "They freeze when scared—basically, they just go; Nope, I don’t exist. 😂",
        "Their antlers look so delicate that they could be in a high-fashion runway show. 💃",
        "Unlike most deer, they’re not great at running—so they just hide and hope for the best. 😅",
        "They’re so rare that even wildlife researchers struggle to find them—where’s Waldo, but make it a deer. 🦌🔍",
        "Anoa are tiny buffalo, basically the pocket-sized version of a cow. 🐄",
        "They love to wallow in mud, so if you ever need a spa buddy, they’re in. 😂",
        "Despite their small size, they have surprisingly bad tempers—Napoleon complex much? 😠",
        "They’re so shy that they avoid humans at all costs—the ultimate introverts. 😬",
        "Scientists call them The Ghosts of the Forest—because they’re always disappearing. 👻",
        "Sumatran elephants are smaller than other elephants, so they’re like the fun-sized version of a giant. 🐘",
        "They can smell water from miles away—basically, they have a built-in GPS for finding drinks. 💧",
        "Elephants hug by wrapping their trunks around each other—the original wholesome besties. 🤗",
        "A Sumatran elephant’s favorite pastime? Destroying crops—farmers call them the ultimate food critics. 🌾😆",
        "Baby elephants suck their trunks like human babies suck their thumbs—adorable or weird? You decide. 🍼",
        "Biggest Eyes, Tiny Body 👀 – Tarsiers have eyes so big that if humans had the same proportions, our eyes would be the size of grapefruits! 🍊",
        "Head-Spinning Madness 🤯 – They can turn their heads 180 degrees like an owl—perfect for spying on jungle gossip. 🦉",
        "Silent Ninja Hunters 🥷 – Despite their cute look, tarsiers are ferocious hunters that jump between trees catching insects like tiny forest ninjas. 🌿",
        "Leaping Legends 🚀 – Tarsiers can jump up to 40 times their body length—that’s like a human leaping over a 10-story building! 🏢",
        "Screaming Specialists 🎤 – Some tarsiers communicate with ultrasonic screams that humans can’t even hear—basically, they gossip in a secret bat-language. 🦇😂",
    ]

    // Get the button element
    let button = document.getElementById("funFactButton");
  
    // Initialize Popover
    let popover = new bootstrap.Popover(button, {
      trigger: 'click',
      content: function () {
        return funFacts[Math.floor(Math.random() * funFacts.length)];
      }
    });
  
    // Update the popover content on each click
    button.addEventListener("click", function () {
      popover.setContent({
        '.popover-body': funFacts[Math.floor(Math.random() * funFacts.length)]
      });
    });
});
  
  