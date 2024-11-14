export interface Article {
    id: number,
    title: string, 
    content: string, 
    createdAt: Date,
    image: string,
    likeCount: number,
    isPublished: boolean,
    categoryName: string,
    isLiked: boolean,
  }
  