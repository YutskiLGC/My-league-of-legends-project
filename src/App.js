import React, { useState } from 'react';

const YourComponent = () => {
   const characters = [
    'Aatrox','Ahri','Akali','Alistar','Amumu','Anivia','Annie',
    'Aphelios','Ashe','AurelionSol','Azir','Bard','Blitzcrank',
    'Brand','Braum','Caitlyn','Camille','Cassiopeia','ChoGath','Corki','Darius','Diana',
    'DrMundo','Draven','Ekko','Elise','Evelynn','Ezreal','Fiddlesticks',
    'Fiora','Fizz','Galio','Gangplank','Garen','Gnar','Gragas','Graves','Hecarim',
    'Heimerdinger','Illaoi','Irelia','Ivern','Janna','JarvanIV','Jax','Jayce','Jhin',
    'Jinx','KaiSa','Kalista','Karma','Karthus','Kassadin','Katarina','Kayle','Kayn',
    'Kennen','KhaZix','Kindred','Kled','KogMaw','LeBlanc','LeeSin','Leona','Lillia',
    'Lissandra','Lucian','Lulu','Lux','Malphite','Malzahar','Maokai','MasterYi',
    'MissFortune','Mordekaiser','Morgana','Nami','Nasus','Nautilus','Neeko','Nidalee',
    'Nocturne','NunuandWillump','Olaf','Orianna','Ornn','Pantheon','Poppy',
    'Pyke','Qiyana','Quinn','Rakan','Rammus','RekSai','Rell','Renekton','Rengar','Riven',
    'Rumble','Ryze','Samira','Sejuani','Senna','Seraphine','Sett','Shaco','Shen','Shyvana',
    'Singed','Sion','Sivir','Skarner','Sona','Soraka','Swain','Sylas','Syndra','TahmKench',
    'Taliyah','Talon','Taric','Teemo','Thresh','Tristana','Trundle','Tryndamere',
    'TwistedFate','Twitch','Udyr','Urgot','Varus','Vayne','Veigar','VelKoz','Vi','Viktor',
    'Vladimir','Volibear','Warwick','Wukong','Xayah','Xerath','XinZhao','Yasuo','Yone',
    'Yorick','Yuumi','Zac','Zed','Ziggs','Zilean','Zoe','Zyra'
   ];
   const Mythics = {
   mage: ['Crown of the Shattered Queen',
     'Rod of Ages',
     'Liandrys Anguish',
     'Ludens Tempest',
     'Everfrost' ,
     'Riftmaker' ,
     'Hextech Rocketbelt',
     'Night Harvester'
   ],

   bruiser:[
    'Divine Sunderer',
   'Goredrinker',
   'Stridebreaker',
   'Trinity Force',
   'Riftmaker',
    ],
  assasin: [
   'Youmuus Ghostblade',
   'Duskblade of Draktharr',
    'Eclipse',
    'Navori Quickblades',
   ],
   tank: [
    'Evenshroud',
    'Heartsteel',
    'Iceborn Gauntlet', 
    'JakSho The Protean',
    'Locket of the Iron Solari',
    'Radiant Virtue',
       ],
   support: [
        'Echoes of Helia',
        'Moonstone Renewer',
        'Evenshroud',
        'Shurelyas Battlesong',
        'Locket of the Iron Solari',
        'Radiant Virtue',
       ],
      marksman: [
'Galeforce',
'Guinsoos Rageblade',
'Infinity Edge',
'Navori quickblades'
]
   }

   const items = [
    'Abyssal Mask',
'Anathemas Chains',
 'Archangels Staff',
 'Ardent Censer',
'Axiom Arc',
'Banshees Veil',
 'Black Cleaver',
 'Black Mist Scythe',
 'Blade of the Ruined King',
 'Bloodthirster',
 'Bulwark of the Mountain',
'Chempunk Chainsword',
'Chemtech Putrifier',
'Cosmic Drive',
'Dead Mans Plate',
 'Deaths Dance',
'Demonic Embrace',
 'Edge of Night',
'Essence Reaver',
'Fimbulwinter',
'Force of Nature ',
'Frozen Heart',
'Gargoyle Stoneplate',
'Guardian Angel',
'Horizon Focus',
 'Hullbreaker',
'Immortal Shieldbow',
 'Imperial Mandate',
 'Knights Vow',
'Kraken Slayer',
 'Lich Bane',
'Lord Dominiks Regards',
'Manamune',
'Maw of Malmortius',
 'Mejais Soulstealer',
'Mercurial Scimitar',
'Mikaels Blessing',
'Morellonomicon',
'Mortal Reminder',
'Muramana',
'Nashors Tooth',
'Pauldrons of Whiterock',
'Phantom Dancer',
'Prowlers Claw',
'Rabadons Deathcap',
'Randuins Omen',
'Rapid Firecannon',
'Ravenous Hydra',
'Redemption',
'Runaans Hurricane',
'Rylais Crystal Scepter',
'Seraphs Embrace',
'Serpents Fang',
'Seryldas Grudge',
'Shadowflame',
'Shard of True Ice',
'Silvermere Dawn',
'Spear of Shojin',
'Spirit Visage',
'Staff of Flowing Water',
'Statikk Shiv',
'Steraks Gage',
'Stormrazor',
'Sunfire Aegis',
'The Collector',
'Thornmail',
'Titanic Hydra',
'Turbo Chemtank',
'Umbral Glaive',
'Vigilant Wardstone',
'Void Staff',
'Warmogs Armor',
'Winters Approach',
'Wits End',
'Zekes Convergence',
'Zhonyas Hourglass'
   ]

  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [selectedMythic, setSelectedMythic] = useState(null);
  const [selectedItems, setSelectedItems] = useState(null);


  const selectRandomCharacter = () => {
    const keys = Object.keys(characters);
    const randomIndex = Math.floor(Math.random() * keys.length);
    const randomCharacter = characters[keys[randomIndex]];
    setSelectedCharacter(randomCharacter);
  }
  let lastTwentyItems = [];

  const selectRandomMythic = () => {
    const keys = Object.keys(Mythics);
    let randomKeyIndex, randomKey, items, randomItemIndex, randomItem;
  
    do {
      randomKeyIndex = Math.floor(Math.random() * keys.length);
      randomKey = keys[randomKeyIndex];
    
      items = Mythics[randomKey];
      randomItemIndex = Math.floor(Math.random() * items.length);
      randomItem = items[randomItemIndex];
    } while (lastTwentyItems.includes(randomItem));
  
    lastTwentyItems.push(randomItem);
    if (lastTwentyItems.length > 20) {
      lastTwentyItems.shift();
    }
  
    setSelectedMythic(randomItem);
    return ("Class:$randomItem")
  }

  const getRandomItems = () => {
    const values = Object.values(items);
    const shuffledValues = values.sort(() => 0.5 - Math.random());
    const selectedItems = shuffledValues.slice(0, 6);
    setSelectedItems(selectedItems.join(', '));
  };
  return (
    <div style={{ backgroundColor: 'blue',  width: '1000px',
    height: '1000px'}}> 
    <div style= {{borderColor: 'black', width: '30px',height:"30px"}}></div><>
      <ul><button onClick={selectRandomCharacter}>Select Random Character</button>
      {selectedCharacter && <p>Selected Character: {selectedCharacter}</p>}</ul> </>
      
      <>
      <ul><button onClick={selectRandomMythic}>Select Random Mythic</button>
      {selectedMythic && <p>Selected Mythic: {selectedMythic}</p>}</ul></>
      <>
      <ul><button onClick={getRandomItems}>Select Random Items</button>
      {selectedItems && <p>Selected Items: {selectedItems}</p>}</ul>
      
      </>
      
    </div>
     )
  }
 

export default YourComponent
