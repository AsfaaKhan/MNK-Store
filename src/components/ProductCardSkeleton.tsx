export default function ProductCardSkeleton() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden animate-pulse">
      <div className="relative h-64 w-full bg-gray-200 dark:bg-gray-700" />

      <div className="p-5">
        <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded-full w-20 mb-3" />

        <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded mb-2" />
        <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded mb-4" />

        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded mb-4" />
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-4" />

        <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-1/2 mb-4" />

        <div className="flex gap-2">
          <div className="flex-1 h-10 bg-gray-200 dark:bg-gray-700 rounded-lg" />
          <div className="flex-1 h-10 bg-gray-200 dark:bg-gray-700 rounded-lg" />
        </div>
      </div>
    </div>
  );
}
