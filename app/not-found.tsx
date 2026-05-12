export default function NotFound() {
  return (
    <main className="flex h-[calc(100%-10rem)] flex-col items-center justify-center px-6">
      <div className="flex flex-col items-center gap-10 p-8 text-center text-white sm:flex-row">
        <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">
          404
        </h1>
        <div className="hidden h-20 w-px bg-white/30 sm:block" />
        <p className="text-lg font-medium text-white/90 md:text-2xl">
          This page could not be found.
        </p>
      </div>
    </main>
  );
}
