![](./og-image.png)

# mk-tracks

## Usage

```
$ npm i mk-tracks
```

```js
import { data } from 'mk-tracks'

console.log(data)
```

or 

```js
const data = require('mk-tracks')

console.log(data)
```

## Game Type
type Game = {
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
}

