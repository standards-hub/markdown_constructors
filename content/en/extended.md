---
title: Extended Syntax

position: 2
category: Markdown Constructors

---

These elements extend the basic syntax by adding additional features. Not all Markdown applications support these elements.


## Fenced Code Block

```json
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
```

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
### Strikethrough
~~The world is flat.~~

```md
~~The world is flat.~~
```


### Task List

```md
- [x] Write the press release
- [ ] Update the website
- [ ] Contact the media
```

- [x] Write the press release
- [ ] Update the website
- [ ] Contact the media


## `<alert>`

**Props**

- `type`
  - Type: `String`
  - Default: `'info'`
  - Values: `['info', 'success', 'warning', 'danger']`

**Example**

```md
<alert>

Check out an info alert with a `codeblock` and a [link](/themes/docs)!

</alert>
```

**Result**

<alert>

Check out an info alert with a `codeblock` and a [link](/themes/docs)!

</alert>

<alert type = warning>

Check out an info alert with a `codeblock` and a [link](/themes/docs)!

</alert>

<alert type = success>

Check out an info alert with a `codeblock` and a [link](/themes/docs)!

</alert>

<alert type = danger>

Check out an info alert with a `codeblock` and a [link](/themes/docs)!

</alert>


## `<list>`

**Props**

- `items`
  - Type: `Array`
  - Default: `[]`
- `type` <badge>v0.7.0+</badge>
  - Type: `String`
  - Default: `'primary'`
  - Values: `['primary', 'info', 'success', 'warning', 'danger']`
- `icon` <badge>v0.7.0+</badge>
  - Type: `String`
  - *Can be used to override the default `type` icon, check out the [icons available](https://github.com/nuxt/content/tree/dev/packages/theme-docs/src/components/global/icons)*

**Example**

```md
---
items:
  - Item1
  - Item2
  - Item3
---

<list :items="items"></list>
```

**Result**

<list :items="['Item1', 'Item2', 'Item3']"></list>


## `<badge>`

<badge>v0.5.0+</badge>

**Example**

```md
<badge>v1.2+</badge>
```

**Result**

<badge>v1.2+</badge>

## `<code-group>`

This component uses `slots`, refer to `code-block` below.

## `<code-block>`

**Props**

- `label`
  - Type: `String`
  - `required`
- `active`
  - Type: `Boolean`
  - Default: `false`

**Example**

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

**Result**

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

## `<code-sandbox>`

**Props**

- `src`
  - Type: `String`
  - `required`

**Example**

```md
---
link: https://codesandbox.io/embed/nuxt-content-l164h?hidenavigation=1&theme=dark
---

<code-sandbox :src="link"></code-sandbox>
```

**Result**

<code-sandbox src="https://codesandbox.io/embed/nuxt-content-l164h?hidenavigation=1&theme=dark"></code-sandbox>

## Videos

<video loop playsinline controls>
  <source src="./example.mp4" type="video/mp4" />
</video>

```md
<video loop playsinline controls>
  <source src="./example.mp4" type="video/mp4" />
</video>
```

## Twitter

<blockquote class="twitter-tweet"><a href="https://twitter.com/rlangvad/status/1352940444200669186?ref_src=twsrc%5Etfw"></blockquote>

```md
<blockquote class="twitter-tweet"><a href="https://twitter.com/rlangvad/status/1352940444200669186?ref_src=twsrc%5Etfw"></blockquote>
```

<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
