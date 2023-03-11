# instainfo

A package to fetch informaion about an Instagram account.


```
$ npm install instainfo
```

## Example

```js
const instainfo = require('instainfo');
module.exports = instainfo;

const user = new instainfo.getUser('spreehertz')
console.log(user.is_verified)
```

## Properties

- `is_business_account` (boolean)
- `is_joined_recently` (boolean)
- `is_private` (boolean)
- `is_verified` (boolean)
- `biography` (string)
- `is_professional_account` (boolean)
- `guardian_id` (string)
- `profile_pic_url_hd` (string)
- `pronouns` (array)
- `bio_links` (array)
- `full_name` (string)

You can get more properties by going to https://www.instagram.com/USERNAME_HERE/?__a=1&__d=dis and pretty print the JSON data. This package just simplifies the process of fetching this data.
