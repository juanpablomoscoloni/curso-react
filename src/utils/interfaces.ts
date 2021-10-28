export interface Juego {
    id:                     number;
    title:                  string;
    thumbnail:              string;
    short_description:      string;
    game_url:               string;
    genre:                  Genre;
    platform:               Platform;
    publisher:              string;
    developer:              string;
    release_date:           string;
    freetogame_profile_url: string;
}

export enum Genre {
    ActionRPG = "Action RPG",
    Arpg = "ARPG",
    BattleRoyale = "Battle Royale",
    Card = "Card",
    CardGame = "Card Game",
    Fantasy = "Fantasy",
    Fighting = "Fighting",
    GenreMMORPG = " MMORPG",
    GenreMoba = "Moba",
    MMORPG = "MMORPG",
    Mmo = "MMO",
    Moba = "MOBA",
    Racing = "Racing",
    Shooter = "Shooter",
    Social = "Social",
    Sports = "Sports",
    Strategy = "Strategy",
}

export enum Platform {
    PCWindows = "PC (Windows)",
    PCWindowsWebBrowser = "PC (Windows), Web Browser",
    WebBrowser = "Web Browser",
}

export type Action = {type : string, payload: [Juego]}




export interface JuegoDetail {
    id:                          number;
    title:                       string;
    thumbnail:                   string;
    status:                      string;
    short_description:           string;
    description:                 string;
    game_url:                    string;
    genre:                       string;
    platform:                    string;
    publisher:                   string;
    developer:                   string;
    release_date:                Date;
    freetogame_profile_url:      string;
    minimum_system_requirements: MinimumSystemRequirements;
    screenshots:                 Screenshot[];
}

export interface MinimumSystemRequirements {
    os:        string;
    processor: string;
    memory:    string;
    graphics:  string;
    storage:   string;
}

export interface Screenshot {
    id:    number;
    image: string;
}

export type TipoFiltro = 'Plataforma'| 'Categoria' | 'Ordenar'
