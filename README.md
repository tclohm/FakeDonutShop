# Landy's Donuts

A fake donut shop website, built for showing off donuts. This app let you browse the menu, check out our locations, and even add donuts to your cart like you really gonna buy them.

## Features

- **Home Page** — Hero wallpaper, featured donuts, and a little history about the shop.
- **Menu Page** — Full lineup of donuts and drinks, each one more delicious then the last.
- **Locations Page** — See where all our fake shops is located across LA.
- **About Page** — Meet the team who don't actually exist.
- **Cart & Checkout** — Add donuts to your cart and pretend to buy them.
- **Map Page** — A stylized map showing all our locations at once.

## Tech Stack

- React (Create React App)
- Tailwind CSS
- React Router

## Getting Started

Clone the repo and installs the dependencies:

```bash
git clone https://github.com/tclohm/FakeDonutShop.git
cd FakeDonutShop
npm install
```

Then run it locally:

```bash
npm start
```

The app should now be running on `http://localhost:3000`.

### Building for production

```bash
npm run build
```

This create an optimized build in the `build/` folder, ready to be deployed.

## Project Structure

```
public/          # Static assets (images, favicon, etc)
src/
  components/    # Reusable UI pieces like the Header
  contexts/      # React context providers (cart, etc)
  lib/           # Helper libraries
  pages/         # Each page of the site (Home, Menu, About, Locations, etc)
  utils/         # Utility functions
```

## Deployment

This site deploy automatically to Cloudflare Pages whenever a new commit get pushed to `main`.

## Images

All product and location images has been optimized to WebP for faster load times, because nobody got time for a 2MB donut photo.

## Contributing

This is mostly a personal project, but suggestions is always welcome — feel free to open an issue.

## License

This project is for demonstration purposes only. All donuts pictured are fake and not available for actual purchase, unfortunately.
