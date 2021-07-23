---
title: Front matter

position: 3
category: Front matter

---

#### Required fields

- `title` (`String`)
  - The title of the page will be injected in metas
- `description` (`String`)
  - The description of the page will be injected in metas
- `position` (`Number`)
  - This will be used to sort the documents in the navigation

#### Optional fields

- `category` (`String`)
  - This will be used to group the documents in the navigation (defaults to `""`)
  - If `category` is falsy or not a string, it is coerced to be an empty string, and isn't renderd in the sidebar.
- `version` (`Float`)
  - Alert users that the page is new with a badge. Once the page is seen, the version is stored in the local storage until you increment it
- `fullscreen` (`Boolean`)
  - Grows the page and hides the table of contents
- `menuTitle` (`String`) <badge>v0.4.0+</badge>
  - Overwrites the title of the page that will be displayed in the left menu (defaults to `title`)
- `subtitle` (`String`) <badge>v0.5.0+</badge>
  - Adds a subtitle under the page title
- `badge` (`String`) <badge>v0.5.0+</badge>
  - Adds a badge next to the page title

### Example

```bash[content/en/index.md]
---
title: 'Introduction'
description: 'Empower your NuxtJS application with this awesome module.'
position: 1
category: 'Getting started'
version: 1.4
fullscreen: false
menuTitle: 'Intro'
---

Introducing my awesome Nuxt module!
```