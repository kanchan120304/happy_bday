import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export const FinalMessage: React.FC = () => {
  const [phase, setPhase] = useState<"postcards" | "game" | "final">("postcards");
  const [flipped, setFlipped] = useState<number[]>([]);

  // UNO-style postcards with different colors and fun messages
  const postcards = [
    {
      color: "red",
      message: "You're the WILD CARD in my life - YOu are my therapist of my worst timee.... life is soo much more crazy nd funn with uu bby jaan .my happy placeee.......you knoww u r thee bestedd giftt abhi takk kaa god has givenn too mee till the datee .... you means alott to mee itnaa k even words r not enough too describe uu in my zindagii! Vice versa..",
      symbol: "🃏"
    },
    {
      color: "yellow",
      message: "Like a REVERSE card, you turned my world upside down (in the best way)!- WHen no one understand me, U did and supported mee alott in everyy situationn... uk our bond iss itna strong abh k it cannt bbe break by anyonee!.. uk sometimes when i gets angry that doesnt mean k i m ignoring uu ya i will leavee ....mera gussa kch bhi nhi hai mere pyaar nd affection towards u k comparision m... hnjii ikk gusse m idar udar ho jata hu thodaa butt aap ho sambhalne k liyee toh sambhale rhiyee .sahoo mereko aur m aapko.",
      symbol: "🔄"
    },
    {
      color: "green",
      message: "You + Me = The ultimate partnership!..A life partneer like youu is soo soo raree..... aapne meri meri saari nonsensee talkss sunii kabhii ni rokaa .... even iff u got bore of thosee .still tuen kabhi ni roka because u likee how happy i m while sharing it with u..basically i enjoyyed explanning nd u enjoyedd happy mee <3.... meri jaannnnn uk my love for youu is just unmeasurable .meter fatt jayega aisa haii ........ i promise to always stick by your side through the good and badd.....kitna bhi buri aa jaye situationn mee kabhi kahi ni jaungaa chrdkr ya tuje chordkee han gusse m shyd idar udar ho jauu k kch der baat ni kr rha ya kch but yaad rakhio chordunga kabhi nahi I PROMSIE TO ALWAYS STICK BY YOUR SIDEE!!",
      symbol: "+4"
    },
    {
      color: "blue",
      message: "UK ourr talking skipss all the boring part or sadness of eachother .......We madee each others life better by simply being in it.. jeena sikha dia ek dusree ko :* Made each others life easyy by gracingg each otherss heart with ek dusre kii affection nd pyaarr <3.... YOu the Most incredible womentt i knoww and you make me feel amazing every single dat, i am soo happy and completely elated to have you in my life baee <3 <3 <3 <3 <3 ....MY everythingg.... My soulmatee And i promise to youu.. That i will lovee you always with my whoel heart I promise that i will always be their for youu in your good time or bad..... May the stormyy dayss we encounter and the trialss we face only make *us* grow stronger than ever before ........ jaani raed this line again ...kaafi deep nd acha meaning h ....proov last k 2-3 month jo kch hua hamare beech.",
      symbol: "⏭️"
    },
    {
      color: "purple",
      message: "You make every day feel like a WINNING HAND!...PTa hai jaani jabh me tujse mila tha mereko ek percent idea nhi thaa k tere aane se meri zindagii itni badal jayegi happy way me...... A love like ours happens once in a lifetiem ... manifesting everyday k yh love aise hi banaa rhe kabhi badle nahii..... You are Godsent precious Gift to me <3.... u r exactly the one i imagined in my delusional world.",
      symbol: "🎯"
    }
  ];

  const flipCard = (index: number) => {
    if (!flipped.includes(index)) {
      setFlipped([...flipped, index]);
    }
  };

  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      style={{ background: "linear-gradient(135deg, #FFEEAD, #FAD0C4, #FBC2EB)", fontFamily: 'Comic Neue, Comic Sans MS, cursive' }}
    >
      {phase === "postcards" && (
        <motion.div
          className="w-full max-w-4xl"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <h1 className="text-4xl font-bold text-center text-red-600 mb-8 drop-shadow-md">
            SPECIAL POSTCARDS FOR YOU!
          </h1>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {postcards.map((card, idx) => (
              <motion.div
                key={idx}
                className={`h-48 cursor-pointer perspective-1000 ${flipped.includes(idx) ? '' : 'hover:scale-105'}`}
                onClick={() => flipCard(idx)}
                whileHover={!flipped.includes(idx) ? { scale: 1.05 } : {}}
                whileTap={!flipped.includes(idx) ? { scale: 0.95 } : {}}
              >
                <div className={`relative w-full h-full transition-transform duration-500 transform-style-preserve-3d ${
                  flipped.includes(idx) ? 'rotate-y-180' : ''
                }`}>
                  {/* Front of card - UNO style */}
                  <div className={`absolute w-full h-full rounded-xl shadow-lg flex items-center justify-center backface-hidden ${
                    card.color === "red" ? "bg-red-500" :
                    card.color === "yellow" ? "bg-yellow-400" :
                    card.color === "green" ? "bg-green-500" :
                    card.color === "blue" ? "bg-blue-500" : "bg-purple-500"
                  }`}>
                    <div className="text-white text-6xl font-bold">
                      {card.symbol}
                    </div>
                  </div>
                  
                  {/* Back of card - message */}
                  <div className={`absolute w-full h-full rounded-xl shadow-lg flex items-center justify-center p-4 backface-hidden rotate-y-180 ${
                      card.color === "red" ? "bg-red-100" :
                      card.color === "yellow" ? "bg-yellow-100" :
                      card.color === "green" ? "bg-green-100" :
                      card.color === "blue" ? "bg-blue-100" : "bg-purple-100"
                    }`}>
                      <div className="bg-white p-4 rounded-lg shadow max-w-sm w-full text-center">
                        <p className="text-gray-800 font-medium text-sm break-words">{card.message}</p>
                        </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {(

            <motion.div 
              className="mt-8 flex justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <motion.button
                className="px-6 py-3 bg-gradient-to-r from-red-600 to-purple-600 text-white rounded-full shadow-lg text-lg font-bold uppercase tracking-wide"
                whileHover={{ scale: 1.05, boxShadow: "0 5px 15px rgba(0,0,0,0.2)" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setPhase("game")}
              >
                Special Message For You →
              </motion.button>
            </motion.div>
          )}
        </motion.div>
      )}

      {phase === "game" && (
        <motion.div
          className="flex flex-col items-center"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <h2 className="text-3xl font-bold text-red-600 mb-6 text-center drop-shadow-sm">
            CATCH THE HEART TO REVEAL YOUR SPECIAL MESSAGE!
          </h2>
          
          <div className="relative w-64 h-64 bg-white/80 rounded-xl shadow-lg flex items-center justify-center mb-8">
            <motion.div
              className="cursor-pointer absolute"
              drag
              dragConstraints={{
                top: -100,
                left: -100,
                right: 100,
                bottom: 100
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setPhase("final")}
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              <Heart size={90} className="text-red-500 drop-shadow-lg" fill="currentColor" />
            </motion.div>
          </div>
          
          <p className="text-gray-700 font-medium">
            Drag and click the heart when you catch it!
          </p>
        </motion.div>
      )}

      {phase === "final" && (
        <motion.div
          className="max-w-2xl bg-white/95 backdrop-blur-md p-8 rounded-2xl shadow-2xl"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 10, -10, 0]
            }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="flex justify-center mb-6"
          >
            <Heart className="text-red-500" size={48} fill="currentColor" />
          </motion.div>
          
          <h1 className="text-4xl font-bold text-center text-red-600 mb-6">
            🎲 HAPPY BIRTHDAY TANNUUUMERIJANNNN! 🎲
          </h1>
          
          <p className="text-lg text-gray-800 leading-relaxed font-semibold text-center">
            Thanks for being the most fun, wild, and wonderful person in my life. 
            Every day with you is like drawing the perfect card!
          </p>
          
          <div className="mt-8 flex justify-center">
            <motion.div
              className="text-2xl font-bold bg-gradient-to-r from-red-500 to-purple-500 bg-clip-text text-transparent"
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              ILYSM 💖
            </motion.div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};
