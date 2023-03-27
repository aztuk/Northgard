
export const MONTH_NAMES = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];

  export enum eBuildingCategory {
    CIVILIAN,
    SPECIAL,
    MILITARY
  }
  export enum eLoreCategory {
    TOP,
    MID,
    BOTTOM
  }

  export const eClans  = [ 
    'Wolf',
    'Stag',
    'Goat',
    'Raven',
    'Boar',
    'Bear',
    'Snake',
  ]

  export const ACTIONS = [
    {
    name: 'Colonize',
    class: 'colonize',
    callback: () => { console.log('callback'); }
  },

]

export const TOOLS = [
    {
    name: 'Villagers',
    class: 'villagers',    
    restrictedTo: []
  },

]

  export const LORES = [
    {
        name:'Sharp Axes',
        class: 'sharp-axes',
        category: eLoreCategory.TOP,
        restrictedTo: []
    },
    {
        name:'Colonization',
        class: 'colonization',
        category: eLoreCategory.TOP,
        restrictedTo: []
    },
    {
        name:'Eradication',
        class: 'eradication',
        category: eLoreCategory.TOP,
        restrictedTo: []
    },
    {
        name:'Recruitment',
        class: 'recruitment',
        category: eLoreCategory.TOP,
        restrictedTo: []
    },
    {
        name:'Medicine',
        class: 'medicine',
        category: eLoreCategory.TOP,
        restrictedTo: []
    },
    {
        name:'Hearthstone',
        class: 'hearthstone',
        category: eLoreCategory.TOP,
        restrictedTo: []
    },
    {
        name:'Field Rations',
        class: 'field-rations',
        category: eLoreCategory.TOP,
        restrictedTo: ['Wolf']
    },
]

  export const RELICS = [
    {
        name: 'Mjolnir',
        class: 'mjolnir',
        description: 'Thunderstorm on a zone',
        restrictedTo: []
    },
    {
        name: 'Svalinn',
        class: 'svalinn',
        description: '+50% defense for units in this zone',
        restrictedTo: []
    },
    {
        name: 'Gefjun\'s Jar',
        class: 'gefjun',
        description: 'New villagers for food ',
        restrictedTo: []
    },
    {
        name: 'Bragaful',
        class: 'bragaful',
        description: 'Krowns and new trade route',
        restrictedTo: []
    },
    {
        name: 'Jörmunr',
        class: 'jormunr',
        description: 'Lore and colonization with lore',
        restrictedTo: []
    },
    {
        name: 'Hlidskjalf',
        class: 'stag',
        description: 'New powerful unit',
        restrictedTo: ['Stag']
    },
    {
        name: 'Eldhrumnir',
        class: 'goat',
        description: 'More powerful feasts',
        restrictedTo: ['Goat']
    },
    {
        name: 'Horn of Managarm',
        class: 'wolf',
        description: 'Summon 3 white wolves',
        restrictedTo: ['Wolf']
    },
    {
        name: 'Scabbard of Gram',
        class: 'raven',
        description: 'Raid with 2 Jortnars',
        restrictedTo: ['Raven']
    },
    {
        name: 'Mask of Gullinbursti',
        class: 'bear',
        description: 'New warchief weapon',
        restrictedTo: ['Bear']
    },
    {
        name: 'Gungnir',
        class: 'snake',
        description: 'Stealth for all military units',
        restrictedTo: ['Snake']
    },
  ]

  export const BUILDINGS = [
    {
        name: 'Townhall',
        class: 'townhall',
        category: eBuildingCategory.SPECIAL,
        buildable: false,
        upgradable: true,
        restrictedClans: []
    },
    {
        name: 'Scout camp',
        class: 'scout',
        category: eBuildingCategory.CIVILIAN,
        buildable: true,
        upgradable: true,
        restrictedClans: ['Eagle']
    },
    {
        name: 'Aviary',
        class: 'hawk',
        category: eBuildingCategory.CIVILIAN,
        buildable: true,
        upgradable: true,
        restrictedClans: ['Wolf', 'Stag', 'Goat', 'Raven', 'Boar', 'Bear', 'Snake']
    },
    {
        name: 'House',
        class: 'house',
        category: eBuildingCategory.CIVILIAN,
        buildable: true,
        upgradable: true,
        restrictedClans: []
    },
    {
        name: 'Woodcutter Lodge',
        class: 'wood',
        category: eBuildingCategory.CIVILIAN,
        buildable: true,
        upgradable: true,
        restrictedClans: []
    },
    {
        name: 'Brewery',
        class: 'brewery',
        category: eBuildingCategory.CIVILIAN,
        buildable: true,
        upgradable: true,
        restrictedClans: ['Stag']
    },
    {
        name: 'Skald',
        class: 'skald',
        category: eBuildingCategory.CIVILIAN,
        buildable: true,
        upgradable: true,
        restrictedClans: ['Wolf', 'Goat', 'Raven', 'Boar', 'Bear', 'Snake']
    },
    {
        name: 'Horgr',
        class: 'horgr',
        category: eBuildingCategory.CIVILIAN,
        buildable: true,
        upgradable: true,
        restrictedClans: ['Wolf', 'Stag', 'Goat', 'Raven', 'Boar', 'Bear', 'Snake']
    },
    {
        name: 'Furnace',
        class: 'cook',
        category: eBuildingCategory.CIVILIAN,
        buildable: true,
        upgradable: true,
        restrictedClans: ['Wolf', 'Stag', 'Goat', 'Raven', 'Boar', 'Bear', 'Snake']
    },
    {
        name: 'Healer hut',
        class: 'heal',
        category: eBuildingCategory.CIVILIAN,
        buildable: true,
        upgradable: true,
        restrictedClans: ['Boar']
    },
    {
        name: 'Mender hut',
        class: 'mender',
        category: eBuildingCategory.CIVILIAN,
        buildable: true,
        upgradable: true,
        restrictedClans: ['Wolf', 'Stag', 'Goat', 'Raven', 'Bear', 'Snake']
    },
    {
        name: 'Sheephold',
        class: 'sheep',
        category: eBuildingCategory.CIVILIAN,
        buildable: true,
        upgradable: true,
        restrictedClans: ['Wolf', 'Stag', 'Raven', 'Boar', 'Bear', 'Snake']
    },
    {
        name: 'Farm',
        class: 'farm',
        category: eBuildingCategory.CIVILIAN,
        buildable: true,
        upgradable: true,
        restrictedClans: []
    },
    {
        name: 'Hunter lodge',
        class: 'hunter',
        category: eBuildingCategory.CIVILIAN,
        buildable: true,
        upgradable: true,
        restrictedClans: []
    },
    {
        name: 'Fisherman hut',
        class: 'fish',
        category: eBuildingCategory.CIVILIAN,
        buildable: true,
        upgradable: true,
        restrictedClans: []
    },
    {
        name: 'Fishery',
        class: 'fishery',
        category: eBuildingCategory.CIVILIAN,
        buildable: true,
        upgradable: true,
        restrictedClans: ['Wolf', 'Stag', 'Goat', 'Raven', 'Boar', 'Bear', 'Snake']
    },
    {
        name: 'Silo',
        class: 'silo',
        category: eBuildingCategory.CIVILIAN,
        buildable: true,
        upgradable: true,
        restrictedClans: []
    },
    {
        name: 'Iron mine',
        class: 'iron',
        category: eBuildingCategory.CIVILIAN,
        buildable: true,
        upgradable: false,
        restrictedClans: []
    },
    {
        name: 'Stone mine',
        class: 'stone',
        category: eBuildingCategory.CIVILIAN,
        buildable: true,
        upgradable: true,
        restrictedClans: []
    },
    {
        name: 'Volunds Forge',
        class: 'horseforge',
        category: eBuildingCategory.CIVILIAN,
        buildable: true,
        upgradable: true,
        restrictedClans: ['Wolf', 'Stag', 'Goat', 'Raven', 'Boar', 'Bear', 'Snake']
    },
    {
        name: 'Forge',
        class: 'forge',
        category: eBuildingCategory.CIVILIAN,
        buildable: true,
        upgradable: true,
        restrictedClans: ['Horse']
    },
    {
        name: 'Trading post',
        class: 'trade',
        category: eBuildingCategory.CIVILIAN,
        buildable: true,
        upgradable: true,
        restrictedClans: []
    },
    {
        name: 'Market place',
        class: 'market',
        category: eBuildingCategory.CIVILIAN,
        buildable: true,
        upgradable: true,
        restrictedClans: []
    },
    {
        name: 'Longship dock',
        class: 'dock',
        category: eBuildingCategory.CIVILIAN,
        buildable: true,
        upgradable: true,
        restrictedClans: ['Raven']
    },
    {
        name: 'Harbor',
        class: 'harbor',
        category: eBuildingCategory.CIVILIAN,
        buildable: true,
        upgradable: true,
        restrictedClans: ['Wolf', 'Stag', 'Goat', 'Boar', 'Bear', 'Snake']
    },
    {
        name: 'Altar',
        class: 'altar',
        category: eBuildingCategory.SPECIAL,
        buildable: true,
        upgradable: false,
        restrictedClans: []
    },
    {
        name: 'Warrior camp',
        class: 'warcamp',
        category: eBuildingCategory.MILITARY,
        buildable: true,
        upgradable: true,
        restrictedClans: []
    },
    {
        name: 'Axe thrower camp',
        class: 'axe',
        category: eBuildingCategory.MILITARY,
        buildable: true,
        upgradable: true,
        restrictedClans: []
    },
    {
        name: 'Offering well',
        class: 'offering',
        category: eBuildingCategory.SPECIAL,
        buildable: true,
        upgradable: false,
        restrictedClans: []
    },
    {
        name: 'Shield camp',
        class: 'shield',
        category: eBuildingCategory.MILITARY,
        buildable: true,
        upgradable: true,
        restrictedClans: []
    },
    {
        name: 'Archery range',
        class: 'archer',
        category: eBuildingCategory.MILITARY,
        buildable: true,
        upgradable: true,
        restrictedClans: ['Wolf', 'Stag', 'Goat', 'Raven', 'Boar', 'Bear', 'Snake']
    },
    {
        name: 'Chaman camp',
        class: 'chaman',
        category: eBuildingCategory.MILITARY,
        buildable: true,
        upgradable: true,
        restrictedClans: ['Wolf', 'Stag', 'Goat', 'Raven', 'Boar', 'Bear', 'Snake']
    },
    {
        name: 'Dragonkin',
        class: 'dragonkin',
        category: eBuildingCategory.MILITARY,
        buildable: true,
        upgradable: true,
        restrictedClans: ['Wolf', 'Stag', 'Goat', 'Raven', 'Boar', 'Bear', 'Snake']
    },
    {
        name: 'Skirmisher camp',
        class: 'skirmish',
        category: eBuildingCategory.MILITARY,
        buildable: true,
        upgradable: true,
        restrictedClans: ['Wolf', 'Stag', 'Goat', 'Raven', 'Boar', 'Bear']
    },
    {
        name: 'Stone',
        class: 'carved',
        category: eBuildingCategory.SPECIAL,
        buildable: true,
        upgradable: true,
        restrictedClans: []
    },
    {
        name: 'Tower',
        class: 'tower',
        category: eBuildingCategory.SPECIAL,
        buildable: true,
        upgradable: true,
        restrictedClans: []
    },
  ]