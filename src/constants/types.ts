type BookResponse = {
    book: {
        title: string;
        author: string;
        isbn: string;
    }
    stock: {
        quantity: string;
        price: string;
    }
}

type ApiBookResponse = {
    data: BookResponse[],
    status: number
}

type ApiConfig = {
    method?: string;
    url: string;
    authorName: string;
    limit: string;
    format: string;
}

type Format = {
    json: string;
    xml: string;
}

type Book = {
    title: string;
    author: string;
    isbn: string;
    quantity: string;
    price: string;
}

export {BookResponse, ApiBookResponse, ApiConfig, Format, Book}