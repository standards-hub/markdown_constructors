---
title: Extended Syntax

position: 2
category: Markdown Constructors

---

These elements extend the basic syntax by adding additional features. Not all Markdown applications support these elements.


## Fenced Code Block
This is how a `Fenced Code Block` is displayed:

```
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
```

This is how a `Fenced Code Block` is written in markdown:

<block>
```
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
```
</block>

## Footnote
This is how a `footnote` is displayed:
Here's a sentence with a footnote. [^1]

[^1]: This is the footnote.

> Note: please go to the bottom of the page to see the [footnote](/#twitter).

This is how a `footnote` is written in markdown:
```md
Here's a sentence with a footnote. [^1]
...
[^1]: This is the footnote.
```
## Strikethrough
This is how a `strikethrough text` is displayed:

~~The world is flat.~~

This is how a `strikethrough text` is written in markdown:

```md
~~The world is flat.~~
```


## Task List
This is how a `task list` is displayed:

- [x] Write the press release
- [ ] Update the website
- [ ] Contact the media

This is how a `task list` is written in markdown:

```md
- [x] Write the press release
- [ ] Update the website
- [ ] Contact the media
```

## Alert

This is how an `Info Alert` is displayed:
<alert>
Check out an info alert with a `codeblock` and a [link](/themes/docs)!
</alert>


This is how an `Info Alert` is written:
```md
<alert>
Check out an info alert with a `codeblock` and a [link](/themes/docs)!
</alert>

```

This is how a `Success Alert` is displayed:
<alert type= 'success'>
Check out an success alert with a `codeblock` and a [link](/themes/docs)!
</alert>


This is how a `Success Alert` is written:
```md
<alert type= 'success'>
Check out an success alert with a `codeblock` and a [link](/themes/docs)!
</alert>
```


This is how a `Warning Alert` is displayed:
<alert type= 'warning'>
Check out an info alert with a `codeblock` and a [link](/themes/docs)!
</alert>


This is how a `Warning Alert` is written:
```md
<alert type= 'warning'>
Check out an info alert with a `codeblock` and a [link](/themes/docs)!
</alert>
```

This is how a `Danger Alert` is displayed:
<alert type = 'danger'>
Check out an danger alert with a `codeblock` and a [link](/themes/docs)!
</alert>


This is how a `Danger Alert` is written:
```md
<alert type = 'danger'>
Check out an danger alert with a `codeblock` and a [link](/themes/docs)!
</alert>
```

## List

This is how a `list` is displayed:

<list :items="['Item1', 'Item2', 'Item3']"></list>


This is how a `list` is written in markdown:

```md
---
items:
  - Item1
  - Item2
  - Item3
---

<list :items="items"></list>
```

## Badge

This is how a `badge` is displayed:
<badge>v1.2+</badge>

This is how a `badge` is written in markdown:
```md
<badge>v1.2+</badge>
```

## Code Block

This is how a `code-block` is displayed:

<code-group>
  <code-block label="Yarn" active>

  ```bash
  yarn add @nuxt/content-theme-docs
  ```

  </code-block>
  <code-block label="NPM">

  ```bash
  npm install @nuxt/content-theme-docs
  ```

  </code-block>
</code-group>

This is how a `code-block` is written in markdown:

```html
# Backslashes are for demonstration

<code-group>
  <code-block label="Yarn" active>

  ```bash
  yarn add @nuxt/content-theme-docs
  \```

  </code-block>
  <code-block label="NPM">

  ```bash
  npm install @nuxt/content-theme-docs
  \```

  </code-block>
</code-group>
```

## Code Sandbox


This is how a `code-sandbox` is displayed:

<code-sandbox src="https://codesandbox.io/embed/nuxt-content-l164h?hidenavigation=1&theme=dark"></code-sandbox>

This is how a `code-sandbox` is written in markdown:

```md
---
link: https://codesandbox.io/embed/nuxt-content-l164h?hidenavigation=1&theme=dark
---

<code-sandbox :src="link"></code-sandbox>
```

## Videos

This is how a `video` is displayed:

<video loop playsinline controls>
  <source src="./example.mp4" type="video/mp4" />
</video>

This is how a `video` is written in markdown:

```md
<video loop playsinline controls>
  <source src="./example.mp4" type="video/mp4" />
</video>
```

## Twitter

This is how a `twitt` is displayed:
<blockquote class="twitter-tweet"><a href="https://twitter.com/rlangvad/status/1352940444200669186?ref_src=twsrc%5Etfw"></a></blockquote>


This is how a `twitt` is written in markdown:

```md
<blockquote class="twitter-tweet"><a href="https://twitter.com/rlangvad/status/1352940444200669186?ref_src=twsrc%5Etfw"></a></blockquote>
```

<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
