declare const game: {
  title_jp: string
  title_en: string
  title_abbreviation: string
  cups: [
    {
      id: number
      name_en: string
      name_jp: string
      tracks: [
        {
          id: number
          name_en: string
          name_jp: string
          abbreviation: string
        }
      ]
    }
  ]
}[];

export default game;
