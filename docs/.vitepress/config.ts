import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Caique de Camargo",
  description: "Um blog sobre tecnologia, programação e vida pessoal.",

  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Blog", link: "/blog/" },
      { text: "Playground", link: "/playground/" },
    ],

    sidebar: {
      "/blog/": [
        {
          text: "Outra Página",
          children: [
            {
              text: "Outra página",
              link: "/blog/outrapagina/",
            },
          ],
        },
      ],
    },
  },
});
