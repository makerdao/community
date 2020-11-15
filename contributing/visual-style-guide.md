# MakerDAO Community Style Guide

This style guide outlines the aesthetic elements & standards currently being used across MakerDAO's community initiatives. At the time of writing, an official MakerDAO style guide has not been published, but this one uses many of the existing colors, type scales, etc. present on the makerdao.com website.

## Colors

Maker uses three highlight colors - `Maker Teal`, `Maker Orange` & `Maker Blue`, plus a color for `Headings` and one for `Body Text`.

### CSS

Declare the colors as global CSS variables.

```css
* {
  —color-makerteal: #1aaa9b;
  —color-makerorange: #f5b13d;
  —color-makerblue: #08529b;
  —color-headline: #291a42;
  —color-body: #53546a;
}
```

## Maker Teal

`#1aaa9b`

Our primary highlight color. This is darker than the "standard" Maker Teal color used on their website `#30bd9f` to improve contrast and legibility.

![](https://i.imgur.com/Osnrxoz.png =160x)

### Usage

- In-line text links
- `Headlines`
- `Section Titles`
- `Labels`

### Examples

Highlights the major statistics on the Maker Transparency Dashboard.

![](https://i.imgur.com/RFnGD4m.png)

The `:active` color on the `Pill` object and `Section Title` in the Transparency Dashboard.

![](https://i.imgur.com/Odl8Yiw.png)

## Maker Orange

`#f5b13d`

Our secondary highlight color. Can be paired with `Maker Gradient Orange` to create sections or elements on a page with complimentary hues.

![](https://i.imgur.com/34NCeJW.png =160x)

### Usage

- Secondary highlights on a page that contrast against Maker Teal.
- Provide visual contrast on the page

### Examples

Applied to this doughnut chart on the Transparency Dashboard and its corresponding statistic (to the left).

![](https://i.imgur.com/iksiOEi.png)

## Maker Blue

`#08529b`

Our tertiary highlight color. Used sparingly in coordination with `Maker Gradient Blue` to create sections on the page that stand apart - such as a call to action section to sign-up to something, or a footer.

![](https://i.imgur.com/EDoKjk7.png =160x)

### Usage

- Create contrast within specific elements on a page.
- `Headlines`
- `Labels`

### Examples

Used in both the `Section Title` and `Label` for this section of the Maker Transparency Dashboard.

![](https://i.imgur.com/lRNhVOS.png)

## Headline Color

`#291a42`

A high contrast near-black with a subtle dark purple hue.

![](https://i.imgur.com/wnDLWM9.png =160x)

### Usage

- `<h1>` Headlines.
- `Section Title`'s

### Examples

Used as the above-the-fold headline on the Maker Grants Transparency Dashboard

![](https://i.imgur.com/3JetAvV.png =1024x)

## Body Color

`#53546a`

A softer mid-gray.

![](https://i.imgur.com/lmn1qQO.png =160x)

#### Usage

- All body text
- Any `h2` or `h3` headlines that you want to display with a softer contrast.

### Examples

Used in both the `label` and description text within each `RowCard`.

![](https://i.imgur.com/HMkR3eQ.png)

## Maker Gradient Primary

A versatile teal-to-yellow gradient used across Maker properties as a primary background for major sections or entire pages.

![](https://i.imgur.com/TBkLL5x.png =240x)

```css
linear-gradient(180deg, rgba(182, 237, 231, 0.38) 0%, rgba(253, 193, 52, 0.15) 100%)
```

### Usage

- The background of a major `<section>` on your page or the `<body>`.

#### Examples

The Transparency Dashboard uses this as its main background across the entire page. You can limit it to a single section.

## Gradient Green

Can be paired with `Maker Teal` to create elements or sections with a complimentary hue.

![](https://i.imgur.com/vKK5Nvh.png =240x)

```css
linear-gradient(hsla(168,50%,90%,1),hsla(168,50%,86%,1))
```

### Usage

- Paired with `Maker Teal` to highlight concise pieces of information.
- May be used as a `<Section>` background.
- May be used as a `<Button>` background.

#### Examples

**Maker Grants Transparency Dashboard. Used to provide contrast/separation on one category of statistics**

![](https://i.imgur.com/qRxoZJD.png =1024x)

## Gradient Orange

Used as a background that can pair with `Maker Orange`

![](https://i.imgur.com/SPVOhSU.png =240x)

#### `linear-gradient(hsla(39,70%,91%,1),hsla(39,70%,86%,1))`

### Usage

- A `<Section>` background
- A `<Button>` background

### Examples

**Used for visual contrast** to display a category of stats on the Maker Transparency Dashboard. In this case, `Maker Teal` is used for the number and `Body Color` for the descriptive text.

![](https://i.imgur.com/yfVi3SJ.png =240x)

## Gradient Blue

Paired with `Maker Blue` as a tertiary highlight. Used as a `<section>` background to establish a distinct contrast of content on the page.

![](https://i.imgur.com/87SLYM8.png =240x)

```css
linear-gradient(hsla(210,50%,90%,1),hsla(210,50%,86%,1))
```

### Usage

- A `<Section>` background
- A `<Button>` background

### Examples

**Used as the background to a section in the Maker Transparency Dashboard**

![](https://i.imgur.com/6IsKiar.png =640x)

## Typography

Maker's Community properties use a simple type scale: 3 headlines, a body, and a label.

```css
h1 {
  font-size: 2.25rem;
}

h2 {
  font-size: 1.5rem;
}

h3 {
  font-size: 1.25rem;
}

p {
  1.125rem;
}

.label {
  font-size: 1rem;
  text-transform: uppercase;
}
```

## Headline 1

### Usage

Used sparingly for major statements on a landing page, such as the opening headline you find "above the fold"

### Example

Used as the above-the-fold headline on the Maker Grants Transparency Dashboard

![](https://i.imgur.com/3JetAvV.png =1024x)

## Headline 2

### Usage

Used for all `Section Titles` on a page.

### Examples

An example of a `Section Title`.

![](https://i.imgur.com/G80npu6.png)

Another example of a `Section Title`.

![](https://i.imgur.com/lFgt2Up.png)

## Headline 3

### Usage

- Body text within `RowCards`
- Subheadings
- Give additional prominence to elements on a page (e.g. statistics)

### Examples

In the Transparency Dashboard, it's used to highlight our grant program statistics.

## Body

### Usage

- Used with `<p>` for paragraphs of text on a page.

## Label

### Usage

- Define sections of content.
- Incorporated into the `Pill` object

### Examples

Used in as the "question" in a Q&A format within a `LinkCard` to link out to frequently asked questions.

![](https://i.imgur.com/nUBgnhn.png =420x)

Used to define the status of a project (in this case - "Beta") within a `RowCard` that details a project that has been supported by the Maker Community Grants program.

![](https://i.imgur.com/QHFuKdi.png =640x)

## Typeface

Maker currently uses system fonts across its properties, with Helvetica Neue as a backup.

```css
* {
  font-family: system-ui, "Helvetica Neue", sans-serif;
}
```

## Objects

### Buttons

#### Usage

- Calls-to-action (e.g. verbs such as creating, confirming, canceling, viewing).

#### Examples

**Button Primary**
For any primary calls-to-action, like creating an account or submitting a form.

![](https://i.imgur.com/sRbKD6f.png =200x)

**Button Secondary**
For any secondary calls-to-action, like canceling out of a flow, or triggering an alternative display, etc.

![](https://i.imgur.com/KyJdUyh.png =200x)

```css
.buttonPrimary {
  display: flex;
  justify-content: center;
  align-content: center;
  padding: 0.875rem 1.5rem 0.875rem 1.5rem;
  color: #fafafa;
  background: var(--color-makerteal);
  font-size: 1.25rem;
  border: 1px solid var(--color-makerteal);
  border-radius: 2px;
  outline: none;
  opacity: 1;
  font-size: 1.25rem;
  transition: 0.2s ease-in-out;
}

.buttonPrimary:hover {
  translate: transformY(-10%);
  cursor: pointer;
}

.buttonSecondary {
  display: flex;
  justify-content: center;
  align-content: center;
  padding: 0.875rem 1.5rem 0.875rem 1.5rem;
  color: var(--color-makerteal);
  background: transparent;
  font-size: 1.25rem;
  border: 1px solid var(--color-makerteal);
  border-radius: 2px;
  outline: none;
  opacity: 1;
  font-size: 1.25rem;
  transition: 0.2s ease-in-out;
}

.buttonPrimary:hover {
  translate: transformY(-10%);
  cursor: pointer;
}
```

```html
<button class="buttonPrimary">A Primary Button</button>
```

```html
<button class="buttonSecondary">A Secondary Button</button>
```

## Pills

Used as a tab mechanism, to filter content within a specific section on a page.

### Usage

- As tabs, to filter content
- A tertiary button style

### Examples

**Active**
![](https://i.imgur.com/QzBpNUd.png =160x)

**Inactive**
![](https://i.imgur.com/YlJN0zW.png =160x)

### Code

```html
<button class="makerPill">Pill</button>
```

```css
.makerPill {
  min-width: 120px;
  color: var(--maker-bodycolor);
  padding: 0.5rem 0.875rem 0.5rem 0.875rem;
  outline: none;
  border-radius: 100px;
  border: 1px solid var(--maker-bodycolor);
  text-transform: uppercase;
  font-weight: 400;
  transition: 0.2s ease-in-out;
}

makerPill:hover {
  border: 1px solid var(--maker-teal);
  color: var(--maker-teal);
}
```

## RowCards

We use `RowCards` to organize and structure content into lists. They break down from `Rows` into `Cards` at smaller viewports.

### Usage

- Lists that must display multiple types of information

### Examples

We use the RowCards to create a list of Grantees in the Maker Transparency Dashboard.

**A single RowCard**
![](https://i.imgur.com/sK1NHUU.png =1024x)

**Multiple RowCards in a list**
_This example is a list of Grantees displayed on the Maker Transparency Dashboard_

![](https://i.imgur.com/kmGLIsF.png)

**A single RowCard @mobile breakpoint**
![](https://i.imgur.com/4oxtBku.png =320x)

**Multiple RowCards in a list @mobile breakpoint**

![](https://i.imgur.com/877JdCq.png =320x)

```html
<div class="rowCardWrapper">
    <div class="rowCardContainer">
        <div class="rowCardTopContainer">
            <a href="#" class="rowCardLink">
            <h2 class="makerHeadline2">RowCard Title↗
            </a>
            <div class="rowCardContentSecondary">
            Social Link Icons
            </div>
        </div>
        <div class="rowCardDescription">A description or other relevant content.</div>
        <div class="rowCardBottomContainer">
            <p class="makerLabel">
                LABELS
            </p>
        </div>
    </div>
</div>
```

```css
/* Wraps all the RowCard objects */
.rowCardWrapper {
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: minmax(300px, 1024px);
  justify-items: center;
  justify-content: space-around;
  margin: 0rem 1rem 0rem 1rem;
}

/* The RowCard object */
.rowCardContainer {
  display: flex;
  width: 100%;
  max-width: 1024px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  background: hsl(210, 33%, 98%);
  border: 1px solid hsla(240, 10%, 90%, 1);
  border-top: 0px;
  padding: 1rem;
}

.rowCardContainer:first-child {
  border-top: 1px solid hsla(240, 10%, 90%, 1);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

/* Contains the RowCard title and optional secondary content */
.rowCardContainerTop {
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
}

.rowCardLink {
  transition: 0.2s ease-in-out;
}

.rowCardLink:hover {
  color: var(--Maker-Teal);
}

.rowCardHeadline {
  font-size: 1.5rem;
  color: var(--Maker-Headline);
  margin: 0;
  text-overflow: ellipsis;
  white-space: nowrap;
  transition: 0.15s ease-in-out;
}

/* Contains the social icons in the example. Optional and can be removed if unnecessary for your use case */
.rowCardContentSecondary {
  display: flex;
  justify-items: center;
  align-items: center;
}

/* Any secondary content. In the example this contains the project description, but it can be used for any relevant text-string. */
.rowCardContentSecondary {
  color: var(--body-color);
  width: 75%;
  white-space: normal;
  text-overflow: ellipsis;
  max-height: 140px;
  overflow: hidden;
  padding: 1rem 1rem 1rem 0rem;
}

/* Contains any supporting content. In the example, we list out descriptive/category labels*/
.rowCardBottomContainer {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  width: 100%;
}

/* Our standard label object */
.makerLabel {
  font-size: 1rem;
  margin: 0 1rem;
  color: var(--body-color);
  text-transform: uppercase;
  text-align: left;
}

/* Mobile styles */
@media and (max-width: 420px) {
  .rowCardWrapper {
    grid-gap: 1rem;
  }

  .rowCardContainer {
    max-width: 280px;
    border-radius: 4px;
    padding-bottom: 0;
  }

  .makerLabel {
    padding: 1rem 0rem 1rem 0rem;
  }
}
```

## Section Titles

Uses `Headline 3` with `text-transform: uppercase`. Color is dependent on the section `background-color` used.

### Usage

- Title / define specific sections on the site.

### Examples

**The title for the list of grantees in the Maker Grants Transparency Dashboard. The color is `Maker Teal` - `##1aaa9b`**

![](https://i.imgur.com/67NkJ8L.png)

The title for a list of common questions that link out to their respective answers.
![](https://i.imgur.com/Z0amSON.png)

```css
.sectionTitle {
  text-transform: uppercase;
  color: var(
    --color-makerteal
  ); /* Use a color that's complimentary to the background */
}
```

## Inline Links

**Usage**

Links to external sites for in-line text, e.g. within a paragraph of text.

```css
a {
  color: var(—color-makerteal);
  transition: 0.15s ease-in-out;
}

a:hover {
  border: 1px solid var(—color-makerteal);
}
```

### Examples

An inline link.

![](https://i.imgur.com/zszpd5i.png =420x)

The inline link on `:hover`

![](https://i.imgur.com/iPQED6w.png =420x)

## LinkCard

For links that require more prominence.

### Usage

- Linking out to FAQs
- Displaying slightly larger amounts of contextual information than a single inline text link would.

### Examples

**LinkCard** Active (on hover).

![](https://i.imgur.com/sMHUP8K.png =480x)

**LinkCard** Inactive.
![](https://i.imgur.com/RUFrLJr.png =480x)

Used in the Footer of the Transparency Dashboard to link out to external educational resources. It contains a `Label` object and `Headline 3` object within a container.

![](https://i.imgur.com/lnkAAxE.png)

```css
/* Wraps all LinkCards */
.LinkCardWrapper {
  display: grid;
  grid-template-columns: minmax(320px, 540px);
  grid-gap: 2rem;
}

/* The parent container object for each LinkCard */
.LinkCardContainer {
  color: var(--body-color);
  padding: 1.5rem 1.875rem 1.875rem 3rem;
  border-radius: 4px;
  margin: 1rem 0rem;
  background: none;
  transition: 0.15s linear;
  border: 1px solid hsla(209, 51%, 80%, 1);
  border-radius: 4px;
}

.LinkCardContainer:hover {
  background: * / Whatever background-gradient is complimentary * /;
}
```

```html
<ul class="LinkCardWrapper">
    <a href="*">
    <ul class="LinkCardContainer">
        <li>
            <h4 class="label">Label</h6>
        </li>
        <li>
            <p class="body-text"> Text description</p>
        </li>
    </ul>
    </a>
</ul>
```
