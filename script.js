document.addEventListener("DOMContentLoaded", () => {
    const storyTextElement = document.getElementById('story-text');
    const choicesContainer = document.getElementById('choices-container');

    const story = [
        {
            text: "You wake up in an unknown forest, not remembering your origin. You wander the forest until you collapse. When you awaken, you are in a tribe camp.",
            choices: [
                { text: "Look around the camp", next: 1 },
                { text: "Try to remember your past", next: 2 }
            ]
        },
        {
            text: "You look around the camp and see tribal people busy with their daily chores. They seem friendly but cautious.",
            choices: [
                { text: "Talk to the tribal chief", next: 3 },
                { text: "Explore the camp further", next: 4 }
            ]
        },
        {
            text: "You try hard to remember your past, but it's all a blur. A young tribal girl approaches you with a cup of herbal tea.",
            choices: [
                { text: "Drink the tea", next: 5 },
                { text: "Politely refuse", next: 6 }
            ]
        },
        {
            text: "The tribal chief welcomes you and explains that they found you unconscious in the forest. They offer to help you regain your strength.",
            choices: [
                { text: "Thank the chief and accept their help", next: 7 },
                { text: "Ask the chief about the forest", next: 8 }
            ]
        },
        {
            text: "As you explore the camp, you notice various handmade artifacts and tools. The tribe seems self-sufficient and skilled.",
            choices: [
                { text: "Join a group of people around a fire", next: 9 },
                { text: "Inspect the artifacts", next: 10 }
            ]
        },
        {
            text: "The tea is refreshing and helps clear your mind a bit. The girl smiles and tells you that the chief wants to see you.",
            choices: [
                { text: "Go see the chief", next: 3 },
                { text: "Rest a bit longer", next: 11 }
            ]
        },
        {
            text: "You refuse the tea and the girl looks disappointed but understands. She leaves you to rest.",
            choices: [
                { text: "Rest a bit longer", next: 11 },
                { text: "Try to get up and explore", next: 4 }
            ]
        },
        {
            text: "You thank the chief and accept their help. Over the next few days, you regain your strength and learn about their way of life.",
            choices: [
                { text: "Offer to help the tribe in return", next: 12 },
                { text: "Ask about any dangers in the forest", next: 8 }
            ]
        },
        {
            text: "The chief explains that the forest is full of mysteries and dangers, and that you were lucky to be found by their tribe.",
            choices: [
                { text: "Ask about the mysteries", next: 13 },
                { text: "Ask about the dangers", next: 14 }
            ]
        },
        {
            text: "You join the group around the fire. They share stories and food with you. You feel a sense of belonging.",
            choices: [
                { text: "Tell them about yourself", next: 15 },
                { text: "Listen to their stories", next: 16 }
            ]
        },
        {
            text: "You inspect the artifacts and tools. They are impressive and show a high level of craftsmanship.",
            choices: [
                { text: "Compliment the craftsmanship", next: 17 },
                { text: "Ask how they are made", next: 18 }
            ]
        },
        {
            text: "You rest a bit longer, feeling the warmth and safety of the camp. Eventually, you feel ready to get up and explore.",
            choices: [
                { text: "Explore the camp", next: 4 },
                { text: "Look for the chief", next: 3 }
            ]
        },
        {
            text: "You offer to help the tribe in return for their kindness. They are grateful and teach you their ways.",
            choices: [
                { text: "Learn their skills", next: 19 },
                { text: "Help with daily chores", next: 20 }
            ]
        },
        {
            text: "The chief tells you about ancient ruins and hidden treasures, but also warns of dangerous creatures and traps.",
            choices: [
                { text: "Ask about the ancient ruins", next: 21 },
                { text: "Ask about the dangerous creatures", next: 22 }
            ]
        },
        {
            text: "The chief warns about wild beasts and other tribes that might not be as friendly.",
            choices: [
                { text: "Prepare to defend yourself", next: 23 },
                { text: "Stay close to the tribe", next: 24 }
            ]
        },
        {
            text: "You tell them about yourself, as much as you can remember. They listen with interest and offer their support.",
            choices: [
                { text: "Ask about their stories", next: 16 },
                { text: "Ask how you can help", next: 12 }
            ]
        },
        {
            text: "You listen to their stories, learning about their history and culture. You feel more connected to the tribe.",
            choices: [
                { text: "Share your thoughts", next: 15 },
                { text: "Offer to help the tribe", next: 12 }
            ]
        },
        {
            text: "The tribe members appreciate your compliment and explain their methods with pride.",
            choices: [
                { text: "Ask to learn their skills", next: 19 },
                { text: "Thank them and explore more", next: 4 }
            ]
        },
        {
            text: "They eagerly show you how they make their tools and artifacts. You start learning their skills.",
            choices: [
                { text: "Continue learning", next: 19 },
                { text: "Help with chores", next: 20 }
            ]
        },
        {
            text: "You start learning their skills, becoming more adept each day. The tribe appreciates your willingness to learn.",
            choices: [
                { text: "Master the skills", next: 25 },
                { text: "Help with other tasks", next: 20 }
            ]
        },
        {
            text: "You help with daily chores, earning the tribe's trust and respect.",
            choices: [
                { text: "Learn their skills", next: 19 },
                { text: "Ask about the forest", next: 8 }
            ]
        },
        {
            text: "You learn about the ancient ruins, filled with history and treasures, but also guarded by traps.",
            choices: [
                { text: "Prepare to explore the ruins", next: 26 },
                { text: "Ask for a guide", next: 27 }
            ]
        },
        {
            text: "You learn about the dangerous creatures that lurk in the forest, from wild beasts to mythical beings.",
            choices: [
                { text: "Prepare to defend yourself", next: 23 },
                { text: "Ask for more details", next: 14 }
            ]
        },
        {
            text: "You prepare to defend yourself, learning from the tribe's warriors and gathering supplies.",
            choices: [
                { text: "Explore the forest", next: 28 },
                { text: "Stay and protect the camp", next: 24 }
            ]
        },
        {
            text: "You decide to stay close to the tribe, helping them and ensuring mutual safety.",
            choices: [
                { text: "Learn their skills", next: 19 },
                { text: "Help with chores", next: 20 }
            ]
        },
        {
            text: "You master the tribe's skills, becoming a valued member of their community.",
            choices: [
                { text: "Explore the forest", next: 28 },
                { text: "Help the tribe", next: 20 }
            ]
        },
        {
            text: "You prepare to explore the ancient ruins, gathering supplies and knowledge.",
            choices: [
                { text: "Head to the ruins", next: 29 },
                { text: "Ask for more help", next: 27 }
            ]
        },
        {
            text: "You ask for a guide, and a seasoned explorer from the tribe agrees to accompany you.",
            choices: [
                { text: "Head to the ruins with the guide", next: 29 },
                { text: "Learn more about the ruins first", next: 21 }
            ]
        },
        {
            text: "You venture into the forest, armed with skills and knowledge from the tribe.",
            choices: [
                { text: "Explore deeper", next: 30 },
                { text: "Return to the camp", next: 24 }
            ]
        },
        {
            text: "You and your guide head to the ancient ruins, ready to face the challenges ahead.",
            choices: [
                { text: "Explore the ruins", next: 31 },
                { text: "Set up a base camp", next: 32 }
            ]
        },
        {
            text: "You explore deeper into the forest, encountering both beauty and danger.",
            choices: [
                { text: "Press on", next: 33 },
                { text: "Return to the camp", next: 24 }
            ]
        },
        {
            text: "You explore the ruins, discovering ancient artifacts and solving puzzles. The adventure has only just begun.",
            choices: [
                { text: "Continue exploring", next: 33 },
                { text: "Return to the tribe", next: 24 }
            ]
        },
        {
            text: "You set up a base camp, preparing for a thorough exploration of the ruins.",
            choices: [
                { text: "Explore the ruins", next: 31 },
                { text: "Rest and prepare", next: 33 }
            ]
        },
        {
            text: "You press on, determined to uncover the secrets of the forest and the ruins.",
            choices: [
                { text: "Continue exploring", next: 31 },
                { text: "Return to the tribe", next: 24 }
            ]
        }
    ];

    let currentStep = 0;

    function loadStep(step) {
        currentStep = step;
        storyTextElement.textContent = story[step].text;
        choicesContainer.innerHTML = '';

        story[step].choices.forEach(choice => {
            const button = document.createElement('button');
            button.textContent = choice.text;
            button.className = 'choice-button';
            button.addEventListener('click', () => loadStep(choice.next));
            choicesContainer.appendChild(button);
        });
    }

    loadStep(currentStep);
});
