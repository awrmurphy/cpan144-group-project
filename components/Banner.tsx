export default function Banner() {
  return (
    <header className="bg-gradient-to-r from-slate-900 via-slate-800 to-emerald-700 text-white py-6 px-8 flex items-center space-x-4 shadow-md">
      <img
        src="/white-logo.png"
        //src="/green-logo.png"
        alt="Green Energy Logo"
        className="h-16 w-16"
      />
      <h1 className="text-2xl font-semibold tracking-wide">
        Welcome to the Green Energy Tracker
      </h1>
    </header>
  );
}