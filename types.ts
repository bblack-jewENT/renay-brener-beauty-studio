
export interface Service {
  id: string;
  category: 'Hair' | 'Nails' | 'Lashes';
  title: string;
  description: string;
  price: string;
  duration: string;
  image: string;
}

export interface PortfolioItem {
  id: string;
  category: string;
  image: string;
  title: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
