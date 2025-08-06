import dedent from "dedent";

export const en = {
  header: {
    home: "Home",
    projects: "Projects",
    contactMe: "Get in Touch",
  },
  hero: {
    title: "Full-Stack Problem Solver",
    subtitle:
      "With over 7 years of experience delivering 🚀 scalable, high-performance solutions for web and mobile, plus a strong track record as a freelancer on diverse projects.",
    buttons: {
      viewProjects: "View Projects",
      contactMe: "Get in Touch",
    },
  },
  aboutMe: {
    codename: "GustavoMarques",
    role: "Full-Stack Developer",
    stack: {
      languages: ["JavaScript", "TypeScript", "PHP"],
      frontend: ["ReactJS", "React Native", "Flutter", "Vite"],
      backend: ["Node.js", "Docker", "MySQL", "Redis"],
      tools: ["GitHub", "Firebase", "OneSignal", "Linux", "Nginx"],
    },
    traits: [
      "Freelancer Warrior",
      "Animation Addict",
      "Dark Mode Advocate",
      "Supreme API Integrator",
      "Linux Terminal Ninja",
      "Professional Troubleshooter",
    ],
    availability: "Open to New Challenges",
  },
  projects: {
    title: "Professional applications for real clients",
    description:
      "Applications crafted to support companies in achieving their goals with efficient, modern software solutions.",
    projects: [
      {
        id: "integramente",
        title: "IntegraMente",
        description:
          "IntegraMente is a method for analyzing the psychological profile of a company’s employees, aimed at identifying their strengths and challenges...",
        detailDescription: dedent`
                    **IntegraMente** is a method for analyzing the psychological profile of a company’s employees, aimed at identifying their strengths and challenges and supporting their personal and professional development.

                    ## Main Features:

                    - Full interface customization with client-specific color palette and design  
                    - Advanced forms using React Hook Form with yup validation  
                    - Interactive dashboards built with ApexCharts  
                    - Rich text editor powered by Toast UI React Editor

                    ## Technologies:

                    - **Frontend**: Vite, TypeScript, React, MUI  
                    - **Charts**: ApexCharts  
                    - **Forms**: React Hook Form, Yup  
                    - **Styling**: Emotion, ThemeProvider  
        `,
        image: "/projects/integramente-studioa/integramente-studioa-capa.webp",
        techStack: ["Vite", "TypeScript", "MUI", "ApexCharts"],
        gallery: [
          {
            src: "https://customer-iq3i0rogrtkv4z32.cloudflarestream.com/8182e86841e5768410cf8cd703019da1/iframe?poster=https%3A%2F%2Fcustomer-iq3i0rogrtkv4z32.cloudflarestream.com%2F8182e86841e5768410cf8cd703019da1%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600&primaryColor=%23ae83f6",
            type: "video",
          },
          { src: "/projects/integramente-studioa/imagem1.webp", type: "image" },
          { src: "/projects/integramente-studioa/imagem2.webp", type: "image" },
          { src: "/projects/integramente-studioa/imagem3.webp", type: "image" },
          { src: "/projects/integramente-studioa/imagem4.webp", type: "image" },
          { src: "/projects/integramente-studioa/imagem5.webp", type: "image" },
          { src: "/projects/integramente-studioa/imagem6.webp", type: "image" },
          { src: "/projects/integramente-studioa/imagem7.webp", type: "image" },
        ],
        developedFor: "Developed for: IntegraMente - StudioA",
      },
      {
        id: "waymenu",
        title: "Waymenu",
        description:
          "Waymenu is a responsive digital menu platform built for restaurants and establishments looking to offer a modern, personalized experience to their customers...",
        detailDescription: dedent`
                    **WayMenu** is a responsive digital menu platform built for restaurants and establishments looking to offer a modern, personalized experience to their customers. The system enables interactive order building, secure authentication, and visual customization to match the client’s brand identity.

                    ## Main Features:

                    - Interactive pizza builder with dynamic SVG slice division (up to 4 parts) and animation with Framer Motion  
                    - Menu, cart, and user session management with Context API and custom hooks  
                    - Forms with React Hook Form and Yup validation, including UX guidance for required fields and selection limits  
                    - Action feedback with React Toastify and error handling in HTTP requests using Axios  

                    ## Technologies:

                    - **Frontend**: Vite, TypeScript, React, MUI  
                    - **State Management**: Context API, custom hooks  
                    - **Forms**: React Hook Form, Yup  
                    - **Styling**: Emotion, ThemeProvider                      
                `,
        image: "/projects/waymenu/waymenu-capa.webp",
        techStack: ["Vite", "TypeScript", "MUI", "Framer Motion"],
        gallery: [
          {
            src: "https://customer-iq3i0rogrtkv4z32.cloudflarestream.com/a3e6ef8520fae81831bbaa81c8058dc8/iframe?poster=https%3A%2F%2Fcustomer-iq3i0rogrtkv4z32.cloudflarestream.com%2Fa3e6ef8520fae81831bbaa81c8058dc8%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600&primaryColor=%23f09400",
            type: "video",
          },
          { src: "/projects/waymenu/imagem1.webp", type: "image" },
          { src: "/projects/waymenu/imagem2.webp", type: "image" },
          { src: "/projects/waymenu/imagem3.webp", type: "image" },
          { src: "/projects/waymenu/imagem4.webp", type: "image" },
          { src: "/projects/waymenu/imagem5.webp", type: "image" },
          { src: "/projects/waymenu/imagem6.webp", type: "image" },
          { src: "/projects/waymenu/imagem7.webp", type: "image" },
        ],
        developedFor: "Developed for: Grupo Sifat",
      },
      {
        id: "totem-builder",
        title: "Totem Menu Builder",
        description:
          "Totem Menu Builder is an interactive menu-building tool designed for self-service kiosks. The project emerged from the company’s need to enable simple menu...",
        detailDescription: dedent`
                    **Totem Menu Builder** is an interactive menu-building tool designed for self-service kiosks. The project emerged from the company’s need to enable simple menu customization while respecting each establishment’s unique requirements. The solution was developed within the existing ERP system, ensuring full integration and real-time reflection of user configurations.

                    ## Main Features:

                    - Drag-and-drop interface for ordering menus, products, and time-based display rules  
                    - Split-view panel with detailed visual settings: fonts, colors, borders, icons, and images  
                    - Instant preview of changes with a responsive layout and accurate kiosk rendering  
                    - Granular appearance control: number of items per row, background style, typography, and borders  
                    - Image upload and icon selection with real-time validation and feedback  

                    ## Technologies:

                    - **Frontend**: ReactJS, React-Grid-Layout, Framer Motion  
                    - **State Management**: Context API, custom hooks  
                    - **Upload & UI**: Custom modals, file validation, instant preview  

        `,
        image: "/projects/totem-builder/totem-builder-capa.webp",
        techStack: ["ReactJS", "React-Grid-Layout", "Framer Motion"],
        gallery: [
          {
            src: "https://customer-iq3i0rogrtkv4z32.cloudflarestream.com/1b57527f0be6d10b281960796d2ef501/iframe?poster=https%3A%2F%2Fcustomer-iq3i0rogrtkv4z32.cloudflarestream.com%2F1b57527f0be6d10b281960796d2ef501%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600&primaryColor=%23cb3434",
            type: "video",
          },
          { src: "/projects/totem-builder/imagem1.webp", type: "image" },
          { src: "/projects/totem-builder/imagem2.webp", type: "image" },
          { src: "/projects/totem-builder/imagem3.webp", type: "image" },
          { src: "/projects/totem-builder/imagem4.webp", type: "image" },
          { src: "/projects/totem-builder/imagem5.webp", type: "image" },
          { src: "/projects/totem-builder/imagem6.webp", type: "image" },
        ],
        developedFor: "Developed for: Grupo Sifat",
      },
      {
        id: "populacao",
        title: "App População",
        description:
          "App População is a citizen service app developed with React Native and published on the Play Store and App Store, allowing residents to submit public service requests directly...",
        detailDescription: dedent`
                    **App População** is a citizen service app developed with React Native and published on the Play Store and App Store, allowing residents to submit public service requests directly from their phone—quickly, intuitively, and with real-time tracking.

                    ## Main Features:

                    - Submission of public service requests (lighting, cleaning, maintenance, etc.) with address, description, and photo  
                    - Automatic location capture with GPS and integration with HERE Maps for precise request submission  
                    - List of user requests with real-time status updates  
                    - Push notifications with OneSignal for alerts on request status changes  
                    - Side-menu (drawer) navigation with sections for services, request history, and user account  
                    - Offline data storage with SQLite and session management with Async Storage  
                    - Image upload directly from the camera, with resizing and format validation  
                    - Integration with the Google Vision API for detection of pornographic and gore content  

                    ## Technologies:

                    - **Frontend**: React Native  
                    - **Notifications**: OneSignal  
                    - **Location**: GPS, HERE Maps  
                    - **Storage**: SQLite, Async Storage  
                    - **Upload & Media**: react-native-vision-camera, react-native-image-resizer  
                    - **Content Validation**: Google Vision API  
                    - **Others**: Axios, Moment.js, React Native Permissions  

        `,
        image: "/projects/populacao/populacao-capa.webp",
        techStack: ["React Native", "OneSignal", "react-native-vision-camera"],
        gallery: [
          {
            src: "https://customer-iq3i0rogrtkv4z32.cloudflarestream.com/5a7869e8a17e778307861bb5ed519d32/iframe?poster=https%3A%2F%2Fcustomer-iq3i0rogrtkv4z32.cloudflarestream.com%2F5a7869e8a17e778307861bb5ed519d32%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600&primaryColor=%23258757",
            type: "video",
          },
          { src: "/projects/populacao/imagem1.webp", type: "image" },
          { src: "/projects/populacao/imagem2.webp", type: "image" },
          { src: "/projects/populacao/imagem3.webp", type: "image" },
          { src: "/projects/populacao/imagem4.webp", type: "image" },
          { src: "/projects/populacao/imagem5.webp", type: "image" },
          { src: "/projects/populacao/imagem6.webp", type: "image" },
        ],
        developedFor:
          "Developed for: José Bonifácio Municipal Government, SP - BrasilApp",
      },
      {
        id: "gestao",
        title: "App Gestão",
        description:
          "App Gestão is the complementary application to App População, built with React Native and published on the Play Store. Designed exclusively for public administration...",
        detailDescription: dedent`
            **App Gestão** is the complementary application to **App População**, built with React Native and published on the Play Store. Designed exclusively for public administration, it allows city governments to manage service requests submitted by citizens, with advanced user-role control and optimized operational features.

            ## Main Features:

            - Flexible login options using CPF and password or QR Code scanning for fast access
            - Push notifications via OneSignal whenever a new request is assigned to a team member
            - User roles:
                - Supervisor: views all requests assigned to their team
                - Colaborador: an complete, transfer, or cancel requests based on assigned permissions
            - Request status management: Received, Completed, In Progress, Canceled, and Transferred
            - Batch completion with geolocation: during the completion of a request, the app suggests nearby requests for multi-selection and processing
            - Distance display between the worker and each request using GPS
            - Direct image uploads from the camera with automatic resizing and format validation
            - Offline mode: works without internet and syncs automatically when a connection is restored

            ## Technologies:

            - **Frontend**: React Native
            - **Notifications**: OneSignal
            - **Geolocation**: GPS, HERE Maps
            - **Storage**: SQLite, Async Storage
            - **Image Handling**: react-native-vision-camera, react-native-image-resizer            
            - **Others**: Axios, Moment.js, React Native Permissions
        `,
        image: "/projects/gestao/gestao-capa.webp",
        techStack: [
          "React Native",
          "OneSignal",
          "react-native-vision-camera",
          "SQLite",
        ],
        gallery: [
          {
            src: "https://customer-iq3i0rogrtkv4z32.cloudflarestream.com/96c3a7b76882494e0b8cde53c003294e/iframe?poster=https%3A%2F%2Fcustomer-iq3i0rogrtkv4z32.cloudflarestream.com%2F96c3a7b76882494e0b8cde53c003294e%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600&primaryColor=%232a507a",
            type: "video",
          },
          { src: "/projects/gestao/Imagem1.webp", type: "image" },
          { src: "/projects/gestao/Imagem2.webp", type: "image" },
          { src: "/projects/gestao/Imagem3.webp", type: "image" },
          { src: "/projects/gestao/Imagem4.webp", type: "image" },
          { src: "/projects/gestao/Imagem5.webp", type: "image" },
        ],
        developedFor:
          "Developed for: Prefeitura de José Bonifácio-SP - BrasilApp",
      },
      {
        id: "prefeitura-web",
        title: "Prefeitura web",
        description:
          "Prefeitura web is a management system developed for handling public requests received through the App População. Integrated with App População, it enables the city hall team to monitor...",
        detailDescription: dedent`
                    **Prefeitura Web** is a management system developed for handling public requests received through the **App População**. Integrated with **App População**, it enables the city hall team to monitor, process, and respond to the city’s needs with agility, security, and traceability.

                    ## Main Features:

                    - Comprehensive control panel for public request management with filters by status, category, date, and keyword                      
                    - Administrator and staff management with permission system
                    - Modern interface with statistical dashboard, dynamic charts with Chart.js, and period-based reporting  
                    - Detailed view of each request, including history, requester information, image, and subcategory  
                    - Creation of predefined messages to facilitate communication with citizens  
                    - Two-factor authentication using Google Authenticator and JWT tokens for enhanced security  
                    - PDF report generation with MPDF and automatic email delivery with PHPMailer  
                    - Push notifications to App População with OneSignal API integration  

                    ## Technologies:

                    - **Frontend**: HTML, CSS, JavaScript  
                    - **Backend**: PHP, CodeIgniter  
                    - **Security**: JWT, Google Authenticator  
                    - **Charts**: Chart.js  
                    - **Notifications**: OneSignal  
                    - **Reporting**: MPDF  
                    - **Database**: MySQL            
        `,
        image: "/projects/prefeitura/prefeitura-capa.webp",
        techStack: ["PHP", "CodeIgniter", "MPDF", "OneSignal", "MySQL"],
        gallery: [
          {
            src: "https://customer-iq3i0rogrtkv4z32.cloudflarestream.com/25769f022f519629768865793c64dd86/iframe?poster=https%3A%2F%2Fcustomer-iq3i0rogrtkv4z32.cloudflarestream.com%2F25769f022f519629768865793c64dd86%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600&primaryColor=%230665d0",
            type: "video",
          },
          { src: "/projects/prefeitura/imagem1.webp", type: "image" },
          { src: "/projects/prefeitura/imagem2.webp", type: "image" },
          { src: "/projects/prefeitura/imagem3.webp", type: "image" },
          { src: "/projects/prefeitura/imagem4.webp", type: "image" },
          { src: "/projects/prefeitura/imagem5.webp", type: "image" },
          { src: "/projects/prefeitura/imagem6.webp", type: "image" },
        ],
        developedFor:
          "Developed for the José Bonifácio Municipal Government, SP - BrasilApp",
      },
      {
        id: "dashboard-dinamico",
        title: "Dashboard Dinâmico",
        description:
          "Dashboard Dinâmico is a custom data visualization module developed within the client’s ERP system, allowing each user to build their own panel with metrics, charts...",
        detailDescription: dedent`
                    **Dynamic Dashboard** is a custom data visualization module developed within the client’s ERP system, allowing each user to build their own panel with metrics, charts, and tables in real time—tailored to their operational and strategic needs.

                    ## Main Features:

                    - Drag-and-drop interface for selecting, organizing, and resizing cards and charts  
                    - Configurable cards supporting various content types: simple charts, bar, line, pie charts, and static text  
                    - Chart.js library for rendering interactive charts with real-time updates  
                    - Advanced filters by time period, data type, and custom parameters with dynamic API-driven updates  
                    - Creation of multiple dashboards adapted to areas such as billing, finance and products
                    - Performance optimizations with module lazy loading and component memoization  

                    ## Technologies:

                    - **Frontend**: ReactJS, React-Grid-Layout, Chart.js, Framer Motion  
                    - **State Management**: Context API, custom hooks  
                    - **Performance**: Lazy loading, component memoization  

        `,
        image: "/projects/dashboard/dashboard-capa.webp",
        techStack: [
          "ReactJS",
          "React-Grid-Layout",
          "Chart.js",
          "Framer Motion",
        ],
        gallery: [
          {
            src: "https://customer-iq3i0rogrtkv4z32.cloudflarestream.com/0310e98d0c99c7092ea54f33b56104e2/iframe?poster=https%3A%2F%2Fcustomer-iq3i0rogrtkv4z32.cloudflarestream.com%2F0310e98d0c99c7092ea54f33b56104e2%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600&primaryColor=%2310405c",
            type: "video",
          },
          { src: "/projects/dashboard/imagem1.webp", type: "image" },
          { src: "/projects/dashboard/imagem2.webp", type: "image" },
          { src: "/projects/dashboard/imagem3.webp", type: "image" },
          { src: "/projects/dashboard/imagem4.webp", type: "image" },
        ],
        developedFor: "Developed for: Grupo Sifat",
      },
      {
        id: "gel",
        title: "Admin Studio",
        description:
          "Admin Studio – GEL / UNESP is a comprehensive platform for managing academic seminars and project presentations, built with PHP and MySQL. Designed for both organizers and attendees...",
        detailDescription: dedent`
                    **Admin Studio – GEL / UNESP** is a comprehensive platform for managing academic seminars and project presentations, built with PHP and MySQL. Designed for both organizers and attendees, it provides robust features for handling registrations, paper submissions, financial management, and user communications.

                    ## Main Features:

                    - Administrative panel for creating and managing seminars and project presentations, including formats, institutions, categories, scheduling, and reports  
                    - User management with advanced filters by status, category, role, membership year, nationality, and participation status  
                    - Registration system with abstract and project submission review, co-author/project collaborator submission, document download, and status tracking  
                    - PagSeguro integration via transparent checkout with automatic payment confirmation  
                    - Generation of invoices, receipts, and vouchers in PDF format using MPDF  
                    - User portal with dashboard for profile updates, project uploads, payment confirmations, and history  
                    - Publication and banner editor for promoting events and projects on the official website  
                    - Over 2,000 registrations and **12,000** users registered, providing real-time insights into engagement and reach  

                    ## Technologies:

                    - **Frontend**: HTML, CSS, JavaScript  
                    - **Backend**: PHP, CodeIgniter  
                    - **Payments**: PagSeguro integration (transparent checkout with automatic confirmation)  
                    - **Reporting**: MPDF  
                    - **Database**: MySQL  
                    - **Dashboards**: Admin and User  
        `,
        image: "/projects/gel/gel-capa.webp",
        techStack: ["PHP", "CodeIgniter", "MPDF", "PagSeguro", "MySQL"],
        gallery: [
          { src: "/projects/gel/imagem1.webp", type: "image" },
          { src: "/projects/gel/imagem2.webp", type: "image" },
          { src: "/projects/gel/imagem3.webp", type: "image" },
          { src: "/projects/gel/imagem4.webp", type: "image" },
          { src: "/projects/gel/imagem5.webp", type: "image" },
          { src: "/projects/gel/imagem6.webp", type: "image" },
          { src: "/projects/gel/imagem7.webp", type: "image" },
        ],
        developedFor:
          "Developed for: GEL - UNESP – São Paulo State University - StudioA",
      },
      {
        id: "wayservice",
        title: "Wayservice",
        description:
          "Wayservice is a Flutter application for Android and Windows, designed to serve as the primary software for self-service kiosks. It faithfully and interactively renders...",
        detailDescription: dedent`
                        **Wayservice** is a Flutter application for Android and Windows, designed to serve as the primary software for self-service kiosks. It faithfully and interactively renders the personalized menus created in **Totem Menu Builder**, ensuring a smooth, modern, and fully customizable experience for the end user.

                        ## Main Features:

                        - Faithful rendering of the menu created in **Totem Menu Builder**, with support for custom layouts, colors, and styles
                        - Full support for products with add-ons, notes, and customization options  
                        - Integrated cart with item, quantity, and total management  
                        - Smooth animations with Lottie and visual transitions using flutter_animate  
                        - Media support for products: images and videos played via video_player  
                        - Touch-optimized interface with responsive layout and intuitive navigation  
                        - Efficient state management with GetX  

                        ## Technologies:

                        - **Framework**: Flutter  
                        - **Platforms**: Android and Windows  
                        - **State Management**: GetX  
                        - **UI & Animations**: Lottie, flutter_animate, font_awesome_flutter  
                        - **Media**: video_player (supports images and videos in product listings)  
                        - **Other**: Custom components and direct integration with menus generated by Totem Menu Builder  
        `,
        image: "/projects/wayservice/wayservice-capa.webp",
        techStack: ["Flutter", "GetX", "Lottie", "FontAwesome", "video_player"],
        gallery: [
          {
            src: "https://customer-iq3i0rogrtkv4z32.cloudflarestream.com/973f993d66dc6aaaf6ca2236cdd67bfb/iframe?poster=https%3A%2F%2Fcustomer-iq3i0rogrtkv4z32.cloudflarestream.com%2F973f993d66dc6aaaf6ca2236cdd67bfb%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600&primaryColor=%23904747",
            type: "video",
          },
          { src: "/projects/wayservice/imagem1.webp", type: "image" },
          { src: "/projects/wayservice/imagem2.webp", type: "image" },
          { src: "/projects/wayservice/imagem3.webp", type: "image" },
          { src: "/projects/wayservice/imagem4.webp", type: "image" },
          { src: "/projects/wayservice/imagem5.webp", type: "image" },
          { src: "/projects/wayservice/imagem6.webp", type: "image" },
          { src: "/projects/wayservice/imagem7.webp", type: "image" },
        ],
        developedFor: "Developed for: Grupo Sifat",
      },
    ],
  },
  footer: {
    title: "Let's talk?",
    subtitle:
      "I'm always open to new opportunities and collaborations. If you have an idea, a project, or just want to chat, feel free to reach out!",
    email: "📧 Email: gustavohnmarques@gmail.com",
    whatsapp: "📱 WhatsApp: +55 17 999164-0256",
  },
} as const;
