# Web Development Section – Detailed Notes


---

## 1. The Internet in 5 Minutes

- The Internet is a global network of connected computers and devices.
- Key elements:
  - **Clients** are user-facing devices like laptops and smartphones that send requests.
  - **Servers** respond to those requests by delivering web pages and other resources.
  - **Routers** and **switches** direct traffic efficiently.
- Communication:
  - Each device has an **IP address**, a unique identifier.
  - The **Domain Name System (DNS)** translates human-readable domain names (like example.com) into IP addresses.
  - Data is broken into **packets** for transmission and reassembled at the destination.
  - Protocols like **HTTP** and **TCP/IP** manage the sending and receiving of data across the network.

---

## 2. Intro to the Web

- The **World Wide Web** is a collection of interlinked documents and applications that run on the Internet.
- **Web browsers** (Chrome, Firefox, Safari) retrieve and render content from servers.
- Web content is delivered using:
  - **HTML** for structure and content.
  - **CSS** for presentation and layout.
  - **JavaScript** for behavior and interactivity.
- A **URL** (Uniform Resource Locator) specifies the address of a resource on the web.
- Websites consist of many files and assets (HTML pages, stylesheets, scripts, images) that are loaded during browsing.

---

## 3. The Request/Response Cycle

- When a user enters a URL or clicks a link, the browser makes a **request** to a web server.
- The **server** processes the request and sends a **response**, usually starting with an HTML document.
- The browser then parses the HTML and makes additional requests for related resources:
  - **CSS files** for styling.
  - **JavaScript files** for interactivity.
  - **Images**, **fonts**, and other assets.
- This cycle repeats each time a new request is made, either through navigation or user interaction.

---

## 5. Front-End and Back-End

- **Front-End Development**:
  - Focuses on what users see and interact with in the browser.
  - Technologies include **HTML**, **CSS**, and **JavaScript**.
  - Responsible for layout, design, animations, and client-side validation.
- **Back-End Development**:
  - Handles the behind-the-scenes functionality of web applications.
  - Involves **server-side programming**, **databases**, and **APIs**.
  - Common languages and tools include **Node.js**, **Python**, **Java**, and **SQL**.
- Front-end and back-end communicate through HTTP requests, often sending and receiving data in **JSON** format.

---

## 6. What do HTML/CSS/JS do?

- **HTML (HyperText Markup Language)**:
  - Provides the **structure** of a webpage.
  - Uses elements like `<h1>`, `<p>`, `<a>`, and `<div>` to define content.
- **CSS (Cascading Style Sheets)**:
  - Controls the **visual appearance** of the webpage.
  - Manages layout, colors, fonts, spacing, and responsiveness.
  - Styles are applied using selectors and properties.
- **JavaScript**:
  - Adds **functionality and interactivity**.
  - Used for responding to user actions, manipulating the DOM, fetching data from APIs, and much more.
  - Executes directly in the browser, enabling dynamic behavior.
