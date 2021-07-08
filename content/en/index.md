---
title: Basic Syntax

position: 1
category: Markdown Constructors

---


## Titles

![image](https://user-images.githubusercontent.com/3258579/124534360-f6dfec80-ddc8-11eb-8735-db82b5d5cb41.png)

```md
# Title Level 1
## Title Level 2
### Title Level 3
#### Title Level 4
##### Title Level 5
```

## Bold
**bold text**
```md
**bold text**
```

## Italic
_italicized text_

```md
*italicized text*
```
or
```md
_italicized text_
```


## Blockquote
> blockquote
```md
> blockquote
```
## Ordered List
1. First item
2. Second item
3. Third item

```md
1. First item
2. Second item
3. Third item
```

## Unordered List
- First item
- Second item
- Third item

```md
- First item
- Second item
- Third item
```

## Code
`code`

```md
`code`
```

## Horizontal Rule
---
```md
---
```

## Link
[Markdown Guide](https://www.markdownguide.org)

```md
[Markdown Guide](https://www.markdownguide.org)
```

## Image
![alt text](https://www.markdownguide.org/assets/images/tux.png)
```md
![alt text](https://www.markdownguide.org/assets/images/tux.png)
```
or
```md
![image](https://user-images.githubusercontent.com/3258579/124534970-30fdbe00-ddca-11eb-8a95-ca7dd82eba41.png)

```


# Extended Syntax

These elements extend the basic syntax by adding additional features. Not all Markdown applications support these elements.

## Table

| Syntax      | Description |
| ----------- | ----------- |
| Header      |       Title |
| Paragraph   | Text        |

```md
| Syntax      | Description |
| ----------- | ----------- |
| Header      |       Title |
| Paragraph   |       Text  |
```
or
Insert basic HTML table
## Fenced Code Block

```json
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
```

## Footnote

Here's a sentence with a footnote. [^1]
...
[^1]: This is the footnote.

> Note: please go to the bottom of the page to see the footnote.

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