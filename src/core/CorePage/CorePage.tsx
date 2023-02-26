import { ReactNode } from 'react';

import { LoadingBar } from 'common/LoadingBar';
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
    isFetching?: boolean;
};

export const CorePage = ({
    status,
    error,
    loadingMessage,
    children,
    query = null,
    isDataPresent = false,
    isFetching,
}: ContentWrapperProps) => {
    if (status === "loading") {
        return <LoadingPage
            message={loadingMessage}
            query={query}
        />
    }

    if (query && !isDataPresent) {
        return <NoResultsPage query={query} />
    }

    if (status === "error") {
        return <ErrorPage error={error as Error} />
    }

    if (status === "success" && isDataPresent) {
        return (
            <>
                {isFetching && <LoadingBar />}
                {children}
            </>
        );
    }

    return null;
};
