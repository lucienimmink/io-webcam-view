# io-webcam-view

> A web component to show the output of your webcam.

## Use cases

- single small view in web-based presentations. You determine where your speaker's view is shown.
full-screen view in web-based presentations. Do Demos like a pro.
- ... Add your own!

## Usage

```html
<io-webcam-view></io-webcam-view>
```

### Optional attributes

- width &lt;`number`&gt;:  Request this width from the webcam. ⚠️ You might filter out your desired webcam.
- height &lt;`number`&gt;: Request this height from the webcam. ⚠️ You might filter out your desired webcam.
- audio &lt;`boolean`&gt;: Include access to the recording device
- deviceId &lt;`string`&gt;: Specify a specific deviceId. Handy for when the needed webcam is not the default input device.

## Installation

```bash
npm install
npm run build
```

`dist` will contain `io-webcam-view.js` which contains everything you need to have. 6kB gzipped.

## Development

## dev

The project is based on `vite` so it comes with a built-in development server. Run the following command to spin up the server and check the console for the exact URL you need to use:

```bash
npm run dev
```

## analyse

Included is the custom elements manifest analyser which you can run by issuing the command:

```bash
npm run analyse
```

This will analyse the custom element and create a JSON file `custom-elements.json` which can be used to easily explore the API of the custom element. If you run the development server the file `api-viewer.html` will show the current API of your web components.

---

Copyright (C) 2022 Lucien Immink, [iO](https://www.iodigital.com)
