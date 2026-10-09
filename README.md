# woof. marketing page

One static page pointing to the existing app at https://woofinc.expo.app. No authentication, tracking, account data or server credentials are included.

Preview from the project root:

```sh
python3 -m http.server 8074 --directory marketing --bind 127.0.0.1
```

Publish only this directory to the separate public marketing repository and GitHub Pages. `CNAME` selects `trywoof.xyz`. The app/backend repository remains private.

Dog photos are bundled from the app's licensed Unsplash demo assets. Source links are in the page footer. Nunito is bundled with its SIL Open Font License. Profile names on this advert are illustrative.
