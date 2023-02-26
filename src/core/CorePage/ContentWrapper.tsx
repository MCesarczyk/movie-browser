import { ReactNode } from 'react';
import { ErrorPage } from './ErrorPage/ErrorPage';
import LoadingPage from './LoadingPage';
import NoResultsPage from './NoResultsPage';

interface ContentWrapperProps {
    status: string;
    query: string | null;
    error: unknown;
    totalResults: number | null;
    loadingMessage: string;
    children: ReactNode;
};

export const ContentWrapper = ({
    status,
    query,
    error,
    totalResults,
    children,
    loadingMessage,
}: ContentWrapperProps) => {
    if (status === "loading") {
        return <LoadingPage
            message={loadingMessage}
            query={query}
        />
    }

    if (query && !totalResults) {
        return <NoResultsPage query={query} />
    }

    if (status === "error") {
        return <ErrorPage error={error as Error} />
    }

    if (status === "success" && totalResults) {
        return <>{children}</>
    }

    return null;
};
