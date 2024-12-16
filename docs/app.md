# Nome do app
podcast Maneger

### Domínio
Podcasts feitos em vídeos 

### Decrição 
Um app ao estilo Netflix, onde posssa centralizar diferentes episódeos podcasts separados por categorias

### Funcionalidades
- listar os podcasts em sessões de categorias
    -[saude, fitness, mentalidade, humor]
- filtrar episódeos por nome de podcast     

## Como

### Feature:
- listar os podcasts em sessões de categorias

### Como vou implementar:
vou retornar em uma api rest (json) o nome do podcast, nome do epísodeo, imagem de capa, link, categoria
 
 "js
 [
    {
        podcastName: "Podpah",
        episodeo: "DEYVERSON - Podpah #864",
        videoId: "5D0JXXysDxI",
        img: "https://i.ytimg.com/vi/5D0JXXysDxI/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAgl-MR3lx8nEGiyCg0AJnzctsxzg",
        link: "https://www.youtube.com/live/5D0JXXysDxI?si=wP-xt3dNSxw6yF34",
        categoria: ["entretenimento", "futbol"]
    },
    {
        podcastName: "Podpah",
        episodeo: "DEYVERSON - Podpah #864",
        videoId: "5D0JXXysDxI",
        img: "https://i.ytimg.com/vi/5D0JXXysDxI/maxresdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAgl-MR3lx8nEGiyCg0AJnzctsxzg",
        link: "https://www.youtube.com/live/5D0JXXysDxI?si=wP-xt3dNSxw6yF34",
        categoria: ["entretenimento", "futbol"]
    }
 ]
 
 "