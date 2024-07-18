export interface Response<T = unknown> {
    success: any;
    result: T;
    pagination?: Pagination;
}

export interface Pagination {
    totalCount: number;
}

export interface ErrorResponse {
    success: boolean;
    error: {
        message: string;
        code?: number;
        details?: string;
        validationErrors?: Record<string, string[]>;
    };
}
