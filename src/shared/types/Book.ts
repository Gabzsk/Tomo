export type BookStatus = "wishlist" | "to-read" | "reading" | "completed";

export type Book = {
  id: string; // ID unico
  color: string;
  title: string;
  author: string;
  coverUrl?: string; // URL da imagem de capa (opcional por enquanto)
  status: BookStatus; // permite filtros por lidos, em andamento, desejados.
  rating?: number; // de 1 a 5 estrelas (opcional)
  progress?: number; // 0 a 100%, para mostrar barras de progresso
  review?: string; // comentário pessoal
  tags?: string[]; // ex: ["fantasia", "ficção", "2024"], permite filtros personalizados depois.
  createdAt: string; // ISO date para ordenação, útil para ordenar livros adicionados recentemente.
};
