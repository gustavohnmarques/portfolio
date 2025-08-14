import dedent from "dedent";

export const pt = {
  header: {
    home: "Início",
    projects: "Projetos",
    contactMe: "Entre em contato",
  },
  hero: {
    title: "Criador de Soluções Fullstack",
    subtitle:
      "Com mais de 7 anos de experiência entregando 🚀 soluções escaláveis e performáticas para 📱 web e mobile, com forte atuação como freelancer em projetos diversos.",
    buttons: {
      viewProjects: "Ver projetos",
      contactMe: "Fale comigo",
    },
  },
  aboutMe: {
    codename: "GustavoMarques",
    role: "Criador de Soluções Fullstack",
    stack: {
      languages: ["JavaScript", "TypeScript", "PHP"],
      frontend: ["ReactJS", "React Native", "Flutter", "Vite"],
      backend: ["Node.js", "Docker", "MySQL", "Redis"],
      tools: ["GitHub", "Firebase", "OneSignal", "Linux", "Nginx"],
    },
    traits: [
      "guerreiro freelancer",
      "viciado em animações",
      "defensor do modo escuro",
      "integrador supremo de APIs",
      "ninja do terminal Linux",
      "quebrador de galhos profissional",
    ],
    availability: "Aberto para novos desafios",
  },
  projects: {
    title: "Aplicações entregues para uso comercial",
    description:
      "Esses são projetos reais desenvolvidos sob medida para empresas e parceiros, com foco em atender necessidades específicas e entregar valor com tecnologia.",
    projects: [
      {
        id: "integramente",
        title: "IntegraMente",
        description:
          "IntegraMente é um método de análise do perfil psicológico dos colaboradores de uma empresa com o objetivo de identificar as potencialidades...",
        detailDescription: dedent`
            **IntegraMente** é um método de análise do perfil psicológico dos colaboradores de uma empresa com o objetivo de identificar as potencialidades e os desafios dos indivíduos e auxiliar em seu desenvolvimento pessoal e profissional.

            ## Características principais:

            - Customização total da interface com paleta de cores e design do cliente
            - Formulários avançados com React Hook Form e validação via Yup  
            - Dashboards interativos construídos com ApexCharts
            - Editor de texto rico com Toast UI React Editor

            ## Tecnologias utilizadas:

            - **Frontend**: Vite, TypeScript, React, MUI
            - **Gráficos**: ApexCharts
            - **Formulários**: React Hook Form, Yup
            - **Estilização**: Emotion, ThemeProvider
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
        developedFor: "Desenvolvido para: IntegraMente - StudioA",
      },
      {
        id: "waymenu",
        title: "Waymenu",
        description:
          "Waymenu é uma plataforma de cardápio digital responsivo desenvolvida para restaurantes, lanchonetes e estabelecimentos...",
        detailDescription: dedent`
            **WayMenu** é uma plataforma de cardápio digital responsivo desenvolvida para restaurantes, lanchonetes e estabelecimentos que desejam oferecer uma experiência moderna e personalizada aos seus clientes. O sistema permite montagem de pedidos interativos, autenticação segura e customização visual conforme a identidade do cliente.

            ## Características principais:

            - Montagem interativa de pizzas com divisão dinâmica de fatias em SVG (até 4 partes) e animação via Framer Motion
            - Gerenciamento de cardápio, carrinho e sessão do usuário com Context API e hooks customizados
            - Formulários com validação via React Hook Form e Yup, incluindo orientação UX para campos obrigatórios e limites de seleção
            - Feedback de ações com React Toastify e tratamento de erros em chamadas HTTP com Axios

            ## Tecnologias utilizadas:

            - **Frontend**: Vite, TypeScript, React, MUI
            - **Gerenciamento de estado**: Context API, hooks customizados            
            - **Formulários**: React Hook Form, Yup
            - **Estilização**: Emotion, ThemeProvider
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
        developedFor: "Desenvolvido para: Grupo Sifat",
      },
      {
        id: "totem-builder",
        title: "Totem Menu Builder",
        description:
          "Totem Menu Builder é uma ferramenta de construção de cardápios interativos voltada para totens de autoatendimento. O projeto nasceu de uma necessidade...",
        detailDescription: dedent`
            **Totem Menu Builder** é uma ferramenta de construção de cardápios interativos voltada para totens de autoatendimento. O projeto nasceu de uma necessidade da empresa de permitir a customização dos cardápios de maneira simples, respeitando as particularidades de cada estabelecimento. A solução foi desenvolvida dentro do sistema ERP já existente, garantindo integração total e refletindo em tempo real as configurações feitas pelos usuários.

            ## Características principais:

            - Interface drag & drop para ordenação de menus, produtos e regras de exibição por horário
            - Painel split-view com configurações visuais detalhadas: fontes, cores, bordas, ícones e imagens
            - Pré-visualização instantânea das alterações com layout responsivo e renderização fiel ao totem
            - Controle granular da aparência: número de produtos por linha, estilo de fundo, tipografia e bordas
            - Upload de imagens e escolha de ícones via modais com validação e feedback em tempo real

            ## Tecnologias utilizadas:

            - **Frontend**: ReactJS, React-Grid-Layout, Framer Motion
            - **Gerenciamento de estado**: Context API, hooks customizados                        
            - **Upload & UI**: Modais customizados, validação de arquivos, preview instantâneo
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
        developedFor: "Desenvolvido para: Grupo Sifat",
      },
      {
        id: "populacao",
        title: "App População",
        description:
          "App População é um aplicativo de atendimento ao cidadão desenvolvido com React Native e publicado na Play Store e App Store, permitindo que moradores realizem solicitações...",
        detailDescription: dedent`
            **App População** é um aplicativo de atendimento ao cidadão desenvolvido com React Native e publicado na Play Store e App Store, permitindo que moradores realizem solicitações de serviços públicos diretamente pelo celular, de forma rápida, intuitiva e com acompanhamento em tempo real.

            ## Características principais:

            - Envio de solicitações de serviços públicos (iluminação, limpeza, manutenção, entre outros), com endereço, descrição e foto
            - Captura automática de localização via GPS e integração com mapas HERE para precisão no envio da solicitação
            - Lista de solicitações realizadas pelo usuário, com status atualizado em tempo real
            - Notificações push com OneSignal para alertas de mudanças no status das solicitações
            - Navegação por menu lateral (drawer), com seções de serviços, histórico de solicitações e conta do usuário
            - Armazenamento de dados offline com SQLite e controle de sessão com Async Storage
            - Upload de imagens direto da câmera, com redimensionamento e validação de formatos
            - Integração com a API do Google Vision para detecção de conteúdo pornográfico e gore

            ## Tecnologias utilizadas:

            - **Frontend**: React Native
            - **Notificações**: OneSignal
            - **Localização**: GPS, HERE Maps
            - **Armazenamento**: SQLite, Async Storage
            - **Upload & Imagem**: react-native-vision-camera, react-native-image-resizer
            - **Validação de Conteúdo**: Google Vision API
            - **Outros**: Axios, Moment.js, React Native Permissions
        `,
        image: "/projects/populacao/populacao-capa.webp",
        techStack: [
          "React Native",
          "OneSignal",
          "react-native-vision-camera",
          "SQLite",
        ],
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
          "Desenvolvido para: Prefeitura de José Bonifácio-SP - BrasilApp",
      },
      {
        id: "gestao",
        title: "App Gestão",
        description:
          "App Gestão é o aplicativo complementar ao App População, desenvolvido com React Native e publicado na Play Store. Voltado para uso exclusivo da administração pública...",
        detailDescription: dedent`
            **App Gestão** é o aplicativo complementar ao App População, desenvolvido com React Native e publicado na Play Store. Voltado para uso exclusivo da administração pública, ele permite que a prefeitura gerencie as solicitações de serviços feitas pelos cidadãos, com controle avançado por tipo de usuário e funcionalidades operacionais otimizadas.

            ## Características principais:

            - Login flexível por CPF e senha ou leitura de QR Code para acesso rápido
            - Notificações push via OneSignal assim que uma nova solicitação é encaminhada ao colaborador
            - Dois perfis de usuário:
                - Supervisor: pode visualizar as solicitações de todos os seus colaboradores
                - Colaborador: pode finalizar, transferir e/ou cancelar solicitações, conforme permissões definidas
            - Gerenciamento de solicitações por status: Recebidas, Finalizadas, Em processamento, Canceladas e Transferidas
            - Finalização em lote com geolocalização: durante a finalização de uma solicitação, o app exibe outras solicitações próximas para seleção múltipla
            - Exibição da distância entre o colaborador e cada solicitação com base em GPS
            - Upload de imagens direto da câmera, com redimensionamento e validação de formatos
            - Funcionalidade offline: permite uso sem conexão e sincroniza automaticamente quando a internet estiver disponível

            ## Tecnologias utilizadas:

            - **Frontend**: React Native
            - **Notificações**: OneSignal
            - **Localização**: GPS, HERE Maps
            - **Armazenamento**: SQLite, Async Storage
            - **Upload & Imagem**: react-native-vision-camera, react-native-image-resizer            
            - **Outros**: Axios, Moment.js, React Native Permissions
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
          "Desenvolvido para: Prefeitura de José Bonifácio-SP - BrasilApp",
      },
      {
        id: "prefeitura-web",
        title: "Prefeitura web",
        description:
          "Prefeitura web é um sistema de gestão desenvolvido para administração de solicitações públicas recebidas via aplicativo da população. Integrado ao App População...",
        detailDescription: dedent`
            **Prefeitura web** é um sistema de gestão desenvolvido para administração de solicitações públicas recebidas via aplicativo da população. Integrado ao **App População**, permite à equipe da prefeitura acompanhar, tratar e responder às demandas da cidade com agilidade, segurança e rastreabilidade.

            ## Características principais:

            - Painel completo de controle de solicitações públicas com filtros por status, categoria, data e palavra-chave
            - Gestão de administradores e colaboradores com definição de permissões por módulo
            - Interface moderna com painel estatístico, gráficos dinâmicos com Chart.js e relatórios por período
            - Visualização detalhada de cada solicitação, com histórico, dados do solicitante, imagem e subcategoria
            - Criação de mensagens prontas para facilitar comunicação com a população
            - Autenticação em duas etapas com Google Authenticator e tokens JWT para segurança avançada
            - Geração de relatórios em PDF com MPDF e envio automático de e-mails com PHPMailer
            - Envio de notificações push para o App População via integração com a API do OneSignal

            ## Tecnologias utilizadas:

            - **Frontend**: HTML, CSS, JavaScript
            - **Backend**: PHP, CI (CodeIgniter)
            - **Segurança**: JWT, Google Authenticator
            - **Gráficos**: Chart.js
            - **Notificações**: OneSignal
            - **Relatórios**: MPDF
            - **Banco de dados**: MySQL            
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
          "Desenvolvido para: Prefeitura de José Bonifácio-SP - BrasilApp",
      },
      {
        id: "dashboard-dinamico",
        title: "Dashboard Dinâmico",
        description:
          "Dashboard Dinâmico é um módulo de visualização de dados personalizado desenvolvido dentro do ERP do cliente, permitindo que cada usuário monte seu próprio painel...",
        detailDescription: dedent`
            **Dashboard Dinâmico** é um módulo de visualização de dados personalizado desenvolvido dentro do ERP do cliente, permitindo que cada usuário monte seu próprio painel com indicadores, gráficos e tabelas em tempo real, de acordo com suas necessidades operacionais e estratégicas.

            ## Características principais:

            - Interface drag & drop para seleção, organização e redimensionamento de cards e gráficos
            - Cards configuráveis com diferentes tipos de conteúdo: gráficos simples, barras, linhas, pizza e textos estáticos
            - Biblioteca Chart.js para renderização de gráficos interativos com atualizações em tempo real
            - Filtros avançados por período, tipo de dado e parâmetros personalizados com atualização dinâmica via API
            - Criação de múltiplos dashboards adaptados a áreas como faturamento, financeiro, produtos e filiais
            - Otimizações de performance com lazy loading de módulos e memorização de componentes de gráficos

            ## Tecnologias utilizadas:

            - **Frontend**: ReactJS, React-Grid-Layout, Chart.js, Framer Motion
            - **Gerenciamento de estado**: Context API, hooks customizados                        
            - **Performance**: Lazy loading, memoização de componentes
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
        developedFor: "Desenvolvido para: Grupo Sifat",
      },
      {
        id: "gel",
        title: "Admin Studio",
        description:
          "Admin Studio – GEL / UNESP é um sistema completo para gestão de seminários acadêmicos, desenvolvido em PHP com MySQL. Voltado tanto para organizadores quanto para participantes...",
        detailDescription: dedent`
            **Admin Studio – GEL / UNESP** é um sistema completo para gestão de seminários acadêmicos, desenvolvido em PHP com MySQL. Voltado tanto para organizadores quanto para participantes, ele oferece recursos robustos para gerenciamento de inscrições, submissões de trabalhos, controle financeiro e comunicação com usuários.

            ## Características principais:

            - Painel administrativo para criação e gerenciamento de seminários, incluindo modalidades, instituições, categorias, programação e relatórios
            - Gestão de usuários com filtros avançados por status, categoria, atuação, anuidade, nacionalidade e situação
            - Sistema de inscrições com avaliação de trabalhos, submissão de coautores, download de documentos e controle de status
            - Integração com PagSeguro via checkout transparente com retorno automático de pagamento
            - Geração de boletos, recibos e comprovantes em PDF com MPDF
            - Portal do usuário com painel de controle para atualização de dados, envio de trabalhos, comprovantes, recibos e histórico
            - Editor de publicações e banners para divulgação de eventos no site oficial
            - Mais de 2.000 inscrições e **12.000** usuários cadastrados, oferecendo insights em tempo real sobre engajamento e alcance dos eventos

            ## Tecnologias utilizadas:

            - **Frontend**: HTML, CSS, JavaScript
            - **Backend**: PHP, CI (CodeIgniter)
            - **Pagamentos**:  Integração com PagSeguro (checkout transparente com resposta automática)            
            - **Relatórios**: MPDF
            - **Banco de dados**: MySQL      
            - **Painéis**: Admin e Usuário
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
        developedFor: "Desenvolvido para: GEL / UNESP – StudioA",
      },
      {
        id: "wayservice",
        title: "Wayservice",
        description:
          "Wayservice é uma aplicação desenvolvida em Flutter para Android e Windows, criada para atuar como o software principal dos totens de autoatendimento...",
        detailDescription: dedent`
            **Wayservice** é uma aplicação desenvolvida em Flutter para Android e Windows, criada para atuar como o software principal dos totens de autoatendimento. Ela é responsável por reproduzir de forma fiel e interativa os cardápios personalizados construídos no **Totem Menu Builder**, garantindo uma experiência fluida, moderna e totalmente customizável para o cliente final.

            ## Características principais:

            - Renderização fiel do cardápio criado no **Totem Menu Builder**, com suporte a layouts, cores e estilos personalizados
            - Suporte completo a produtos com adicionais, observações e opções de customização
            - Carrinho integrado com controle de itens, quantidades e totais
            - Animações suaves com Lottie e transições visuais usando flutter_animate
            - Suporte a mídias nos produtos: imagens e vídeos com reprodução via video_player
            - Interface otimizada para touch, com layout responsivo e navegação intuitiva
            - Gerenciamento eficiente de estado com GetX            

            ## Tecnologias utilizadas:

            - **Framework**: Flutter
            - **Plataformas**: Android e Windows
            - **Gerenciamento de estado**:  GetX
            - **UI e Animações**: Lottie, flutter_animate, font_awesome_flutter
            - **Mídias**: video_player (suporte a imagens e vídeos nos produtos)      
            - **Outros**: Componentes customizados e integração direta com o cardápio gerado via Totem Menu Builder
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
        developedFor: "Desenvolvido para: Grupo Sifat",
      },
    ],
  },
  personalProjects: {
    title: "Projetos pessoais",
    projects: [
      {
        id: "valorBitcoin",
        title: "Valor do Bitcoin",
        description:
          "Acompanhe o valor do Bitcoin e de mais de 100 criptomoedas em tempo quase real nas principais corretoras brasileiras...",
        detailDescription: dedent`
            Acompanhe o valor do Bitcoin e de mais de 100 criptomoedas em tempo quase real nas principais corretoras brasileiras (ex.: Brasil Bitcoin, Bitnuvem, NovaDAX, OKX, Ripio, Coinext, Mercado Bitcoin, Bitget). O app consolida preços em BRL, volume e horário da última atualização em um único lugar, permitindo comparar rapidamente onde está o melhor preço para comprar ou vender. Além disso, oferece alertas personalizáveis por preço ou variação percentual, com a opção de escolher em quais corretoras o alerta deve ser monitorado.

            ## Características principais:

            - Agregador multi-corretora: consulta e exibe cotações por exchange, com preço, volume e tempo da última atualização.
            - Alertas inteligentes: crie alertas por preço-alvo ou % de variação (subir/cair) e selecione exatamente quais corretoras devem acionar o alerta.
            - Notificações push quando um alerta é atingido.        

            ## Tecnologias utilizadas:

            - **Framework**: React Native 
            - **Navegação**: react-navigation
            - **Armazenamento local**:  react-native-mmkv
            - **Formulários & validação**: react-hook-form, yup
            - **Notificações**: react-native-onesignal  
            - **Outros**: react-native-vector-icons, react-native-bootsplash, @react-native-community/checkbox

            ## Backend e arquitetura

            -  **Framework**: Node.js + Express com Redis para cache e banco relacional para persistência.
            -  **Coleta de dados**: Jobs consultam periodicamente as APIs das corretoras brasileiras, normalizam as cotações em BRL e salvam no banco.
            -  **Cache (Redis)**: Ao acessar o endpoint de buscar o último preço do BTC em todas as corretoras, o backend primeiro tenta o Redis, se houver cache válido, retorna em baixa latência, senão, consulta o banco, grava no Redis e responde.
            -  **API REST**: Endpoints para listagem de preços por cripto/exchange e gestão de alertas (criar, listar, remover).


            ## Publicação              
              - Link para playstore: [Play Store](https://play.google.com/store/apps/details?id=com.marquestech.valorbitcoin)
              - Link para appstore: [App Store](https://apps.apple.com/us/app/valor-bitcoin/id6742030570)
              - Link para codigo fonte: [Código Fonte](https://github.com/gustavohnmarques/valor-do-bitcoin-app-rebuild)

        `,
        image: "/projects/valorBitcoin/valor-bitcoin-capa.webp",
        techStack: ["React Native", "ExpressJS", "OneSignal", "Redis"],
        gallery: [
          {
            src: "https://customer-iq3i0rogrtkv4z32.cloudflarestream.com/d157a161a04452b37492cddaa283e5f6/iframe?poster=https%3A%2F%2Fcustomer-iq3i0rogrtkv4z32.cloudflarestream.com%2Fd157a161a04452b37492cddaa283e5f6%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600",
            type: "video",
          },
          { src: "/projects/valorBitcoin/imagem1.webp", type: "image" },
          { src: "/projects/valorBitcoin/imagem2.webp", type: "image" },
          { src: "/projects/valorBitcoin/imagem3.webp", type: "image" },
          { src: "/projects/valorBitcoin/imagem4.webp", type: "image" },
        ],
        developedFor: "Projeto pessoal",
      },
    ],
  },
  footer: {
    title: "Vamos conversar?",
    subtitle:
      "Estou sempre aberto a novas oportunidades e colaborações. Se você tem uma ideia, projeto ou apenas quer trocar uma ideia, sinta-se à vontade para entrar em contato!",
    email: "📧 Email: gustavohnmarques@gmail.com",
    whatsapp: "📱 WhatsApp: (17) 9 99164-0256",
  },
} as const;
