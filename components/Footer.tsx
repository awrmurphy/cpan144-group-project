export default function Footer() {
  const current_year = new Date().getFullYear();
  return (
    <div className="mt-auto border-t border-slate-200 bg-white py-4 px-6">
      <p className="text-slate-500 text-center text-sm">
        Copyright © {current_year}, Anthony Murphy, Adebisi Oyewole, Attah
        Attah, Hiryti Mebrahtu, Turner Cortese. All Rights Reserved.
      </p>
    </div>
  );
}
