
export interface Card {
    id:            number;
    name:          string;
    type:          Type;
    desc:          string;
    race:          Race;
    archetype?:    string;
    card_sets?:    CardSet[];
    card_images:   CardImage[];
    card_prices:   CardPrice[];
    atk?:          number;
    def?:          number;
    level?:        number;
    attribute?:    Attribute;
    banlist_info?: BanlistInfo;
    scale?:        number;
    linkval?:      number;
    linkmarkers?:  Linkmarker[];
}

export interface Page {
    pages:            number;
    nextPageLink:          string;
    previosPageLink:          string;
    currentPage: number;
}

export interface Pages {
    cards: Card[];
    page: number;
    attribute: string;
    race: string;
    type: string;
    order: string;
}

export interface Parameters {
    query:            string;
    offset:          number;
}

export enum Attribute {
    Dark = "DARK",
    Divine = "DIVINE",
    Earth = "EARTH",
    Fire = "FIRE",
    Light = "LIGHT",
    Water = "WATER",
    Wind = "WIND",
}

export interface BanlistInfo {
    ban_tcg?:  Ban;
    ban_ocg?:  Ban;
    ban_goat?: Ban;
}

export enum Ban {
    Banned = "Banned",
    Limited = "Limited",
    SemiLimited = "Semi-Limited",
}

export interface CardImage {
    id:              number;
    image_url:       string;
    image_url_small: string;
}

export interface CardPrice {
    cardmarket_price:   string;
    tcgplayer_price:    string;
    ebay_price:         string;
    amazon_price:       string;
    coolstuffinc_price: string;
}

export interface CardSet {
    set_name:        string;
    set_code:        string;
    set_rarity:      SetRarity;
    set_rarity_code: SetRarityCode;
    set_price:       string;
}

export enum SetRarity {
    C = "C",
    CollectorSRare = "Collector's Rare",
    CollectorsRare = "Collectors Rare",
    Common = "Common",
    DuelTerminalNormalParallelRare = "Duel Terminal Normal Parallel Rare",
    DuelTerminalNormalRareParallelRare = "Duel Terminal Normal Rare Parallel Rare",
    DuelTerminalRareParallelRare = "Duel Terminal Rare Parallel Rare",
    DuelTerminalSuperParallelRare = "Duel Terminal Super Parallel Rare",
    DuelTerminalUltraParallelRare = "Duel Terminal Ultra Parallel Rare",
    ExtraSecretRare = "Extra Secret Rare",
    GhostGoldRare = "Ghost/Gold Rare",
    GhostRare = "Ghost Rare",
    GoldRare = "Gold Rare",
    GoldSecretRare = "Gold Secret Rare",
    MosaicRare = "Mosaic Rare",
    NormalParallelRare = "Normal Parallel Rare",
    PlatinumRare = "Platinum Rare",
    PlatinumSecretRare = "Platinum Secret Rare",
    PremiumGoldRare = "Premium Gold Rare",
    PrismaticSecretRare = "Prismatic Secret Rare",
    R = "R",
    Rare = "Rare",
    SecretRare = "Secret Rare",
    ShatterfoilRare = "Shatterfoil Rare",
    ShortPrint = "Short Print",
    Sr = "SR",
    StarfoilRare = "Starfoil Rare",
    StarlightRare = "Starlight Rare",
    SuperParallelRare = "Super Parallel Rare",
    SuperRare = "Super Rare",
    SuperShortPrint = "Super Short Print",
    The10000SecretRare = "10000 Secret Rare",
    UltimateRare = "Ultimate Rare",
    UltraParallelRare = "Ultra Parallel Rare",
    UltraRare = "Ultra Rare",
    UltraSecretRare = "Ultra Secret Rare",
    Ur = "UR",
}

export enum SetRarityCode {
    C = "(C)",
    CR = "(CR)",
    Dnpr = "(DNPR)",
    Drpr = "(DRPR)",
    Dspr = "(DSPR)",
    Dupr = "(DUPR)",
    Empty = "",
    GScR = "(GScR)",
    Ggr = "(GGR)",
    Gr = "(GR)",
    Gur = "(GUR)",
    Msr = "(MSR)",
    PG = "(PG)",
    PS = "(PS)",
    PScR = "(PScR)",
    Pir = "(PIR)",
    R = "(R)",
    SP = "(SP)",
    SSP = "(SSP)",
    ScR = "(ScR)",
    Sfr = "(SFR)",
    Shr = "(SHR)",
    Spr = "(SPR)",
    Sr = "(SR)",
    StR = "(StR)",
    The10000ScR = "(10000ScR)",
    UScR = "(UScR)",
    Upr = "(UPR)",
    Ur = "(UR)",
    UtR = "(UtR)",
}

export enum Linkmarker {
    Bottom = "Bottom",
    BottomLeft = "Bottom-Left",
    BottomRight = "Bottom-Right",
    Left = "Left",
    Right = "Right",
    Top = "Top",
    TopLeft = "Top-Left",
    TopRight = "Top-Right",
}

