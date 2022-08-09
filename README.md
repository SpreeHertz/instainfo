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