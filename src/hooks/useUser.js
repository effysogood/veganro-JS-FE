import {
  useQuery,
  useMutation,
  useQueryClient,
  useInfiniteQuery,
} from '@tanstack/react-query';
import {
  getUserData,
  getReviewsByUserId,
  getReportedByUserId,
  getBookmarkedByUserId,
  updateUserData,
  postBookmark,
  deleteBookmark,
  updateComplaint,
} from '../apis/api/userInfoApi';

export const useGetUser = () => {
  return useQuery({
    queryKey: ['getUser'],
    queryFn: getUserData,
    retry: false,
    enabled: false,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });
};

export const useGetUserData = () => {
  return useQuery({
    queryKey: ['getUser'],
    queryFn: getUserData,
  });
};

export const useUpdateUser = () => {
  return useMutation({ mutationFn: updateUserData });
};
export const useUpdateComplaint = () => {
  return useMutation({ mutationFn: updateComplaint });
};
export const useGetReviewsByUserId = (pageSize = 10) => {
  return useInfiniteQuery({
    queryKey: ['getReviewsByUserId'],
    queryFn: ({ pageParam }) => getReviewsByUserId(pageParam, pageSize),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      const nextPage = lastPage.reviews.length
        ? allPages.length + 1
        : undefined;
      return nextPage;
    },
  });
};

export const useGetReportedByUserId = (pageSize = 10) => {
  return useInfiniteQuery({
    queryKey: ['getReportedByUserId'],
    queryFn: ({ pageParam }) => getReportedByUserId(pageParam, pageSize),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      const nextPage = lastPage.reportedPlaces.length
        ? allPages.length + 1
        : undefined;
      return nextPage;
    },
  });
};

export const useGetBookmarkedByUserId = (pageSize = 10) => {
  return useInfiniteQuery({
    queryKey: ['getBookmarkedByUserId'],
    queryFn: ({ pageParam }) => getBookmarkedByUserId(pageParam, pageSize),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      const nextPage = lastPage.bookmarks.length
        ? allPages.length + 1
        : undefined;
      return nextPage;
    },
  });
};

export const useGetBookmarked = (pageNumber = 1, pageSize = 10) => {
  return useQuery({
    queryKey: ['getBookmarked', pageNumber, pageSize],
    queryFn: () => getBookmarkedByUserId(pageNumber, pageSize),
    config: {
      retry: false,
    },
  });
};

export const usePostBookmark = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: postBookmark,
    onSuccess: () => {
      queryClient.invalidateQueries('bookmarks');
    },
  });
};
export const useDeleteBookmark = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteBookmark,
    onSuccess: () => {
      queryClient.invalidateQueries('bookmarks');
    },
  });
};