export enum Race {
    Andrew = "Andrew",
    Aqua = "Aqua",
    Arkana = "Arkana",
    Beast = "Beast",
    BeastWarrior = "Beast-Warrior",
    Bonz = "Bonz",
    Christine = "Christine",
    Continuous = "Continuous",
    Counter = "Counter",
    CreatorGod = "Creator-God",
    Cyberse = "Cyberse",
    David = "David",
    Dinosaur = "Dinosaur",
    DivineBeast = "Divine-Beast",
    Dragon = "Dragon",
    Emma = "Emma",
    Equip = "Equip",
    EspaRoba = "Espa Roba",
    Fairy = "Fairy",
    Field = "Field",
    Fiend = "Fiend",
    Fish = "Fish",
    Insect = "Insect",
    Ishizu = "Ishizu",
    IshizuIshtar = "Ishizu Ishtar",
    Joey = "Joey",
    JoeyWheeler = "Joey Wheeler",
    Kaiba = "Kaiba",
    Keith = "Keith",
    LumisUmbra = "Lumis Umbra",
    Machine = "Machine",
    Mai = "Mai",
    MaiValentine = "Mai Valentine",
    Mako = "Mako",
    Normal = "Normal",
    Odion = "Odion",
    Pegasus = "Pegasus",
    Plant = "Plant",
    Psychic = "Psychic",
    Pyro = "Pyro",
    QuickPlay = "Quick-Play",
    Reptile = "Reptile",
    Rex = "Rex",
    Ritual = "Ritual",
    Rock = "Rock",
    SeaSerpent = "Sea Serpent",
    SetoKaiba = "Seto Kaiba",
    Spellcaster = "Spellcaster",
    TeaGardner = "Tea Gardner",
    Thunder = "Thunder",
    Warrior = "Warrior",
    Weevil = "Weevil",
    WingedBeast = "Winged Beast",
    Wyrm = "Wyrm",
    YamiBakura = "Yami Bakura",
    YamiMarik = "Yami Marik",
    YamiYugi = "Yami Yugi",
    Yugi = "Yugi",
    Zombie = "Zombie",
}

export enum Type {
    EffectMonster = "Effect Monster",
    FlipEffectMonster = "Flip Effect Monster",
    FusionMonster = "Fusion Monster",
    GeminiMonster = "Gemini Monster",
    LinkMonster = "Link Monster",
    NormalMonster = "Normal Monster",
    NormalTunerMonster = "Normal Tuner Monster",
    PendulumEffectFusionMonster = "Pendulum Effect Fusion Monster",
    PendulumEffectMonster = "Pendulum Effect Monster",
    PendulumFlipEffectMonster = "Pendulum Flip Effect Monster",
    PendulumNormalMonster = "Pendulum Normal Monster",
    PendulumTunerEffectMonster = "Pendulum Tuner Effect Monster",
    RitualEffectMonster = "Ritual Effect Monster",
    RitualMonster = "Ritual Monster",
    SkillCard = "Skill Card",
    SpellCard = "Spell Card",
    SpiritMonster = "Spirit Monster",
    SynchroMonster = "Synchro Monster",
    SynchroPendulumEffectMonster = "Synchro Pendulum Effect Monster",
    SynchroTunerMonster = "Synchro Tuner Monster",
    Token = "Token",
    ToonMonster = "Toon Monster",
    TrapCard = "Trap Card",
    TunerMonster = "Tuner Monster",
    UnionEffectMonster = "Union Effect Monster",
    XYZMonster = "XYZ Monster",
    XYZPendulumEffectMonster = "XYZ Pendulum Effect Monster",
}

export type FilterType = 'Attribute'| 'Race' | 'Type' | 'Order'

export const filters = {
    attribute: ["DARK", "DIVINE", "EARTH","FIRE", "LIGHT","WATER","WIND"],
    race:[ "Beast", "Beast-Warrior",  "Continuous",  "Dinosaur","Divine-Beast","Thunder", "Warrior", "Wyrm", "Zombie"],
    type: ["Effect Monster","Flip Effect Monster", "Fusion Monster","Gemini Monster","Link Monster","Normal Monster", "Normal Tuner Monster", "Pendulum Effect Fusion Monster","Pendulum Effect Monster", "Pendulum Flip Effect Monster", "Pendulum Normal Monster", "Pendulum Tuner Effect Monster", "Ritual Effect Monster", "Ritual Monster", "Skill Card",  "Spell Card",  "Spirit Monster", "Synchro Monster",  "Synchro Pendulum Effect Monster", "Synchro Tuner Monster",  "Token",  "Toon Monster",  "Trap Card",  "Tuner Monster",  "Union Effect Monster","XYZ Monster",  "XYZ Pendulum Effect Monster"],
    order:['atk', 'name']
}

