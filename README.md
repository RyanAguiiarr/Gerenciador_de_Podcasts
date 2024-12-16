# **Podcast Manager**  

## 📖 **Descrição**  
O **Podcast Manager** é um aplicativo inspirado no estilo Netflix, que centraliza diferentes episódios de podcasts em vídeo organizados por categorias. Ele permite aos usuários explorar e filtrar episódios de maneira fácil e intuitiva.  

## 🌟 **Funcionalidades**  
### **1. Listar podcasts em sessões de categorias**  
- Categorias disponíveis:  
  - Saúde  
  - Fitness  
  - Mentalidade  
  - Humor  

### **2. Filtrar episódios por nome do podcast**  
- Pesquise episódios específicos por meio do nome do podcast.  

### **Como funciona**  
- A aplicação utiliza uma **API REST** para retornar informações no formato JSON, incluindo:  
  - Nome do podcast  
  - Nome do episódio  
  - Imagem de capa  
  - Link do vídeo  
  - Categorias  

Exemplo de resposta:  
```json  
[
  {
    "podcastName": "Podpah",
    "episodeo": "DEYVERSON - Podpah #864",
    "videoId": "5D0JXXysDxI",
    "img": "https://i.ytimg.com/vi/5D0JXXysDxI/hqdefault.jpg",
    "link": "https://www.youtube.com/live/5D0JXXysDxI",
    "categoria": ["entretenimento", "futbol"]
  },
  {
    "podcastName": "Podpah",
    "episodeo": "DEYVERSON - Podpah #864",
    "videoId": "5D0JXXysDxI",
    "img": "https://i.ytimg.com/vi/5D0JXXysDxI/maxresdefault.jpg",
    "link": "https://www.youtube.com/live/5D0JXXysDxI",
    "categoria": ["entretenimento", "futbol"]
  }
]
```  

---

## 🛠️ **Como começar**  

### **1. Pré-requisitos**  
- Node.js (v16 ou superior)  
- NPM (Node Package Manager)  

### **2. Instalar dependências**  
Execute o comando:  
```bash  
npm install  
```  

### **3. Configurar o servidor**  
Edite o arquivo `.env` para definir a porta do servidor (padrão: `3333`):  
```env  
PORT=3333  
```  

### **4. Executar o servidor**  
Para iniciar o servidor:  
```bash  
npm start  
```  

O servidor estará disponível em:  
```  
http://localhost:3333  
```  

---

## 📂 **Rotas da API**  

### **1. Listar podcasts por categorias**  
**Rota:**  
```  
GET /api/list  
```  
**Descrição:**  
Retorna uma lista de episódios de podcasts organizados por categorias.  

### **2. Filtrar episódios por nome do podcast**  
**Rota:**  
```  
GET /api/episodeos?p={nome_do_podcast}  
```  
**Parâmetros:**  
- `p`: Nome do podcast para filtrar os episódios.  

Exemplo de requisição:  
```  
GET /api/episodeos?p=Podpah  
```  

---

## 🧩 **Estrutura do código**  
Aqui está um resumo de como o código está estruturado:  

### **Servidor principal**  
```typescript  
import { getFileEpisodes, getListEpisodeos } from './controllers/podcasts-controller';  
import * as http from 'http';  

export const app = async (req: http.IncomingMessage, res: http.ServerResponse) => {  
  const [baseURL, queryString] = req.url?.split("?") ?? ["", ""];  

  if (req.method === "GET" && baseURL === "/api/list") {  
    await getListEpisodeos(req, res);  
  }  

  if (req.method === "GET" && baseURL === "/api/episodeos") {  
    await getFileEpisodes(req, res);  
  }  
};  
```  

### **Controladores**  
Os controladores são responsáveis por manipular os dados e responder às requisições da API:  
- **`getListEpisodeos`**: Retorna todos os episódios categorizados.  
- **`getFileEpisodes`**: Filtra episódios com base no nome do podcast.  

---

## 📜 **Licença**  
Este projeto está licenciado sob a licença [MIT](./LICENSE).  
