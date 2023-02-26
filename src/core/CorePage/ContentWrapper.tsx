import { ReactNode } from 'react';
import { ErrorPage } from './ErrorPage/ErrorPage';
import LoadingPage from './LoadingPage';
import NoResultsPage from './NoResultsPage';

interface ContentWrapperProps {
    status: string;
    error: unknown;
    loadingMessage: string;
    children: ReactNode;
    query?: string | null;
    isDataPresent?: boolean;
};

export const ContentWrapper = ({
    status,
    error,
    loadingMessage,
    children,
    query = null,
    isDataPresent = false,
}: ContentWrapperProps) => {
    if (status === "loading") {
        return <LoadingPage
            message={loadingMessage}
            query={query}
        />
    }

    if (query && isDataPresent) {
        return <NoResultsPage query={query} />
    }

    if (status === "error") {
        return <ErrorPage error={error as Error} />
    }

    if (status === "success" && isDataPresent) {
        return <>{children}</>
    }

    return null;
};
