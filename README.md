# TravelTrucks_next# TravelTrucks

TravelTrucks is a camper rental web application built with Next.js and TypeScript.

## 🚀 Live Demo

[https://travel-trucks-next.vercel.app](https://travel-trucks-next.vercel.app)

## 📋 Features

- **Home page** — hero banner with call to action
- **Catalog page** — list of campers with filters and Load More pagination
- **Camper details page** — full info, image gallery, reviews, booking form
- Filtering by location, camper form, engine type and transmission
- Infinite scroll pagination with TanStack Query
- Image gallery with Swiper
- Booking form with Formik + Yup validation
- Toast notifications on successful booking
- Loading spinner during async requests

## 🛠 Tech Stack

- [Next.js 15](https://nextjs.org/) — App Router
- [TypeScript](https://www.typescriptlang.org/)
- [TanStack Query](https://tanstack.com/query) — data fetching and caching
- [Formik](https://formik.org/) + [Yup](https://github.com/jquense/yup) — form validation
- [Swiper](https://swiperjs.com/) — image gallery
- [React Icons](https://react-icons.github.io/react-icons/) — icons
- [React Hot Toast](https://react-hot-toast.com/) — notifications
- CSS Modules — styling

## ⚙️ Installation

```bash
# Clone the repository
git clone https://github.com/Bashmachok1982/TravelTrucks_next.git

# Navigate to the project folder
cd TravelTrucks_next

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🔌 API

The project uses a pre-hosted GoIT backend:
[https://campers-api.goit.study](https://campers-api.goit.study)

| Endpoint                              | Description                                  |
| ------------------------------------- | -------------------------------------------- |
| `GET /campers`                        | Get campers list with filters and pagination |
| `GET /campers/filters`                | Get available filter options                 |
| `GET /campers/{id}`                   | Get camper details                           |
| `GET /campers/{id}/reviews`           | Get camper reviews                           |
| `POST /campers/{id}/booking-requests` | Create booking request                       |

## 👤 Author

**Aleksandr**

- GitHub: [@Bashmachok1982](https://github.com/Bashmachok1982)
