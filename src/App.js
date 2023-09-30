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
   const mythics = [
    'Crown of the Shattered Queen',
    'Divine Sunderer',
     'Duskblade of Draktharr',
    'Echoes of Helia',
    ' Eclipse',
     'Evenshroud',
     'Everfrost',
    'Galeforce',
     'Goredrinker',
    ' Guinsoos Rageblade',
    'Heartsteel',
    ' Hextech Rocketbelt',
     'Iceborn Gauntlet',
     'Infinity Edge',
    'JakSho The Protean',
     'Liandrys Anguish',
    'Locket of the Iron Solari',
    'Ludens Tempest',
    'Moonstone Renewer',
    'Navori Quickblades',
    'Night Harvester',
    'Radiant Virtue',
    'Riftmaker',
    'Rod of Ages',
    'Shurelyas Battlesong',
    'Stridebreaker',
    'Trinity Force',
    'Youmuus Ghostblade'
   ]
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
  const selectRandomMythic = () => {
    const keys = Object.keys(mythics);
    const randomIndex = Math.floor(Math.random() * keys.length);
    const randomMythic = mythics[keys[randomIndex]];
    setSelectedMythic(randomMythic)
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
 

export default YourComponent;
