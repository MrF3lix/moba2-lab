export type QuoteResponse = {
    count: number
    total: number
    _embedded: {
        quotes: Quote[]
    }
    _links: PaginationLinks
}

export type Quote = {
    appeared_at: string
    created_at: string
    quote_id: string
    tags: string[]
    updated_at: string
    value: string
    _embedded: {
        author: Author[]
        source: Source[]
    }
    _links: {
        self: Link
    }
}

export type Author = {
    author_id: string
    bio: any
    created_at: string
    name: string
    slug: string
    updated_at: string
    _links: {
        self: Link
    }
}

export interface Link {
    href: string
}

export type Source = {
    created_at: string
    filename: any
    quote_source_id: string
    remarks: any
    updated_at: string
    url: string
    _links: {
        self: Link
    }
}

export interface PaginationLinks {
    self: Link
    first: Link
    prev: Link
    next: Link
    last: Link
}
