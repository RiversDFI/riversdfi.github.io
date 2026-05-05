<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dawson's Awesome | Original Grillin' Sauce</title>
    
    <style>
        body {
            background: linear-gradient(180deg, hsl(25, 98%, 20%) 0%, #914002 15%, #c44700 90%);
            background-attachment: fixed;
            color: #ffffff;
            font-family: 'Inter', sans-serif;
            min-height: 100vh;
            margin: 0;
        }

        main {
            padding: 60px 8%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            min-height: calc(100vh - 110px);
        }

        .top-logo-container {
             display: flex;
             justify-content: center; /* Centers horizontally */
            padding-top: 5px;      /* Adjusts distance from the very top */
            width: 100%;
        }

        .top-logo {
            width: 800px;           
            height: 200px;          
            border: 10px solid hwb(0 100% 0%); /* Your determined color */
            border-radius: 12px;    /* Optional: Rounds the corners of the border */
            box-shadow: 0 10px 30px rgba(0,0,0,0.5); /* Adds depth against the gradient */
        }
        
        nav {
            display: flex;
            justify-content: center;
            margin-top: 20px;
            width: 100%;
        }
        
        nav ul {
            display: flex;
            list-style: none;
            justify-content: center;
            width: 30%;
            gap: 10rem;
            padding: 12px 40px;
            background: rgba(0, 0, 0, 0.3);
            backdrop-filter: blur(10px);
            border-radius: 50px;
            border: 1px solid rgba(255, 255, 255, 0.1);
        }

        nav a {
            text-decoration: none;
            color: #fff;
            font-weight: 600;
            font-size: 0.9rem;
            text-transform: uppercase;
            opacity: 0.8;
            transition: 0.3s;
        }

        nav a:hover { opacity: 1; }

        /* --- New Content Styles --- */

        .hero-content {
            flex: 1;
            padding-right: 50px;
        }

        .hero-content h1 {
            font-size: 4rem;
            margin-bottom: 1rem;
            text-shadow: 2px 2px 10px rgba(0,0,0,0.3);
        }

        .hero-content p {
            font-size: 1.2rem;
            line-height: 1.6;
            margin-bottom: 2rem;
            opacity: 0.9;
        }

        .cta-button {
            display: inline-block;
            background: #fff;
            color: #914002;
            padding: 15px 35px;
            border-radius: 50px;
            text-decoration: none;
            font-weight: 700;
            text-transform: uppercase;
            transition: transform 0.2s, box-shadow 0.2s;
        }

        .cta-button:hover {
            transform: translateY(-3px);
            box-shadow: 0 10px 20px rgba(0,0,0,0.2);
        }

        .product-image-container {
            flex: 1;
            display: flex;
            justify-content: center;
        }

        .product-image {
            max-width: 450px;
            filter: drop-shadow(0 20px 50px rgba(0,0,0,0.5));
            transition: transform 0.5s ease;
        }

        .product-image:hover {
            transform: scale(1.05) rotate(2deg);
        }

        footer {
            text-align: center;
            padding: 40px;
            background: rgba(0,0,0,0.2);
            font-size: 0.8rem;
            opacity: 0.6;
        }

        /* Mobile Responsiveness */
        @media (max-width: 1024px) {
            main { flex-direction: column; text-align: center; }
            .hero-content { padding-right: 0; margin-bottom: 40px; }
            .top-logo { width: 90%; height: auto; }
            nav ul { width: 80%; gap: 2rem; }
        }
    </style>
</head>
<body>
    <div class="top-logo-container">
        <img src="DAS_Web.jpg" alt="Dawson's Logo" class="top-logo">
    </div>

    <nav>
        <ul>
            <li><a href="shop.html">Shop</a></li>
            <li><a href="contact.html">Contact</a></li>
            <li><a href="story.html">Story</a></li>
        </ul>
    </nav>

    <main>
        <div class="hero-content">
            <h1>The Original <br>Grillin' Sauce</h1>
            <p>Hand-crafted in small batches with premium ingredients. Dawson's Awesome brings a smoky, tangy, and perfectly sweet balance to every flame-grilled meal. It's not just sauce; it's a legacy of flavor.</p>
            <a href="shop.html" class="cta-button">Order Your Bottle</a>
        </div>

        <div class="product-image-container">
            <img src="DAS.jpg" alt="Dawson's Awesome Sauce Bottle" class="product-image">
        </div>
    </main>

    <footer>
        <p>&copy; 2026 Dawson's Awesome. All Rights Reserved. | Made for the love of BBQ.</p>
    </footer>
<script src="script.js"></script>
</body>
</html>
