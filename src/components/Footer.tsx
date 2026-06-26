export default function Footer() {
  return (
    <footer className="border-t border-zinc-800/50 px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
        <p className="text-sm text-zinc-500">
          &copy; {new Date().getFullYear()} Muhammad Zain. All rights reserved.
        </p>
        <p className="text-sm text-zinc-600">
          Built with passion for finance &amp; technology
        </p>
      </div>
    </footer>
  );
}
