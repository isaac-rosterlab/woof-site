# woof. marketing page

A single-screen, no-scroll advert at https://trywoof.xyz for the iOS and Android apps. Both store controls display Coming soon and remain disabled until genuine store listings exist. No authentication, tracking, app screens, account data or server credentials are included.

An invitation UUID in the URL shows an explicit button that opens the installed native app via `woofclub://`. It never signs in, likes or matches a dog on the website.

Preview from the project root:

```sh
python3 -m http.server 8074 --directory marketing --bind 127.0.0.1
```

Publish only this directory to the separate public marketing repository and GitHub Pages. `CNAME` selects `trywoof.xyz`. The app/backend repository remains private.

Dog photos are bundled from the app's licensed Unsplash demo assets. Source links are in the page footer. Nunito is bundled with its SIL Open Font License. Profile names on this advert are illustrative.
