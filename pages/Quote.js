import shuffle from "lodash.shuffle";
  
var quotes = [
    ["Technology is best when it brings people together","Matt Mullenweg, Social Media Entrepreneur"],
    ["It has become appallingly obvious that our technology has exceeded our humanity.","Albert Einstein, Scientist"],
    ["It is only when they go wrong that machines remind you how powerful they are.","Clive James, Broadcaster and Journalist"],
    ["The Web as I envisaged it, we have not seen it yet. The future is still so much bigger than the past.","Tim Berners-Lee, Inventor of the World Wide Web"],
    ["If it keeps up, man will atrophy all his limbs but the push-button finger.","Frank Lloyd Wright, Architect"],
    ["If future generations are to remember us more with gratitude than sorrow, we must achieve more than just the miracles of technology. We must also leave them a glimpse of the world as it was created, not just as it looked when we got through with it.","Lyndon B. Johnson, Former President of the United States of America"],
    ["Once a new technology rolls over you, if you're not part of the steamroller, you're part of the road.","Stewart Brand, Writer"],
    ["It's not a faith in technology. It's faith in people.","Steve Jobs, Co-founder of Apple"],
    ["Technology is a useful servant but a dangerous master.","Christian Lous Lange, Historian"],
    ["The advance of technology is based on making it fit in so that you don't really even notice it, so it's part of everyday life.","Bill Gates, Co-founder of Microsoft"],
    ["Stay Hungry. Stay Foolish.", "Steve Jobs, Co-founder of Apple"],
    ["Simplicity is the ultimate sophistication.", "Leonardo Da Vinci"]
];

const leftright = [
    "",
    ""
]

function Quote() {

    const align = shuffle(leftright).pop();
    const randomResult = shuffle(quotes).pop();

    return (
        <div className="flex ml-8 mr-8 mb-6 mt-2 bg-white h-full max-w-screen-sm">
            <blockquote className="relative p-4 text-xl italic border-l-8 bg-[#192114]/75 rounded-3xl text-white border-[#ff462d] quote">
                <p className="font-bold text-3xl mx-2 font-serif">“</p>
                <p suppressHydrationWarning className="mb-3">{randomResult[0]}</p>
                <p className="font-bold mb-2 text-3xl text-right mr-6 font-serif">”</p>
                <p suppressHydrationWarning className="mb-1 text-sm italic font-bold text-right mr-4">
                    —&ensp;{randomResult[1]}
                </p>
            </blockquote>
        </div>
    )
}

export default Quote
