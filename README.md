# Bonsai Photo Book

This is a comprehensive online photo book application dedicated to bonsai trees. It provides detailed information about various bonsai species, including their care requirements, common techniques, and extensive photo galleries showcasing different development stages, seasons, styles, and even their natural habitats.

## Features

- **Detailed Species Information:** Scientific and popular names, group classification, temperature ranges, sun exposure, position (indoor/outdoor), leaf retention/type, climate, flowering, native region, difficulty level (beginner, intermediate, expert), care tips (Soil Type, Feeding, Watering), and common bonsai styles.
- **Extensive Photo Galleries:**
  - Photos from different development stages (Early, Middle, Mature).
  - Photos showing seasonal variations (Spring, Summer, Autumn, Winter).
  - Photos demonstrating various bonsai styles.
  - "In Nature" tab showcasing photos of the tree in its wild habitat.
- **Enhanced Search Functionality:** Search by tree name, scientific name, group, and words on badges (e.g., "beginner", "deciduous").
- **Image Optimization:** Images are optimized for web performance while maintaining high quality.
- **Minimalist Image Labels:** Clear labels on images in detail views (e.g., "Early Stage", "Spring", "Cascade").
- **Image Credits:** Full-size image modal includes photo credits with clickable source links.
- **Comprehensive Techniques Section:** For each species, a dedicated section detailing 15 common bonsai techniques, including when to perform them and at what maturity stage, with species-specific recommendations.
- **Responsive Design:** The application is fully responsive and works seamlessly across desktop, tablet, and mobile devices.

## Technologies Used

- **Frontend:** React.js
- **Styling:** Tailwind CSS
- **Build Tool:** Vite

## How to Run Locally

To get a local copy up and running, follow these simple steps.

### Prerequisites

Make sure you have Node.js and pnpm (or npm) installed on your system.

- Node.js (LTS version recommended)
- pnpm (or npm)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/bribeirobr25/bonsai-beta.git
    ```
2.  **Navigate into the project directory:**
    ```bash
    cd bonsai-beta/bonsai-photo-book
    ```
3.  **Install dependencies:**
    ```bash
    pnpm install
    # or if you prefer npm
    # npm install
    ```

### Running the Application

1.  **Start the development server:**
    ```bash
    pnpm run dev
    # or if you prefer npm
    # npm run dev
    ```
2.  **Open in browser:**
    The application will typically open in your default browser at `http://localhost:5173` (or another port if 5173 is in use).

## Project Structure

```
bonsai-beta/
├── bonsai-photo-book/          # React application source code
│   ├── public/                 # Static assets (images, favicon)
│   │   └── bonsai_photos/      # Optimized bonsai images
│   ├── src/                    # React source files
│   │   ├── components/         # Reusable React components
│   │   ├── data/               # Data files (bonsaiData.js)
│   │   └── App.jsx             # Main application component
│   ├── ...                     # Other React project files
├── bonsai_photos/              # Original collected bonsai images (before optimization)
└── README.md                   # This file
```

## Contributing

Contributions are welcome! Please feel free to fork the repository, make changes, and submit pull requests. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is open source and available under the [MIT License](LICENSE).

